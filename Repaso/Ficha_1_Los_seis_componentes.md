# Ficha 1 · Los seis componentes

**Repaso · Claude for Business** — Universidad Panamericana

> **Para qué sirve esta ficha.** Claude no es un solo programa: es un conjunto de seis lugares distintos donde puedes trabajar. Cada uno ve cosas distintas, guarda cosas distintas y entrega cosas distintas. Casi todos los problemas que aparecen al usarlo vienen de estar parado en el lugar equivocado, no de haber escrito mal el encargo. Las siete fichas siguientes se leen contra ésta, y la Ficha 0 describe los ajustes que se deciden antes de empezar.

---

## Dos cosas antes de empezar

### Claude no genera imágenes

Es el límite que más veces se repitió en el curso y el que más sorprende. Claude puede **leer** fotografías, capturas de pantalla y gráficas —y lo hace bien—, pero no las **produce**. No existe un modelo de generación de imágenes dentro de Claude.

Cuando algo visual sale de Claude, está hecho con formas, tipografía y color escritos como código. Por eso un logotipo generado por Claude se ve geométrico y simple. Si el trabajo necesita una fotografía o una ilustración, la fotografía la traes tú.

### Qué quiere decir "agente"

Un agente es un sistema de inteligencia artificial que además de conversar tiene **herramientas** y las puede usar por su cuenta: leer un archivo, escribir otro, consultar un sistema, hacer clic en una página. Cowork y Claude Code son agentes; el chat, en su forma básica, no.

La consecuencia práctica: en los componentes que son agentes hay que decidir cuánto los dejas actuar sin preguntarte. Ese ajuste es el modo de permisos, y está explicado en la Ficha 0.

---

## CHAT

### Qué es

Es la ventana de conversación: tú escribes, Claude responde. Es lo que la mayoría de la gente conoce como "usar Claude". Todo ocurre dentro de esa conversación. Si subes un archivo, ese archivo vive ahí adentro y no en tu computadora, y cuando abres una conversación nueva ya no está disponible.

### Cuándo se usa

Cuando el material cabe en un mensaje o en unos cuantos archivos, y lo que esperas de vuelta es algo que vas a leer y copiar.

- Tienes un PDF de veinte páginas y necesitas saber si menciona una cláusula de penalización. Lo subes y preguntas. Claude lee las veinte páginas y te dice en qué página está.
- Recibiste dos cotizaciones con formatos distintos y quieres compararlas. Subes las dos y pides una tabla lado a lado.
- Tienes que escribir un correo incómodo. Describes la situación y pides tres versiones con distinto tono para elegir.

### De dónde se consume

| Vía | Qué significa |
|---|---|
| **App web** | Entras desde el navegador. No instalas nada. |
| **App de escritorio** | Un programa que instalas en tu computadora. Por dentro se ve casi igual que la web, pero es la única puerta a Cowork y a Claude Code, y algunos ajustes solo aparecen ahí. |
| **App móvil** | En el teléfono. |

La conversación es la misma en las tres: si la empiezas en la computadora, la puedes seguir en el teléfono.

### Lo que no hace

No toca los archivos de tu computadora. Si le pides "ordena mi carpeta de Descargas", desde aquí no puede; para eso está Cowork.

Lo que subes se queda en esa conversación. Para que un archivo esté disponible siempre, sin volver a subirlo cada vez, hay que cargarlo al conocimiento de un Project, que se explica en la Ficha 4.

Hay un tope de documentos por conversación, alrededor de veinte, y no es arbitrario: es la capacidad de la conversación. Está explicado en la Ficha 0.

### Plan

Gratuito, con un límite de mensajes que se reinicia cada cierto tiempo. Dos cosas dentro del chat sí son de pago: los Projects con archivos cargados, y poder escribir el símbolo @ para llamar a un archivo por su nombre.

---

## DESIGN

### Qué es

