#!/usr/bin/env python3
"""Genera el ICS inicial de Diablos Rojos 2026 desde un seed hardcodeado."""
import json, unicodedata, re
from datetime import datetime, timedelta, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
DATA_OUT = REPO_ROOT / "data" / "diablos-fixtures.json"
ICS_DIR = REPO_ROOT / "public" / "calendar"
ICS_DIR.mkdir(parents=True, exist_ok=True)

CDMX_OFFSET = timedelta(hours=-6)
STADIUM_HOME = "Estadio Alfredo Harp Helú"
STADIUM_ADDRESS = "Av. Río Churubusco s/n, Granjas México, Iztacalco, 08400 CDMX"

FULL_NAMES = {
    "Acereros": "Acereros de Monclova", "Bravos": "Bravos de León",
    "Charros": "Charros de Jalisco", "Conspiradores": "Conspiradores de Querétaro",
    "El Águila": "El Águila de Veracruz", "Guerreros": "Guerreros de Oaxaca",
    "Leones": "Leones de Yucatán", "Olmecas": "Olmecas de Tabasco",
    "Pericos": "Pericos de Puebla", "Piratas": "Piratas de Campeche",
    "Sultanes": "Sultanes de Monterrey", "Tigres": "Tigres de Quintana Roo",
}

SEED = [
    ("2026-04-16","19:00","Piratas","Serie inaugural"),
    ("2026-04-17","19:00","Piratas",""),
    ("2026-04-18","16:00","Piratas",""),
    ("2026-05-01","19:00","Guerreros",""),
    ("2026-05-02","16:00","Guerreros",""),
    ("2026-05-03","14:00","Guerreros",""),
    ("2026-05-05","19:00","El Águila",""),
    ("2026-05-06","19:00","El Águila",""),
    ("2026-05-07","19:00","El Águila",""),
    ("2026-05-15","19:00","Tigres",""),
    ("2026-05-16","16:00","Tigres",""),
    ("2026-05-17","14:00","Tigres",""),
    ("2026-05-29","19:00","Conspiradores",""),
    ("2026-05-30","16:00","Conspiradores",""),
    ("2026-05-31","14:00","Conspiradores",""),
    ("2026-06-02","19:00","Bravos",""),
    ("2026-06-03","19:00","Bravos",""),
    ("2026-06-04","19:00","Bravos",""),
    ("2026-06-05","19:00","Olmecas",""),
    ("2026-06-06","16:00","Olmecas",""),
    ("2026-06-07","14:00","Olmecas",""),
    ("2026-06-15","19:00","Charros","Serie Interzona"),
    ("2026-06-16","19:00","Charros","Serie Interzona"),
    ("2026-06-17","19:00","Charros","Serie Interzona"),
    ("2026-06-19","19:00","Sultanes",""),
    ("2026-06-20","16:00","Sultanes",""),
    ("2026-06-21","14:00","Sultanes",""),
    ("2026-08-01","16:00","Guerreros",""),
    ("2026-08-02","14:00","Guerreros",""),
    ("2026-08-04","16:30","Tigres",""),
    ("2026-08-05","16:30","Tigres",""),
    ("2026-08-06","16:30","Tigres","Cierre regular"),
]

def slugify(t):
    t = unicodedata.normalize("NFKD", t).encode("ascii","ignore").decode("ascii").lower()
    return re.sub(r"[^a-z0-9]+","-",t).strip("-") or "tbd"

def ics_escape(t):
    if not t: return ""
    return t.replace("\\","\\\\").replace(",","\\,").replace(";","\\;").replace("\n","\\n")

def fold(line):
    if len(line.encode("utf-8")) <= 75: return line
    out, chunk = [], ""
    for ch in line:
        if len((chunk+ch).encode("utf-8")) > 75:
            out.append(chunk); chunk = " " + ch
        else:
            chunk += ch
    if chunk: out.append(chunk)
    return "\r\n".join(out)

