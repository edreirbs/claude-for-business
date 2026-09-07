# Ficha 0 · Los controles y los ajustes

**Repaso · Claude for Business** — Universidad Panamericana

> **Para qué sirve esta ficha.** Es la ficha cero porque describe lo que se configura **antes** de trabajar, no lo que se hace al trabajar. Tiene dos partes. La primera son las cinco perillas que aparecen alrededor de la caja de texto y que cambian el resultado tanto o más que el prompt: qué modelo, cuánto piensa, qué le dejas hacer, dónde corre y cuánto recuerda. La segunda son los ajustes de tu cuenta: lo que aplica a todas tus conversaciones sin excepción, la privacidad, la administración de tus conversaciones y de dónde se instala cada componente.
>
> Las ocho fichas siguientes describen qué puedes hacer con Claude. Ésta describe en qué condiciones lo vas a hacer.

---

# Parte 1 · Los controles de cada conversación

**Los cinco controles:** el modelo · el nivel de esfuerzo · el modo de permisos · dónde se ejecuta · la capacidad de la conversación.

---

## EL MODELO

### Qué es

Claude no es un solo motor: es una familia de modelos. Todos entienden lo mismo, pero se diferencian en qué tan a fondo razonan, qué tan rápido contestan y cuánto consumen de tu límite de uso.

De menor a mayor capacidad, las familias son **Haiku**, **Sonnet**, **Opus** y el modelo insignia del momento. Los números de versión cambian varias veces al año, así que lo que conviene recordar no son los nombres exactos sino el orden y el criterio.

| Familia | Para qué sirve | Qué cuesta |
|---|---|---|
| **Haiku** | Tareas rápidas y mecánicas: extraer datos de un formato conocido, clasificar, reformatear. | Muy poco. |
| **Sonnet** | El caballo de batalla del trabajo administrativo diario. Redactar, analizar, comparar, revisar. | Moderado. |
| **Opus** | Trabajo que requiere criterio: diseñar una rúbrica, resolver una contradicción, decidir entre alternativas. | Alto. |
| **El insignia** | Lo más complejo, y tiene además un límite semanal propio. | El más alto. |

### Cuándo se cambia

- Cuando el resultado sale plano, incompleto o se salta partes del encargo: sube de familia.
- Cuando la tarea es repetitiva y ya sabes que sale bien: baja de familia y ahorra.
- Cuando Claude se atora en algo y no entiende lo que pides, aunque lo hayas explicado dos veces: sube. En la sesión 6 el profesor lo resumió así: *"a veces Claude no puede resolverlo en Sonnet, pero el mismo prompt en Opus sí lo puede hacer."*

### Dónde funciona

El selector aparece en el chat, en Design, en Cowork y en Claude Code. En los complementos de Office también hay selector, aunque con menos opciones.

### Cómo se pide

No se pide con un prompt: se elige en el menú desplegable que está junto a la caja de texto, antes de mandar el mensaje.

Lo que sí conviene escribir en el prompt es la exigencia, para que el modelo elegido la cumpla:

```
Antes de contestar, dime qué partes de este encargo no vas a poder
cumplir con la información que te di.
```

Esa línea revela si el modelo se quedó corto, en vez de que te entregue algo incompleto con apariencia de completo.

### Cómo se verifica

Compara. Manda el mismo prompt en dos conversaciones con modelos distintos y contrasta. En la sesión 1 el grupo hizo exactamente eso, y la conclusión fue que **un modelo intermedio con nivel de razonamiento alto daba un resultado equiparable al del modelo insignia**, a una fracción del consumo.

### Lo que no hace

Cambiar de modelo no arregla un prompt mal escrito. Si el encargo es ambiguo, el modelo más caro va a producir una respuesta ambigua más elaborada.

### Plan

Los modelos disponibles dependen del plan. En el gratuito el catálogo es reducido.

---

## EL NIVEL DE ESFUERZO

### Qué es

Es cuánto va a razonar Claude antes de contestar: cuántas veces revisa su propio trabajo, cuántas rutas explora, qué tan a fondo revisa el material. Los niveles van de **bajo** a **medio**, **alto**, **extra** y **max**. En Claude Code existe además un nivel superior, **UltraCode**, que trabaja en paralelo.

Aparte del nivel hay un interruptor de **razonamiento extendido** o **pensamiento**, que hace visible el proceso de razonamiento antes de la respuesta.

La imagen que usó el profesor: si le das una hoja de cálculo de diez mil filas y cuarenta columnas, el esfuerzo alto es lo que hace que *"de verdad visite cada celda; los demás a lo mejor se saltarían algunas."*

