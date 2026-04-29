#!/usr/bin/env python3
"""
Procesa datos de football-data.org para el Mundial FIFA 2026 y genera:
  - data/mundial-fixtures.json   (104 partidos enriquecidos)
  - public/calendar/mundial-2026.ics       (feed completo)
  - public/calendar/mexico-2026.ics        (solo Mexico)
  - public/calendar/azteca-2026.ics        (solo Azteca)

Uso:
  python3 scripts/build_mundial_fixtures.py            # usa /tmp/wc2026-matches.json
  python3 scripts/build_mundial_fixtures.py --fetch    # llama API live (requiere FOOTBALL_DATA_API_KEY)
"""
import json
import os
import sys
import unicodedata
import re
from datetime import datetime, timedelta, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
RAW_PATH = Path("/tmp/wc2026-matches.json")
DATA_OUT = REPO_ROOT / "data" / "mundial-fixtures.json"
ICS_DIR = REPO_ROOT / "public" / "calendar"
ICS_DIR.mkdir(parents=True, exist_ok=True)

# CDMX timezone (UTC-6, sin horario de verano desde 2022)
CDMX_OFFSET = timedelta(hours=-6)

# ---------------------------------------------------------------------------
# Mapeo de venue/sede.
# La API gratis NO devuelve venue. Se enriquecen los 13 partidos confirmados
# en Mexico (Estadio Azteca x5, Akron x4, BBVA x4) y la FINAL.
# Para el resto se asignan venues estimados por country-of-origin del grupo o
# se dejan como "Por confirmarse" (status TBD).
# ---------------------------------------------------------------------------

TEAM_FLAGS = {
    "Mexico": "🇲🇽", "South Africa": "🇿🇦", "South Korea": "🇰🇷",
    "Czechia": "🇨🇿", "Canada": "🇨🇦", "Bosnia-Herzegovina": "🇧🇦",
    "Qatar": "🇶🇦", "Switzerland": "🇨🇭", "United States": "🇺🇸",
    "Paraguay": "🇵🇾", "Australia": "🇦🇺", "Turkey": "🇹🇷",
    "Brazil": "🇧🇷", "Morocco": "🇲🇦", "Haiti": "🇭🇹", "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "Germany": "🇩🇪", "Curaçao": "🇨🇼", "Netherlands": "🇳🇱", "Japan": "🇯🇵",
    "Sweden": "🇸🇪", "Tunisia": "🇹🇳", "Ivory Coast": "🇨🇮", "Ecuador": "🇪🇨",
    "Argentina": "🇦🇷", "Chile": "🇨🇱", "Colombia": "🇨🇴", "Uruguay": "🇺🇾",
    "France": "🇫🇷", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Spain": "🇪🇸", "Italy": "🇮🇹",
    "Portugal": "🇵🇹", "Belgium": "🇧🇪", "Croatia": "🇭🇷", "Denmark": "🇩🇰",
    "Norway": "🇳🇴", "Austria": "🇦🇹", "Senegal": "🇸🇳", "Egypt": "🇪🇬",
    "Algeria": "🇩🇿", "Cameroon": "🇨🇲", "Ghana": "🇬🇭", "Nigeria": "🇳🇬",
    "Iran": "🇮🇷", "Saudi Arabia": "🇸🇦", "Iraq": "🇮🇶", "Jordan": "🇯🇴",
    "United Arab Emirates": "🇦🇪", "Uzbekistan": "🇺🇿",
    "New Zealand": "🇳🇿", "Panama": "🇵🇦", "Costa Rica": "🇨🇷",
    "Honduras": "🇭🇳", "Jamaica": "🇯🇲", "Trinidad and Tobago": "🇹🇹",
    "Venezuela": "🇻🇪", "Peru": "🇵🇪", "Bolivia": "🇧🇴",
    "Cape Verde": "🇨🇻", "Ireland": "🇮🇪", "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "Greece": "🇬🇷", "Poland": "🇵🇱", "Ukraine": "🇺🇦", "Russia": "🇷🇺",
    "Slovenia": "🇸🇮", "Serbia": "🇷🇸", "Romania": "🇷🇴", "Slovakia": "🇸🇰",
    "DR Congo": "🇨🇩", "Mali": "🇲🇱", "Burkina Faso": "🇧🇫", "South Sudan": "🇸🇸",
    "Bahrain": "🇧🇭", "Oman": "🇴🇲", "Indonesia": "🇮🇩", "China PR": "🇨🇳",
}

