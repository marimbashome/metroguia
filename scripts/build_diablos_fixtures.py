#!/usr/bin/env python3
"""
Procesa el calendario oficial de Diablos Rojos del México (diablos.com.mx)
y genera ICS feeds para suscribir en Google Calendar.

Outputs:
  - data/diablos-fixtures.json        (todos los partidos enriquecidos)
  - public/calendar/diablos-rojos-2026.ics      (todos los partidos)
  - public/calendar/diablos-rojos-2026-casa.ics (solo home games en CDMX)

Uso:
  python3 scripts/build_diablos_fixtures.py
  python3 scripts/build_diablos_fixtures.py --offline /tmp/diablos-html-cache/

Patrón canónico tomado de build_mundial_fixtures.py.
"""
from __future__ import annotations

import json
import os
import re
import sys
import unicodedata
import urllib.request
import hashlib
from datetime import datetime, timedelta, timezone
from pathlib import Path

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

REPO_ROOT = Path(__file__).resolve().parents[1]
DATA_OUT = REPO_ROOT / "data" / "diablos-fixtures.json"
ICS_DIR = REPO_ROOT / "public" / "calendar"
ICS_DIR.mkdir(parents=True, exist_ok=True)

CDMX_OFFSET = timedelta(hours=-6)  # America/Mexico_City (sin DST desde 2022)
SEASON_YEAR = 2026
MONTHS_ES = ["abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre"]

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)

STADIUM_HOME = "Estadio Alfredo Harp Helú"
STADIUM_ADDRESS = "Av. Río Churubusco s/n, Granjas México, Iztacalco, 08400 CDMX"

# Estadios visitante por equipo (rival → ciudad + estadio aproximado)
AWAY_STADIUMS = {
    "Acereros": ("Estadio Monclova", "Monclova, Coahuila"),
    "Bravos": ("Estadio Domingo Santana", "León, Guanajuato"),
    "Charros": ("Estadio Panamericano", "Zapopan, Jalisco"),
    "Conspiradores": ("Estadio Querétaro", "Querétaro"),
    "El Águila": ("Estadio Beto Ávila", "Veracruz"),
    "Guerreros": ("Estadio Eduardo Vasconcelos", "Oaxaca de Juárez"),
    "Leones": ("Parque Kukulcán Álamo", "Mérida, Yucatán"),
    "Olmecas": ("Parque Centenario 27 de Febrero", "Villahermosa, Tabasco"),
    "Pericos": ("Estadio Hermanos Serdán", "Puebla"),
    "Piratas": ("Estadio Nelson Barrera Romellón", "Campeche"),
    "Sultanes": ("Estadio Mobil Super (Walmart Park)", "Monterrey, Nuevo León"),
    "Tigres": ("Estadio Beto Ávila", "Cancún, Quintana Roo"),
}

# Nombres completos (para descripciones más limpias)
FULL_NAMES = {
    "Acereros": "Acereros de Monclova",
    "Bravos": "Bravos de León",
    "Charros": "Charros de Jalisco",
    "Conspiradores": "Conspiradores de Querétaro",
    "El Águila": "El Águila de Veracruz",
    "Guerreros": "Guerreros de Oaxaca",
    "Leones": "Leones de Yucatán",
    "Olmecas": "Olmecas de Tabasco",
    "Pericos": "Pericos de Puebla",
    "Piratas": "Piratas de Campeche",
    "Sultanes": "Sultanes de Monterrey",
    "Tigres": "Tigres de Quintana Roo",
}

# ---------------------------------------------------------------------------
# Fetch + parse
# ---------------------------------------------------------------------------

def fetch_month(month_name: str, casa: bool, offline_dir: Path | None = None) -> str:
    """GET el HTML del mes (home o away)."""
    path = f"/{SEASON_YEAR}/{month_name}"
    if casa:
        path += "/casa"
    else:
        path += "/visita"
    url = f"https://www.diablos.com.mx/calendario{path}"

    if offline_dir:
        cache = offline_dir / f"{month_name}-{'casa' if casa else 'visita'}.html"
        if cache.exists():
            return cache.read_text(encoding="utf-8")

    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode("utf-8", errors="replace")


# El calendario renderiza una celda por día del mes. El número del día viene
# rodeado de whitespace, no pegado a los tags — por eso el regex anterior
# (`>(\d{1,2})<`) nunca hizo match y el script publicó 0 juegos desde may-2026.
DAY_CELL_RE = re.compile(
    r'<div class="text-base font-semibold mb-2 text-gray-700">\s*(\d{1,2})\s*</div>'
)
# Dentro de la celda, cada juego trae el logo del rival (alt=) y la hora.
EVENT_RE = re.compile(r'alt="([^"]+)".*?(\d{1,2}:\d{2}\s*[AP]M)', re.DOTALL)


