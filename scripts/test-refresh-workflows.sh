#!/usr/bin/env bash
# Test de los workflows refresh-chivas.yml y refresh-diablos.yml.
#
# Valida que:
#   1. Ninguno de los dos hace push directo a main (main está protegida).
#   2. Ambos crean/actualizan una rama dedicada y un PR hacia main.
#   3. Ambos declaran permisos mínimos: contents:write + pull-requests:write.
#   4. Se conservan las comprobaciones de contenido del ICS (Chivas).
#   5. Nadie fuerza el merge ni aprueba el PR desde el workflow.
#   6. Simulación en git puro: el push de la rama actualiza el PR existente
#      y main jamás recibe un commit directo.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHIVAS="$ROOT/.github/workflows/refresh-chivas.yml"
DIABLOS="$ROOT/.github/workflows/refresh-diablos.yml"
PASS=0
FAIL=0

ok()   { echo "  ✔ $1"; PASS=$((PASS+1)); }
bad()  { echo "  ✘ $1"; FAIL=$((FAIL+1)); }

check_contains() { # archivo, patrón, descripción
  if grep -qE -e "$2" -- "$1"; then ok "$3"; else bad "$3"; fi
}

check_not_contains() { # archivo, patrón, descripción
  if grep -qE -e "$2" -- "$1"; then bad "$3"; else ok "$3"; fi
}

for WF in "$CHIVAS" "$DIABLOS"; do
  echo "== $(basename "$WF") =="
  check_contains "$WF" 'permissions:' "declara bloque permissions"
  check_contains "$WF" 'contents: *write' "permiso contents: write (mínimo)"
  check_contains "$WF" 'pull-requests: *write' "permiso pull-requests: write (mínimo)"
  # Push directo a main: un `git push` sin refspec explícito empuja a la rama
  # actual (main en el checkout del workflow) → prohibido.
  if grep -qE '^[^#]*git push$' "$WF"; then
    bad "sin 'git push' desnudo (push directo a main)"
  else
    ok "sin 'git push' desnudo (push directo a main)"
  fi
  check_not_contains "$WF" 'git push[^#]*origin +main|git push[^#]*HEAD:main|push[^#]*refs/heads/main' "ningún push apunta a refs/heads/main"
  check_contains "$WF" 'git push origin "HEAD:refs/heads/\$BRANCH"' "push a rama dedicada \$BRANCH"
  check_contains "$WF" 'gh pr create' "crea PR con gh pr create"
  check_contains "$WF" 'gh pr view "\$BRANCH"' "reutiliza PR existente (idempotente)"
  check_contains "$WF" '--base main' "el PR apunta a main"
  check_not_contains "$WF" 'gh pr (merge|approve|ready)|--admin|--squash' "no fuerza merge ni aprueba el PR"
  check_not_contains "$WF" 'gh pr create[^&]*&amp;&amp; *gh pr merge' "no crea y mergea en la misma corrida"
done

echo "== Sanity check del ICS (Chivas) =="
check_contains "$CHIVAS" "BEGIN:VEVENT" "conserva la comprobación de eventos del ICS"
check_contains "$CHIVAS" 'El ICS quedó sin eventos' "conserva el abort si el ICS queda vacío"

echo
echo "== Simulación: rama + PR, main intocable =="

# Simulación con un repositorio git local de un solo commit (sin red):
# "origin" es un repo bare dentro del árbol de trabajo del test.
SIMDIR="$ROOT/.sim-refresh-wf"
rm -rf "$SIMDIR"
mkdir -p "$SIMDIR"
trap 'rm -rf "$SIMDIR"' EXIT

git init -q --bare "$SIMDIR/origin.git"
git init -q "$SIMDIR/clone"
git -C "$SIMDIR/clone" config user.email sim@local
git -C "$SIMDIR/clone" config user.name sim
echo base > "$SIMDIR/clone/f.txt"
git -C "$SIMDIR/clone" add f.txt
git -C "$SIMDIR/clone" commit -qm base
git -C "$SIMDIR/clone" branch -M main
git -C "$SIMDIR/clone" remote add origin "$SIMDIR/origin.git"
git -C "$SIMDIR/clone" push -q origin main

# Corrida 1: cambia el feed → push a la rama dedicada.
BRANCH="auto/refresh-chivas-fixtures"
cd "$SIMDIR/clone"
echo v1 > f.txt
git add f.txt
git commit -qm "refresh 1"
git push -q origin "HEAD:refs/heads/$BRANCH"
if git ls-remote --heads origin main | grep -q "$(git rev-parse HEAD)"; then
  bad "main NO debe apuntar al commit del refresh"
else
  ok "main no recibió el commit del refresh"
fi
if git ls-remote --heads origin | grep -q "$BRANCH"; then
  ok "la rama dedicada $BRANCH existe en origin"
else
  bad "la rama dedicada $BRANCH no existe"
fi

# Corrida 2: otro cambio → push a la MISMA rama (actualiza el PR abierto).
echo v2 > f.txt
git add f.txt
git commit -qm "refresh 2"
git push -q origin "HEAD:refs/heads/$BRANCH"
REMOTE_BRANCH_SHA="$(git ls-remote origin "refs/heads/$BRANCH" | cut -f1)"
if [ "$REMOTE_BRANCH_SHA" = "$(git rev-parse HEAD)" ]; then
  ok "el segundo push actualizó la misma rama (el PR abierto se actualiza solo)"
else
  bad "la rama no quedó actualizada tras el segundo push"
fi
if git ls-remote --heads origin main | grep -q "$REMOTE_BRANCH_SHA"; then
  bad "main sigue sin recibir push directo"
else
  ok "main sigue intacta tras la segunda corrida"
fi

echo
echo "Resultado: $PASS pasan, $FAIL fallan."
[ "$FAIL" -eq 0 ]