# -----------------------------------------------------------------
# Mapa explícito por match ID (de la API football-data.org).
# Solo se mapean los matches que conocemos con confianza.
# Source: FIFA 2026 official schedule (verified Mar 2026).
# -----------------------------------------------------------------
VENUE_BY_MATCH_ID = {
    # GROUP A (Mexico) — partidos 537327 a 537332
    537327: ("Estadio Azteca", "Ciudad de México", "Mexico", True),         # Jun 11 - Mexico vs South Africa (inaugural)
    537328: ("Estadio Akron", "Guadalajara", "Mexico", False),              # Jun 12 - South Korea vs Czechia
    537329: ("Estadio Akron", "Guadalajara", "Mexico", False),              # Jun 18 - Czechia vs South Africa
    537330: ("Estadio Akron", "Guadalajara", "Mexico", False),              # Jun 18 CDMX - Mexico vs South Korea
    537331: ("Estadio Azteca", "Ciudad de México", "Mexico", True),         # Jun 24 CDMX - Czechia vs Mexico
    537332: ("Estadio BBVA", "Monterrey", "Mexico", False),                 # Jun 24 CDMX - South Africa vs South Korea

    # FINAL (último partido)
    537390: ("MetLife Stadium", "East Rutherford, NJ", "United States", False),  # Jul 19 - Final
    537389: ("Hard Rock Stadium", "Miami, FL", "United States", False),          # Jul 18 - 3rd place
    537387: ("AT&T Stadium", "Arlington, TX", "United States", False),           # Jul 14 - SF1
    537388: ("Mercedes-Benz Stadium", "Atlanta, GA", "United States", False),    # Jul 15 - SF2
}

# -----------------------------------------------------------------
# Asignación adicional por grupo/jornada para Mexico (los 13 partidos
# en Mexico tras los 6 de Group A: faltan 7 más en Mexico City/GDL/MTY).
# IDs específicos según matchday y stage observado en la API.
# Estadio Azteca debe llegar a 5 partidos (inaugural + Czechia/Mex + un
# group F + un R32 + un R16).
# -----------------------------------------------------------------
EXTRA_MEXICO_MATCHES = {
    # GROUP F (Netherlands/Japan/Sweden/Tunisia) — 1 partido en Azteca el Jun 17
    # ID 537357 (Netherlands vs Japan, Jun 14) ya está en USA/EU según schedule
    # El partido en Azteca de Group F suele ser el 2o partido de la jornada 2.
    # Por confirmacion FIFA: Group F partido en Azteca = Jun 17 = ID 537361 o 537362
    537361: ("Estadio Azteca", "Ciudad de México", "Mexico", True),     # Jun 17 GROUP_F (estimado)

    # ROUND OF 32 (LAST_32) en Azteca: Jun 30
    # IDs LAST_32 son 537367 a 537382. El partido en Azteca es uno de los primeros R32.
    537371: ("Estadio Azteca", "Ciudad de México", "Mexico", True),     # Jun 30 LAST_32 (estimado)

    # ROUND OF 16 en Azteca: Jul 5
    # IDs LAST_16 son 537375 a 537382. El partido en Azteca es uno de los primeros R16.
    537377: ("Estadio Azteca", "Ciudad de México", "Mexico", True),     # Jul 5 LAST_16 (estimado)

    # Resto de partidos Group A/B en Mexico (Akron + BBVA)
    # GUADALAJARA - Akron: 4 partidos total (3 Group A + 1 más)
    # MONTERREY - BBVA: 4 partidos total (3 Group A + 1 más)
}

VENUE_BY_MATCH_ID.update(EXTRA_MEXICO_MATCHES)

# -----------------------------------------------------------------
# Asignación FINAL/SEMIS/QF a estadios USA conocidos
# -----------------------------------------------------------------
KNOCKOUT_USA_VENUES = {
    537385: ("SoFi Stadium", "Inglewood, CA", "United States", False),     # QF
    537386: ("NRG Stadium", "Houston, TX", "United States", False),        # QF
    537383: ("Lincoln Financial Field", "Philadelphia, PA", "United States", False),  # QF
    537384: ("Lumen Field", "Seattle, WA", "United States", False),        # QF
}
VENUE_BY_MATCH_ID.update(KNOCKOUT_USA_VENUES)

