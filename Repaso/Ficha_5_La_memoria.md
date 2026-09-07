# Ficha 5 · La memoria

**Repaso · Claude for Business** — Universidad Panamericana

> **Para qué sirve esta ficha.** La Ficha 4 trata de las reglas que tú escribes. Ésta trata del único elemento que Claude escribe por su cuenta: la memoria. Va sola porque la confusión entre las dos es la más costosa del ecosistema. Cuando alguien dice "es que Claude no se acuerda de lo que le dije", casi siempre está esperando de la memoria algo que le tocaba al `CLAUDE.md` o a las instrucciones de un Project.

**El elemento de esta ficha:** la memoria.

---

## LA MEMORIA

### Qué es

La memoria son notas que Claude escribe sobre ti mientras trabajan juntos, sin que tú se lo pidas. Si en una conversación mencionas que trabajas en el área de compras de una universidad y que prefieres los informes en tablas, puede guardar esas dos cosas y aplicarlas después en otra conversación distinta.

Tres características que conviene tener claras:

**La escribe Claude, no tú.** Tú puedes revisarla, corregirla y borrarla, pero no es un campo que llenes al empezar. Va apareciendo sola.

**Es acumulativa y desordenada por naturaleza.** No es un documento estructurado; son entradas sueltas que se van juntando.

**No es confiable como fuente de reglas.** Que Claude haya guardado algo no garantiza que lo aplique en el momento en que a ti te importa. Para lo que tiene que aplicarse siempre, existen los elementos de la Ficha 4.

### Cuándo se usa

La memoria no se "usa" en el sentido de que la invoques: opera sola. Lo que sí se hace activamente es **revisarla y depurarla**.

- Antes de empezar un trabajo nuevo con criterios distintos a los de siempre, conviene revisar qué tiene guardado, porque puede estar arrastrando una preferencia de otro proyecto.
- Cuando notas que insiste en un formato que ya no quieres, la causa suele estar ahí.
- Cuando cambias de puesto o de área, conviene depurarla, porque lo que aprendió de tu trabajo anterior sigue puesto.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | |
| Cowork | Sí | La memoria opera entre el chat y Cowork en la nube. Además, cada proyecto de Cowork tiene su propia memoria acotada: lo que aprende en un proyecto no pasa a otro. |
| Design | No documentado | La documentación oficial no menciona memoria en Claude Design. |
| Office | No documentado | Lo que sí está documentado es lo contrario: el historial de conversación se guarda localmente en el navegador y no se sincroniza entre dispositivos. |
| Chrome | No documentado | Lo documentado es que las conversaciones quedan en el historial, que es otra cosa. |
| Claude Code | No documentado que sea la misma | Claude Code tiene una memoria automática propia, local a esa computadora, que no se comparte entre máquinas ni con sesiones de nube. |

Ese cuadro explica un caso frecuente: alguien le explica su contexto en el chat, luego abre el complemento de Excel esperando que lo recuerde, y no lo recuerda.

### Los tres interruptores

En la configuración de la cuenta la memoria no es un solo botón, son tres cosas distintas:

| Interruptor | Qué hace |
|---|---|
| **Buscar y referenciar conversaciones** | Deja que Claude vaya a buscar detalles en tus conversaciones pasadas cuando le hace falta. |
| **Generar memoria a partir de tus chats** | Deja que escriba y guarde notas sobre ti. |
| **Importar memoria de otros proveedores** | Trae lo que otra herramienta de inteligencia artificial sabe de ti. Claude te da un texto que pegas en la otra herramienta, y con lo que devuelva arma tu memoria aquí. |

Los dos primeros se pueden tener por separado. Debajo aparece la lista de lo que guardó, y cada entrada se puede borrar por su cuenta.

### La memoria en Cowork y en Claude Code

En Cowork la memoria funciona además **por proyecto**: lo que aprende trabajando en un proyecto no pasa a otro. Y se guarda como archivos de texto en tu computadora, dentro del directorio de Claude, con un archivo índice que resume los demás. Se pueden abrir con cualquier editor de texto, editar a mano y borrar.

Claude Code tiene una memoria automática propia, distinta, que es local a esa computadora y no se comparte entre máquinas ni con las sesiones de nube.

### La alternativa que sí controlas: la bitácora

