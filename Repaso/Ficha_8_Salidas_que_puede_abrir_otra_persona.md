# Ficha 8 · Salidas que puede abrir otra persona o un sistema

**Repaso · Claude for Business** — Universidad Panamericana Aguascalientes

> **Para qué sirve esta ficha.** Las salidas de la Ficha 7 se quedan contigo. Éstas salen: llevan una liga que otra persona abre desde su teléfono sin instalar nada, o escriben directamente en un sistema. Es la ficha con más consecuencias, porque una vez que algo salió, salió. Conviene decidir desde el principio si el trabajo termina aquí o en la Ficha 7, ya que cambiar de opinión al final casi siempre significa rehacerlo.

**Los cinco elementos de esta ficha:** artifact publicado · repositorio · página publicada · escritura en un sistema conectado · acción en el navegador.

---

## ARTIFACT PUBLICADO

### Qué es

El mismo artifact de la Ficha 7 —una pieza aparte de la conversación, con versiones— pero publicado: recibe una liga propia y quien la tenga puede abrirlo, sin cuenta de Claude y sin instalar nada.

La diferencia con el artifact local no está en cómo se construye, sino en dónde nace y qué se hace con él al final.

### Cuándo se usa

Cuando el resultado lo tiene que ver alguien más y no quieres mandarle un archivo adjunto.

- Un instructivo de una página que va a circular en tu área.
- Un formulario o una calculadora que la gente va a usar desde su teléfono.
- Un tablero que necesitas que dos o tres personas consulten sin pedirte el archivo cada vez.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | |
| Design | Sí | Desde el menú de exportación, con la opción de publicar como artifact. |
| Cowork | Sí | |
| Claude Code | Sí, con condición | Depende del plan, y en Enterprise de que un administrador los habilite. Las dos páginas oficiales no coinciden en la lista de planes. |

### Cómo se pide

Antes del prompt hay una decisión: **dónde nace el artifact.**

Un artifact creado dentro de un Project solo lo puede abrir quien tenga acceso a ese Project, y en los planes personales nadie más lo tiene. Si el resultado es para alguien de fuera, la conversación tiene que ser una conversación normal, fuera de todo Project.

```
Ármame esto como un artifact que voy a compartir por liga con gente
que no tiene cuenta de Claude. Que se vea bien en teléfono.
Cuando esté listo, dime qué información quedó adentro, porque no
quiero publicar nada que no deba salir.
```

Por qué está escrito así: la última línea es una revisión de contenido antes de publicar. Publicar es fácil de deshacer mal y difícil de deshacer bien.

### Cómo se verifica

Abre la liga en una ventana privada del navegador, o pídele a alguien que la abra desde su teléfono. Si te pide iniciar sesión, no está publicado como creías.

### Lo que no hace, y los puntos de cuidado

**Despublicar es irreversible.** Un artifact despublicado ya no se puede volver a publicar y se borra su almacenamiento.

**Compartir un artifact da acceso también a los adjuntos de la conversación que lo creó.** Si en esa conversación subiste un archivo con información sensible, ese archivo queda alcanzable. Por eso conviene que los artifacts que se van a compartir nazcan en conversaciones limpias.

**Iterar no borra.** Cada corrección crea una versión nueva y se puede regresar a la anterior.

### Plan

De pago para publicar. En Enterprise puede requerir que un administrador lo habilite.

---

## REPOSITORIO

### Qué es

Una carpeta con historial que se copia completa a otra computadora, con todo y sus archivos, sus reglas y sus subagentes.

Es la salida más completa de todas: no entrega un resultado, entrega el trabajo entero en condiciones de seguir funcionando en otra parte.

### Cuándo se usa

Cuando otra persona tiene que poder retomar el trabajo, no solo verlo.

- Le pasas a un compañero la herramienta que arma el reporte mensual, para que él la corra el mes que viene.
- Entregas un proyecto que alguien más va a mantener después de ti.
- Quieres que el mismo trabajo se pueda abrir desde otra computadora y funcione igual.

### Dónde funciona

| Componente | Funciona |
|---|---|
| Claude Code | Sí |

### Cómo se pide

Un repositorio que se entrega necesita explicarse solo, porque quien lo abra no vas a ser tú.

```
Antes de entregar este repositorio, escribe un README que responda,
en este orden: qué hace esto, qué necesita instalado para funcionar,
cómo se corre paso a paso, y qué hacer cuando falle lo más probable
que falle.
Escríbelo para alguien que nunca ha visto este proyecto y que no
me puede preguntar nada.
```

Por qué está escrito así: la última frase es la que cambia el resultado. Un README escrito suponiendo que el lector puede preguntar sale incompleto, y el hueco solo se descubre cuando ya es tarde.

### Cómo se verifica

Que alguien más lo abra y llegue al final sin preguntarte nada. Si tiene que preguntar, la respuesta se agrega al README.

### Lo que no hace

No lleva tus Skills adentro. Los Skills son de tu cuenta y te siguen a ti. Los subagentes sí viajan, porque viven en la carpeta `.claude/agents/` del repositorio.

### Plan

De pago.

---

## PÁGINA PUBLICADA

### Qué es

Una página en internet con su propia dirección, que cualquiera abre desde cualquier dispositivo. Es la salida más pública de todas.

### Cuándo se usa

Cuando el resultado tiene que estar disponible para gente que no forma parte de tu equipo, o disponible en cualquier momento sin que tú intervengas.