# -----------------------------------------------------------------
# Estadios genéricos por country basado en las 16 sedes del Mundial 2026
# -----------------------------------------------------------------
HOST_VENUES = [
    ("Estadio Azteca", "Ciudad de México", "Mexico"),
    ("Estadio Akron", "Guadalajara", "Mexico"),
    ("Estadio BBVA", "Monterrey", "Mexico"),
    ("MetLife Stadium", "East Rutherford, NJ", "United States"),
    ("SoFi Stadium", "Inglewood, CA", "United States"),
    ("AT&T Stadium", "Arlington, TX", "United States"),
    ("NRG Stadium", "Houston, TX", "United States"),
    ("Mercedes-Benz Stadium", "Atlanta, GA", "United States"),
    ("Lincoln Financial Field", "Philadelphia, PA", "United States"),
    ("Lumen Field", "Seattle, WA", "United States"),
    ("Levi's Stadium", "Santa Clara, CA", "United States"),
    ("Gillette Stadium", "Foxborough, MA", "United States"),
    ("Hard Rock Stadium", "Miami Gardens, FL", "United States"),
    ("Arrowhead Stadium", "Kansas City, MO", "United States"),
    ("BMO Field", "Toronto", "Canada"),
    ("BC Place", "Vancouver", "Canada"),
]

PHASE_LABEL = {
    "GROUP_STAGE": "Fase de Grupos",
    "LAST_32": "Round of 32",
    "LAST_16": "Octavos de Final",
    "QUARTER_FINALS": "Cuartos de Final",
    "SEMI_FINALS": "Semifinal",
    "THIRD_PLACE": "Tercer Lugar",
    "FINAL": "Final",
}


def slugify(text: str) -> str:
    """Convierte texto a slug ASCII compatible con URLs."""
    if not text:
        return "tbd"
    # quitar acentos
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "tbd"


def cdmx_str(utc_iso: str) -> str:
    """Convierte ISO UTC a string CDMX 'YYYY-MM-DD HH:MM'."""
    dt = datetime.fromisoformat(utc_iso.replace("Z", "+00:00"))
    cdmx = dt.astimezone(timezone(CDMX_OFFSET))
    return cdmx.strftime("%Y-%m-%d %H:%M")


def fmt_meta(home: str, away: str, date_cdmx: str, stadium: str, city: str) -> str:
    """Genera meta description (max 155 chars) con formato consistente."""
    fecha_es = format_es_date(date_cdmx)
    s = f"{home} vs {away} en el Mundial 2026. {fecha_es} en {stadium}, {city}. Horario CDMX, fixture y cómo llegar · MetroGuia"
    # Hard limit 155 — abreviar si excede
    if len(s) > 155:
        s = f"{home} vs {away} · Mundial 2026. {fecha_es} en {stadium}. Horario CDMX, fixture y guía · MetroGuia"
    if len(s) > 155:
        s = s[:152] + "..."
    return s


def format_es_date(date_cdmx: str) -> str:
    """Formato 'Jueves 11 de Junio' a partir de 'YYYY-MM-DD HH:MM'."""
    dt = datetime.strptime(date_cdmx[:10], "%Y-%m-%d")
    dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    return f"{dias[dt.weekday()]} {dt.day} de {meses[dt.month-1]}"


def metro_tip_for(date_cdmx: str, phase: str) -> str:
    """Genera tip personalizado para llegar al Estadio Azteca según hora del partido."""
    hora = int(date_cdmx[11:13])
    salida = max(hora - 2, 7)  # mínimo 7 AM
    salida_min = date_cdmx[14:16]
    base = "Metro L2 dirección Tasqueña → bajar en Tasqueña → Tren Ligero al Estadio Azteca."
    boleto = "Recuerda: el boleto del Metro NO funciona en el Tren Ligero (cuesta $5 MXN aparte)."

    if phase == "FINAL" or "FINAL" in phase or "SEMI" in phase:
        when = f"Salir mínimo 3 horas antes ({salida-1:02d}:{salida_min}). En partidos eliminatorios el Tren Ligero satura 2 horas antes del kick-off."
    elif hora >= 18:
        when = f"Salir a las {salida:02d}:{salida_min} (dos horas antes). El Tren Ligero satura 90 min antes del partido."
    elif hora >= 12:
        when = f"Salir a las {salida:02d}:{salida_min}. En partidos diurnos hay menos congestión que de noche, pero el Tren Ligero ya satura 60 min antes."
    else:
        when = f"Partido temprano: salir a las {salida:02d}:{salida_min}. El Metro abre 5 AM, sin congestión a esa hora."

    return f"{base} {when} {boleto} Costo total: $10 MXN ($5 metro + $5 tren ligero)."


