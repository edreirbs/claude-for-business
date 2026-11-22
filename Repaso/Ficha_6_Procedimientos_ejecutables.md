# Ficha 6 · Procedimientos ejecutables

**Repaso · Claude for Business** — Universidad Panamericana

> **Para qué sirve esta ficha.** Casi todos los elementos del ecosistema son fuentes, reglas o resultados. Los tres de esta ficha son los únicos que *hacen algo*: son procedimientos guardados que se ejecutan. Un **Skill** es una receta que quieres que salga siempre igual. Un **subagente** es un ayudante que trabaja aparte, con menos permisos que tú. Una **tarea programada** es cualquiera de las dos cosas anteriores, o cualquier encargo, puesto en un horario para que corra sin ti. Se parecen lo suficiente para confundirse y sirven para cosas distintas.

**Los tres elementos de esta ficha:** Skill · subagente · tarea programada.

---

## SKILL

### Qué es

Un Skill es un procedimiento que escribes una vez y se guarda en tu cuenta. A partir de ahí, cuando llega una tarea de ese tipo, Claude lo aplica.

Un Skill tiene dos partes, y la distinción entre ellas es lo más importante de este elemento:

**La descripción.** Una o dos frases que dicen *cuándo* usar el Skill. Esta parte es la que Claude lee para decidir si el Skill entra o no.

**Las instrucciones.** El procedimiento en sí: qué pasos seguir, en qué orden, con qué formato de salida.

Cuando un Skill no se activa, lo que está mal es la descripción, no las instrucciones. La descripción es el letrero de la puerta; las instrucciones son lo que hay adentro. Si el letrero no dice claramente para qué casos sirve, nadie entra.

Como se guarda en tu cuenta, el Skill te sigue: aparece en el chat, en Cowork, en los complementos de Office y en Claude Code, con la misma cuenta y sin volver a instalarlo.

En pantalla, los Skills viven en "Plugins", en la barra lateral, junto con los conectores. El filtro "Skills" muestra solo esos, y los que hiciste tú dicen "Skill · Por ti".

### Cuándo se usa

Cuando hay una tarea que haces con cierta frecuencia y que siempre debe salir igual.

- El acta de junta de tu área, que siempre lleva las mismas secciones en el mismo orden y con la lista de acuerdos al final.
- La revisión de un tipo de documento que siempre se revisa contra los mismos ocho criterios.
- El informe mensual que siempre lleva la misma estructura, aunque los datos cambien.

La señal para crear un Skill es haber escrito el mismo prompt largo tres veces.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí, con condición | Requiere que esté encendido "Crear y editar archivos", en "Configuración" › "Capacidades". |
| Design | Sí | Un diseño se empieza en "Artefactos" › "Diseño". El + de la caja del diseño trae "Plugins", donde están tus Skills. |
| Cowork | Sí | |
| Office | Sí | Se puede llamar directamente escribiendo `/` en el panel. |
| Chrome | Sí | El panel corre como sesión de Cowork y hereda tus Skills. |
| Claude Code | Sí | Se llama escribiendo `/` y su nombre, igual que en el chat. |

Es, junto con los conectores, uno de los dos elementos que funcionan en los seis componentes.

### Cómo se pide

Un Skill se puede escribir a mano, pero lo más práctico es pedirle a Claude que lo arme a partir de un caso que ya salió bien.

```
Este resultado quedó como lo necesito. Conviértelo en un Skill.

En la descripción, escribe cuándo se debe usar, con las palabras que
yo usaría al pedirlo, no con términos técnicos.

En las instrucciones, escribe los pasos en orden, el formato exacto de
salida y qué hacer cuando falte un dato.

Antes de guardarlo, enséñame la descripción para revisarla.
```

Por qué está escrito así: pedir que la descripción use tus palabras es lo que hace que el Skill se active cuando lo necesitas. Si la descripción dice "análisis comparativo de instrumentos contractuales" y tú siempre escribes "revísame este contrato", el Skill nunca va a entrar. Revisar la descripción antes de guardar toma quince segundos y evita el problema entero.

Cuando Claude termina, en el chat aparece la tarjeta "Guardar plugin". Trae el nombre del Skill ("/nombre"), su descripción y "Contenido". Lee ahí la descripción y da "Guardar". Si no te convence, da "Descartar": queda el aviso "Se descartó" con "Deshacer", por si te arrepientes.