Un espacio de trabajo distinto del chat. En vez de contestarte con texto, Claude arma una pieza visual sobre un lienzo —una hoja en blanco donde acomoda títulos, bloques de texto, formas y color— y tú le vas pidiendo cambios encima de lo que ya armó. Se parece más a un programa de diseño que a una conversación.

Su rasgo distintivo frente al chat es que **lo que produce se puede editar directamente**, sin volver a pedírselo. Eso se explica en la Ficha 7.

### Cuándo se usa

Cuando lo primero que importa del resultado es cómo se ve, y cuando vas a hacer varias correcciones sobre la misma pieza.

- Necesitas seis láminas para una junta y no tienes plantilla. Describes el tema y Design arma la secuencia completa; después le pides que cambie el orden, que use otro color o que la lámina tres sea una tabla.
- Necesitas un cartel de una página para pegar en el tablero del área.
- Necesitas enseñar cómo se vería la pantalla de una aplicación antes de pedirle a alguien que la programe.

Una práctica que funcionó bien en clase: **escribir el contenido en el chat y traerlo a Design solo para darle forma.** Design es más lento y consume más rápido; usarlo para redactar es desperdiciarlo.

### Cómo está organizado

Design se abre en una pestaña propia y tiene tres secciones: **Projects**, donde están los diseños que ya hiciste, con vista previa; **Design Systems**, donde viven tus identidades de marca —eso está en la Ficha 4—; y **Templates**, para plantillas propias.

Al empezar un diseño se elige una **plantilla**, y cada una cambia lo que Claude te ofrece: láminas, documentos, correos, animaciones, diagramas, carteles, aplicaciones móviles, objetos en tres dimensiones, o empezar en blanco. La plantilla escribe sola la primera parte del prompt.

### De dónde se consume

| Vía | Qué significa |
|---|---|
| **App web** | Desde el navegador. |
| **App de escritorio** | Desde la barra lateral. |

No está en la app móvil. Todo lo que hagas en una lo ves en la otra: aquí no hay nada local.

### Lo que no hace

No genera fotografías ni ilustraciones, como se explicó arriba.

Se puede traer un sistema de diseño desde Figma hacia Claude, pero no se puede mandar el resultado hacia Figma.

Tarda. Una pieza puede llevar varios minutos, y conviene lanzarla y dedicarse a otra cosa mientras.

Y tiene un sesgo estético que conviene conocer: si no le das una referencia de color, tiende a usar la paleta de la propia marca de Anthropic. Todo empieza a verse igual y se nota que salió de ahí.

### Plan

De pago, en Pro, Max, Team y Enterprise. En Enterprise viene apagado hasta que un administrador lo enciende. Sigue en beta, que quiere decir que es una versión en pruebas: puede cambiar de un mes a otro y puede fallar.

Consume de la misma bolsa que el resto de Claude, pero más rápido que el chat.

---

## COWORK

### Qué es

Claude trabajando directamente sobre carpetas de tu computadora. Le conectas una carpeta —le das permiso sobre esa carpeta y únicamente sobre esa— y a partir de ahí puede abrir los archivos que hay adentro, leerlos, modificarlos, crear nuevos y también borrarlos, sin que tú se los pases uno por uno.

Es un agente: actúa. Por eso el modo de permisos importa más aquí que en ningún otro lado.

### Cuándo se usa

Cuando el trabajo son varios archivos que ya existen en tu disco, y el resultado también son archivos.

- Tienes una carpeta con cuarenta archivos acumulados de tres años y nadie sabe bien qué hay. Le pides un índice que diga qué es cada uno y cuáles están repetidos.
- Tienes doce reportes mensuales en Excel y necesitas el consolidado del año. No le pasas los datos: le pasas la carpeta.
- Cada mes te llegan archivos con nombres distintos y quieres que los renombre todos con una misma convención.

### De dónde se consume

