# Ficha 2 · Fuentes que proporciona el usuario

**Repaso · Claude for Business** — Universidad Panamericana Aguascalientes

> **Para qué sirve esta ficha.** Claude no sabe nada de tu trabajo hasta que se lo pones enfrente. Hay cuatro maneras de ponérselo, y no son intercambiables: cada una funciona en componentes distintos y tiene reglas distintas sobre qué pasa con el material después. Elegir mal la vía es la razón más común de que Claude conteste "no tengo acceso a ese archivo".

**Los cuatro elementos de esta ficha:** archivos adjuntos · carpeta o repositorio · documento abierto · pestaña del navegador.

---

## ARCHIVOS ADJUNTOS

### Qué es

Subir un archivo a la conversación, igual que se adjunta a un correo. El archivo se copia al espacio de esa conversación, Claude lo lee ahí, y ahí se queda. No se guarda en tu computadora ni queda disponible en otras conversaciones.

Acepta documentos de texto, PDF, hojas de cálculo, presentaciones e imágenes. Una imagen la puede leer de verdad: si le subes la foto de un recibo o la captura de una gráfica, puede transcribir lo que dice.

### Cuándo se usa

Cuando el material son uno o unos pocos archivos y la tarea se resuelve en una sola sesión de trabajo.

- Un instructivo en PDF de cuarenta páginas del que necesitas los tres pasos que aplican a tu área.
- La foto de un formato lleno a mano que quieres pasar a una tabla.
- Dos versiones de un mismo documento, para que te diga en qué párrafos difieren.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | |
| Design | Sí | Acepta imágenes y documentos como referencia visual. |
| Cowork | Sí | |
| Office | Sí | Desde el panel del complemento. |
| Chrome | No documentado | La documentación oficial no dice si se pueden adjuntar archivos al panel. |
| Claude Code | Sí, con condición | Solo en la app de escritorio y en sesiones por terminal remota. En la terminal normal la documentación dice que no está disponible. |

### Cómo se pide

El error frecuente es subir el archivo y escribir solo "resúmelo". Un resumen sin anclas no se puede verificar. Conviene pedir que cada afirmación diga de dónde salió.

```
Lee el archivo que acabo de subir. Dame:
1. Las tres conclusiones principales, y de qué página sale cada una.
2. Cualquier cifra que aparezca más de una vez con valores distintos.
3. Lo que el documento da por supuesto sin explicarlo.
No agregues información que no esté en el archivo.
```

Por qué está escrito así: el punto 1 te deja verificar abriendo esa página. El punto 2 encuentra los errores del documento original, que es donde más valor hay. El punto 3 te dice qué le vas a tener que preguntar al autor. La última línea evita que rellene huecos con conocimiento general.

Para varios archivos a la vez:

```
Subí tres cotizaciones del mismo servicio. Ármame una tabla comparativa
con: proveedor, precio total, qué incluye, qué no incluye, tiempo de
entrega y vigencia de la cotización. Si un dato no aparece en alguna
de las tres, escribe "no lo dice" en vez de estimarlo.
```

Por qué está escrito así: nombrar las columnas evita que invente una estructura distinta cada vez. La instrucción de escribir "no lo dice" es la que impide que llene los huecos con supuestos que parecen datos.

### Cómo se verifica

Abre el archivo original en la página o la celda que Claude citó y confirma que el dato coincide. Basta con revisar dos o tres al azar. Si en alguna no coincide, revisa todas.

### Lo que no hace

El archivo no queda guardado. Mañana, en una conversación nueva, hay que volverlo a subir. Si es un documento que vas a consultar siempre, va al conocimiento de un Project (Ficha 4).

Tampoco modifica el archivo que subiste. Lo lee y contesta; si quieres el archivo cambiado, te devuelve uno nuevo.

### Plan

Gratuito en el chat.

---

## CARPETA O REPOSITORIO

### Qué es

