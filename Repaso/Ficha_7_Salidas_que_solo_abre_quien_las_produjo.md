# Ficha 7 · Salidas que solo abre quien las produjo

**Repaso · Claude for Business** — Universidad Panamericana

> **Para qué sirve esta ficha.** Todo trabajo termina en algún lado, y ese "algún lado" decide quién va a poder verlo. Las salidas de esta ficha se quedan contigo: viven en tu pantalla, en tu disco o dentro de tu archivo. Para que otra persona las vea, tú tienes que mandárselas. Las de la Ficha 8 son distintas: llevan una liga que otro abre por su cuenta. Elegir mal entre las dos es lo que obliga a rehacer trabajo, y casi siempre se descubre tarde, cuando alguien pide "pásame eso" y resulta que no se puede pasar.

**Los cinco elementos de esta ficha:** respuesta en pantalla · archivo en tu carpeta · edición del documento abierto · exportación · artifact local.

---

## RESPUESTA EN PANTALLA

### Qué es

El texto que Claude escribe en la conversación. Es la salida más común y la más frágil: existe dentro de esa conversación y en ningún otro lugar.

### Cuándo se usa

Cuando el resultado se consume en el momento: una duda, una comparación rápida, un borrador que vas a copiar y pegar en otro lado enseguida.

### Dónde funciona

En los seis componentes. Es la única salida universal.

### Cómo se pide

No hace falta pedirla; es lo que ocurre por defecto. Lo que sí conviene pedir es que salga en un formato que se pueda mover:

```
Dame la respuesta en una tabla de markdown, para pegarla directo
en un documento sin tener que reacomodarla.
```

### Cómo se verifica

Que lo que copiaste se vea bien al pegarlo en el destino.

### Lo que no hace

No queda guardada en ningún archivo. Si la conversación se pierde o se archiva, se fue.

No la puede abrir nadie más. La única forma de compartirla es copiarla y pegarla.

### Plan

Gratuita.

---

## ARCHIVO EN TU CARPETA

### Qué es

Un archivo real, escrito en tu disco, dentro de una de las carpetas que conectaste. Una hoja de cálculo con fórmulas que funcionan, un documento con formato, una presentación, un archivo de texto.

Es una salida distinta de "Claude me dio el contenido y yo lo pegué": aquí el archivo lo escribe él, con su formato interno correcto.

### Cuándo se usa

Cuando el resultado tiene que quedar guardado, abrirse en el programa que le corresponde y convivir con los demás archivos del trabajo.

- Un concentrado anual que hay que poder volver a abrir en Excel y seguir usando.
- Un índice de una carpeta, que vive dentro de esa misma carpeta.
- Un documento formateado que va a circular por correo.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Cowork | Sí, con condición | Desde una sesión de nube, Claude alcanza tus carpetas solo mientras la app de escritorio siga abierta en esa computadora. |
| Claude Code | Sí | |

### Cómo se pide

```
Guarda el resultado como un archivo en la subcarpeta Salidas, con el
nombre AAAA-MM-DD_concentrado.xlsx. Los cálculos van como fórmula,
no como valor pegado. Cuando termines, dime la ruta completa donde
quedó y ábreme la lista de lo que contiene cada hoja.
```

Por qué está escrito así: decir la carpeta y el nombre evita el archivo perdido. Pedir la ruta al final es lo que te permite encontrarlo sin buscar. Y exigir fórmulas hace que el archivo siga sirviendo cuando cambien los datos.

### Cómo se verifica

Abre la carpeta en tu computadora y confirma que el archivo está donde dice. Después ábrelo en su programa: un archivo mal escrito se abre con error o pierde el formato.

### Lo que no hace

No se comparte solo. Es un archivo: para que alguien lo vea, se lo mandas.

**No queda versionado.** Cuando Claude modifica un archivo, lo borra y lo genera de nuevo: no deja historial como el de OneDrive o SharePoint. Si quieres rastro de los cambios, hay que pedir una bitácora, explicada en la Ficha 5.