| Vía | Qué significa |
|---|---|
| **App de escritorio** | En macOS y en Windows. Es el camino principal, y hay que activarlo primero en la configuración. |
| **App web y app móvil** | Todavía en beta. Desde ahí puedes seguir dando instrucciones sobre una sesión que ya está corriendo, pero no manipular directamente los archivos, porque viven en la otra computadora. |
| **Extensión de Chrome** | El panel lateral de Chrome funciona por dentro como una sesión de Cowork, y por eso lo que configuraste para Cowork también aparece ahí. |

### Lo que no hace

Solo lee y escribe dentro de las carpetas que conectaste: una carpeta que no conectaste, para él no existe. Decirle la ruta por escrito no basta.

Las sesiones de Cowork no se comparten con otra persona. Lo que sí se puede compartir es el archivo que produjo, porque un archivo se manda por correo como cualquier otro.

**No versiona los archivos que modifica.** Cuando cambia un documento, lo borra y lo genera de nuevo; no deja un historial como el de OneDrive o SharePoint. Por eso conviene pedirle que lleve una bitácora, y eso está en la Ficha 5.

### Un patrón útil

Si conectas la carpeta que Google Drive o OneDrive sincronizan en tu disco, y la marcas para estar siempre disponible sin conexión, Claude la trata como carpeta local y los cambios se suben solos a la nube. Es la forma práctica de trabajar sobre archivos compartidos sin salirse de Cowork.

### Plan

De pago. Consume bastante más que el chat.

---

## OFFICE

### Qué es

Un complemento, es decir, un panel que se agrega dentro del programa de Microsoft y aparece a un costado de la hoja. Desde ese panel le pides cosas sobre el archivo que tienes abierto en ese momento. No es otra ventana ni otro programa: vive dentro de Word, de Excel, de PowerPoint o de Outlook.

### Cuándo se usa

Cuando el archivo ya está abierto en pantalla y el cambio va dentro de ese mismo archivo.

- En **Word**: tienes un contrato abierto y quieres que revise si la numeración de cláusulas está corrida y si las referencias cruzadas apuntan a donde dicen. Propone los cambios como control de cambios, marcados uno por uno, y tú los aceptas o los rechazas.
- En **Excel**: tienes una hoja con fórmulas y quieres agregar una columna de margen por producto. La escribe como fórmula real, no como número pegado, y te deja el rastro de qué celdas tocó.
- En **PowerPoint**: tienes una presentación con la plantilla de tu institución y necesitas tres láminas más. Respeta el patrón de diapositivas, las tipografías y los colores que ya trae el archivo.
- En **Outlook**: tienes un correo abierto y quieres responderlo. Escribe el borrador y lo deja sin enviar.

### El trabajo entre aplicaciones

Hay un interruptor en los ajustes del complemento —**"Let Claude work across files"**— que permite que Claude use como contexto los otros archivos de Office que tengas abiertos.

Con eso encendido, puedes analizar en Excel y pedirle en PowerPoint que arme las láminas sin volver a darle un solo dato. Es el caso de uso más potente de este componente, y en clase fue la demostración que más impresionó.

Tres condiciones: el complemento tiene que estar abierto en cada archivo, viene encendido de fábrica en Pro y Max pero apagado en Team y Enterprise, y el ajuste es por dispositivo.

### De dónde se consume

| Vía | Qué significa |
|---|---|
| **Complemento de Office** | Dentro de Word, Excel, PowerPoint y Outlook, en sus versiones web, de Windows y de Mac. Se instala desde Microsoft AppSource. |

No existe en iPad ni en Android.

### Lo que no hace

No abre, no cierra ni cambia de archivo por su cuenta. Trabaja únicamente con lo que ya está abierto, así que si necesita datos de otro archivo, ese archivo lo abres tú.

Tampoco corre macros ni VBA, que son las rutinas programadas que algunas hojas de Excel traen adentro.

En Outlook nunca envía: deja el borrador y el clic de enviar siempre es tuyo.