Cuando un Skill existe pero no se activa:

```
Tengo un Skill que debería haber entrado en esta tarea y no entró.
Léelo, dime por qué su descripción no coincidió con lo que pedí, y
propón una descripción nueva. No cambies las instrucciones.
```

### Cómo se verifica

Empieza una tarea del tipo que el Skill cubre, con tus palabras normales, y observa si entra solo. Si tienes que llamarlo a mano cada vez, la descripción no está funcionando.

Llamarlo a mano es escribir `/` en la caja y elegirlo de la lista. Sirve para probarlo, no como costumbre.

### Dónde vive un Skill: dos ámbitos

Hay dos lugares distintos donde puede vivir un Skill, y la diferencia importa:

**Skill de la cuenta.** Se sube en "Plugins" › "Agregar" › "Subir plugin". La pantalla "Subir un plugin" acepta un .skill, un .zip o un .md: lo arrastras, revisas la "Vista previa" con su nombre y su descripción, y das "Subir". También es de la cuenta el que guardas desde la tarjeta "Guardar plugin". Aparece en todos tus componentes y todos tus proyectos. Es el caso normal.

**Skill del proyecto.** En Claude Code, un Skill puede vivir dentro de la carpeta del proyecto, en `.claude/skills/`. Solo aplica ahí, y viaja con la carpeta.

Los Skills de la cuenta se pueden **apagar** sin borrarlos, igual que un conector: en la página del Skill, los tres puntos traen "Deshabilitar" y "Eliminar". En esa misma página, "Probar en chat" abre una conversación para probarlo.

### El Skill que crea Skills

Anthropic incluye de fábrica varios Skills, y uno de ellos sirve precisamente para crear otros: se le describe lo que quieres y arma la estructura. Es la vía más rápida cuando no sabes por dónde empezar.

Si prefieres empezar desde la página "Plugins", el botón "Agregar" trae la opción "Crear con Claude".

### Lo que no hace

No viaja con un repositorio ni con una carpeta, salvo el caso del Skill de proyecto en Claude Code. El Skill de cuenta es tuyo, así que te sigue a ti. Si un compañero abre tu carpeta, tus Skills no van adentro.

Requiere que "Crear y editar archivos" esté encendido, en "Configuración" › "Capacidades".

**No se llama con el símbolo @.** Se activa solo por su descripción, o se llama escribiendo `/` y su nombre: en el chat, en los complementos de Office y en Claude Code. En el menú + de la caja ya no hay "Skills" suelto: quedaron dentro de "Plugins".

### Plan

Los Skills están disponibles en todos los planes, incluido el gratuito. Lo que puede estar restringido es el componente donde los uses.

---

## SUBAGENTE

### Qué es

Un subagente es un ayudante que Claude llama para que haga una parte del trabajo por separado, con un conjunto de herramientas recortado.

Lo importante es esa palabra: **recortado**. Cuando defines un subagente, decides qué puede hacer: leer archivos, buscar, escribir, ejecutar comandos. Lo que no le diste, no lo tiene. No hereda tus permisos.

Vive como un archivo de texto dentro de una carpeta especial del repositorio, `.claude/agents/`. Por eso **viaja con el repositorio**: quien copie ese repositorio recibe el subagente ya puesto, sin instalar nada.

### Cuándo se usa

Cuando quieres una revisión independiente, o cuando quieres limitar de antemano lo que se puede tocar.

- Un revisor que lee lo que se va a publicar y opina, pero que no puede modificar ni publicar nada. Se le dan permisos de leer y buscar, y se le quitan los de escribir.
- Un verificador de cifras que compara lo que dice un documento contra los datos de origen y reporta las diferencias, sin corregirlas él.
- Una tarea larga y ruidosa que conviene que ocurra aparte, para que no llene la conversación principal.

### Dónde funciona

| Componente | Funciona |
|---|---|
| Claude Code | Sí |

En ningún otro. Existe donde hay repositorio.

### Cómo se pide

```
Créame un subagente que se llame revisor-antes-de-publicar.

Su trabajo: revisar los archivos que están por publicarse y reportar
tres cosas: cifras que no coincidan con el archivo de origen, ligas
que no abran, y textos de ejemplo que se hayan quedado sin reemplazar.

Sus herramientas: leer archivos y buscar dentro de ellos.
Nada más. Sin escribir, sin editar, sin ejecutar comandos.

Su salida: una lista de hallazgos. Cada uno con el archivo, la línea
y qué está mal. No propone correcciones: solo reporta.
```

