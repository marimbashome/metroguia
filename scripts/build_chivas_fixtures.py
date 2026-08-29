#!/usr/bin/env python3
"""
Genera el feed ICS de Chivas (Guadalajara) para suscribir en Google Calendar.

Fuente: ESPN site API (JSON público, sin API key).
  https://site.api.espn.com/apis/site/v2/sports/soccer/mex.1/scoreboard?dates=YYYYMMDD-YYYYMMDD

A diferencia de build_diablos_fixtures.py (regex sobre HTML, se rompió en silencio
y publicó un ICS vacío durante 3 meses), este script:
  1. Consume JSON estructurado, no HTML.
  2. ABORTA con exit 1 si el fetch falla o devuelve 0 partidos → el workflow falla
     ruidosamente y el feed publicado conserva su último estado bueno.
  3. ABORTA si el número de partidos futuros encoge más de SHRINK_TOLERANCE contra
     el JSON ya commiteado (salvo CHIVAS_ALLOW_SHRINK=1), que es como se detecta
     que la fuente cambió de forma.

La Liguilla entra sola: en cuanto la Liga MX programa los partidos, aparecen en el
mismo endpoint y el cron los recoge. Mientras tanto se publican placeholders
TENTATIVE con las ventanas oficiales de cuartos / semis / final.

Outputs:
  - data/chivas-fixtures.json
  - public/calendar/chivas-2026.ics

Uso:
  python3 scripts/build_chivas_fixtures.py
  python3 scripts/build_chivas_fixtures.py --dry-run
"""
from __future__ import annotations

import json
import os
import sys
import urllib.request
import urllib.error
from datetime import datetime, timedelta, timezone
from pathlib import Path

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

REPO_ROOT = Path(__file__).resolve().parents[1]
DATA_OUT = REPO_ROOT / "data" / "chivas-fixtures.json"
ICS_DIR = REPO_ROOT / "public" / "calendar"
ICS_OUT = ICS_DIR / "chivas-2026.ics"

ESPN_TEAM_ID = "219"  # Guadalajara
ESPN_LEAGUE = "mex.1"
ESPN_URL = (
    "https://site.api.espn.com/apis/site/v2/sports/soccer/"
    f"{ESPN_LEAGUE}/scoreboard?dates={{start}}-{{end}}&limit=500"
)

# Ventana a consultar: todo el Apertura 2026 + Liguilla (la final puede recorrerse
# al 24/27 dic si Toluca la alcanza, por la Copa Intercontinental).
WINDOW_START = "20260716"
WINDOW_END = "20270105"

CDMX = timezone(timedelta(hours=-6))  # America/Mexico_City, sin DST desde 2022
MATCH_DURATION = timedelta(hours=2)
SHRINK_TOLERANCE = 2  # cuántos partidos futuros puede perder sin abortar

# OJO: el WAF de ESPN devuelve 403 a User-Agents de navegador en los endpoints de
# API. El UA por defecto de urllib y el de curl sí pasan. Se prueban en orden.
USER_AGENTS = [None, "curl/8.4.0", "Python-urllib/3.11"]

# ---------------------------------------------------------------------------
# Derechos de transmisión Apertura 2026 — por equipo LOCAL.
# Chivas de local es exclusiva de Prime Video; de visitante manda el rival.
# Fuente: Mediotiempo / Infobae, jul-2026. Revisar cada torneo.
# ---------------------------------------------------------------------------

BROADCASTERS = {
    "Guadalajara": "Prime Video",
    "América": "Canal 5 / TUDN / ViX",
    "Cruz Azul": "Canal 5 / TUDN / ViX",
    "Pumas UNAM": "Canal 5 / TUDN / ViX",
    "Monterrey": "Canal 5 / TUDN / ViX",
    "Atlas": "TUDN / ViX",
    "Santos": "TUDN / ViX",
    "Pachuca": "FOX / FOX One",
    "León": "FOX / FOX One",
    "Querétaro": "FOX / FOX One",
    "Tijuana": "FOX / FOX One",
    "Necaxa": "FOX / FOX One",
    "Tigres UANL": "Azteca 7",
    "Puebla": "Azteca 7",
    "Atlante": "Azteca 7",
    "FC Juarez": "Azteca 7",
    "Toluca": "Azteca 7 / TUDN / FOX",
    "Atlético de San Luis": "ESPN / Disney+",
}
BROADCAST_FALLBACK = "Por confirmar"

