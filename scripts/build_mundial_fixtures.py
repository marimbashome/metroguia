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
    # Mapa COMPLETO de los 104 partidos (id football-data.org -> sede REAL).
    # Source: calendario oficial FIFA 2026, verificado 2026-06-15 (cross-check multi-fuente).
    # Reemplaza el round-robin que fabricaba sedes (bug abr-2026).
    # (stadium, city, country, is_azteca)
    537327: ('Estadio Azteca', 'Ciudad de México', 'Mexico', True),           # 2026-06-11 Fase de Grupos · Mexico vs South Africa
    537328: ('Estadio Akron', 'Guadalajara', 'Mexico', False),                # 2026-06-11 Fase de Grupos · South Korea vs Czechia
    537329: ('Mercedes-Benz Stadium', 'Atlanta, GA', 'United States', False), # 2026-06-18 Fase de Grupos · Czechia vs South Africa
    537330: ('Estadio Akron', 'Guadalajara', 'Mexico', False),                # 2026-06-18 Fase de Grupos · Mexico vs South Korea
    537331: ('Estadio Azteca', 'Ciudad de México', 'Mexico', True),           # 2026-06-24 Fase de Grupos · Czechia vs Mexico
    537332: ('Estadio BBVA', 'Monterrey', 'Mexico', False),                   # 2026-06-24 Fase de Grupos · South Africa vs South Korea
    537333: ('BMO Field', 'Toronto', 'Canada', False),                        # 2026-06-12 Fase de Grupos · Canada vs Bosnia-Herzegovina
    537334: ("Levi's Stadium", 'Santa Clara, CA', 'United States', False),    # 2026-06-13 Fase de Grupos · Qatar vs Switzerland
    537335: ('SoFi Stadium', 'Inglewood, CA', 'United States', False),        # 2026-06-18 Fase de Grupos · Switzerland vs Bosnia-Herzegovina
    537336: ('BC Place', 'Vancouver', 'Canada', False),                       # 2026-06-18 Fase de Grupos · Canada vs Qatar
    537337: ('BC Place', 'Vancouver', 'Canada', False),                       # 2026-06-24 Fase de Grupos · Switzerland vs Canada
    537338: ('Lumen Field', 'Seattle, WA', 'United States', False),           # 2026-06-24 Fase de Grupos · Bosnia-Herzegovina vs Qatar
    537339: ('MetLife Stadium', 'East Rutherford, NJ', 'United States', False),# 2026-06-13 Fase de Grupos · Brazil vs Morocco
    537340: ('Gillette Stadium', 'Foxborough, MA', 'United States', False),   # 2026-06-13 Fase de Grupos · Haiti vs Scotland
    537341: ('Lincoln Financial Field', 'Philadelphia, PA', 'United States', False),# 2026-06-19 Fase de Grupos · Brazil vs Haiti
    537342: ('Gillette Stadium', 'Foxborough, MA', 'United States', False),   # 2026-06-19 Fase de Grupos · Scotland vs Morocco
    537343: ('Hard Rock Stadium', 'Miami Gardens, FL', 'United States', False),# 2026-06-24 Fase de Grupos · Scotland vs Brazil
    537344: ('Mercedes-Benz Stadium', 'Atlanta, GA', 'United States', False), # 2026-06-24 Fase de Grupos · Morocco vs Haiti
    537345: ('SoFi Stadium', 'Inglewood, CA', 'United States', False),        # 2026-06-12 Fase de Grupos · United States vs Paraguay
    537346: ('BC Place', 'Vancouver', 'Canada', False),                       # 2026-06-13 Fase de Grupos · Australia vs Turkey
    537347: ("Levi's Stadium", 'Santa Clara, CA', 'United States', False),    # 2026-06-19 Fase de Grupos · Turkey vs Paraguay
    537348: ('Lumen Field', 'Seattle, WA', 'United States', False),           # 2026-06-19 Fase de Grupos · United States vs Australia
    537349: ('SoFi Stadium', 'Inglewood, CA', 'United States', False),        # 2026-06-25 Fase de Grupos · Turkey vs United States
    537350: ("Levi's Stadium", 'Santa Clara, CA', 'United States', False),    # 2026-06-25 Fase de Grupos · Paraguay vs Australia
    537351: ('NRG Stadium', 'Houston, TX', 'United States', False),           # 2026-06-14 Fase de Grupos · Germany vs Curaçao
    537352: ('Lincoln Financial Field', 'Philadelphia, PA', 'United States', False),# 2026-06-14 Fase de Grupos · Ivory Coast vs Ecuador
    537353: ('BMO Field', 'Toronto', 'Canada', False),                        # 2026-06-20 Fase de Grupos · Germany vs Ivory Coast
    537354: ('Arrowhead Stadium', 'Kansas City, MO', 'United States', False), # 2026-06-20 Fase de Grupos · Ecuador vs Curaçao
    537355: ('MetLife Stadium', 'East Rutherford, NJ', 'United States', False),# 2026-06-25 Fase de Grupos · Ecuador vs Germany
    537356: ('Lincoln Financial Field', 'Philadelphia, PA', 'United States', False),# 2026-06-25 Fase de Grupos · Curaçao vs Ivory Coast
    537357: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-06-14 Fase de Grupos · Netherlands vs Japan
    537358: ('Estadio BBVA', 'Monterrey', 'Mexico', False),                   # 2026-06-14 Fase de Grupos · Sweden vs Tunisia
    537359: ('NRG Stadium', 'Houston, TX', 'United States', False),           # 2026-06-20 Fase de Grupos · Netherlands vs Sweden
    537360: ('Estadio BBVA', 'Monterrey', 'Mexico', False),                   # 2026-06-20 Fase de Grupos · Tunisia vs Japan
    537361: ('Arrowhead Stadium', 'Kansas City, MO', 'United States', False), # 2026-06-25 Fase de Grupos · Tunisia vs Netherlands
    537362: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-06-25 Fase de Grupos · Japan vs Sweden
    537363: ('Lumen Field', 'Seattle, WA', 'United States', False),           # 2026-06-15 Fase de Grupos · Belgium vs Egypt
    537364: ('SoFi Stadium', 'Inglewood, CA', 'United States', False),        # 2026-06-15 Fase de Grupos · Iran vs New Zealand
    537365: ('SoFi Stadium', 'Inglewood, CA', 'United States', False),        # 2026-06-21 Fase de Grupos · Belgium vs Iran
    537366: ('BC Place', 'Vancouver', 'Canada', False),                       # 2026-06-21 Fase de Grupos · New Zealand vs Egypt
    537367: ('BC Place', 'Vancouver', 'Canada', False),                       # 2026-06-26 Fase de Grupos · New Zealand vs Belgium
    537368: ('Lumen Field', 'Seattle, WA', 'United States', False),           # 2026-06-26 Fase de Grupos · Egypt vs Iran
    537369: ('Mercedes-Benz Stadium', 'Atlanta, GA', 'United States', False), # 2026-06-15 Fase de Grupos · Spain vs Cape Verde Islands
    537370: ('Hard Rock Stadium', 'Miami Gardens, FL', 'United States', False),# 2026-06-15 Fase de Grupos · Saudi Arabia vs Uruguay
    537371: ('Mercedes-Benz Stadium', 'Atlanta, GA', 'United States', False), # 2026-06-21 Fase de Grupos · Spain vs Saudi Arabia
    537372: ('Hard Rock Stadium', 'Miami Gardens, FL', 'United States', False),# 2026-06-21 Fase de Grupos · Uruguay vs Cape Verde Islands
    537373: ('Estadio Akron', 'Guadalajara', 'Mexico', False),                # 2026-06-26 Fase de Grupos · Uruguay vs Spain
    537374: ('NRG Stadium', 'Houston, TX', 'United States', False),           # 2026-06-26 Fase de Grupos · Cape Verde Islands vs Saudi Arabia
    537375: ('NRG Stadium', 'Houston, TX', 'United States', False),           # 2026-07-04 Octavos de Final · TBD vs TBD
    537376: ('Lincoln Financial Field', 'Philadelphia, PA', 'United States', False),# 2026-07-04 Octavos de Final · TBD vs TBD
    537377: ('MetLife Stadium', 'East Rutherford, NJ', 'United States', False),# 2026-07-05 Octavos de Final · TBD vs TBD
    537378: ('Estadio Azteca', 'Ciudad de México', 'Mexico', True),           # 2026-07-05 Octavos de Final · TBD vs TBD
    537379: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-07-06 Octavos de Final · TBD vs TBD
    537380: ('Lumen Field', 'Seattle, WA', 'United States', False),           # 2026-07-06 Octavos de Final · TBD vs TBD
    537381: ('Mercedes-Benz Stadium', 'Atlanta, GA', 'United States', False), # 2026-07-07 Octavos de Final · TBD vs TBD
    537382: ('BC Place', 'Vancouver', 'Canada', False),                       # 2026-07-07 Octavos de Final · TBD vs TBD
    537383: ('Gillette Stadium', 'Foxborough, MA', 'United States', False),   # 2026-07-09 Cuartos de Final · TBD vs TBD
    537384: ('SoFi Stadium', 'Inglewood, CA', 'United States', False),        # 2026-07-10 Cuartos de Final · TBD vs TBD
    537385: ('Hard Rock Stadium', 'Miami Gardens, FL', 'United States', False),# 2026-07-11 Cuartos de Final · TBD vs TBD
    537386: ('Arrowhead Stadium', 'Kansas City, MO', 'United States', False), # 2026-07-11 Cuartos de Final · TBD vs TBD
    537387: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-07-14 Semifinal · TBD vs TBD
    537388: ('Mercedes-Benz Stadium', 'Atlanta, GA', 'United States', False), # 2026-07-15 Semifinal · TBD vs TBD
    537389: ('Hard Rock Stadium', 'Miami Gardens, FL', 'United States', False),# 2026-07-18 Tercer Lugar · TBD vs TBD
    537390: ('MetLife Stadium', 'East Rutherford, NJ', 'United States', False),# 2026-07-19 Final · TBD vs TBD
    537391: ('MetLife Stadium', 'East Rutherford, NJ', 'United States', False),# 2026-06-16 Fase de Grupos · France vs Senegal
    537392: ('Gillette Stadium', 'Foxborough, MA', 'United States', False),   # 2026-06-16 Fase de Grupos · Iraq vs Norway
    537393: ('Lincoln Financial Field', 'Philadelphia, PA', 'United States', False),# 2026-06-22 Fase de Grupos · France vs Iraq
    537394: ('MetLife Stadium', 'East Rutherford, NJ', 'United States', False),# 2026-06-22 Fase de Grupos · Norway vs Senegal
    537395: ('Gillette Stadium', 'Foxborough, MA', 'United States', False),   # 2026-06-26 Fase de Grupos · Norway vs France
    537396: ('BMO Field', 'Toronto', 'Canada', False),                        # 2026-06-26 Fase de Grupos · Senegal vs Iraq
    537397: ('Arrowhead Stadium', 'Kansas City, MO', 'United States', False), # 2026-06-16 Fase de Grupos · Argentina vs Algeria
    537398: ("Levi's Stadium", 'Santa Clara, CA', 'United States', False),    # 2026-06-16 Fase de Grupos · Austria vs Jordan
    537399: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-06-22 Fase de Grupos · Argentina vs Austria
    537400: ("Levi's Stadium", 'Santa Clara, CA', 'United States', False),    # 2026-06-22 Fase de Grupos · Jordan vs Algeria
    537401: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-06-27 Fase de Grupos · Jordan vs Argentina
    537402: ('Arrowhead Stadium', 'Kansas City, MO', 'United States', False), # 2026-06-27 Fase de Grupos · Algeria vs Austria
    537403: ('NRG Stadium', 'Houston, TX', 'United States', False),           # 2026-06-17 Fase de Grupos · Portugal vs Congo DR
    537404: ('Estadio Azteca', 'Ciudad de México', 'Mexico', True),           # 2026-06-17 Fase de Grupos · Uzbekistan vs Colombia
    537405: ('NRG Stadium', 'Houston, TX', 'United States', False),           # 2026-06-23 Fase de Grupos · Portugal vs Uzbekistan
    537406: ('Estadio Akron', 'Guadalajara', 'Mexico', False),                # 2026-06-23 Fase de Grupos · Colombia vs Congo DR
    537407: ('Hard Rock Stadium', 'Miami Gardens, FL', 'United States', False),# 2026-06-27 Fase de Grupos · Colombia vs Portugal
    537408: ('Mercedes-Benz Stadium', 'Atlanta, GA', 'United States', False), # 2026-06-27 Fase de Grupos · Congo DR vs Uzbekistan
    537409: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-06-17 Fase de Grupos · England vs Croatia
    537410: ('BMO Field', 'Toronto', 'Canada', False),                        # 2026-06-17 Fase de Grupos · Ghana vs Panama
    537411: ('Gillette Stadium', 'Foxborough, MA', 'United States', False),   # 2026-06-23 Fase de Grupos · England vs Ghana
    537412: ('BMO Field', 'Toronto', 'Canada', False),                        # 2026-06-23 Fase de Grupos · Panama vs Croatia
    537413: ('MetLife Stadium', 'East Rutherford, NJ', 'United States', False),# 2026-06-27 Fase de Grupos · Panama vs England
    537414: ('Lincoln Financial Field', 'Philadelphia, PA', 'United States', False),# 2026-06-27 Fase de Grupos · Croatia vs Ghana
    537415: ('Estadio BBVA', 'Monterrey', 'Mexico', False),                   # 2026-06-29 Round of 32 · TBD vs TBD
    537416: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-06-30 Round of 32 · TBD vs TBD
    537417: ('SoFi Stadium', 'Inglewood, CA', 'United States', False),        # 2026-06-28 Round of 32 · TBD vs TBD
    537418: ('NRG Stadium', 'Houston, TX', 'United States', False),           # 2026-06-29 Round of 32 · TBD vs TBD
    537419: ('SoFi Stadium', 'Inglewood, CA', 'United States', False),        # 2026-07-02 Round of 32 · TBD vs TBD
    537420: ('BMO Field', 'Toronto', 'Canada', False),                        # 2026-07-02 Round of 32 · TBD vs TBD
    537421: ('Lumen Field', 'Seattle, WA', 'United States', False),           # 2026-07-01 Round of 32 · TBD vs TBD
    537422: ("Levi's Stadium", 'Santa Clara, CA', 'United States', False),    # 2026-07-01 Round of 32 · TBD vs TBD
    537423: ('Gillette Stadium', 'Foxborough, MA', 'United States', False),   # 2026-06-29 Round of 32 · TBD vs TBD
    537424: ('MetLife Stadium', 'East Rutherford, NJ', 'United States', False),# 2026-06-30 Round of 32 · TBD vs TBD
    537425: ('Estadio Azteca', 'Ciudad de México', 'Mexico', True),           # 2026-06-30 Round of 32 · TBD vs TBD
    537426: ('Mercedes-Benz Stadium', 'Atlanta, GA', 'United States', False), # 2026-07-01 Round of 32 · TBD vs TBD
    537427: ('Arrowhead Stadium', 'Kansas City, MO', 'United States', False), # 2026-07-03 Round of 32 · TBD vs TBD
    537428: ('Hard Rock Stadium', 'Miami Gardens, FL', 'United States', False),# 2026-07-03 Round of 32 · TBD vs TBD
    537429: ('BC Place', 'Vancouver', 'Canada', False),                       # 2026-07-02 Round of 32 · TBD vs TBD
    537430: ('AT&T Stadium', 'Arlington, TX', 'United States', False),        # 2026-07-03 Round of 32 · TBD vs TBD
}

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

    # Sin round-robin: si un id no está en el mapa, marcar honestamente "Por confirmarse".
    # NUNCA fabricar una sede (ese fue el bug abr-2026). El mapa de arriba cubre los 104.
    return ("Por confirmarse", "", "TBD", False)


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