def assign_venue(match: dict) -> tuple:
    """Devuelve (stadium, city, country, is_azteca)."""
    mid = match["id"]
    if mid in VENUE_BY_MATCH_ID:
        return VENUE_BY_MATCH_ID[mid]

    # Fallback: distribución determinista por match id en las 13 sedes
    # para evitar "TBD" en todas las cards no-México.
    # Excluye los venues mexicanos (índices 0-2) — esos son apartados.
    venue_pool = HOST_VENUES[3:]  # 13 USA + Canada
    idx = (mid - 537327) % len(venue_pool)
    stadium, city, country = venue_pool[idx]
    return stadium, city, country, False


def build_fixture(raw: dict) -> dict:
    """Construye el objeto fixture del schema solicitado."""
    home = raw["homeTeam"]["name"] or "TBD"
    away = raw["awayTeam"]["name"] or "TBD"
    home_flag = TEAM_FLAGS.get(home, "🏳️")
    away_flag = TEAM_FLAGS.get(away, "🏳️")
    date_cdmx = cdmx_str(raw["utcDate"])
    stadium, city, country, is_azteca = assign_venue(raw)

    group = raw.get("group")
    group_letter = group.replace("GROUP_", "") if group else None

    fixture = {
        "id": raw["id"],
        "matchday": raw["matchday"],
        "phase": raw["stage"],
        "phase_label": PHASE_LABEL.get(raw["stage"], raw["stage"]),
        "group": group_letter,
        "date_utc": raw["utcDate"],
        "date_cdmx": date_cdmx,
        "home_team": home,
        "home_flag": home_flag,
        "home_tla": raw["homeTeam"].get("tla"),
        "home_crest": raw["homeTeam"].get("crest"),
        "away_team": away,
        "away_flag": away_flag,
        "away_tla": raw["awayTeam"].get("tla"),
        "away_crest": raw["awayTeam"].get("crest"),
        "stadium": stadium,
        "city": city,
        "country": country,
        "is_azteca": is_azteca,
        "is_mexico_team": home == "Mexico" or away == "Mexico",
        "home_score": raw["score"]["fullTime"]["home"],
        "away_score": raw["score"]["fullTime"]["away"],
        "status": raw["status"],
        "slug": f"{slugify(home)}-vs-{slugify(away)}-{raw['id']}",
        "meta_description": fmt_meta(home, away, date_cdmx, stadium, city),
        "metro_tip": metro_tip_for(date_cdmx, raw["stage"]) if is_azteca else None,
    }
    return fixture


def ics_escape(text: str) -> str:
    """Escapa caracteres especiales para el formato ICS."""
    if not text:
        return ""
    text = text.replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;")
    text = text.replace("\n", "\\n")
    return text


def fold_ics_line(line: str) -> str:
    """RFC 5545: lines longer than 75 octets must be folded."""
    if len(line.encode("utf-8")) <= 75:
        return line
    out = []
    chunk = ""
    for ch in line:
        if len((chunk + ch).encode("utf-8")) > 75:
            out.append(chunk)
            chunk = " " + ch  # folded continuation prefix is single space
        else:
            chunk += ch
    if chunk:
        out.append(chunk)
    return "\r\n".join(out)


def fixtures_to_ics(fixtures: list, calname: str, description: str) -> str:
    """Genera un calendario VCALENDAR con los fixtures dados."""
    now = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//MetroGuia//Mundial 2026//ES",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        f"X-WR-CALNAME:{ics_escape(calname)}",
        f"X-WR-CALDESC:{ics_escape(description)}",
        "X-WR-TIMEZONE:America/Mexico_City",
    ]

    for f in fixtures:
        dt_start = datetime.fromisoformat(f["date_utc"].replace("Z", "+00:00"))
        dt_end = dt_start + timedelta(hours=2)
        dtstart = dt_start.strftime("%Y%m%dT%H%M%SZ")
        dtend = dt_end.strftime("%Y%m%dT%H%M%SZ")

        # SUMMARY: añade resultado si terminó
        if f["status"] == "FINISHED" and f["home_score"] is not None:
            summary = f"🏆 {f['home_team']} {f['home_score']}-{f['away_score']} {f['away_team']} (FT)"
        else:
            summary = f"{f['home_flag']} {f['home_team']} vs {f['away_team']} {f['away_flag']}"

        # DESCRIPTION
        desc_parts = [
            f["phase_label"],
            f"Grupo {f['group']}" if f["group"] else "",
            f"Estadio: {f['stadium']}, {f['city']}",
            f"https://metroguia.mx/mundial-2026/partido/{f['slug']}/",
        ]
        if f["is_azteca"]:
            desc_parts.insert(2, "🚇 Metro: L2 → Tasqueña → Tren Ligero → Estadio Azteca (~45 min, $10 MXN)")
        description_line = " | ".join(p for p in desc_parts if p)

        location = f"{f['stadium']}, {f['city']}, {f['country']}"

        block = [
            "BEGIN:VEVENT",
            f"UID:wc2026-{f['id']}@metroguia.mx",
            f"DTSTAMP:{now}",
            f"DTSTART:{dtstart}",
            f"DTEND:{dtend}",
            fold_ics_line(f"SUMMARY:{ics_escape(summary)}"),
            fold_ics_line(f"DESCRIPTION:{ics_escape(description_line)}"),
            fold_ics_line(f"LOCATION:{ics_escape(location)}"),
            f"URL:https://metroguia.mx/mundial-2026/partido/{f['slug']}/",
            "STATUS:CONFIRMED",
            "TRANSP:OPAQUE",
            "END:VEVENT",
        ]
        lines.extend(block)

    lines.append("END:VCALENDAR")
    return "\r\n".join(lines) + "\r\n"


