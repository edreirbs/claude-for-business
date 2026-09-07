# Claude for Business

Material del curso **Claude for Business**, impartido en la Universidad Panamericana.

Ocho sesiones de 150 minutos para participantes no técnicos, sobre el uso de Claude en trabajo profesional real.

---

## Contenido de este repositorio

### `Repaso/`

Nueve fichas de repaso, numeradas de la 0 a la 8, que describen el ecosistema completo de Claude: seis **componentes** —los lugares donde se puede trabajar— y los **elementos** con los que se trabaja, agrupados en inputs, configuraciones y outputs. La Ficha 0 va aparte porque no describe qué puedes hacer sino en qué condiciones lo vas a hacer.

Su contenido se contrastó contra la transcripción completa de las siete sesiones impartidas, para que nada de lo explicado en clase quede fuera.

| Archivo | Qué cubre |
|---|---|
| `00_Indice_de_las_fichas.md` | Cómo está organizado el material y dónde encontrar cada tema. |
| `Ficha_0_Los_controles_y_los_ajustes.md` | Lo que se configura antes de trabajar: modelo, esfuerzo, permisos, dónde se ejecuta, capacidad de la conversación, y los ajustes de la cuenta. |
| `Ficha_1_Los_seis_componentes.md` | Chat, Design, Cowork, Office, Chrome y Claude Code. |
| `Ficha_2_Fuentes_que_proporciona_el_usuario.md` | Archivos adjuntos, mención con @, carpeta o repositorio, documento abierto, pestaña del navegador. |
| `Ficha_3_Fuentes_que_Claude_obtiene_por_su_cuenta.md` | Búsqueda web, Research y conectores. |
| `Ficha_4_Configuracion_que_escribe_el_usuario.md` | Proyecto del chat, proyecto de Cowork, `CLAUDE.md`, instrucciones del complemento, sistema de diseño. |
| `Ficha_5_La_memoria.md` | La memoria, sus tres interruptores, y la diferencia entre iterar y entrenar. |
| `Ficha_6_Procedimientos_ejecutables.md` | Skill, subagente y tarea programada. |
| `Ficha_7_Salidas_que_solo_abre_quien_las_produjo.md` | Respuesta en pantalla, archivo en carpeta, edición del documento abierto, exportación, artifact local. |
| `Ficha_8_Salidas_que_puede_abrir_otra_persona.md` | Artifact publicado, repositorio, página publicada, escritura en un sistema conectado, acción en el navegador. |

---

## Estructura de cada ficha

Todas las fichas siguen la misma estructura para cada elemento, de modo que se puedan comparar entre sí:

- **Qué es** — la definición, en lenguaje llano.
- **Cuándo se usa** — las situaciones concretas que lo piden.
- **Dónde funciona** — en qué componentes sirve, y con qué condiciones.
- **Cómo se pide** — los prompts, escritos completos y explicados línea por línea.
- **Cómo se verifica** — la comprobación concreta de que funcionó.
- **Lo que no hace** — el límite documentado.
- **Plan** — si es gratuito o de pago.

---

## Sobre la exactitud del material

Las tablas de "dónde funciona" se verificaron una por una contra la documentación oficial de Anthropic. Las combinaciones que la documentación **no cubre** aparecen marcadas como *no documentado* en lugar de darse por buenas. Esa marca significa que no hay fuente que respalde la afirmación, no que la función no exista.

El contenido se cruzó además con las transcripciones de las siete sesiones del curso, de modo que cada capacidad explicada en clase, cada límite advertido y cada duda planteada por los participantes tenga su lugar en alguna ficha.

---

## El cuadernillo en web

**https://edreirbs.github.io/claude-for-business/**

Las mismas fichas, publicadas como GitHub Page: un cuadernillo que se hojea, con paso de página animado, buscador sobre las nueve fichas y botón para copiar cada prompt. Pide la contraseña del curso al abrirse.

Abre en la **Matriz de componentes y elementos de Claude**: los veinticuatro elementos cruzados con los seis componentes. Cada barra dice hasta dónde llega una pieza, y cada punto abre —al pasar el mouse, al tocarlo o con el teclado— qué hace exactamente esa pieza en ese componente, con su salvedad cuando la tiene.

El sitio publica las Fichas 0 a 8. `00_Indice_de_las_fichas.md` se queda en el repositorio pero fuera de la web: explica cómo está organizado el material, y esa explicación no se quiso ahí. Para reponerlo basta con volver a listarlo en `FILES`, en `assets/app.js`.