Tiene menos controles que el resto: el razonamiento solo se enciende o se apaga, sin niveles.

Y su historial es aparte: lo que conversas dentro de Excel no aparece en tu lista normal de conversaciones de Claude.

### Una precaución

Como los cambios van dentro del archivo original, conviene **trabajar sobre un duplicado** la primera vez, o duplicar la hoja antes de dejar que modifique. En Word el control de cambios cumple esa función; en Excel no hay equivalente.

### Plan

De pago, en Pro, Max, Team y Enterprise. En Team y en Enterprise el administrador tiene que habilitarlos antes de que aparezcan.

---

## CHROME

### Qué es

Una extensión, es decir, un programa pequeño que se le agrega al navegador y que abre un panel a un lado de la página. Desde ese panel Claude puede leer lo que está en la página y también operarla: hacer clic, escribir en campos y llenar formularios, usando la sesión que tú ya tienes iniciada.

Por dentro funciona sacando capturas de la página por secciones, leyéndolas e identificando dónde están los botones. Cuando actúa, aparece un cursor de color moviéndose solo.

### Cuándo se usa

Cuando el dato o la tarea están en una página web que tienes abierta, y sobre todo cuando ese sistema no tiene otra manera de entrar: no exporta, no tiene conector, y la única vía es la pantalla.

- Estás leyendo un informe publicado en un sitio y necesitas la cifra exacta, con su fecha y la liga de donde salió.
- Tienes que revisar veinte fichas de producto de un catálogo en línea y comparar precios.
- Tienes que capturar registros en un sistema interno que no acepta carga masiva.

### El alcance por pestaña

Claude solo ve las pestañas que autorizaste. Una pestaña bajo su control se marca visualmente; una pestaña que no autorizaste, para él no existe.

Para trabajar con varias a la vez se arrastran a un grupo de pestañas: ahí ve todas las del grupo, no solo la que tienes al frente.

### De dónde se consume

| Vía | Qué significa |
|---|---|
| **Extensión de Chrome** | Únicamente en Google Chrome de escritorio. |

No funciona en otros navegadores construidos sobre la misma base que Chrome, como Edge, Brave u Opera, ni en la app móvil.

### Lo que no hace

No llega por sí solo a los archivos de tu computadora.

Los permisos se dan sitio por sitio: autorizarlo en un sitio no lo autoriza en los demás.

Trae bloqueadas de fábrica las categorías de banca en línea, plataformas de inversión y casas de cambio de criptomonedas. Como regla de trabajo conviene no autorizarlo tampoco en nómina, expedientes de personal ni portales con datos de terceros.

Es lento. Una tarea de veinte capturas puede llevar veinte minutos. La ventaja es que son veinte minutos en los que tú haces otra cosa.

### Plan

De pago. El panel lateral está en beta.

---

## CLAUDE CODE

### Qué es

Claude trabajando sobre un repositorio. Un repositorio es una carpeta con historial: cada cambio que se hace queda registrado con fecha y autor, se puede ver qué cambió exactamente y se puede regresar a como estaba antes. Además, un repositorio se copia completo a otra computadora, con todo y su historial y las reglas que le escribiste, y allá funciona igual.

Aquí las conversaciones no se llaman conversaciones: se llaman **sesiones**, y se pueden agrupar, renombrar, fijar y archivar.

### Cuándo se usa

Cuando el resultado tiene que sobrevivir a esta vez.

- No quieres el reporte de este mes; quieres la herramienta que arma ese reporte todos los meses.
- Necesitas publicar una página que otras personas abran desde su teléfono, sin instalarles nada.
- Necesitas que un compañero abra tu trabajo completo y que le funcione igual que a ti, con las mismas reglas puestas.

Conviene ser realista sobre el alcance: lo que se produce son **prototipos y herramientas propias**, no sustitutos de los sistemas de tu organización.

### Local o en la nube

