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
| Claude Code | Sí, con condición | En tu disco, solo con el entorno "Local", que existe únicamente en la app de escritorio. En la web (claude.ai/code) el archivo queda en el repositorio, no en tu computadora. |

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

Un documento, unas diapositivas o un diseño hechos en Claude, convertidos en un archivo que se descarga: Word, PDF, PowerPoint, HTML autónomo, PNG o Markdown.

Los tres son artefactos y quedan en "Artefactos", en la barra lateral. Un documento nace en la conversación cuando pides la respuesta "como documento": Claude lo abre a la derecha como documento de Claude Docs, y en el chat queda una tarjeta con su nombre y "Claude Docs · Solo tú". Un diseño o unas diapositivas se empiezan en "Artefactos" › "Crea algo nuevo" › "Diseño" o "Diapositivas".

"HTML autónomo" quiere decir un archivo de página web que trae todo adentro y funciona sin conexión, con solo abrirlo.

### Cuándo se usa

Cuando la pieza tiene que salir de Claude para entrar a otro flujo: imprimirse, proyectarse, adjuntarse a un correo o seguirse editando en Word o en PowerPoint.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | Un documento de Claude Docs se descarga con "Compartir", arriba a la derecha del documento › "Exportación" › "Word", "PDF" o "Markdown". |
| Design | Sí | Un diseño se descarga con "Compartir", arriba del lienzo › "Exportación" › "HTML", "PDF" o "PNG". Unas diapositivas salen en PowerPoint desde su nombre, arriba › "Exportar". |

### Cómo se pide

La exportación se hace con el botón "Compartir", en la pestaña "Exportación", no con un prompt. Lo que sí se pide antes es que la pieza esté lista para el formato de destino:

```
Antes de exportar a PowerPoint, revisa que ningún texto se salga de su
caja y que las tipografías sean las del sistema de diseño.
Dime qué láminas tuviste que ajustar.
```

Por qué está escrito así: el texto que se sale de su caja es el defecto más común y solo se nota al abrir el archivo exportado, cuando ya lo estás proyectando.

Si una descarga no te funciona, la salida de respaldo es copiar y pegar: el menú del nombre del documento trae "Copiar como Markdown".

### Cómo se verifica

Abrir el archivo exportado. Exportar no es terminar: abrirlo es terminar. Un PDF que no se abrió no está revisado.

### Los formatos que salen de cada artefacto

- **Documento (Claude Docs):** "Word" (un .docx que se sigue editando), "PDF" y "Markdown". En "Enviar a" están "Google Docs", "Notion" y "Canva".
- **Diseño:** "HTML" (la página web independiente), "PDF" y "PNG", más las opciones "Claude Docs" y "Claude Slides", que lo pasan a documento o a diapositivas. "Enviar a" lo manda a "Canva".
- **Diapositivas:** "PowerPoint", desde "Exportar".
- **Video MP4:** sale de Claude Motion, que solo está en Team y Enterprise.

Según la ayuda de Anthropic, también se puede bajar el proyecto completo en un archivo comprimido, que es la salida de rescate cuando alguna de las otras falla.

Y en el menú del nombre del diseño está "Transferir a Claude Code", para que lo que diseñaste se convierta en algo funcional.

### Cambiar sin volver a pedir

Es la diferencia más grande entre un artefacto y una respuesta del chat, y conviene tenerla presente antes de elegir dónde trabajar.

En un diseño puedes cambiar el texto directamente, con el cursor: un doble clic en un texto marca el bloque, y un segundo doble clic lo deja listo para escribir. Con el globito "Comentar", en las herramientas de abajo del lienzo, señalas un punto exacto de la pieza y le dices a Claude qué cambiar ahí.

Un documento de Claude Docs se edita igual que en un procesador de texto, sin pedirle nada a Claude.

También le puedes pedir controles rápidos, los **tweaks**, que quedan incrustados en la pieza (el color del título, la tipografía, el fondo) y que mueves sin escribir nada:

```
Agrega un tweak para modificar el color de fondo de las láminas.
```

En una respuesta normal del chat no existe nada de esto: cualquier cambio implica volver a pedirlo y que rehaga la pieza completa.

### Lo que no hace

No exporta hacia Figma. Figma aparece para importar un sistema de diseño, no como destino.

No genera fotografías ni ilustraciones: lo que exporta está hecho con formas, tipografía y color.

**Un archivo exportado no se actualiza.** Si después cambias el documento o el diseño, hay que exportarlo otra vez.

**Una liga no es una exportación**, aunque "Compartir" ofrezca las dos cosas juntas. "Copiar enlace privado" solo lo abre quien tú invites. "Copiar enlace público" ya es una liga que otra persona abre por su cuenta, y eso está en la Ficha 8.

### Plan

Todos los planes, incluido el gratuito: Design, Docs y Slides están en todos. El video MP4 de Claude Motion, solo en Team y Enterprise.