def build():
    games = []
    for date_str, time_str, rival, note in SEED:
        y,mo,d = [int(x) for x in date_str.split("-")]
        h,mi = [int(x) for x in time_str.split(":")]
        dt_cdmx = datetime(y,mo,d,h,mi,tzinfo=timezone(CDMX_OFFSET))
        dt_utc = dt_cdmx.astimezone(timezone.utc)
        games.append({
            "uid": f"diablos-{y}{mo:02d}{d:02d}-{slugify(rival)}-h",
            "date_cdmx": dt_cdmx.strftime("%Y-%m-%d %H:%M"),
            "datetime_utc": dt_utc.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "rival_short": rival, "rival_full": FULL_NAMES.get(rival,rival),
            "is_home": True, "note": note,
            "stadium": STADIUM_HOME, "city": "Ciudad de México",
        })
    return games

def to_ics(games, calname, desc):
    now = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    lines = ["BEGIN:VCALENDAR","VERSION:2.0",
        "PRODID:-//MetroGuia//Diablos Rojos LMB 2026//ES",
        "CALSCALE:GREGORIAN","METHOD:PUBLISH",
        f"X-WR-CALNAME:{ics_escape(calname)}",
        f"X-WR-CALDESC:{ics_escape(desc)}",
        "X-WR-TIMEZONE:America/Mexico_City"]
    for g in games:
        s = datetime.fromisoformat(g["datetime_utc"].replace("Z","+00:00"))
        e = s + timedelta(hours=3)
        summary = f"🔴 Diablos vs {g['rival_short']}"
        if g["note"]:
            summary += f" ({g['note']})"
        loc = f"{STADIUM_HOME}, {STADIUM_ADDRESS}"
        dparts = ["LMB 2026 · Temporada regular · Home game",
                  f"vs {g['rival_full']}"]
        if g["note"]: dparts.append(g["note"])
        dparts += ["Calendario: https://www.diablos.com.mx/calendario",
                   "Boletos: https://www.diablos.com.mx/boletos"]
        lines += ["BEGIN:VEVENT",
            f"UID:{g['uid']}@metroguia.mx",
            f"DTSTAMP:{now}",
            f"DTSTART:{s.strftime('%Y%m%dT%H%M%SZ')}",
            f"DTEND:{e.strftime('%Y%m%dT%H%M%SZ')}",
            fold(f"SUMMARY:{ics_escape(summary)}"),
            fold(f"DESCRIPTION:{ics_escape(' | '.join(dparts))}"),
            fold(f"LOCATION:{ics_escape(loc)}"),
            "URL:https://www.diablos.com.mx/calendario",
            "STATUS:CONFIRMED","TRANSP:OPAQUE","END:VEVENT"]
    lines.append("END:VCALENDAR")
    return "\r\n".join(lines) + "\r\n"

games = build()
print(f"Construidos {len(games)} home games")
DATA_OUT.parent.mkdir(parents=True, exist_ok=True)
DATA_OUT.write_text(json.dumps({
    "team":"Diablos Rojos del México","league":"Liga Mexicana de Béisbol",
    "season":"2026","total_games":len(games),"home_games":len(games),
    "generated_at": datetime.now(timezone.utc).isoformat(),
    "source":"https://www.diablos.com.mx/calendario (seed 2026-05-18)",
    "games": games}, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"✓ {DATA_OUT}")
casa = to_ics(games, "Diablos Rojos casa · LMB 2026",
    "Partidos en casa Diablos Rojos del México · Estadio Alfredo Harp Helú · Temporada 2026 LMB · Auto-sync semanal · metroguia.mx")
full = to_ics(games, "Diablos Rojos · LMB 2026",
    "Calendario Diablos Rojos del México · Temporada 2026 LMB · Auto-sync semanal · metroguia.mx")
for name, content in [("diablos-rojos-2026-casa.ics", casa), ("diablos-rojos-2026.ics", full)]:
    p = ICS_DIR / name
    p.write_text(content, encoding="utf-8")
    print(f"✓ {name} ({p.stat().st_size:,} bytes, {content.count('BEGIN:VEVENT')} eventos)")