# Jornada por rival (fase regular Apertura 2026), para etiquetar el evento.
JORNADA_BY_RIVAL = {
    "Toluca": 1, "FC Juarez": 2, "Puebla": 3, "Santos": 4, "Tijuana": 5,
    "Pachuca": 6, "Atlético de San Luis": 7, "Pumas UNAM": 8, "América": 9,
    "Querétaro": 10, "Atlas": 11, "Tigres UANL": 12, "Necaxa": 13,
    "Monterrey": 14, "Atlante": 15, "León": 16, "Cruz Azul": 17,
}

# Placeholders de Liguilla mientras no haya rival ni horario definidos.
# El Apertura 2026 eliminó el Play-In: pasan directo los 8 primeros.
LIGUILLA_PLACEHOLDERS = [
    ("cuartos-ida",  "2026-11-25", "2026-11-27", "Cuartos de final · IDA (25-26 nov)"),
    ("cuartos-vta",  "2026-11-28", "2026-11-30", "Cuartos de final · VUELTA (28-29 nov)"),
    ("semis-ida",    "2026-12-02", "2026-12-04", "Semifinales · IDA (2-3 dic)"),
    ("semis-vta",    "2026-12-05", "2026-12-07", "Semifinales · VUELTA (5-6 dic)"),
    ("final-ida",    "2026-12-10", "2026-12-11", "FINAL · IDA (10 dic)"),
    ("final-vta",    "2026-12-13", "2026-12-14", "FINAL · VUELTA (13 dic)"),
]
LIGUILLA_NOTE = (
    "Fecha tentativa: depende de que Chivas califique y del sorteo de la Liguilla. "
    "Este evento se reemplaza solo por el partido real en cuanto la Liga MX lo programe. "
    "Si Toluca llega a la Final, la Final se recorre al 24 y 27 de diciembre."
)


# ---------------------------------------------------------------------------
# Fetch
# ---------------------------------------------------------------------------

def fetch_scoreboard() -> dict:
    url = ESPN_URL.format(start=WINDOW_START, end=WINDOW_END)
    last_error: Exception | None = None
    for ua in USER_AGENTS:
        headers = {"User-Agent": ua} if ua else {}
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
            last_error = exc
            print(f"  intento con UA={ua!r} falló: {exc}", file=sys.stderr)
    raise last_error  # type: ignore[misc]


def extract_chivas_matches(payload: dict) -> list[dict]:
    """Filtra los eventos donde juega Guadalajara y los normaliza."""
    matches = []
    for event in payload.get("events", []):
        comps = event.get("competitions") or []
        if not comps:
            continue
        comp = comps[0]
        competitors = comp.get("competitors") or []
        names = {c.get("team", {}).get("displayName") for c in competitors}
        if "Guadalajara" not in names:
            continue

        home = next((c for c in competitors if c.get("homeAway") == "home"), None)
        away = next((c for c in competitors if c.get("homeAway") == "away"), None)
        if not home or not away:
            continue

        home_name = home["team"]["displayName"]
        away_name = away["team"]["displayName"]
        is_home = home_name == "Guadalajara"
        rival = away_name if is_home else home_name

        # ESPN entrega ISO en UTC ("2026-08-29T23:00Z")
        dt_utc = datetime.fromisoformat(event["date"].replace("Z", "+00:00"))
        dt_cdmx = dt_utc.astimezone(CDMX)

        state = comp.get("status", {}).get("type", {}).get("state", "pre")
        venue = (comp.get("venue") or {}).get("fullName") or ""
        address = (comp.get("venue") or {}).get("address") or {}
        city = ", ".join(x for x in [address.get("city"), address.get("country")] if x)

        # Ronda: notes trae "Liguilla - Cuartos de final" en fase final.
        notes = comp.get("notes") or []
        note_text = notes[0].get("headline", "") if notes else ""
        jornada = JORNADA_BY_RIVAL.get(rival)
        if note_text and "jornada" not in note_text.lower():
            round_label = note_text
        elif jornada:
            round_label = f"Jornada {jornada}"
        else:
            round_label = "Liga MX"

        matches.append({
            "uid": f"chivas-{dt_cdmx.strftime('%Y%m%d')}-{slug(rival)}-{'h' if is_home else 'a'}",
            "espn_id": event.get("id"),
            "datetime_utc": dt_utc.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "date_cdmx": dt_cdmx.strftime("%Y-%m-%d %H:%M"),
            "rival": rival,
            "is_home": is_home,
            "round": round_label,
            "venue": venue,
            "city": city,
            "state": state,
            "broadcaster": BROADCASTERS.get(home_name, BROADCAST_FALLBACK),
            "tentative": False,
        })

    matches.sort(key=lambda m: m["datetime_utc"])
    return matches