### Cuándo se cambia

- **Bajo o medio**: tareas mecánicas, o cuando tienes prisa. Es el rango del trabajo diario.
- **Alto**: cuando el resultado tiene que estar completo y no admite omisiones. Es el mejor punto de equilibrio.
- **Extra o max**: análisis largos, decisiones complejas, revisiones exhaustivas de mucho material.
- **UltraCode**, solo en Claude Code: tareas realmente grandes. Consume mucho más rápido porque trabaja en varias cosas a la vez.

### Cómo se verifica

Si al subir el nivel el resultado no mejora, bájalo: estás pagando de más. En la sesión 2 el profesor comprobó justamente eso y lo dijo en voz alta: *"no me dio un resultado mucho mayor por tener el extra, entonces lo voy a quitar, lo voy a bajar a medio."*

### Lo que no hace

Subir el esfuerzo no agrega información que no tienes. Si faltan datos, más razonamiento produce más suposiciones, no más certeza.

Y cuesta tiempo: en la sesión 2 una corrida con esfuerzo extra *"se tardó un chorro"* sin mejorar el resultado.

### Plan

Los niveles superiores consumen más rápido tu límite de uso, y en algunos planes están restringidos.

---

## EL MODO DE PERMISOS

### Qué es

Cuando Claude puede modificar cosas —archivos de tu carpeta, un repositorio, una base de datos— hay que decidir cuánto le dejas hacer sin preguntarte. Ese es el modo de permisos, y es el control más importante de todos, porque es el único que puede evitar un daño irreversible.

Los modos, de más control a menos:

| Modo | Qué hace |
|---|---|
| **Manual / aprobar todo** | Te pregunta antes de cada acción. Nada ocurre sin tu clic. |
| **Plan** | Antes de tocar nada, escribe el plan completo: qué archivos toca, en qué orden y cómo se va a verificar. Tú lo apruebas y luego ejecuta. |
| **Aceptar ediciones** | Aplica las modificaciones de archivos sin preguntar, pero te consulta lo demás. |
| **Auto** | Decide solo, y solo te consulta lo que considera delicado. |
| **Omitir todas las aprobaciones** | Hace lo que crea necesario sin preguntar nada. |

### Cuándo se usa cada uno

**Plan** es el recomendado para trabajo real. Te deja ver el error antes de que ocurra, y de paso ahorra consumo, porque no ejecuta trabajo que ibas a rechazar.

**Manual** cuando el material es delicado o irreemplazable.

**Omitir todas las aprobaciones** solo mientras exploras, en una carpeta de prueba. La advertencia de la sesión 6 fue explícita: *"en esa omisión de permisos nos empieza a generar archivos basura, nos puede eliminar algo que no tenía que eliminar, nos puede hacer cosas que luego ya es difícil recuperar."*

### Dónde funciona

| Componente | Cómo aparece |
|---|---|
| Cowork | Omitir todas las aprobaciones / aprobar manualmente. |
| Claude Code | Los cinco modos: auto, manual, aceptar ediciones, plan, omitir permisos. |
| Office | Preguntar cada modificación / aceptar todas las ediciones / rechazar. |
| Chrome | Se autoriza sitio por sitio, y se puede pedir aprobación por acción. |

En el chat y en Design no aplica: ahí Claude no modifica nada tuyo por su cuenta.

### Cómo se pide

El modo se elige en el menú junto a la caja de texto. Pero además conviene escribirlo en el prompt, porque una instrucción explícita pesa más que el ajuste:

```
No apliques nada todavía. Dame primero el plan por escrito: qué archivos
tocas, qué cambias en cada uno y en qué orden. Si necesitas un dato que
no está, dímelo ahí mismo en vez de suponerlo.
```

Y después, en un segundo mensaje:

```
Ya lo leí y lo corregí. Aplícalo tal como quedó. No repitas el resto
del plan y no me pidas confirmación archivo por archivo.
```

Por qué está escrito así: separar el plan de la ejecución en dos mensajes es la práctica que más errores evitó en el curso. Te deja corregir antes de que el cambio exista, y convierte una acción irreversible en dos pasos reversibles.

### Cómo se verifica

Cuando el modo es plan, el plan aparece en un panel aparte y debe incluir un paso de verificación. Si el plan no dice cómo se comprueba que funcionó, pídeselo antes de aprobarlo.

Además, en Cowork y en Claude Code puedes desplegar cada paso ejecutado y ver exactamente qué comandos corrió. La sesión 6 lo describió como la garantía de que *"no es una caja negra"*.

### Lo que no hace

