# Fichas de repaso · Índice

**Claude for Business** — Universidad Panamericana Aguascalientes

---

## Cómo está organizado este material

El ecosistema de Claude se puede describir con dos listas.

La primera son los **componentes**: los seis lugares distintos donde se puede trabajar. Chat, Design, Cowork, Office, Chrome y Claude Code.

La segunda son los **elementos**: las veinticuatro piezas con las que se trabaja, agrupadas en tres familias. Los **inputs** son de dónde Claude toma la información. Las **configuraciones** son lo que conserva entre una sesión y otra. Los **outputs** son dónde queda el resultado.

Los dos se cruzan: no todos los elementos funcionan en todos los componentes. Ese cruce es el origen de casi todos los atorones, y es lo que estas ocho fichas explican.

**La Ficha 1 cubre los componentes. Las Fichas 2 a 8 cubren los elementos.**

---

## Las ocho fichas

| | Ficha | Qué cubre |
|---|---|---|
| **1** | Los seis componentes | Dónde se está trabajando. Todas las demás se leen contra ésta. |
| **2** | Fuentes que proporciona el usuario | Las cuatro maneras de ponerle material enfrente. |
| **3** | Fuentes que Claude obtiene por su cuenta | Lo que va a buscar solo, a internet o a otro sistema. |
| **4** | Configuración que escribe el usuario | Los cinco lugares donde el contexto se escribe una vez y queda puesto. |
| **5** | La memoria | El único elemento que Claude escribe por su cuenta. |
| **6** | Procedimientos ejecutables | Los dos elementos que hacen algo: Skill y subagente. |
| **7** | Salidas que solo abre quien las produjo | Lo que se queda contigo. |
| **8** | Salidas que puede abrir otra persona o un sistema | Lo que sale de tu control. |

---

## Por qué los cortes están donde están

Las Fichas 2 y 3 separan las fuentes **según quién las aporta**: tú se las das, o él las va a buscar. Cambia la verificación: lo que tú le diste ya lo viste; lo que trajo solo, no.

Las Fichas 4 y 5 separan la configuración **según quién la escribe**. Es la distinción entre un `CLAUDE.md` y la memoria, y es la que más tiempo cuesta cuando no está clara.

Las Fichas 7 y 8 separan las salidas **según quién puede llegar a ellas**. Es la decisión que hay que tomar antes de empezar, porque cambiarla al final significa rehacer el trabajo.

La Ficha 6 queda aparte porque Skill y subagente son los dos únicos elementos que ejecutan una acción. Los demás son fuentes, reglas o resultados.

---

## Dónde encontrar cada elemento

| Elemento | Familia | Ficha |
|---|---|---|
| Archivos adjuntos | input | 2 |
| Carpeta o repositorio | input | 2 |
| Documento abierto | input | 2 |
| Pestaña del navegador | input | 2 |
| Búsqueda en la web y Research | input | 3 |
| Conector | input | 3 |
| Conocimiento del Proyecto | input | 4, dentro de Proyecto del chat |
| Proyecto del chat | configuración | 4 |
| Proyecto de Cowork | configuración | 4 |
| CLAUDE.md | configuración | 4 |
| Instrucciones del complemento | configuración | 4 |
| Sistema de diseño | configuración | 4 |
| Memoria | configuración | 5 |
| Skill | configuración | 6 |
| Subagente | configuración | 6 |
| Respuesta en pantalla | output | 7 |
| Archivo en tu carpeta | output | 7 |
| Edición del documento abierto | output | 7 |
| Exportación | output | 7 |
| Artifact local | output | 7 |
| Artifact publicado | output | 8 |
| Repositorio | output | 8 |
| Página publicada | output | 8 |
| Escritura en un sistema conectado | output | 8 |
| Acción en el navegador | output | 8 |

El Artifact aparece en dos fichas porque hay dos clases distintas: el que vive solo en tu escritorio y únicamente se descarga, y el que se publica y recibe una liga que otra persona abre.

---

## Estructura de cada ficha

Las ocho siguen la misma estructura para cada elemento, de modo que se puedan comparar entre sí.

| Campo | Qué contiene |
|---|---|
| **Qué es** | La definición, en lenguaje llano. |
| **Cuándo se usa** | Las situaciones concretas que lo piden. |
| **Dónde funciona** | En qué componentes sirve, y con qué condiciones. |
| **Cómo se pide** | Los prompts, escritos completos y explicados línea por línea. |
| **Cómo se verifica** | La comprobación concreta de que funcionó. |
| **Lo que no hace** | El límite documentado, para no prometer de más. |
| **Plan** | Si es gratuito o de pago. |

---

## Una advertencia sobre lo que no está documentado

Algunas combinaciones de elemento y componente **no aparecen en la documentación oficial de Anthropic**. En esas fichas aparecen marcadas como "no documentado".

Eso no quiere decir que no funcionen. Quiere decir que no hay fuente que lo respalde, y por lo tanto no conviene enseñarlo ni asumirlo como un hecho. Los casos principales: la memoria en Design, en Chrome, en los complementos de Office y en Claude Code; los Projects del chat en esas mismas superficies; y en el panel de Chrome, la búsqueda web y los archivos adjuntos.

Cuando algo aquí dice "sí" pero lleva una condición, la condición está escrita completa en la ficha correspondiente.