def parse_month(html: str, year: int, month_num: int, is_home: bool) -> list:
    """Extrae los juegos del HTML mensual (una celda por día)."""
    games = []
    cells = list(DAY_CELL_RE.finditer(html))
    for idx, cell in enumerate(cells):
        day = int(cell.group(1))
        if not 1 <= day <= 31:
            continue
        try:
            datetime(year, month_num, day)
        except ValueError:
            continue

        chunk_end = cells[idx + 1].start() if idx + 1 < len(cells) else len(html)
        chunk = html[cell.end():chunk_end]

        events = EVENT_RE.findall(chunk)
        for slot, (rival_raw, time_str) in enumerate(events):
            rival = re.sub(r"\s+", " ", rival_raw).strip()
            tm = re.match(r"(\d{1,2}):(\d{2})\s*([AP])M", time_str.strip(), re.I)
            if not tm:
                continue
            h, mi, ampm = int(tm.group(1)), int(tm.group(2)), tm.group(3).upper()
            if ampm == "P" and h != 12:
                h += 12
            elif ampm == "A" and h == 12:
                h = 0

            dt_cdmx = datetime(year, month_num, day, h, mi, tzinfo=timezone(CDMX_OFFSET))
            dt_utc = dt_cdmx.astimezone(timezone.utc)

            # UID estable por fecha+rival+casa/visita. El sufijo solo aparece en
            # doble cartelera, para no romper los UIDs ya suscritos.
            uid = f"diablos-{year}{month_num:02d}{day:02d}-{slugify(rival)}-{'h' if is_home else 'a'}"
            if slot:
                uid += f"-{slot + 1}"

            games.append({
                "uid": uid,
                "date_cdmx": dt_cdmx.strftime("%Y-%m-%d %H:%M"),
                "datetime_utc": dt_utc.strftime("%Y-%m-%dT%H:%M:%SZ"),
                "rival_short": rival,
                "rival_full": FULL_NAMES.get(rival, rival),
                "is_home": is_home,
                "stadium": STADIUM_HOME if is_home else AWAY_STADIUMS.get(rival, (f"Estadio {rival}", "MX"))[0],
                "city": "Ciudad de México" if is_home else AWAY_STADIUMS.get(rival, ("", "MX"))[1],
                "year": year,
                "month": month_num,
                "day": day,
            })
    return games


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "tbd"


# ---------------------------------------------------------------------------
# ICS helpers (copiados de build_mundial_fixtures.py)
# ---------------------------------------------------------------------------

def ics_escape(text: str) -> str:
    if not text:
        return ""
    text = text.replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;")
    text = text.replace("\n", "\\n")
    return text


def fold_ics_line(line: str) -> str:
    if len(line.encode("utf-8")) <= 75:
        return line
    out = []
    chunk = ""
    for ch in line:
        if len((chunk + ch).encode("utf-8")) > 75:
            out.append(chunk)
            chunk = " " + ch
        else:
            chunk += ch
    if chunk:
        out.append(chunk)
    return "\r\n".join(out)