---

## ARTIFACT LOCAL

### Qué es

Un artifact (en pantalla, "artefacto") es una pieza que Claude produce aparte de la conversación (un documento, unas diapositivas, un diseño, una tabla, una página, una herramienta pequeña) y que se muestra en su propio panel, con versiones: cada corrección crea una versión nueva y se puede regresar a la anterior. Todos quedan juntos en "Artefactos", en la barra lateral.

Hay dos clases de artifact, y esta ficha cubre la primera: **el que no se comparte.** Los documentos y los diseños nacen con "Acceso general" en "Solo tú": mientras no lo cambies, nadie más los abre, y para pasárselos a alguien los exportas, como se explica arriba. El caso extremo es el *live artifact* de Cowork, que vive únicamente dentro de la app de escritorio: no aparece en la versión web ni en el teléfono, y en los planes Pro y Max no se puede compartir ni publicar. En Team y Enterprise sí se comparte, pero dentro de la organización.

La otra clase, el artifact publicado con liga propia, está en la Ficha 8.

### Cuándo se usa

Cuando el resultado es para ti: un tablero de trabajo que consultas mientras avanza un proyecto, una herramienta de uso personal, un borrador que todavía no quieres que nadie vea.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | Un documento nace en "Solo tú" y así se queda mientras no lo cambies en "Compartir". |
| Design | Sí | Igual: un diseño nuevo nace en "Solo tú". |
| Cowork | Sí | El live artifact vive solo en la app de escritorio. Ni siquiera viaja si cambias de computadora. |

### Cómo se pide

```
Ármame esto como un artifact para irlo revisando aquí mismo.
Todavía no lo voy a compartir con nadie.
```

### Cómo se verifica

Que abra en su panel y que puedas navegar entre versiones. En "Compartir", "Acceso general" tiene que decir "Solo tú".

### Lo que todo artifact hace, se comparta o no

**Guarda versiones.** Cada corrección crea una versión nueva y no borra la anterior: se puede volver a la versión 2 y seguir desde ahí. Iterar no destruye. En un documento, el menú de su nombre trae "Historial de versiones".

**Se puede ver su código.** Un artifact de página o de herramienta es por dentro un programa pequeño. Hay un botón para ver el código en vez de la pieza, y se puede copiar.

**Se puede empezar desde "Artefactos".** En "Crea algo nuevo" eliges el tipo: "Documentos", "Diapositivas", "Hoja de cálculo", "Diseño", "Datos", "Pizarra" y otros. La tarjeta "Diseño", por ejemplo, abre de una vez una conversación nueva con el lienzo a la derecha.

**Hay que pedirlo explícitamente.** A veces Claude no entiende que quieres un artifact y contesta con texto normal. La instrucción directa resuelve el problema: "créalo como artifact" o, para un documento, "dámelo como documento".

### Lo que no hace

El live artifact de Cowork no se comparte en Pro ni en Max, no aparece en la app web ni en la móvil y no viaja a otra computadora.

**No se actualiza solo.** Un artifact hecho con los datos de hoy sigue mostrando los datos de hoy mañana. Para que cambie hay que pedírselo, o montar una tarea programada que lo actualice, y eso está en la Ficha 6. Es la confusión más frecuente: un artifact no es un tablero conectado a una fuente viva. La excepción puede ser lo que armes con la tarjeta "Datos" de "Artefactos", pensada para trabajar con un conector de datos; si la usas, pregúntale a Claude de dónde toma los datos y cada cuándo se actualizan.

Si el resultado lo va a abrir alguien más, este no es el elemento correcto: hay que ir a la Ficha 8.

### Plan

Los artefactos, incluidos los documentos, las diapositivas y los diseños, están en todos los planes, incluido el gratuito. El live artifact de Cowork es de pago, como Cowork.

---

## Resumen de la ficha

| Elemento | Dónde queda | Cómo llega a otra persona |
|---|---|---|
| Respuesta en pantalla | en la conversación | copiando y pegando |
| Archivo en tu carpeta | en tu disco | mandando el archivo |
| Edición del documento abierto | dentro del archivo | mandando el archivo |
| Exportación | en tus descargas | mandando el archivo |
| Artifact local | en "Artefactos", en "Solo tú"; el de Cowork, en tu app de escritorio | exportándolo o descargándolo primero |
| Sistema de diseño | en tu cuenta, en "Configuración" › "Capacidades" › "Sistemas de diseño" | la lista de sistemas dice quién puede usarlo |

Las cinco tienen la misma característica: **para que alguien más las vea, hace falta un acto tuyo.** Ninguna se abre sola desde afuera.

La pregunta que decide entre esta ficha y la siguiente es una sola: **¿alguien más va a tener que abrir esto por su cuenta?** Si la respuesta es sí, el elemento correcto está en la Ficha 8, y conviene decidirlo antes de empezar, no al final.