**Puede preguntarte si sobrescribe o crea uno nuevo.** Conviene contestar con criterio: sobrescribir es cómodo y borra la versión anterior para siempre.

### Plan

De pago.

---

## EDICIÓN DEL DOCUMENTO ABIERTO

### Qué es

Los cambios que Claude hace dentro del archivo que ya tienes abierto en Word, Excel o PowerPoint, sin generar un archivo nuevo. En Word aparecen como control de cambios; en Excel, como fórmulas en las celdas; en PowerPoint, como diapositivas dentro de tu misma presentación.

### Cuándo se usa

Cuando el archivo ya existe, ya circuló o ya tiene formato, y lo que se necesita es modificarlo sin romperlo.

- Un documento que ya está en revisión con tres personas y hay que meterle correcciones marcadas.
- Una hoja de cálculo con fórmulas que ya funcionan y a la que hay que agregarle una columna.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Office | Sí, con condición | Solo el archivo que ya tienes abierto. No puede abrir, cerrar ni cambiar de archivo por su cuenta. |

### Cómo se pide

```
Aplica los cambios dentro del documento que tengo abierto, con control
de cambios activado, para que yo los apruebe uno por uno.
No modifiques nada fuera de la sección [cuál].
Al terminar, dime cuántos cambios propusiste y de qué tipo.
```

### Cómo se verifica

En Word, que los cambios aparezcan marcados y no aplicados. En Excel, hacer clic en una celda nueva y ver una fórmula en la barra, no un número.

### Lo que no hace

No toca ningún otro archivo. No corre macros ni VBA. En Outlook nunca envía: deja el borrador.

### Plan

De pago.

---

## EXPORTACIÓN

### Qué es

El resultado de Claude Design convertido en un archivo que se descarga: PDF, PowerPoint, HTML autónomo, PNG o video MP4.

"HTML autónomo" quiere decir un archivo de página web que trae todo adentro y funciona sin conexión, con solo abrirlo.

### Cuándo se usa

Cuando la pieza visual tiene que salir de Claude para entrar a otro flujo: imprimirse, proyectarse, adjuntarse a un correo o seguirse editando en PowerPoint.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Design | Sí, con condición | La liga que genera Claude Design para compartir es interna de tu organización. No es una página abierta a internet. |

### Cómo se pide

La exportación se hace desde el menú de Design, no con un prompt. Lo que sí se pide antes es que la pieza esté lista para el formato de destino:

```
Antes de exportar a PowerPoint, revisa que ningún texto se salga de su
caja y que las tipografías sean las del sistema de diseño.
Dime qué láminas tuviste que ajustar.
```

Por qué está escrito así: el texto que se sale de su caja es el defecto más común y solo se nota al abrir el archivo exportado, cuando ya lo estás proyectando.

### Cómo se verifica

Abrir el archivo exportado. Exportar no es terminar: abrirlo es terminar. Un PDF que no se abrió no está revisado.

### Los formatos que salen de Design

Además de PDF, PowerPoint editable, HTML y video, Claude Design exporta **PNG** para imágenes sueltas, **GLB u OBJ** cuando lo que hiciste es un objeto en tres dimensiones —esos archivos se abren en programas de modelado y se pueden mandar a imprimir en 3D—, y un **paquete de proyecto comprimido**, que es la salida de rescate cuando alguna de las otras falla.

También puede mandar el diseño a servicios conectados, como herramientas de presentación o de publicación, y a **Claude Code**, para que lo que diseñaste se convierta en algo funcional.

### El modo de edición: cambiar sin volver a pedir

Es la diferencia más grande entre Design y el chat, y conviene tenerla presente antes de elegir dónde trabajar.

En Design puedes entrar a **modo de edición** y cambiar el texto y el tamaño de los elementos directamente, con el cursor, como en un procesador de texto. Al salir te pregunta si conservas los cambios.

Y están los **tweaks**: controles rápidos que quedan incrustados en la pieza —el color del título, la tipografía, el fondo— y que puedes mover sin escribir nada. A veces Claude los propone solo; también se pueden pedir:

```
Agrega un tweak para modificar el color de fondo de las láminas.
```

