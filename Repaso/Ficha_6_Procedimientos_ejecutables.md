# Ficha 6 · Procedimientos ejecutables

**Repaso · Claude for Business** — Universidad Panamericana Aguascalientes

> **Para qué sirve esta ficha.** De los veinticuatro elementos del ecosistema, veintidós son fuentes, reglas o resultados. Los dos de esta ficha son los únicos que *hacen algo*: son procedimientos guardados que se ejecutan. Un Skill es una receta que quieres que salga siempre igual. Un subagente es un ayudante que trabaja aparte, con menos permisos que tú. Se parecen lo suficiente para confundirse y sirven para cosas distintas.

**Los dos elementos de esta ficha:** Skill · subagente.

---

## SKILL

### Qué es

Un Skill es un procedimiento que escribes una vez y se guarda en tu cuenta. A partir de ahí, cuando llega una tarea de ese tipo, Claude lo aplica.

Un Skill tiene dos partes, y la distinción entre ellas es lo más importante de este elemento:

**La descripción.** Una o dos frases que dicen *cuándo* usar el Skill. Esta parte es la que Claude lee para decidir si el Skill entra o no.

**Las instrucciones.** El procedimiento en sí: qué pasos seguir, en qué orden, con qué formato de salida.

Cuando un Skill no se activa, lo que está mal es la descripción, no las instrucciones. La descripción es el letrero de la puerta; las instrucciones son lo que hay adentro. Si el letrero no dice claramente para qué casos sirve, nadie entra.

Como se guarda en tu cuenta, el Skill te sigue: aparece en el chat, en Cowork, en los complementos de Office y en Claude Code, con la misma cuenta y sin volver a instalarlo.

### Cuándo se usa

Cuando hay una tarea que haces con cierta frecuencia y que siempre debe salir igual.

- El acta de junta de tu área, que siempre lleva las mismas secciones en el mismo orden y con la lista de acuerdos al final.
- La revisión de un tipo de documento que siempre se revisa contra los mismos ocho criterios.
- El informe mensual que siempre lleva la misma estructura, aunque los datos cambien.

La señal para crear un Skill es haber escrito el mismo prompt largo tres veces.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí, con condición | Requiere que la ejecución de código esté activada en tu cuenta. |
| Design | Sí | No aparece en la documentación oficial de Claude Design; se verificó directamente en el producto. |
| Cowork | Sí | |
| Office | Sí | Se puede llamar directamente escribiendo `/` en el panel. |
| Chrome | Sí | El panel corre como sesión de Cowork y hereda tus Skills. |
| Claude Code | Sí | La documentación oficial los marca como beta en Claude Code. |

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

Cuando un Skill existe pero no se activa:

```
Tengo un Skill que debería haber entrado en esta tarea y no entró.
Léelo, dime por qué su descripción no coincidió con lo que pedí, y
propón una descripción nueva. No cambies las instrucciones.
```

### Cómo se verifica

Empieza una tarea del tipo que el Skill cubre, con tus palabras normales, y observa si entra solo. Si tienes que llamarlo a mano cada vez, la descripción no está funcionando.

### Lo que no hace

No viaja con un repositorio ni con una carpeta. Es de tu cuenta, así que te sigue a ti. Si un compañero abre tu carpeta, tus Skills no van adentro.

Requiere que la ejecución de código esté activada.

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

### Lo que no hace

No hereda tus permisos. Si no le diste la herramienta de escribir, no la tiene, por más que se lo pidas.

No se activa solo por escribir su nombre: hace falta la arroba.

### Plan

De pago, como Claude Code.

---

## Cómo se elige entre los dos

| | Skill | Subagente |
|---|---|---|
| Para qué | que una tarea salga siempre igual | que una parte del trabajo ocurra aparte, con menos permisos |
| Dónde vive | en tu cuenta | en el repositorio, en `.claude/agents/` |
| A quién sigue | a ti, entre componentes | al repositorio, entre personas |
| Cómo se activa | solo, por su descripción | con arroba y su nombre |
| Dónde funciona | en los seis componentes | solo en Claude Code |

La regla corta: **Skill cuando quieres que salga siempre igual. Subagente cuando quieres que trabaje aparte, o con menos permisos que tú.**

Y una consecuencia que conviene tener presente al trabajar en equipo: si le pasas tu repositorio a alguien, se lleva los subagentes puestos pero no tus Skills. Los Skills son tuyos y te siguen a ti; los subagentes son del repositorio y viajan con él.