| Archivo | Qué hace |
|---|---|
| `index.html` | La página. Portada con contraseña y el armazón del cuadernillo. |
| `assets/styles.css` | Todo el diseño: paleta de la UP, hoja, animaciones, modo claro y oscuro, tablas apiladas en móvil e impresión. |
| `assets/app.js` | Lee los `.md` de `Repaso/`, los convierte a HTML y maneja navegación, índice, buscador y candado. |
| `assets/matriz.json` | Los datos de la matriz de inicio: columnas, renglones y qué hace cada pieza en cada componente. |
| `assets/figuras.json` | Qué figura se muestra en qué hoja. Va fuera de `Repaso/` a propósito. |
| `assets/img/` | Las imágenes. Su `LEEME.md` explica cómo se agrega una. |
| `.nojekyll` | Le pide a GitHub Pages que sirva los archivos tal cual, sin procesarlos con Jekyll. |

Sin dependencias, sin paso de compilación y sin marco de trabajo: una página, su hoja de estilo, su archivo de comportamiento, dos manifiestos de datos y las fuentes de Google. Las fichas siguen siendo los `.md` de `Repaso/` — son la única fuente de la verdad, y la web se actualiza sola cuando cambian.

### Cómo se publica

Hay un paso que se hace una sola vez y que solo puede dar quien administra el repositorio, porque encender Pages requiere permisos de administrador:

**Settings → Pages → Source → Deploy from a branch**, rama `main`, carpeta `/ (root)`, y *Save*.

En un par de minutos GitHub entrega la liga, y de ahí en adelante cada push a `main` republica el sitio solo. Editar una ficha de `Repaso/` y hacer push basta para actualizarlo: no hay compilación de por medio.

No hay flujo de GitHub Actions a propósito. Se probó uno con `actions/configure-pages` y `enablement: true`, pero el `GITHUB_TOKEN` de Actions puede desplegar a un sitio de Pages ya existente y no puede crearlo (`Resource not accessible by integration`), así que el paso manual es inevitable de todos modos y un flujo solo agregaría algo que se puede poner en rojo.

### Cómo se ve en local

Necesita un servidor, porque el cuadernillo lee los `.md` con `fetch`; abrir `index.html` con doble clic no funciona.

```
python3 -m http.server 8000
```

Y abrir `http://localhost:8000`.

### La contraseña

El cuadernillo pide una contraseña antes de abrirse. En el código no está la contraseña sino su huella SHA-256, y la comprobación ocurre en el navegador de quien entra.

Eso conviene tenerlo claro: **es una cortesía, no una cerradura**. Sirve para que el material no quede a la vista de cualquiera que llegue a la liga, pero los `.md` de `Repaso/` siguen siendo públicos en el repositorio, igual que el resto del código. Para material que de verdad no pueda salir, hace falta un repositorio privado o un servidor que autentique.

Para cambiar la contraseña, calcular la huella nueva y sustituir `PASS_HASH` en `assets/app.js`:

```
printf 'la-nueva-contrasena' | sha256sum
```

### Cómo se agrega o quita una ficha

Editar el arreglo `FILES` al principio de `assets/app.js`. Todo lo demás —el título, el número, el índice, el corte en hojas— sale del propio Markdown, así que no hay nada más que tocar.

### Cómo se corta el material en hojas

La matriz es la hoja de inicio. Después, cada ficha se abre en una portadilla más una hoja por elemento, para que una vuelta de página quepa en dos o tres pantallas en vez de pedir diez de scroll. Son 66 hojas en total.

El corte se hace en los encabezados `##`. Un `#` posterior al título es un **divisor de parte**: la Ficha 0 se divide así en «Parte 1 · Los controles de cada conversación» y «Parte 2 · Los ajustes de tu cuenta». El divisor agrupa los elementos que lo siguen —en la portadilla y en el índice lateral— y no se pinta como un título suelto.

Todo el corte respeta los bloques de código: la Ficha 4 trae un `CLAUDE.md` de ejemplo cuyas líneas empiezan con `#` y `##` y no son encabezados. Sin esa salvedad, «Reglas de esta carpeta» y «Vocabulario» se volverían hojas del cuadernillo.

Una ficha sin campos `###` se queda entera en una sola hoja.

Dentro de cada hoja, los campos (`### Qué es`, `### Cuándo se usa`…) se acomodan en tarjetas de dos columnas. Las que llevan tabla o prompt ocupan el ancho completo, porque lo necesitan.