En el chat no existe nada de esto: cualquier cambio implica volver a pedirlo y que rehaga la pieza completa.

### Lo que no hace

No exporta hacia Figma. Figma aparece para importar un sistema de diseño, no como destino.

No genera fotografías ni ilustraciones: lo que exporta está hecho con formas, tipografía y color.

**El enlace para compartir que genera Design es interno de tu organización**, no una página abierta a internet.

### Plan

De pago. Los comentarios sobre un diseño solo existen en Team y Enterprise.

---

## ARTIFACT LOCAL

### Qué es

Un artifact es una pieza que Claude produce aparte de la conversación —un documento, una tabla, una página, una herramienta pequeña— y que se muestra en su propio panel, con versiones: cada corrección crea una versión nueva y se puede regresar a la anterior.

Hay dos clases de artifact, y esta ficha cubre la primera: **el que no se puede compartir, solo descargar.** El caso típico es el *live artifact* de Cowork, que vive únicamente dentro de la app de escritorio: no aparece en la versión web ni en el teléfono, y en los planes Pro y Max no se puede compartir ni publicar. En Team y Enterprise sí se comparte, pero dentro de la organización.

La otra clase, el artifact publicado con liga propia, está en la Ficha 8.

### Cuándo se usa

Cuando el resultado es para ti: un tablero de trabajo que consultas mientras avanza un proyecto, una herramienta de uso personal, un borrador que todavía no quieres que nadie vea.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Cowork | Sí | El live artifact vive solo en la app de escritorio. Ni siquiera viaja si cambias de computadora. |

### Cómo se pide

```
Ármame esto como un artifact para irlo revisando aquí mismo.
Todavía no lo voy a compartir con nadie.
```

### Cómo se verifica

Que abra en su panel y que puedas navegar entre versiones.

### Lo que todo artifact hace, se comparta o no

**Guarda versiones.** Cada corrección crea una versión nueva y no borra la anterior: se puede volver a la versión 2 y seguir desde ahí. Iterar no destruye.

**Se puede ver su código.** Un artifact es por dentro un programa pequeño. Hay un botón para ver el código en vez de la pieza, y se puede copiar.

**Se puede crear sin conversación.** En la sección de artifacts hay un botón para empezar uno nuevo directamente, eligiendo qué tipo quieres: aplicación, documento, juego, herramienta, cuestionario, o en blanco.

**Hay que pedirlo explícitamente.** A veces Claude no entiende que quieres un artifact y contesta con texto normal. La instrucción directa —"créalo como artifact"— resuelve el problema.

### Lo que no hace

No se comparte en Pro ni en Max. No aparece en la app web ni en la móvil. No viaja a otra computadora.

**No se actualiza solo.** Un artifact hecho con los datos de hoy sigue mostrando los datos de hoy mañana. Para que cambie hay que pedírselo, o montar una tarea programada que lo actualice, y eso está en la Ficha 6. Es la confusión más frecuente: un artifact no es un tablero conectado a una fuente viva.

Si el resultado lo va a abrir alguien más, este no es el elemento correcto: hay que ir a la Ficha 8.

### Plan

De pago.

---

## Resumen de la ficha

| Elemento | Dónde queda | Cómo llega a otra persona |
|---|---|---|
| Respuesta en pantalla | en la conversación | copiando y pegando |
| Archivo en tu carpeta | en tu disco | mandando el archivo |
| Edición del documento abierto | dentro del archivo | mandando el archivo |
| Exportación | en tu descargas | mandando el archivo |
| Artifact local | en tu app de escritorio | descargándolo primero |
| Sistema de diseño | en tu cuenta de Design | por enlace, dentro de la organización |

Las cinco tienen la misma característica: **para que alguien más las vea, hace falta un acto tuyo.** Ninguna se abre sola desde afuera.

La pregunta que decide entre esta ficha y la siguiente es una sola: **¿alguien más va a tener que abrir esto por su cuenta?** Si la respuesta es sí, el elemento correcto está en la Ficha 8, y conviene decidirlo antes de empezar, no al final.