Por qué está escrito así: nombrar explícitamente las herramientas que sí tiene, y después decir "nada más", es lo que produce el recorte. Si no lo escribes, el subagente nace con más capacidades de las que querías. Y separar "reporta" de "corrige" es lo que mantiene la decisión en tus manos.

Para llamarlo:

```
@revisor-antes-de-publicar revisa la carpeta antes de que publiquemos.
```

El símbolo @ no es decorativo. **Si escribes el nombre sin la arroba, Claude no llama al subagente: hace la revisión él mismo, con sus propias herramientas, que no están recortadas.** El resultado se parece, pero el recorte que definiste no se aplicó.

### Cómo se verifica

Pídele al subagente algo que esté fuera de sus herramientas, por ejemplo que corrija un archivo. Si el recorte está bien puesto, va a reportar que no puede hacerlo.

### Cómo se encadenan

Un subagente puede disparar a otro. El patrón que se propuso en clase: un subagente audita el código y reporta; un segundo subagente, cuyo disparador es haber recibido ese reporte, aplica las correcciones.

Es la forma de mantener separadas las dos responsabilidades —quien revisa no corrige— sin tener que intervenir tú entre una y otra.

### Lo que no hace

No hereda tus permisos. Si no le diste la herramienta de escribir, no la tiene, por más que se lo pidas. Ese recorte es el punto: un revisor que puede corregir deja de ser un revisor.

No se activa solo por escribir su nombre: hace falta la arroba.

**No es un Skill, aunque se parezcan.** Los dos son archivos de texto con una descripción que funciona como disparador. La diferencia está en dónde viven y en qué pueden hacer: el Skill vive en tu cuenta y usa tus herramientas; el subagente vive en el repositorio y usa solo las que le diste.

### Plan

De pago, como Claude Code.

---

## TAREA PROGRAMADA

### Qué es

Una instrucción que queda agendada y se ejecuta sola con la periodicidad que le indiques. En clase se describió como *"una mini automatización"*.

No hay una sintaxis especial para crearla. Se le pide en lenguaje natural, dentro de la conversación, y Claude reconoce que se trata de algo recurrente. También se puede crear desde "Programadas", en la barra lateral, sin conversación de por medio: "Nueva tarea" › "Crear con Claude" o "Configurar manualmente".

Una tarea programada puede hacer cualquier cosa que Claude sepa hacer en ese componente: leer archivos de la carpeta, actualizar un documento, consultar un sistema conectado, escribir en él, o simplemente avisarte algo.

### Cuándo se usa

Cuando el trabajo es idéntico y recurrente, y lo único que cambia son los datos.

- El primer día de cada mes, tomar los archivos que llegaron a una carpeta y actualizar el concentrado.
- Cada lunes, revisar si hay documentos nuevos en un sistema conectado y dejarte la lista.
- Cinco minutos antes de una reunión recurrente, dejarte preparado el formato de minuta.
- Cada semana, actualizar un tablero con la información más reciente de un archivo.

La señal para crear una tarea programada es haber hecho el mismo encargo tres veces en tres semanas distintas.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | Aparecen en "Programadas", en la barra lateral. Dentro de un proyecto, el panel de la derecha trae además "Programado" › "Agregar". |
| Cowork | Sí, con condición | Si la tarea toca carpetas de tu computadora, la app de escritorio tiene que estar abierta y la computadora encendida y con internet a esa hora. |
| Claude Code | Sí | Se arma en la misma ventana: en "Configuración avanzada" › "General", elegir un "Repositorio" la vuelve tarea de Claude Code. Antes se llamaban rutinas, y ese nombre todavía puede salir. |

En Design, en Office y en Chrome no existen.

### Cómo se pide

Lo importante de una tarea programada no es la periodicidad: es que **nadie la va a estar supervisando**. Por eso el prompt tiene que resolver de antemano qué pasa cuando algo sale distinto de lo previsto.

```
Convierte lo que acabas de hacer en una tarea programada que corra sola
cada [periodicidad] a partir de [cuándo], a las [hora].

Deja el resultado en [dónde], con el nombre [patrón de nombre].

Si un dato no está disponible, no lo inventes: escribe "pendiente" y
dime qué faltó.

Nunca [la acción que no debe hacer nunca, por ejemplo: dar de alta
registros nuevos, borrar filas, mandar correos].

Avísame solo si algo necesita mi decisión.

Antes de agendarla, dime qué vas a necesitar de mi computadora: si
requiere que esté encendida, si necesita internet, y qué pasa si a esa
hora está apagada.
```

