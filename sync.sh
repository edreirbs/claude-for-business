#!/bin/bash
# Sincroniza la carpeta Repaso del curso con este repositorio y sube los cambios.
# Uso:  ./sync.sh "mensaje del commit"

REPO="$(cd "$(dirname "$0")" && pwd)"
SRC="$HOME/Library/CloudStorage/OneDrive-InstitutoTecnologicoydeEstudiosSuperioresdeMonterrey/Personal/_INTELIGENCIA ARTIFICIAL/_UP Ags Claude/Curso Claude for Business/Repaso"

cd "$REPO" || exit 1

# Espejo de la carpeta Repaso: lo que borres alla, se borra aqui.
if [ -d "$SRC" ]; then
  rsync -a --delete --exclude '.DS_Store' "$SRC/" "$REPO/Repaso/"
else
  echo "Aviso: no encontre la carpeta Repaso del curso. Sigo con lo que ya hay aqui."
fi

# Limpieza de los bloqueos que deja git cuando los commits vienen del entorno aislado
rm -f .git/*.lock .git/refs/heads/*.lock 2>/dev/null
find .git/objects -name 'tmp_obj_*' -delete 2>/dev/null

git add -A
if git diff --cached --quiet; then
  echo "No hay cambios que subir."
else
  git commit -m "${1:-Actualizacion de material}" || exit 1
fi
git push