Los archivos que ya están guardados en tu computadora, sin subirlos a ningún lado. En vez de pasarle un archivo, le das permiso sobre una carpeta completa: a partir de ahí Claude puede ver qué hay adentro, abrir lo que necesite, modificarlo y crear archivos nuevos en ese mismo lugar.

La diferencia con un archivo adjunto es de escala y de permanencia. Un adjunto es una copia que vive en la conversación. Una carpeta conectada son tus archivos reales, los mismos que ves en tu escritorio.

### Cuándo se usa

Cuando son muchos archivos, cuando no sabes de antemano cuáles vas a necesitar, o cuando el resultado tiene que quedar guardado junto a los originales.

- Una carpeta de facturas de todo el año de la que necesitas un concentrado.
- Una carpeta compartida donde cada quien nombró los archivos a su manera y hay que ordenarla.
- Un proyecto en el que el resultado de hoy es el insumo de mañana, y por eso conviene que todo viva en el mismo lugar.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Cowork | Sí, con condición | Desde una sesión de nube, Claude alcanza tus carpetas solo mientras la app de escritorio siga abierta en esa computadora. |
| Claude Code | Sí | Sobre el repositorio. |

En el chat, en Design, en Office y en Chrome no existe: esos componentes no ven tu disco.

### Cómo se pide

La primera instrucción sobre una carpeta nunca debe ser un cambio. Primero se pide inventario, porque tú tampoco sabes con certeza qué hay.

```
No cambies nada todavía. Recorre la carpeta y hazme un índice con una
línea por archivo: nombre, de qué trata, fecha del contenido (no la
fecha del archivo) y si parece duplicado o versión de otro.
Al final, dime qué archivos no pudiste abrir y por qué.
```

Por qué está escrito así: la primera línea evita cambios antes de que tú entiendas el terreno. La distinción entre fecha del contenido y fecha del archivo importa porque copiar un archivo le cambia la fecha y eso engaña. La última línea saca a la luz los archivos dañados o en formatos que no puede leer, que si no, desaparecen silenciosamente del análisis.

Una vez que tienes el índice:

```
Con base en el índice que acabas de hacer, arma un archivo nuevo que se
llame Concentrado.xlsx con una fila por cada reporte mensual y las
columnas que se repiten en todos. Los archivos originales no se tocan.
Si un mes no tiene alguna de las columnas, deja la celda vacía y
anótalo en una hoja aparte que se llame Faltantes.
```

Por qué está escrito así: nombrar el archivo de salida evita que lo ponga donde no lo encuentres. "Los archivos originales no se tocan" es la instrucción que más tranquilidad da y hay que escribirla siempre la primera vez. La hoja de faltantes convierte los huecos en información en lugar de esconderlos.

### Cómo se verifica

Abre la carpeta en tu computadora y confirma que el archivo nuevo está donde dijiste y que los originales conservan su fecha de modificación. Si una fecha cambió, algo se tocó.

### Lo que no hace

Solo ve las carpetas que conectaste. Una carpeta que no conectaste, para él no existe, y decirle la ruta por escrito no basta: hay que conectarla.

### Plan

De pago.

---

## DOCUMENTO ABIERTO

### Qué es

El archivo que en este momento tienes en pantalla en Word, Excel, PowerPoint u Outlook. El complemento lee ese archivo directamente, con su formato, sus fórmulas, sus comentarios y su control de cambios, y escribe dentro de él.

Es la vía más directa de todas, y también la más limitada: solo existe mientras el archivo está abierto.

### Cuándo se usa

Cuando el trabajo es sobre un documento que ya existe y el resultado va dentro de ese mismo documento.

- Revisar un contrato sin sacarlo de Word.
- Agregar una columna calculada a una hoja de Excel conservando las fórmulas que ya tenía.
- Reordenar y completar una presentación respetando la plantilla institucional.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Office | Sí, con condición | Solo el archivo que ya tienes abierto. Claude no puede abrir, cerrar ni cambiar de archivo por su cuenta. |

En ningún otro componente existe.

### Cómo se pide

