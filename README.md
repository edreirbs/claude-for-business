# Claude for Business

Material del curso **Claude for Business**, impartido en la Universidad Panamericana Aguascalientes.

Ocho sesiones de 150 minutos para participantes no técnicos, sobre el uso de Claude en trabajo profesional real.

---

## Contenido de este repositorio

### `Repaso/`

Nueve fichas de repaso que describen el ecosistema completo de Claude: seis **componentes** —los lugares donde se puede trabajar— y veinticuatro **elementos** —las piezas con las que se trabaja, agrupadas en inputs, configuraciones y outputs.

| Archivo | Qué cubre |
|---|---|
| `00_Indice_de_las_fichas.md` | Cómo está organizado el material y dónde encontrar cada elemento. |
| `Ficha_1_Los_seis_componentes.md` | Chat, Design, Cowork, Office, Chrome y Claude Code. |
| `Ficha_2_Fuentes_que_proporciona_el_usuario.md` | Archivos adjuntos, carpeta o repositorio, documento abierto, pestaña del navegador. |
| `Ficha_3_Fuentes_que_Claude_obtiene_por_su_cuenta.md` | Búsqueda web, Research y conectores. |
| `Ficha_4_Configuracion_que_escribe_el_usuario.md` | Proyecto del chat, proyecto de Cowork, `CLAUDE.md`, instrucciones del complemento, sistema de diseño. |
| `Ficha_5_La_memoria.md` | El único elemento que Claude escribe por su cuenta. |
| `Ficha_6_Procedimientos_ejecutables.md` | Skill y subagente. |
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

---

## El cuadernillo en web

Las mismas fichas, publicadas como GitHub Page: un cuadernillo que se hojea, con paso de página animado, buscador sobre las nueve fichas y botón para copiar cada prompt.

| Archivo | Qué hace |
|---|---|
| `index.html` | La página. Portada con contraseña y el armazón del cuadernillo. |
| `assets/styles.css` | Todo el diseño: paleta de la UP, hoja, animaciones, modo claro y oscuro, tablas apiladas en móvil e impresión. |
| `assets/app.js` | Lee los `.md` de `Repaso/`, los convierte a HTML y maneja navegación, índice, buscador y candado. |
| `.nojekyll` | Le pide a GitHub Pages que sirva los archivos tal cual, sin procesarlos con Jekyll. |
| `.github/workflows/pages.yml` | Publica el sitio en cada push a `main`. |

Sin dependencias, sin paso de compilación y sin marco de trabajo: tres archivos y las fuentes de Google. Las fichas siguen siendo los `.md` de `Repaso/` — son la única fuente de la verdad, y la web se actualiza sola cuando cambian.

### Cómo se publica

Solo. Cada push a `main` dispara el flujo de `.github/workflows/pages.yml`, que sube el repositorio tal cual a GitHub Pages. La primera corrida además enciende Pages por su cuenta, así que no hay que configurar nada en *Settings*.

Editar una ficha de `Repaso/` y hacer push basta para actualizar el sitio.

La liga aparece en **Settings → Pages** y también al final del flujo, en la pestaña *Actions*.

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

Editar el arreglo `FILES` al principio de `assets/app.js`. El título, el número, el resumen de la portada y las entradas del índice se leen del propio Markdown, así que no hay nada más que tocar.

### Cómo se hojea

Con las flechas de abajo, con `←` y `→`, o deslizando el dedo. `/` abre el buscador, `Inicio` y `Fin` van a la primera y la última página, y cada ficha tiene su propia liga (`#ficha-3`) para mandarla directa.

---

## Licencia de uso

Material didáctico de uso interno del curso.
