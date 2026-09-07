# Ficha 4 · Configuración que escribe el usuario

**Repaso · Claude for Business** — Universidad Panamericana Aguascalientes

> **Para qué sirve esta ficha.** Todo lo que explicas al empezar una conversación —quién eres, a qué se dedica tu área, cómo se llaman las cosas ahí, qué formato usan, qué nunca hay que hacer— se pierde cuando cierras esa conversación. Los cinco elementos de esta ficha son los cinco lugares donde ese contexto se escribe una sola vez y queda puesto. Son cinco y no uno porque cada componente guarda el contexto en un lugar distinto, y ahí está la confusión que más tiempo cuesta: escribir las reglas en el lugar equivocado se siente exactamente igual que escribirlas bien, hasta que no funcionan.

**Los cinco elementos de esta ficha:** Proyecto del chat · Proyecto de Cowork · CLAUDE.md · instrucciones del complemento · sistema de diseño.

---

## Cómo se relacionan los cinco

Antes de verlos uno por uno, conviene entender el patrón. Los cinco hacen lo mismo —guardar contexto para no repetirlo— pero se diferencian en dos cosas:

**Dónde vive el contexto.** En la conversación, en tu computadora, o dentro del archivo de una carpeta.

**Qué tan lejos viaja.** Un Proyecto del chat vive en tu cuenta y lo ves desde cualquier dispositivo. Un `CLAUDE.md` vive dentro de la carpeta, así que viaja con ella: si le mandas la carpeta a un compañero, se lleva las reglas puestas.

| Elemento | Dónde vive | Viaja a otra persona |
|---|---|---|
| Proyecto del chat | en tu cuenta | solo en Team y Enterprise |
| Proyecto de Cowork | en tu computadora | no |
| `CLAUDE.md` | dentro de la carpeta | sí, con la carpeta |
| Instrucciones del complemento | en ese dispositivo, por aplicación | no |
| Sistema de diseño | en tu cuenta de Design | dentro de la organización |

---

## PROYECTO DEL CHAT

### Qué es

Un Project es un contenedor de conversaciones que comparten dos cosas: unas **instrucciones** que se aplican a todas, y un **conocimiento**, que son archivos cargados de una vez y disponibles en cualquier conversación de ese Project.

La diferencia con subir un archivo suelto es esa segunda parte. Un archivo adjunto vive en una conversación; un archivo del conocimiento está en todas las conversaciones del Project, siempre, sin volverlo a subir.

**Sobre el conocimiento del Proyecto.** En el cuadro del ecosistema, el *conocimiento del Proyecto* aparece como un input, es decir, como una fuente de información, y se explica aquí porque no existe fuera de un Project. Son los archivos que cargaste una vez a ese contenedor: manuales, políticas, glosarios, plantillas, informes de referencia. Claude los tiene disponibles en toda conversación de ese Project sin que tú los vuelvas a adjuntar, y los puede citar igual que cita un archivo recién subido.

### Cuándo se usa

Cuando hay un cuerpo de contexto que vas a necesitar muchas veces.

- Un Project de tu área, con el organigrama, el glosario interno, la política vigente y las plantillas que usan. Cada vez que empiezas algo de trabajo, empiezas dentro de ese Project y ya no explicas nada.
- Un Project por cliente o por materia, con sus documentos base.
- Un Project para un proceso repetido, con las instrucciones de cómo se hace y el ejemplo del resultado bien hecho.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | |
| Cowork | Sí | Un proyecto de Cowork puede enlazar un Project del chat para aprovechar su conocimiento. |
| Design, Office, Chrome | No documentado | Design tiene sus propios "projects", que son otra cosa. |
| Claude Code | No | |

### Cómo se pide

Las instrucciones del Project no son un prompt: son un texto fijo que se escribe una vez en la configuración. Conviene que respondan cinco preguntas.

```
QUIÉN SOY
Trabajo en [área] de [tipo de organización]. Mi trabajo consiste en
[dos líneas].

PARA QUIÉN ESCRIBO
Mis textos los leen [quién], que saben [qué] y no saben [qué].

CÓMO SE LLAMAN LAS COSAS AQUÍ
[Término interno] quiere decir [qué]. No lo confundas con [otra cosa].

QUÉ FORMATO ESPERO
Los informes van con [estructura]. Las cifras siempre llevan su fuente
y su fecha de corte.

QUÉ NUNCA
Nunca inventes una cifra que no esté en los archivos del conocimiento.
Si un dato no está, escribe "no disponible" y sigue.
```

Por qué está escrito así: los tres primeros bloques evitan que tengas que explicar tu contexto en cada conversación. El cuarto ahorra la corrección de formato que si no harías cada vez. El quinto es el único que protege contra un error grave, y por eso conviene escribirlo aunque parezca obvio.

Para usar un archivo del conocimiento dentro de una conversación:

```
Usando el documento de política que está en el conocimiento de este
Project, dime si el caso que te voy a describir cumple o no, y cita
el numeral exacto en el que te basas.
```

### Cómo se verifica