El modo de permisos no protege lo que está fuera de la carpeta conectada. Protege del exceso de iniciativa, no del alcance mal definido.

Y en Claude Code, el modo de omitir permisos hay que habilitarlo antes en la configuración de la cuenta: no aparece de fábrica.

### Plan

Los modos existen en todos los planes de pago.

---

## DÓNDE SE EJECUTA

### Qué es

En Claude Code, antes de empezar, se elige si la sesión corre **en tu computadora** o **en la nube**.

**Local** significa que Claude trabaja sobre una carpeta de tu disco. Necesita la app de escritorio abierta y, en Windows, que tengas instalado Git.

**En la nube** significa que Claude trabaja en una computadora prestada que está en internet, sobre un repositorio de GitHub. Tu computadora puede estar apagada. Funciona igual desde el navegador que desde la app.

### Cuándo se usa cada uno

- **Local**: cuando los archivos están en tu disco y ahí se tienen que quedar.
- **Nube**: cuando el trabajo vive en un repositorio, cuando quieres publicar algo, o cuando no puedes instalar nada en tu computadora.

### Lo que no hace

En las sesiones de nube no existe el símbolo @ para meter un archivo, no hay chat lateral y no se instalan complementos desde un menú. Tampoco funcionan ahí los conectores que corren dentro de tu propia computadora.

Y el estado de las conexiones queda fijado al arrancar: si empiezas una sesión de nube sin GitHub conectado, hay que cerrar esa sesión y abrir una nueva. No se reconecta en caliente.

### Plan

En cuentas de organización, el administrador puede desactivar la ejecución local, la ejecución en la nube, o conectores concretos. Cuando eso ocurre, no hay nada que el usuario pueda hacer más que solicitarlo.

---

## LA VENTANA DE CONTEXTO

### Qué es

Es cuánto puede recordar Claude dentro de una misma conversación. No es memoria entre conversaciones —eso es la Ficha 5—: es el tamaño del cuaderno de esta conversación.

Cuando se llena, ocurre la **compactación**: Claude resume lo hablado y se queda con lo que considera más importante. En Claude Code se ve como un círculo que pasa de verde a rojo.

Es la razón de tres cosas que se ven en el uso diario:

- Hay un tope de documentos por conversación, alrededor de veinte, porque cada documento ocupa espacio en esa ventana.
- Si cambias de conversación, el contexto no viaja.
- En conversaciones muy largas, Claude empieza a olvidar detalles del principio.

### Cómo se maneja

- Para trabajar sobre un mismo resultado, quédate en la misma conversación.
- Cuando la conversación se alarga demasiado, pídele que guarde lo importante en un archivo antes de seguir.
- En Claude Code hay comandos: `/compact` compacta a mano y permite decir qué conservar; `/clear` vacía la conversación, y presionar Escape dos veces la recupera.

### Cómo se verifica

En Claude Code, mirando el indicador de color. En el resto, la señal es indirecta: cuando Claude empieza a pedirte datos que ya le diste, la ventana se llenó.

### Lo que no hace

La compactación no es gratuita: *"es inevitable que va a perder detalles."* Lo que se compactó ya no vuelve con el mismo nivel de detalle.

---

## Resumen de la primera parte

| Control | Qué decide | Cuándo se toca |
|---|---|---|
| **Modelo** | qué tan a fondo piensa | cuando el resultado sale corto |
| **Nivel de esfuerzo** | cuánto revisa antes de contestar | cuando algo se le escapa |
| **Modo de permisos** | qué puede hacer sin preguntarte | siempre, antes de trabajar sobre archivos reales |
| **Dónde se ejecuta** | en tu disco o en la nube | al abrir una sesión de Claude Code |
| **Capacidad de la conversación** | cuánto recuerda de esta conversación | cuando empieza a olvidar |

La regla corta: **si el resultado salió mal, revisa primero el prompt; si el prompt estaba bien, revisa estos cinco controles antes de concluir que la herramienta no sirve.**

Y una advertencia que atraviesa toda la ficha: **Claude es probabilístico.** El mismo prompt, con los mismos ajustes, puede dar respuestas distintas en dos corridas. No es un error ni es culpa tuya. Significa que la verificación no es opcional, y que un resultado no se puede reproducir a voluntad.

---

# Parte 2 · Los ajustes de tu cuenta

**Los cinco temas:** las instrucciones de perfil · los estilos · la privacidad · la administración de conversaciones · la instalación de cada componente.

---

## LAS INSTRUCCIONES DE PERFIL

### Qué es