def fixtures_to_ics(games: list, calname: str, description: str) -> str:
    """Genera un calendario VCALENDAR completo."""
    now = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//MetroGuia//Diablos Rojos LMB 2026//ES",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        f"X-WR-CALNAME:{ics_escape(calname)}",
        f"X-WR-CALDESC:{ics_escape(description)}",
        "X-WR-TIMEZONE:America/Mexico_City",
    ]
    for g in games:
        dt_start = datetime.fromisoformat(g["datetime_utc"].replace("Z", "+00:00"))
        dt_end = dt_start + timedelta(hours=3)  # juego béisbol ~3h
        dtstart = dt_start.strftime("%Y%m%dT%H%M%SZ")
        dtend = dt_end.strftime("%Y%m%dT%H%M%SZ")

        if g["is_home"]:
            summary = f"🔴 Diablos vs {g['rival_short']}"
            location = f"{STADIUM_HOME}, {STADIUM_ADDRESS}"
        else:
            summary = f"⚫ {g['rival_short']} vs Diablos (visita)"
            location = f"{g['stadium']}, {g['city']}, México"

        desc_parts = [
            f"LMB 2026 · Temporada regular",
            f"vs {g['rival_full']}",
            "Home game" if g["is_home"] else "Visita",
            f"Calendario: https://www.diablos.com.mx/calendario",
        ]
        if g["is_home"]:
            desc_parts.append("Boletos: https://www.diablos.com.mx/boletos")
        desc_line = " | ".join(desc_parts)

        block = [
            "BEGIN:VEVENT",
            f"UID:{g['uid']}@metroguia.mx",
            f"DTSTAMP:{now}",
            f"DTSTART:{dtstart}",
            f"DTEND:{dtend}",
            fold_ics_line(f"SUMMARY:{ics_escape(summary)}"),
            fold_ics_line(f"DESCRIPTION:{ics_escape(desc_line)}"),
            fold_ics_line(f"LOCATION:{ics_escape(location)}"),
            "URL:https://www.diablos.com.mx/calendario",
            "STATUS:CONFIRMED",
            "TRANSP:OPAQUE",
            "END:VEVENT",
        ]
        lines.extend(block)
    lines.append("END:VCALENDAR")
    return "\r\n".join(lines) + "\r\n"


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    offline_dir = None
    if len(sys.argv) > 2 and sys.argv[1] == "--offline":
        offline_dir = Path(sys.argv[2])
        print(f"Offline mode: leyendo HTML cacheado en {offline_dir}")

    all_games = []
    for idx, mes in enumerate(MONTHS_ES):
        mnum = idx + 4  # abril=4, mayo=5, ..., octubre=10
        if mnum > 12:
            break
        for is_home in (True, False):
            try:
                html = fetch_month(mes, casa=is_home, offline_dir=offline_dir)
                games = parse_month(html, SEASON_YEAR, mnum, is_home)
                print(f"  {mes:10} ({'casa' if is_home else 'visita'}): {len(games)} partidos")
                all_games.extend(games)
            except Exception as e:
                print(f"  ! {mes} {'casa' if is_home else 'visita'}: {e}")

    all_games.sort(key=lambda g: g["datetime_utc"])
    home_games = [g for g in all_games if g["is_home"]]

    # GUARDA: sin esto el script publicó un ICS vacío del 2026-05-25 al 2026-08-17
    # sin que nadie se enterara. Mejor fallar ruidoso que vaciar el calendario.
    if not all_games:
        print("ERROR: 0 partidos parseados. Probablemente cambió el HTML de "
              "diablos.com.mx. Abortando SIN escribir; el feed publicado conserva "
              "su último estado bueno.", file=sys.stderr)
        return 1

    if DATA_OUT.exists():
        try:
            prev_total = json.loads(DATA_OUT.read_text(encoding="utf-8")).get("total_games", 0)
        except (json.JSONDecodeError, OSError):
            prev_total = 0
        if prev_total and len(all_games) < prev_total * 0.5:
            if os.environ.get("DIABLOS_ALLOW_SHRINK") != "1":
                print(f"ERROR: los partidos cayeron de {prev_total} a {len(all_games)}. "
                      "Abortando SIN escribir. Corre con DIABLOS_ALLOW_SHRINK=1 si el "
                      "encogimiento es real (fin de temporada).", file=sys.stderr)
                return 1

    print(f"\nTotal: {len(all_games)} partidos · {len(home_games)} home · {len(all_games) - len(home_games)} visita")

    # JSON
    payload = {
        "team": "Diablos Rojos del México",
        "league": "Liga Mexicana de Béisbol",
        "season": str(SEASON_YEAR),
        "total_games": len(all_games),
        "home_games": len(home_games),
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": "https://www.diablos.com.mx/calendario",
        "games": all_games,
    }
    DATA_OUT.parent.mkdir(parents=True, exist_ok=True)
    DATA_OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"✓ {DATA_OUT} ({DATA_OUT.stat().st_size:,} bytes)")

    # ICS feeds
    full = fixtures_to_ics(
        all_games,
        f"Diablos Rojos · LMB {SEASON_YEAR}",
        f"Calendario completo Diablos Rojos del México · Temporada {SEASON_YEAR} LMB. Auto-sync semanal desde diablos.com.mx · metroguia.mx",
    )
    casa = fixtures_to_ics(
        home_games,
        f"Diablos Rojos casa · LMB {SEASON_YEAR}",
        f"Partidos en casa de Diablos Rojos · Estadio Alfredo Harp Helú, CDMX. Auto-sync semanal · metroguia.mx",
    )
    for name, content in (
        (f"diablos-rojos-{SEASON_YEAR}.ics", full),
        (f"diablos-rojos-{SEASON_YEAR}-casa.ics", casa),
    ):
        path = ICS_DIR / name
        path.write_text(content, encoding="utf-8")
        print(f"✓ {path} ({path.stat().st_size:,} bytes, {content.count('BEGIN:VEVENT')} eventos)")

    print("\n=== DONE ===")
    return 0


if __name__ == "__main__":
    sys.exit(main())
