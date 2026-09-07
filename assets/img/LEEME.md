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

En lugar de `src` puede ir `gen`, y entonces la figura no es un archivo sino un
dibujo que el sitio hace con los datos que ya tiene. Hoy existe uno,
`"gen": "alcance"`, que cuenta sobre `matriz.json` cuántos elementos alcanza
cada componente. Una figura así no puede quedarse vieja, y además sigue el
interruptor de tema del sitio, cosa que una imagen no puede hacer.

La clave es el identificador de la hoja: `ficha-1` es la portadilla de la
Ficha 1 y `ficha-0-el-modelo` es su elemento «El modelo». Se ve en la barra de
direcciones al abrir esa hoja.

### 2. Desde el Markdown, en su propia línea

```
![Texto alternativo](Repaso/nombre-del-archivo.png "Pie de foto opcional")
```

Sirve para quien escriba las imágenes en su propia copia de las fichas: si el
`.png` se guarda junto al `.md` en la carpeta del curso, el `sync.sh` lo trae a
`Repaso/`, y **por eso la ruta empieza en `Repaso/`**, no en `assets/img/`. El
espejo copia esa carpeta y nada más: una imagen que se quiera en `assets/img/`
hay que ponerla ahí a mano, y entonces conviene declararla por la vía 1.

El pie es el título entre comillas. Sin él la figura sale sin pie: el texto
alternativo no se usa de pie, porque está escrito para quien no puede ver la
imagen y diría lo mismo dos veces.

La imagen tiene que ir sola en su renglón para que se vea como figura. Si lleva
texto al lado, el renglón se queda como párrafo.

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

## De dónde salieron las capturas

Las tomó una persona desde su propia sesión de Claude, sobre material inventado
para el curso: un proyecto «Demo del curso», un `ejemplo-curso.txt` y un
documento de prueba que dice de sí mismo que no contiene datos personales. Nada
de lo que se ve pertenece a un cliente ni a un trabajo real, que es la condición
para publicarlas en un repositorio abierto.

No se pueden generar desde el entorno donde se construye este sitio: `claude.ai`
responde 403 y no hay navegador con sesión iniciada. Para agregar una más, hay
que tomarla igual y dejarla en esta carpeta.

Lo que sí sale solo, sin capturas, son los tableros que el sitio dibuja a partir
de las tablas «Dónde funciona» de las propias fichas.

## Sobre el modo oscuro

Una imagen no puede seguir el interruptor de tema del sitio: un SVG cargado como
archivo sigue el modo del **sistema** con su propia consulta
`prefers-color-scheme`, y una captura de pantalla no sigue nada. Para que
ninguna deslumbre sobre la página oscura, el sitio les baja el brillo; al
abrirlas en grande y al imprimir se ven sin retoque.

Ésa es la razón de las figuras `gen`: al dibujarse dentro de la página toman las
mismas variables de color que el resto y cambian con el interruptor, sin trucos.