def slug(text: str) -> str:
    import re
    import unicodedata
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-") or "tbd"


def build_liguilla_placeholders(real_matches: list[dict]) -> list[dict]:
    """Placeholders solo para las rondas que aún no tienen partido real."""
    real_finals = [m for m in real_matches if m["datetime_utc"] >= "2026-11-24"]
    covered = {m["datetime_utc"][:10] for m in real_finals}

    out = []
    for key, start, end, label in LIGUILLA_PLACEHOLDERS:
        # Si ya hay un partido real dentro de la ventana, no publiques el placeholder.
        window_days = _dates_between(start, end)
        if covered & set(window_days):
            continue
        out.append({
            "uid": f"chivas-liguilla-{key}",
            "all_day": True,
            "start_date": start,
            "end_date": end,
            "round": label,
            "rival": "Por definir",
            "is_home": None,
            "venue": "",
            "city": "",
            "broadcaster": "Prime Video si Chivas es local · TV del rival si es visitante",
            "tentative": True,
            "datetime_utc": f"{start}T00:00:00Z",
        })
    return out


def _dates_between(start: str, end: str) -> list[str]:
    d0 = datetime.fromisoformat(start)
    d1 = datetime.fromisoformat(end)
    out = []
    while d0 < d1:
        out.append(d0.strftime("%Y-%m-%d"))
        d0 += timedelta(days=1)
    return out


# ---------------------------------------------------------------------------
# ICS
# ---------------------------------------------------------------------------

def ics_escape(text: str) -> str:
    if not text:
        return ""
    return (text.replace("\\", "\\\\").replace(",", "\\,")
                .replace(";", "\\;").replace("\n", "\\n"))


def fold(line: str) -> str:
    if len(line.encode("utf-8")) <= 75:
        return line
    out, chunk = [], ""
    for ch in line:
        if len((chunk + ch).encode("utf-8")) > 75:
            out.append(chunk)
            chunk = " " + ch
        else:
            chunk += ch
    if chunk:
        out.append(chunk)
    return "\r\n".join(out)


def to_ics(matches: list[dict]) -> str:
    now = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//MetroGuia//Chivas Liga MX 2026//ES",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:Chivas · Liga MX",
        fold("X-WR-CALDESC:" + ics_escape(
            "Partidos de Chivas con canal de transmisión. Local = Prime Video; "
            "visitante segun el rival. Liguilla incluida. Auto-sync · metroguia.mx"
        )),
        "X-WR-TIMEZONE:America/Mexico_City",
        "REFRESH-INTERVAL;VALUE=DURATION:PT12H",
        "X-PUBLISHED-TTL:PT12H",
    ]

    for m in matches:
        if m.get("all_day"):
            block = [
                "BEGIN:VEVENT",
                f"UID:{m['uid']}@metroguia.mx",
                f"DTSTAMP:{now}",
                f"DTSTART;VALUE=DATE:{m['start_date'].replace('-','')}",
                f"DTEND;VALUE=DATE:{m['end_date'].replace('-','')}",
                fold(f"SUMMARY:{ics_escape('⚽ Chivas · ' + m['round'] + ' (por definir)')}"),
                fold(f"DESCRIPTION:{ics_escape(LIGUILLA_NOTE)}"),
                "STATUS:TENTATIVE",
                "TRANSP:TRANSPARENT",
                "END:VEVENT",
            ]
            lines.extend(block)
            continue

        dt_start = datetime.fromisoformat(m["datetime_utc"].replace("Z", "+00:00"))
        dt_end = dt_start + MATCH_DURATION

        if m["is_home"]:
            summary = f"⚽ Chivas vs {m['rival']} — {m['broadcaster']}"
        else:
            summary = f"⚽ {m['rival']} vs Chivas — {m['broadcaster']}"

        location = ", ".join(x for x in [m["venue"], m["city"]] if x)
        desc = " | ".join(x for x in [
            f"Liga MX Apertura 2026 · {m['round']}",
            "Chivas de local" if m["is_home"] else "Chivas de visitante",
            f"Dónde ver: {m['broadcaster']}",
            "Horario sujeto a cambios · el calendario se actualiza solo",
        ] if x)

        lines.extend([
            "BEGIN:VEVENT",
            f"UID:{m['uid']}@metroguia.mx",
            f"DTSTAMP:{now}",
            f"DTSTART:{dt_start.strftime('%Y%m%dT%H%M%SZ')}",
            f"DTEND:{dt_end.strftime('%Y%m%dT%H%M%SZ')}",
            fold(f"SUMMARY:{ics_escape(summary)}"),
            fold(f"DESCRIPTION:{ics_escape(desc)}"),
            fold(f"LOCATION:{ics_escape(location)}"),
            "STATUS:CONFIRMED",
            "TRANSP:OPAQUE",
            "END:VEVENT",
        ])

    lines.append("END:VCALENDAR")
    return "\r\n".join(lines) + "\r\n"


