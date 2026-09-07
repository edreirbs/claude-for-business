# Imágenes de las fichas

Aquí van las capturas y las imágenes que se muestren dentro de las fichas.

## Cómo se pone una en una ficha

Hay dos vías. **La recomendada es la primera**, porque la otra no sobrevive al
`sync.sh`: ese script espeja tu carpeta del curso sobre `Repaso/` con
`rsync --delete`, así que cualquier imagen escrita dentro de un `.md` de este
repositorio se pierde en la siguiente sincronización.

### 1. Desde `assets/figuras.json` (fuera de `Repaso/`)

```json
{
  "ficha-0-el-modelo": [
    {
      "src": "assets/img/ficha-0-selector-de-modelo.png",
      "alt": "El selector de modelo abierto, con Opus, Sonnet y Haiku.",
      "cap": "Pie de foto opcional."
    }
  ]
}
```

La clave es el identificador de la hoja: `ficha-1` es la portadilla de la
Ficha 1 y `ficha-0-el-modelo` es su elemento «El modelo». Se ve en la barra de
direcciones al abrir esa hoja.

### 2. Desde el Markdown, en su propia línea

```
![Texto alternativo](assets/img/nombre-del-archivo.png "Pie de foto opcional")
```

Sirve para quien escriba las imágenes en su propia copia de las fichas, en la
carpeta del curso, de modo que el `sync.sh` las traiga.

En ambos casos el sitio la muestra como figura, con su pie, y al hacer clic se
abre en grande.

## Reglas

- **El texto alternativo no es opcional.** Describe lo que se ve, para quien no
  puede verla: «El selector de modelo abierto, con Opus, Sonnet y Haiku».
- **Formato:** PNG para capturas de pantalla, SVG para diagramas, JPG para
  fotografías. Nada de capturas en JPG: el texto se ensucia.
- **Ancho:** 1600 px basta. Más pesa de más y no se ve mejor.
- **Nombre:** en minúsculas y con guiones, empezando por la ficha:
  `ficha-0-selector-de-modelo.png`.
- **Cuidado con lo que sale en la captura.** Una barra lateral de conversaciones
  o un nombre de archivo puede filtrar algo que no querías publicar: el
  repositorio es público.

## Por qué no hay capturas del producto todavía

Se generan tomándolas de una sesión de Claude ya iniciada. El entorno donde se
construyó este sitio no tiene acceso a esa sesión —`claude.ai` responde 403 y no
hay navegador con cookies—, así que las capturas las tiene que tomar una persona
con su sesión abierta y dejarlas en esta carpeta.

Lo que sí sale solo, sin capturas, son los tableros que el sitio dibuja a partir
de las tablas «Dónde funciona» de las propias fichas.

## Sobre el modo oscuro

Una imagen no puede seguir el interruptor de tema del sitio. Un SVG con su propia
consulta `prefers-color-scheme` sigue el modo del **sistema**, y una captura de
pantalla no sigue nada. Para que ninguna deslumbre sobre la página oscura, el
sitio les baja el brillo; al abrirlas en grande se ven sin retoque.