En la configuración de la cuenta hay un campo donde se escribe lo que Claude debe saber de ti y cómo debe tratarte **en todas las conversaciones**, sin importar el Proyecto ni el componente.

Es la capa más amplia de todas las de configuración. La Ficha 4 tiene cinco lugares donde se escribe contexto; éste es el sexto, y el único que aplica siempre.

| Capa | Alcance |
|---|---|
| Instrucciones de perfil | todas tus conversaciones |
| Instrucciones de un Proyecto | las conversaciones de ese Proyecto |
| `CLAUDE.md` | el trabajo dentro de esa carpeta |
| Instrucciones del complemento | esa aplicación de Office, en ese dispositivo |
| El prompt | ese mensaje |

Cuando dos capas se contradicen, gana la más específica: tu encargo pesa más que el `CLAUDE.md`, y el `CLAUDE.md` pesa más que el criterio propio de Claude.

### Cuándo se usa

Para lo que quieres siempre, en todo, sin excepción.

- Preferencias de idioma y de estilo de escritura.
- Cómo te llamas y a qué te dedicas, si eso cambia el tono de todo lo que pides.
- Manías legítimas de formato. En clase el ejemplo fue literal: *"no utilices guiones medios."*

### Cómo se pide

```
Trabajo en [área] de [tipo de organización].

Escríbeme siempre en español de México. Puedes usar anglicismos solo
para términos técnicos que no tienen traducción común.

No uses guiones medios ni lenguaje de folleto. Prefiero frases directas.

Cuando una cifra venga de un archivo, dime de cuál.

Si no tienes un dato, escribe "no disponible". No lo estimes.
```

Por qué está escrito así: las dos primeras líneas evitan que repitas tu contexto en cada conversación. Las dos últimas son reglas de verificación, y ponerlas aquí significa que se aplican también cuando trabajas rápido y se te olvida pedirlas.

### Lo que no hace

No sustituye a las instrucciones de un Proyecto. Aquí va lo que aplica a todo tu trabajo; ahí va lo que aplica a un trabajo concreto.

Y conviene mantenerlo corto por la misma razón que el `CLAUDE.md`: viaja con cada mensaje.

### Plan

Gratuito.

---

## LOS ESTILOS

### Qué es

Un estilo es una forma de escribir guardada, que puedes activar en una conversación concreta. Se puede elegir uno de los que vienen o crear el tuyo describiéndolo, o a partir de textos que ya escribiste.

Se diferencia de las instrucciones de perfil en que **se enciende y se apaga por conversación**: puedes tener un estilo para el memo interno y otro para el correo al cliente, y cambiar entre ellos sin reescribir nada.

### Cuándo se usa

Cuando produces textos de tipos distintos que tienen que sonar distinto: el ejecutivo directo, el correo al cliente, la nota interna rápida, el material para alumnos.

### Lo que no hace

No cambia el contenido, solo la forma. Y no se comparte: vive en tu cuenta.

### Plan

Gratuito.

---

## LA PRIVACIDAD

### El ajuste de entrenamiento

En la configuración de la cuenta, en la sección de privacidad, hay un interruptor que permite que tus conversaciones se usen para entrenar y mejorar los modelos. En clase el profesor pidió al grupo apagarlo, y es una recomendación razonable para trabajo profesional.

Apagarlo no borra lo que ya está guardado: solo evita que lo nuevo se use con ese fin.

### Qué se guarda de todas formas

Tus conversaciones quedan almacenadas en los servidores de Anthropic aunque apagues ese interruptor, porque son tu historial. Ese es el punto que conviene tener presente al decidir qué subir.

Hay una excepción documentada: en los complementos de Office el historial se guarda **localmente en el navegador**, no en los servidores, y por eso no se sincroniza entre dispositivos.

### Qué conviene subir y qué no

La regla práctica que se dio en clase, y que funciona bien porque es fácil de recordar: **sube lo que compartirías en LinkedIn.**

No conviene subir:

- Datos personales de terceros: pacientes, alumnos, empleados, clientes identificables.
- Información financiera confidencial de tu organización.
- Credenciales, contraseñas, llaves de acceso, tokens.
- Código fuente propietario, si tu organización lo prohíbe.
- Documentos bajo acuerdo de confidencialidad.

Cuando el documento se necesita pero trae datos sensibles, la salida es **anonimizarlo**: quitar o sustituir los nombres, las cuentas y los identificadores antes de subirlo. El análisis casi siempre funciona igual sin ellos.

Sobre credenciales hay además un comportamiento del producto que conviene conocer: si le pasas una contraseña o una llave de acceso en la conversación, Claude normalmente se niega a trabajar con ella y te recomienda borrarla y cambiarla, porque quedó expuesta.