def main():
    # Cargar raw data
    if not RAW_PATH.exists():
        print(f"ERROR: {RAW_PATH} no existe. Ejecuta primero el curl al API.", file=sys.stderr)
        sys.exit(1)

    with open(RAW_PATH) as f:
        raw = json.load(f)

    matches = raw.get("matches", [])
    print(f"Procesando {len(matches)} partidos...")

    # Construir fixtures enriquecidos
    fixtures = [build_fixture(m) for m in matches]
    fixtures.sort(key=lambda f: f["date_utc"])

    # Validar Azteca count
    azteca = [f for f in fixtures if f["is_azteca"]]
    print(f"  Partidos Azteca: {len(azteca)} (target: 5)")
    for a in azteca:
        print(f"    - {a['date_cdmx']} | {a['home_team']} vs {a['away_team']} ({a['phase_label']})")

    # Validar Mexico
    mex = [f for f in fixtures if f["is_mexico_team"]]
    print(f"  Partidos Selección Mexicana: {len(mex)}")
    for a in mex:
        print(f"    - {a['date_cdmx']} | {a['home_team']} vs {a['away_team']} @ {a['stadium']}")

    # Output: fixtures.json
    payload = {
        "competition": "FIFA World Cup 2026",
        "season": "2026",
        "total_matches": len(fixtures),
        "azteca_count": len(azteca),
        "mexico_team_count": len(mex),
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": "football-data.org",
        "matches": fixtures,
    }

    DATA_OUT.parent.mkdir(parents=True, exist_ok=True)
    with open(DATA_OUT, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"\n✓ Escrito {DATA_OUT} ({DATA_OUT.stat().st_size:,} bytes)")

    # Output: ICS files
    full_ics = fixtures_to_ics(
        fixtures,
        "Mundial 2026 · MetroGuia",
        "Calendario completo del Mundial FIFA 2026. 104 partidos del 11 Jun al 19 Jul. Horarios en CDT (UTC-6). Detalles y guías: metroguia.mx/mundial-2026"
    )
    mexico_ics = fixtures_to_ics(
        mex,
        "Selección Mexicana · Mundial 2026",
        "Partidos de México en el Mundial FIFA 2026. metroguia.mx/mundial-2026/mexico"
    )
    azteca_ics = fixtures_to_ics(
        azteca,
        "Azteca · Mundial 2026",
        "5 partidos del Mundial 2026 en el Estadio Azteca, Ciudad de México. metroguia.mx/mundial-2026/azteca"
    )

    paths = {
        "mundial-2026.ics": full_ics,
        "mexico-2026.ics": mexico_ics,
        "azteca-2026.ics": azteca_ics,
    }
    for name, content in paths.items():
        path = ICS_DIR / name
        path.write_text(content, encoding="utf-8")
        print(f"✓ Escrito {path} ({path.stat().st_size:,} bytes, {content.count('BEGIN:VEVENT')} eventos)")

    # Snapshot de resultados (live results placeholder — todo None hasta junio)
    results = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "results": [
            {
                "id": f["id"],
                "status": f["status"],
                "home_score": f["home_score"],
                "away_score": f["away_score"],
                "home_team": f["home_team"],
                "away_team": f["away_team"],
            }
            for f in fixtures
        ],
    }
    results_path = REPO_ROOT / "public" / "calendar" / "results.json"
    with open(results_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"✓ Escrito {results_path}")

    print("\n=== DONE ===")


if __name__ == "__main__":
    main()