Por qué está escrito así, línea por línea:

- **El destino y el nombre** evitan que las corridas se acumulen en lugares distintos. Sin eso, en tres meses tienes doce archivos regados.
- **"No lo inventes: escribe pendiente"** es la regla más importante de toda la ficha. Una tarea desatendida que rellena huecos produce datos falsos que nadie revisó, y eso es peor que no tener el reporte.
- **"Nunca [acción]"** es el freno. En una tarea supervisada tú detienes el error; aquí no hay nadie.
- **"Avísame solo si algo necesita mi decisión"** evita que la automatización se convierta en doce notificaciones inútiles al mes, que es como la gente termina apagándolas.
- **La última pregunta** es la que te dice si la tarea va a funcionar de verdad. Una tarea que necesita tu laptop encendida a las nueve de la noche del jueves no va a correr el jueves que te la lleves apagada.

Si prefieres armarla tú, sin conversación: "Programadas" › "Nueva tarea" › "Configurar manualmente". La ventana "Nueva tarea programada" pide el "Nombre" y las instrucciones; ahí van las reglas del prompt de arriba: dónde dejar el resultado, qué hacer si falta un dato, qué no hacer nunca y cuándo avisarte. En "Activador" eliges "Programación", la frecuencia ("Cada hora", "Diario", "Entre semana", "Semanal" o "Mensual") y la hora. "Configuración avanzada" trae "Proyecto", "Conectores" y "Notificaciones". Al final, "Crear".

La misma ventana muestra el modo de permisos, "Automático": a la hora de la corrida nadie aprueba cada paso. Por eso la línea "Nunca [acción]" es el freno.

### Cómo se verifica

Ejecútala una vez a mano desde "Programadas": los tres puntos de la tarea traen "Ejecutar ahora", que también es el triángulo sin texto. Revisa el resultado antes de dejarla suelta.

Después de la primera corrida automática, abre el archivo que produjo y compáralo contra lo que habrías hecho tú. Si coincide, ya puedes dejar de revisarla; si no, corrige la instrucción y vuelve a probar a mano.

### Cómo se administra

En "Programadas", pestaña "Tuyos", aparecen todas. Los tres puntos de cada una traen "Ejecutar ahora", "Pausar", "Editar" y "Eliminar"; "Eliminar" pide confirmar y borra también su historial. En la app de escritorio, la tarjeta de cada tarea dice además cómo terminó su última corrida, por ejemplo si falló o si necesita algo de ti.

### Lo que no hace

**No corre si la computadora está apagada o la app de escritorio cerrada**, cuando la tarea depende de carpetas locales. La frase de la sesión 5 fue clara: *"si a esa hora la laptop está apagada o dormida, pues no se podrá hacer."*

**Siempre necesita internet**, aunque los archivos sean locales, porque el modelo no vive en tu computadora.

**No se supervisa sola.** Una tarea programada mal escrita produce errores en silencio durante meses. Conviene revisar el resultado cada cierto tiempo aunque parezca que funciona.

**No respeta una regla que no le escribiste.** Todo lo que en una conversación normal corriges sobre la marcha, aquí tiene que estar escrito desde el principio.

### Plan

De pago.

---

---

## Cómo se elige entre los tres

| | Skill | Subagente |
|---|---|---|
| Para qué | que una tarea salga siempre igual | que una parte del trabajo ocurra aparte, con menos permisos |
| Dónde vive | en tu cuenta | en el repositorio, en `.claude/agents/` |
| A quién sigue | a ti, entre componentes | al repositorio, entre personas |
| Cómo se activa | solo, por su descripción, o con `/` y su nombre | con arroba y su nombre |
| Dónde funciona | en los seis componentes | solo en Claude Code |

La regla corta: **Skill cuando quieres que salga siempre igual. Subagente cuando quieres que trabaje aparte, o con menos permisos que tú.**

Y una consecuencia que conviene tener presente al trabajar en equipo: si le pasas tu repositorio a alguien, se lleva los subagentes puestos pero no tus Skills. Los Skills son tuyos y te siguen a ti; los subagentes son del repositorio y viajan con él.