### Otros ajustes de privacidad

En la misma sección se puede exportar todos tus datos, administrar los artifacts publicados, y controlar el uso de metadatos y de localización aproximada.

### Plan

Los ajustes existen en todos los planes. En Team y Enterprise, algunos los fija el administrador y no se pueden cambiar desde la cuenta.

---

## LA ADMINISTRACIÓN DE CONVERSACIONES

### Qué es

Las conversaciones se acumulan rápido. Hay cuatro operaciones que en clase resultaron útiles y casi nadie conocía.

**Buscar.** Hay un buscador que no busca por título sino por contenido. Sirve justo cuando no recuerdas cómo se llamaba el chat pero sí de qué trataba.

**Fijar.** Deja una conversación arriba de la lista, para el trabajo en curso.

**Renombrar.** Claude nombra las conversaciones solo, y a veces mal. Se pueden renombrar.

**Archivar o eliminar.** Archivar la quita de la vista sin borrarla. Eliminar la borra.

Las cuatro están en el menú de tres puntos que aparece al pasar el cursor sobre la conversación.

### Un detalle que confunde

En Claude Code las conversaciones **no se llaman conversaciones, se llaman sesiones**, y además se pueden agrupar. Y los complementos de Office llevan su propio historial, separado del de Claude: lo que conversaste dentro de Excel no aparece en tu lista normal de conversaciones.

---

## LA INSTALACIÓN DE CADA COMPONENTE

### De dónde sale cada cosa

Casi todo se descarga desde un mismo menú: en Claude, junto a tu nombre, hay un botón de descargas que lista lo que puedes instalar.

| Componente | De dónde se obtiene |
|---|---|
| App de escritorio (Windows y Mac) | Menú de descargas de Claude. |
| App móvil | App Store o Play Store. |
| Complementos de Word, Excel, PowerPoint y Outlook | Microsoft AppSource, la tienda de complementos de Microsoft. También hay acceso desde el menú de descargas de Claude. |
| Extensión de Chrome | Chrome Web Store. Conviene fijarla al lado de la barra de direcciones, desde el ícono de pieza de rompecabezas. |
| Claude Design | No se instala: es una pestaña dentro de Claude. |
| Cowork | No se instala aparte: es un modo dentro de la app de escritorio, que primero hay que activar en la configuración. |
| Claude Code | Es una pestaña dentro de la app de escritorio. |

### El requisito que detuvo la clase

**Claude Code necesita Git instalado.** Git es un programa que lleva el historial de versiones de una carpeta; Claude Code lo usa por debajo.

- En Windows hay que instalarlo aparte, desde el sitio oficial de Git.
- En versiones recientes de macOS ya viene incluido; en versiones anteriores hay que instalarlo por la terminal.

En la sesión 6 la instalación de Git consumió el receso completo y unos quince minutos de clase, y una participante se quedó sin resolverlo. Si vas a usar Claude Code, conviene instalarlo antes y no el mismo día.

### Dos advertencias de instalación

**Usa la app de escritorio, no el navegador**, cuando trabajes con Cowork o con Claude Code en local. Varias de las funciones de esas sesiones solo existen ahí.

**Inicia sesión en la extensión de Chrome con la cuenta que paga tu plan.** La extensión funciona en cualquier perfil de Chrome, pero las capacidades vienen de la cuenta de Claude, no del perfil del navegador.

---

## Resumen de la ficha

**Antes de escribir el prompt**, decide estos cinco:

| Control | Dónde está |
|---|---|
| Modelo | menú junto a la caja de texto |
| Nivel de esfuerzo | el mismo menú |
| Modo de permisos | menú junto a la caja de texto, en Cowork y Claude Code |
| Local o nube | al abrir la sesión de Claude Code |
| Capacidad de la conversación | indicador junto a la caja de texto, en Claude Code |

**Una sola vez, en tu cuenta**, deja resueltos estos cinco:

| Si quieres… | Ve a… |
|---|---|
| que una regla aplique a todo lo que pidas | instrucciones de perfil |
| cambiar el tono según el documento | estilos |
| que tus conversaciones no se usen para entrenar | privacidad |
| encontrar una conversación que no recuerdas | el buscador de conversaciones |
| instalar un componente | el menú de descargas junto a tu nombre |
| usar Claude Code | instalar Git primero |

Y la regla que conviene llevarse de toda la ficha: **antes de subir algo, pregúntate si lo publicarías en LinkedIn.** Si la respuesta es no, anonimízalo o no lo subas.