```
Revisa el documento que tengo abierto y márcame con control de cambios:
las inconsistencias de numeración, las referencias cruzadas que apunten
a una sección que ya no existe, y los términos que se usan con dos
nombres distintos a lo largo del texto.
No cambies la redacción ni el estilo: solo esos tres puntos.
```

Por qué está escrito así: pedir control de cambios significa que nada se modifica sin que tú lo apruebes uno por uno. Acotar a tres puntos evita que reescriba el documento entero, que es lo que hace si no se lo acotas.

En una hoja de cálculo:

```
En la hoja que tengo abierta, agrega una columna al final que calcule
el margen por producto como fórmula, no como valor pegado.
Antes de escribirla, dime qué columnas vas a usar y con qué fórmula,
para confirmar que estás tomando las correctas.
```

Por qué está escrito así: pedir la fórmula antes de que la escriba te deja detener el error antes de que entre a la hoja. Y exigir fórmula en vez de valor pegado hace que la columna se siga actualizando cuando cambien los datos.

### Cómo se verifica

En Word, que los cambios aparezcan marcados y no aplicados. En Excel, hacer clic en una celda de la columna nueva y confirmar que arriba aparece una fórmula y no un número.

### Lo que no hace

No abre otro archivo para consultarlo. Si el cálculo necesita datos de otro libro, ese libro lo abres tú.

No corre macros ni VBA.

### Plan

De pago.

---

## PESTAÑA DEL NAVEGADOR

### Qué es

La página web que tienes abierta. Claude la lee tal como está en pantalla, incluyendo lo que solo se ve después de iniciar sesión, porque usa la sesión que tú ya tienes abierta en tu navegador.

### Cuándo se usa

Cuando el dato vive en una página y no en un archivo.

- Un indicador publicado en el sitio de una dependencia, del que necesitas la cifra, la fecha y la liga.
- Un catálogo en línea del que hay que comparar varios productos.
- Un sistema interno de tu organización que no tiene forma de exportar y del que hay que sacar información pantalla por pantalla.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Cowork | Sí | |
| Chrome | Sí, con condición | Claude ve todas las pestañas que arrastres a su grupo de pestañas, no solo la que tienes al frente. |
| Claude Code | Sí | |

### Cómo se pide

```
De la página que tengo abierta, tráeme el dato de [lo que buscas] con
tres cosas: la cifra tal como aparece, la fecha de publicación o de
corte, y la liga exacta de esta página.
Si la cifra aparece en más de un lugar de la página con valores
distintos, dímelo en vez de elegir uno.
```

Por qué está escrito así: la cifra sin fecha no sirve para nada dentro de tres meses, y sin liga no se puede defender ante nadie. La última condición atrapa el caso frecuente de una página que trae el dato actualizado arriba y uno viejo en una tabla más abajo.

### Cómo se verifica

Abre tú la liga que te devolvió y busca la cifra en la página. Si la liga no abre en la cifra, no sirve como fuente.

### Lo que no hace

No llega a los archivos de tu computadora por esta vía.

Los permisos se dan sitio por sitio: autorizarlo en un sitio no lo autoriza en los demás.

Trae bloqueadas de fábrica banca en línea, plataformas de inversión y casas de cambio de criptomonedas. Como regla de trabajo, conviene no autorizarlo tampoco en nómina, expedientes de personal ni portales con datos de terceros.

### Plan

De pago.

---

## Resumen de la ficha

| Elemento | Dónde vive el material | Componentes |
|---|---|---|
| Archivos adjuntos | en la conversación | Chat, Design, Cowork, Office, Claude Code |
| Carpeta o repositorio | en tu disco | Cowork, Claude Code |
| Documento abierto | en pantalla, dentro de Office | Office |
| Pestaña del navegador | en una página web | Cowork, Chrome, Claude Code |

La pregunta que resuelve la elección es sencilla: **¿dónde está el material en este momento?** Si está en tu disco y son varios, es carpeta. Si está abierto en Word, es documento abierto. Si está en una página, es pestaña. Si es uno o dos archivos sueltos y la tarea se acaba hoy, es adjunto.