Abre una conversación nueva dentro del Project y pregunta algo que solo se pueda responder con el conocimiento cargado. Si contesta bien sin que tú le hayas dado el archivo, el Project está funcionando.

### Lo que no hace

No llega a tu disco. El conocimiento son copias que subiste, no tus carpetas.

Un artifact creado dentro de un Project solo lo puede abrir quien tenga acceso a ese Project. Si el resultado lo va a ver alguien de fuera, conviene producirlo en una conversación normal. Esto se explica con más detalle en la Ficha 8.

### Plan

El Project como contenedor es gratuito, con un máximo de cinco en el plan gratuito. El conocimiento cargado y la @mención de archivos son de pago.

---

## PROYECTO DE COWORK

### Qué es

El equivalente de un Project, pero para trabajo sobre carpetas. Guarda cuatro cosas: qué carpetas están conectadas, unas instrucciones fijas, unas ligas de referencia y una memoria propia.

No es lo mismo que un Project del chat, aunque se llamen igual. Éste vive en tu computadora.

### Cuándo se usa

Cuando vuelves periódicamente sobre las mismas carpetas.

- El cierre mensual: siempre las mismas dos carpetas, las mismas reglas de nombrado, el mismo formato de salida.
- Un expediente largo que se trabaja durante meses.

### Dónde funciona

| Componente | Funciona |
|---|---|
| Cowork | Sí |

En ningún otro.

### Cómo se pide

En las instrucciones del proyecto de Cowork conviene ser más operativo que en las del chat, porque aquí se manipulan archivos reales.

```
Los archivos originales de esta carpeta nunca se modifican ni se
borran. Todo lo que produzcas va a la subcarpeta Salidas, con el
nombre en el formato AAAA-MM-DD_descripcion.

Antes de cualquier operación que toque más de tres archivos, dime
qué vas a hacer y espera mi confirmación.

Las cifras de este proyecto salen únicamente de los archivos de la
carpeta. Si algo no está, se anota como faltante.
```

Por qué está escrito así: las tres reglas atacan los tres accidentes típicos al trabajar sobre carpetas reales: sobrescribir un original, dejar salidas regadas sin poderlas encontrar después, y completar huecos con supuestos.

### Cómo se verifica

Empieza una sesión nueva en ese proyecto y pídele que te diga con qué reglas está trabajando. Si las repite, están cargadas.

### Lo que no hace

Los proyectos de Cowork no se comparten con nadie, en ningún plan. Lo que sí se comparte es el archivo de reglas, porque es un archivo.

Un proyecto atado a una carpeta local solo admite sesiones de escritorio.

### Plan

De pago.

---

## CLAUDE.MD

### Qué es

Un archivo de texto que se llama exactamente `CLAUDE.md`, escrito en mayúsculas, y que se coloca en la raíz de una carpeta, es decir, en el primer nivel, no dentro de una subcarpeta.

Su gracia es que **se lee solo**. No hay que mencionarlo ni abrirlo: cuando Claude empieza a trabajar en esa carpeta, lo lee. Y como es un archivo dentro de la carpeta, viaja con ella: si copias la carpeta a otra computadora o se la mandas a un compañero, las reglas van adentro.

La extensión `.md` quiere decir Markdown, que es texto plano con marcas sencillas de formato. Se abre y se edita con cualquier editor de texto.

### Cuándo se usa

Cuando las reglas pertenecen al trabajo y no a ti.

- Un proyecto en el que van a entrar tres personas distintas y todas tienen que aplicar el mismo criterio.
- Una carpeta con datos delicados donde hay reglas que no se pueden olvidar.
- Cualquier trabajo que se vaya a retomar dentro de tres meses, cuando ya no recuerdes qué habías decidido.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Cowork | Sí | Conviene nombrarlo en el encargo la primera vez, en lugar de dar por hecho que se cargó solo. |
| Claude Code | Sí | Se lee automáticamente. |

En el chat, en Design, en Office y en Chrome no hace nada, porque esos componentes no ven la carpeta.

### Cómo se pide

```
# Reglas de esta carpeta

## Qué es este proyecto
[Dos líneas: de qué se trata y para quién.]

## Vocabulario
[Término] = [qué significa aquí].

## Cómo se nombran los archivos
AAAA-MM-DD_descripcion.extension

## Reglas de datos
- Toda cifra dice de qué archivo salió.
- Los montos van en [moneda], sin abreviar.
- Si un dato falta, se escribe "no disponible". No se estima.

## Qué no se toca
- La subcarpeta Originales es de solo lectura.
- No se borra nada sin preguntar.
```

Por qué está escrito así: el vocabulario evita el malentendido silencioso, que es cuando Claude usa un término de manera razonable pero distinta a como lo usa tu área. La convención de nombres es lo que hace que la carpeta siga siendo navegable dentro de un año. Y la sección de lo que no se toca es la que protege el material original.

### Cómo se verifica

Empieza una sesión en esa carpeta y pide: "Antes de trabajar, dime qué reglas encontraste en esta carpeta". Si las enumera, el archivo está en el lugar correcto y con el nombre correcto.

### Lo que no hace