# ---------------------------------------------------------------------------
# Guardas
# ---------------------------------------------------------------------------

def previous_future_count() -> int | None:
    """Cuántos partidos futuros tenía el JSON commiteado. None si no existe."""
    if not DATA_OUT.exists():
        return None
    try:
        prev = json.loads(DATA_OUT.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return None
    today = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    return sum(1 for m in prev.get("matches", [])
               if not m.get("all_day") and m.get("datetime_utc", "") > today)


def main() -> int:
    dry_run = "--dry-run" in sys.argv

    try:
        payload = fetch_scoreboard()
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
        print(f"ERROR: no se pudo leer la ESPN API: {exc}", file=sys.stderr)
        print("Abortando SIN escribir. El feed publicado conserva su último estado bueno.",
              file=sys.stderr)
        return 1

    matches = extract_chivas_matches(payload)
    if not matches:
        print("ERROR: la ESPN API respondió pero no trajo ningún partido de Chivas.",
              file=sys.stderr)
        print("Probablemente cambió el formato o el team id. Abortando SIN escribir.",
              file=sys.stderr)
        return 1

    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    future = [m for m in matches if m["datetime_utc"] > now_iso]
    prev_count = previous_future_count()
    if prev_count is not None and len(future) < prev_count - SHRINK_TOLERANCE:
        if os.environ.get("CHIVAS_ALLOW_SHRINK") != "1":
            print(f"ERROR: partidos futuros cayeron de {prev_count} a {len(future)} "
                  f"(tolerancia {SHRINK_TOLERANCE}). Abortando SIN escribir.",
                  file=sys.stderr)
            print("Si el encogimiento es legítimo, corre con CHIVAS_ALLOW_SHRINK=1.",
                  file=sys.stderr)
            return 1
        print(f"AVISO: encogimiento aceptado por CHIVAS_ALLOW_SHRINK ({prev_count} → {len(future)})")

    all_entries = matches + build_liguilla_placeholders(matches)
    all_entries.sort(key=lambda m: m["datetime_utc"])

    played = len([m for m in matches if m["state"] == "post"])
    print(f"Partidos Chivas: {len(matches)} ({played} jugados, {len(future)} por jugar)")
    print(f"Placeholders de Liguilla: {len(all_entries) - len(matches)}")
    for m in future:
        print(f"  {m['date_cdmx']}  {m['round']:<28} "
              f"{'vs' if m['is_home'] else '@ '} {m['rival']:<22} {m['broadcaster']}")

    ics = to_ics(all_entries)
    payload_out = {
        "team": "Guadalajara (Chivas)",
        "league": "Liga BBVA MX",
        "season": "Apertura 2026",
        "total_matches": len(matches),
        "future_matches": len(future),
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": ESPN_URL.format(start=WINDOW_START, end=WINDOW_END),
        "broadcast_rights_note": "Mapa BROADCASTERS revisado jul-2026; revalidar cada torneo.",
        "matches": all_entries,
    }

    if dry_run:
        print("\n--dry-run: no se escribió nada.")
        print(f"ICS tendría {ics.count('BEGIN:VEVENT')} eventos, {len(ics):,} bytes.")
        return 0

    DATA_OUT.parent.mkdir(parents=True, exist_ok=True)
    ICS_DIR.mkdir(parents=True, exist_ok=True)
    DATA_OUT.write_text(json.dumps(payload_out, indent=2, ensure_ascii=False), encoding="utf-8")
    ICS_OUT.write_text(ics, encoding="utf-8")
    print(f"\n✓ {DATA_OUT} ({DATA_OUT.stat().st_size:,} bytes)")
    print(f"✓ {ICS_OUT} ({ICS_OUT.stat().st_size:,} bytes, {ics.count('BEGIN:VEVENT')} eventos)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