- Un formulario de registro que va a circular por WhatsApp.
- Una consulta pública de un dato que tu área mantiene.
- Un directorio o una guía que la gente busca por su cuenta.

### Dónde funciona

| Componente | Funciona |
|---|---|
| Claude Code | Sí |

### Cómo se pide

```
Antes de publicar, revísame tres cosas: que no haya quedado texto de
ejemplo sin reemplazar, que ninguna liga apunte a un lugar de prueba,
y que no haya quedado ningún dato real de nadie dentro del código.
Enséñame la lista de lo que encontraste antes de subirlo.
```

Por qué está escrito así: los tres errores que más se publican por accidente son texto de relleno, ligas de prueba y datos de prueba que resultaron ser datos reales. Revisarlos antes cuesta un minuto; después cuesta una disculpa.

### Cómo se verifica

Abre la dirección desde un teléfono con datos móviles, no desde tu computadora ni desde tu red. Es la única prueba de que está realmente publicada.

### Lo que no hace

Publicar no es privado. Una página publicada la puede encontrar cualquiera que tenga la dirección, y no hay control de quién la abre a menos que se le agregue uno explícitamente.

### Plan

De pago.

---

## ESCRITURA EN UN SISTEMA CONECTADO

### Qué es

Claude escribiendo directamente en otro sistema a través de un conector: crear un registro, actualizar filas de una base de datos, dejar un borrador de correo, marcar una tarea.

La salida no es un archivo ni una liga: es un cambio dentro de un sistema que otras personas usan.

### Cuándo se usa

Cuando el trabajo consiste precisamente en que algo quede registrado donde el equipo lo consulta.

- Cargar los resultados de una revisión a la herramienta de proyectos del área.
- Insertar filas en una base de datos que alimenta un tablero.
- Dejar preparados los borradores de respuesta a veinte correos.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | |
| Design | Sí | Documentado únicamente en el blog de Anthropic de julio de 2026. |
| Cowork | Sí | |
| Office | Sí | |
| Chrome | Sí | |
| Claude Code | Sí | |

### Cómo se pide

```
Antes de escribir nada en [el sistema], enséñame exactamente qué vas
a crear o modificar: qué registro, qué campos y con qué valores.
Espera mi confirmación.
Después de hacerlo, dime qué quedó escrito y dónde.
```

Por qué está escrito así: con un conector puesto, un cambio en el sistema conectado puede ejecutarse sin pedir confirmación. Lo único que lo detiene es una regla escrita, y esta plantilla es esa regla dicha en el momento. Para que aplique siempre, se escribe en el `CLAUDE.md` o en las instrucciones del Project, como se explica en la Ficha 4.

### Cómo se verifica

Entra al sistema por tu cuenta, no por Claude, y confirma que el registro está donde debía estar y con los valores correctos.

### Lo que no hace

No se puede deshacer solo. Un registro creado por error se borra a mano, en el sistema, por ti.

### Plan

De pago. En Team y Enterprise, un Owner debe habilitar los conectores.

---

## ACCIÓN EN EL NAVEGADOR

### Qué es

Claude operando una página web: hacer clic, escribir en campos, llenar formularios, descargar archivos. La salida es un cambio en un sitio, hecho con tu sesión iniciada.

### Cuándo se usa

Cuando el sistema no tiene otra manera de entrar: no exporta, no tiene conector y la única vía es la pantalla.

- Capturar veinte registros en un sistema interno que no acepta carga masiva.
- Descargar uno por uno los comprobantes de un portal.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Cowork | Sí | |
| Chrome | Sí, con condición | Claude ve todas las pestañas que arrastres a su grupo de pestañas, no solo la que tienes al frente. |
| Claude Code | Sí | |

### Cómo se pide

```
En la página que tengo abierta, llena el formulario con los datos que
te voy a dar. Antes de dar clic en enviar, enséñame cómo quedó
llenado el formulario completo y espera mi confirmación.
```

Por qué está escrito así: el clic de enviar es irreversible en la mayoría de los sistemas. Poner una confirmación humana justo antes es la diferencia entre un error corregible y uno que ya quedó registrado.

### Cómo se verifica

Recarga la página tú mismo y confirma que el registro quedó como esperabas.

### Lo que no hace

Los permisos se dan sitio por sitio. Trae bloqueadas de fábrica banca en línea, plataformas de inversión y casas de cambio de criptomonedas. Como regla de trabajo, conviene no autorizarlo en nómina, expedientes de personal ni portales con datos de terceros.

### Plan

De pago.

---

## Resumen de la ficha

| Elemento | Qué recibe la otra parte | Se puede deshacer |
|---|---|---|
| Artifact publicado | una liga | despublicar es irreversible |
| Repositorio | el trabajo completo, funcionando | sí, es una copia |
| Página publicada | una dirección de internet | se puede bajar, pero ya se vio |
| Escritura en un sistema conectado | un registro dentro de su sistema | a mano, por ti |
| Acción en el navegador | un cambio hecho en un sitio | según el sitio, muchas veces no |

Las cinco comparten una característica que las de la Ficha 7 no tienen: **el resultado sale de tu control en el momento en que ocurre.**

Por eso las cinco plantillas de esta ficha incluyen una revisión antes del paso irreversible. No es exceso de cuidado: es el único momento en que todavía se puede corregir.