No manda sobre lo que tú pidas. La jerarquía es: tu encargo pesa más que el `CLAUDE.md`, y el `CLAUDE.md` pesa más que el criterio propio de Claude. Si tú insistes en algo que contradice el archivo, gana lo que tú pides.

### Plan

Gratuito. Es un archivo de texto; lo de pago es el componente donde se usa.

---

## INSTRUCCIONES DEL COMPLEMENTO

### Qué es

Dentro del panel de Claude en Word, Excel, PowerPoint u Outlook hay un campo de configuración llamado *Instructions*. Lo que escribes ahí se aplica a todas las conversaciones que tengas en esa aplicación.

Es la capa de reglas de Office, y tiene dos límites que hay que conocer: **es una por aplicación** —lo que escribes en Excel no aplica en Word ni en PowerPoint— y **vive en ese dispositivo**, así que no aparece en otra computadora.

### Cuándo se usa

Cuando tienes una manera fija de trabajar dentro de una de esas aplicaciones.

- En Excel: que las fórmulas siempre se escriban como fórmula y nunca como valor pegado, y que los porcentajes lleven dos decimales.
- En Word: que los cambios siempre se propongan con control de cambios y nunca se apliquen directo.
- En PowerPoint: que respete siempre el patrón de diapositivas y no invente tipografías.

### Dónde funciona

| Componente | Funciona |
|---|---|
| Office | Sí, una configuración por aplicación |

En ningún otro.

### Cómo se pide

```
Trabajo en [área]. Los archivos que reviso son [tipo].

Formato: los porcentajes con dos decimales, los montos en [moneda]
con separador de miles, las fechas en formato AAAA-MM-DD.

Método: todo cálculo se escribe como fórmula, nunca como valor pegado.
Antes de modificar más de una celda, dime qué vas a cambiar.

Idioma: español de México.
```

### Cómo se verifica

Abre una conversación nueva en esa aplicación y pide algo sencillo. Si respeta el formato sin que se lo hayas dicho, está tomada.

### Lo que no hace

No cruza entre aplicaciones. Hay que escribirla tres veces si se quiere en Word, Excel y PowerPoint.

No es un Project: no guarda archivos de referencia, solo texto de instrucciones.

### Plan

De pago, igual que el complemento.

---

## SISTEMA DE DISEÑO

### Qué es

Un sistema de diseño es el conjunto de decisiones visuales de una marca: sus colores exactos, sus tipografías, cómo se ven sus botones y sus tablas, cuánto espacio hay entre elementos. En Claude Design se puede cargar uno y, a partir de ahí, todo lo que produzca sale con esa identidad sin que se la vuelvas a describir.

Se puede armar de varias maneras: subiendo material de tu marca —presentaciones, un manual, un logotipo, una paleta—, apuntando a un repositorio de código que ya tenga los componentes, o tomando uno de los seis que vienen incluidos.

### Cuándo se usa

Cuando todo lo que produzcas tiene que verse consistente entre sí y con lo que ya existe.

- El área que genera láminas todas las semanas y necesita que se vean iguales.
- Una institución con manual de identidad, donde cada pieza fuera de norma es un problema.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Design | Sí | Es su capa de configuración propia. |
| Claude Code | Sí, con condición | Llega con el comando `/design-sync` o con el servidor MCP de Claude Design. El comando `/design` está en research preview, es decir, una versión temprana en pruebas. |

### Cómo se pide

```
Voy a subir material de nuestra identidad: [qué subes].
Arma un sistema de diseño con: la paleta exacta, las tipografías y sus
jerarquías, y cómo se ven los elementos que más usamos.
Cuando termines, dime qué tomaste de cada archivo, para que yo pueda
corregir lo que hayas interpretado mal.
```

Por qué está escrito así: la última línea es la que permite corregir. Un sistema de diseño mal extraído produce piezas que se ven casi bien, y ese "casi" es difícil de diagnosticar después.

### Cómo se verifica

Pide una pieza cualquiera y compárala contra un documento real de tu institución. Los colores y las tipografías tienen que coincidir, no parecerse.

### Lo que no hace

No genera fotografías ni ilustraciones: el sistema de diseño gobierna composición, color y tipografía, no imágenes.

Se puede importar desde Figma, pero no exportar hacia Figma.

### Plan

De pago. En Enterprise, Claude Design viene apagado hasta que un administrador lo habilita.

---

## Resumen de la ficha

Si el contexto es sobre **ti y tu trabajo en general**, va en el Proyecto del chat.

Si es sobre **una carpeta específica y sus archivos**, va en el `CLAUDE.md` de esa carpeta, porque así viaja con ella.

Si es sobre **cómo trabajas dentro de Excel, Word o PowerPoint**, va en las instrucciones de ese complemento, y hay que repetirla en cada aplicación.

Si es sobre **cómo se ven las cosas**, va en el sistema de diseño.

Y si es sobre **carpetas que revisitas seguido desde Cowork**, va en el proyecto de Cowork.

Los cinco los escribes tú. El elemento de la ficha siguiente es el único que Claude escribe por su cuenta.