Al abrir una sesión se elige dónde corre. **Local** trabaja sobre una carpeta de tu disco y necesita la app de escritorio. **En la nube** trabaja sobre un repositorio de GitHub en una computadora prestada, funciona igual desde el navegador y no requiere que tu computadora esté encendida. Está explicado en la Ficha 0.

### De dónde se consume

| Vía | Qué significa |
|---|---|
| **App de escritorio** | En la pestaña Code. Es la vía para sesiones locales. |
| **Terminal** | La ventana de texto donde se escriben comandos en lugar de hacer clic. |
| **App web** | Para sesiones de nube. |

### El requisito que hay que resolver antes

**Claude Code necesita Git.** Git es el programa que lleva el historial de versiones de una carpeta. En Windows hay que instalarlo aparte; en versiones recientes de macOS ya viene incluido.

Conviene instalarlo con anticipación: en clase esta instalación consumió un receso completo y dejó a una persona sin poder trabajar.

### Lo que no hace

En las sesiones de nube no existe el símbolo @ para meter un archivo a la conversación, no hay chat lateral y no se instalan complementos desde un menú. Tampoco funcionan ahí los conectores que corren dentro de tu propia computadora.

**No tiene Projects.** Los Projects son del chat y de Cowork. Aquí el contexto se guarda en el `CLAUDE.md` de la carpeta, que se explica en la Ficha 4.

### Plan

De pago. Viene incluido en cada asiento estándar de Team, donde asiento quiere decir la licencia que la organización le asigna a cada persona. En Enterprise depende del tipo de asiento: uno de solo chat no lo incluye.

---

## Cómo se elige el componente

La decisión se toma por dónde está el material, no por qué tan complicada es la tarea.

| El material está en… | El componente es… |
|---|---|
| una conversación, y el resultado se lee | **Chat** |
| el archivo que ya tienes abierto en pantalla | **Office** |
| varios archivos de una carpeta | **Cowork** |
| una página web | **Chrome** |
| ningún lado todavía, y el resultado se ve | **Design** |
| una carpeta que alguien más tiene que abrir completa | **Claude Code** |

Y una segunda regla, para cuando el material podría estar en varios lados: **Cowork hace el trabajo de esta vez; Claude Code construye la herramienta que lo hace cada mes.**

---

## Cuando un componente no aparece

Si algo de lo descrito aquí no existe en tu pantalla, hay tres causas posibles, en este orden:

1. **Estás en el navegador y no en la app de escritorio.** Cowork y las sesiones locales de Claude Code solo aparecen ahí.
2. **Tu plan no lo incluye.** Todo salvo el chat es de pago.
3. **El administrador de tu organización lo apagó.** Pasa con Design, con Claude Code, con la extensión de Chrome y con conectores concretos. No se resuelve desde tu cuenta: hay que solicitarlo.

De dónde se descarga cada componente está en la Ficha 0.

---

## Palabras que aparecen en esta ficha

**Agente.** Sistema que además de conversar usa herramientas por su cuenta: leer archivos, escribirlos, consultar sistemas.

**Beta.** Versión en pruebas. Funciona, pero puede cambiar de un mes a otro o fallar.

**Complemento.** Panel que se agrega dentro de un programa que ya usabas, como Word o Excel.

**Extensión.** Lo mismo, pero para el navegador.

**Repositorio.** Carpeta con historial de cambios, que se puede copiar completa a otra computadora.

**Git.** El programa que lleva ese historial. Claude Code lo necesita instalado.

**Sesión.** Como se llaman las conversaciones en Claude Code.

**Sesión de nube.** Claude trabajando en una computadora prestada que está en internet, en vez de en la tuya.

**Asiento.** La licencia que una organización le asigna a cada persona. De su tipo depende qué componentes ve esa persona.

**MCP.** El estándar con el que Claude se conecta a otros sistemas. "Servidor MCP" es el programa que hace de puente entre Claude y ese otro sistema.