Cuando lo que quieres es un registro fiable de lo que se hizo —no una nota que Claude decidió guardar— la práctica que funcionó en clase es pedirle un archivo de bitácora en la carpeta:

```
Al terminar, deja en bitacora.md qué cambiaste, qué dejaste pendiente
y por qué. Agrégalo al final del archivo, no lo sobrescribas.
```

Es memoria escrita por Claude, pero a petición tuya, en un archivo que tú puedes leer y versionar. Es especialmente útil en Cowork, donde Claude no versiona los archivos que modifica.

### Cómo se pide

La memoria se administra desde la configuración de tu cuenta, donde se puede ver la lista de lo que guardó, borrar entradas una por una y apagarla por completo.

Dentro de la conversación se le puede pedir directamente:

```
Dime todo lo que tienes guardado en memoria sobre mí y sobre mi trabajo.
Enlístalo entrada por entrada, sin resumirlo.
```

Por qué está escrito así: pedir que no resuma es importante. Un resumen suena razonable y esconde justo la entrada equivocada que quieres encontrar.

Para corregir:

```
Borra de tu memoria lo que tengas sobre [tema o proyecto].
Ya no trabajo en eso y no quiero que lo apliques.
Después de borrarlo, dime qué quedó.
```

Para trabajar sin ella en un caso puntual:

```
Para esta conversación, ignora lo que tengas en memoria sobre formatos
y preferencias. Trabaja únicamente con lo que te diga aquí.
```

### Cómo se verifica

Abre una conversación nueva y pregunta qué recuerda de ti. Lo que enliste es lo que está guardado; lo que no aparezca, no está.

Si acabas de borrar algo, esa misma pregunta confirma que se borró.

### Lo que no hace

**No sustituye a las instrucciones de un Project ni a un `CLAUDE.md`.** Esa es la distinción central de esta ficha:

| | Quién lo escribe | Se aplica |
|---|---|---|
| Instrucciones de Project, `CLAUDE.md`, instrucciones del complemento | tú | siempre, en su ámbito |
| Memoria | Claude | cuando lo considera pertinente |

Si algo tiene que cumplirse sin falta —"toda cifra dice de dónde salió", "los originales no se tocan"— eso se escribe en la Ficha 4, no se deja a la memoria.

**No viaja a otra persona.** Es tuya, atada a tu cuenta.

**No pasa entre proyectos de Cowork.** Lo que aprende trabajando en un proyecto queda en ese proyecto.

### Plan

Gratuita, y viene encendida en los planes Free, Pro y Max. En Team y Enterprise la disponibilidad la controla un administrador, y hasta que él la habilita permanece apagada para las personas de la organización.

---

## Una confusión que conviene deshacer: iterar no es entrenar

Fue la pregunta más importante que se hizo en la primera sesión, y la respuesta merece quedar escrita.

Cuando corriges a Claude varias veces y el resultado mejora, **no estás entrenando al modelo**. El modelo ya viene entrenado de fábrica y eso no cambia con tu uso. Lo que ocurre es que lo estás **condicionando dentro de esa conversación**: le diste más contexto y más correcciones, y por eso responde mejor.

La prueba es sencilla: sal de la conversación, abre una nueva y pídele lo mismo. Vuelve a empezar de cero.

Lo único que sobrevive entre conversaciones es lo que está en las Fichas 4 y 5: la configuración que escribiste, y la memoria que él guardó. Todo lo demás se queda ahí.

Y una cosa más, distinta de la memoria y que conviene no confundir: en la configuración de privacidad hay un interruptor sobre si tus conversaciones se usan para **mejorar los modelos**. Eso no es la memoria, y apagar uno no apaga el otro. Está en la Ficha 0.

---

## Resumen de la ficha

La memoria es una comodidad, no un mecanismo de control.

Sirve para que no tengas que repetir lo obvio cada vez. No sirve para garantizar que una regla se cumpla.

La prueba práctica para decidir dónde escribir algo: **pregúntate qué pasa si esa regla no se aplica una vez.** Si la respuesta es "nada grave, la corrijo y sigo", puede vivir en la memoria. Si la respuesta es "se publica una cifra equivocada" o "se borra un archivo original", tiene que estar escrita en un `CLAUDE.md` o en las instrucciones de un Project.