### Lo visual de las fichas

Tres cosas, y ninguna se escribe a mano:

- **La franja de alcance**, bajo el título de cada elemento. Se lee de la tabla
  «Dónde funciona» que ese mismo elemento ya trae, así que no puede contradecir
  al texto de abajo. Muestra **solo** los componentes que la tabla nombra: varias
  tablas listan únicamente donde el elemento sí funciona, y la franja no inventa
  un «no» donde la ficha calla.
- **El tablero de la ficha**, en su portadilla: sus elementos contra los seis
  componentes, con las mismas marcas. Un elemento cuya ficha describe el alcance
  en prosa —«en los seis componentes»— no tiene renglón, porque no hay tabla de
  dónde leerlo.
- **Las figuras**, declaradas en `assets/figuras.json`: unas son archivos de
  `assets/img/` y otra, la gráfica de alcance de la Ficha 1, la dibuja el sitio
  contando sobre `matriz.json` en el momento de pintarla. Esa última es la única
  figura que sigue el interruptor de tema, porque es un SVG de la página y no
  una imagen.

### Por qué las figuras no van dentro del Markdown

`sync.sh` espeja la carpeta del curso sobre `Repaso/` con `rsync --delete`:
cualquier `![imagen]()` escrito en un `.md` de este repositorio se pierde en la
siguiente sincronización. Por eso el manifiesto vive en `assets/`, fuera de esa
carpeta.

El Markdown también acepta imágenes, para quien prefiera escribirlas en su
propia copia de las fichas, que sí sobrevive porque es el origen del espejo. En
ese caso la ruta empieza en `Repaso/`, que es la única carpeta que el espejo
copia: un `.png` guardado junto al `.md` llega a `Repaso/` y no a `assets/img/`.

### Las capturas del producto

Veinte capturas repartidas en las hojas de los elementos: los controles de la
Ficha 0 —modelo, esfuerzo, permisos, ventana de contexto, instrucciones de
perfil, privacidad, instalación—, cuatro de los seis componentes, las tres
fuentes que da el usuario, el directorio de conectores, el proyecto del chat y
las instrucciones del complemento, los tres interruptores de la memoria, la
lista de skills y una edición con control de cambios.

Están tomadas sobre material inventado para el curso —un proyecto «Demo del
curso», un `ejemplo-curso.txt`, un documento de prueba— porque el repositorio es
público. No se pueden generar desde el entorno donde se construye el sitio:
`claude.ai` responde 403 y no hay navegador con sesión iniciada, así que para
agregar una más hay que tomarla a mano y dejarla en `assets/img/`.

Cada figura se abre en grande al hacer clic —la marca «Ampliar» lo dice, porque
en una pantalla táctil no hay cursor que lo anuncie— y se cierra con Escape.

### La matriz de inicio

Se dibuja desde `assets/matriz.json`, no como un SVG escrito a mano: agregar un renglón o cambiar una descripción es editar el JSON, sin recalcular coordenadas. La retícula sale sola —105 px entre columnas, 34 px entre renglones— y los tramos de barra se calculan buscando columnas contiguas donde el elemento existe.

El texto de cada globo viaja en atributos `data-` del propio punto, no en un arreglo paralelo: así no hay índices que se puedan desalinear al editar.

Los colores son los mismos de la UP que usa el resto del sitio: azul de Preparatoria para los inputs, vino de Licenciatura para las configuraciones, verde de Posgrados para los outputs, y el dorado institucional para el punto encendido.

### Cómo se hojea

Con las flechas de abajo, con `←` y `→`, o deslizando el dedo. `/` abre el buscador, `Inicio` y `Fin` van a la primera y la última hoja.

El índice de la izquierda lista las nueve fichas y despliega los elementos de la que esté abierta, con sus divisores de parte cuando los hay. El paginador dice en qué ficha se está y en cuál de sus hojas.

Cada hoja tiene su propia liga para mandarla directa: `#matriz` es la de inicio, `#ficha-3` la portadilla de la Ficha 3 y `#ficha-3-conectores` su elemento «Conectores».

### Cómo se publica una actualización

`./sync.sh "mensaje"` espeja la carpeta `Repaso` del curso en el repositorio y sube los cambios. GitHub Pages republica el sitio solo; no hay compilación de por medio.

---

## Licencia de uso

Material didáctico de uso interno del curso.
