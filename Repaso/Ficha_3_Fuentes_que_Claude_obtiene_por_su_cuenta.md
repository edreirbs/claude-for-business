# Ficha 3 · Fuentes que Claude obtiene por su cuenta

**Repaso · Claude for Business** — Universidad Panamericana

> **Para qué sirve esta ficha.** Las fuentes de la Ficha 2 las pones tú. Las de esta ficha las va a buscar Claude solo, a internet o a otro sistema de tu organización. Eso cambia dos cosas importantes: primero, tú no viste el material antes de que lo usara, así que la verificación deja de ser opcional; segundo, para llegar a un sistema privado hay que darle una llave, y esa llave casi nunca es tan pequeña como uno cree.

**Los dos elementos de esta ficha:** búsqueda en la web y Research · conectores.

---

## BÚSQUEDA EN LA WEB Y RESEARCH

### Qué es

Son dos cosas distintas que conviene no confundir.

**La búsqueda web** es rápida. Claude hace unas cuantas consultas, abre unas cuantas páginas y contesta con lo que encontró, citando las ligas. Tarda lo que tarda una respuesta normal.

**Research** es una investigación larga. Claude planea una ruta de búsqueda, consulta decenas de fuentes, va profundizando en lo que encuentra y al final entrega un informe estructurado con sus referencias. Tarda varios minutos y trabaja en segundo plano, es decir, puedes cerrar la pestaña y volver después.

La diferencia práctica: la búsqueda web resuelve "cuánto cuesta hoy tal cosa"; Research resuelve "cómo está el mercado de tal cosa y quiénes son los tres competidores relevantes".

### Cuándo se usa

- Necesitas un dato actual que cambia con el tiempo: un tipo de cambio, una tarifa, quién ocupa hoy un cargo, si una norma sigue vigente.
- Necesitas un panorama de algo que no conoces y no sabes ni por dónde empezar a buscar.
- Tienes que sustentar una recomendación ante alguien que va a preguntar de dónde salió cada cifra.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí | Búsqueda web y Research. |
| Design | Sí | Documentado únicamente en el blog de Anthropic de julio de 2026, no en el centro de ayuda. |
| Cowork | Sí | |
| Office | Sí | Documentado de manera indirecta: aparece descrito como una capacidad que un administrador puede apagar. |
| Chrome | No documentado | La documentación no aclara si el panel hace búsqueda web además de leer la pestaña. |
| Claude Code | Sí | |

### Cómo se pide

El error frecuente es pedir "investiga sobre X". Eso devuelve un texto plausible que no se puede auditar. Un encargo de investigación necesita decir qué se busca, con qué criterios y qué hacer cuando las fuentes no coinciden.

```
Investiga [tema] y entrégame:
1. Cinco fuentes, ninguna publicada hace más de dos años.
2. De cada una: quién la publica, en qué fecha, y qué interés podría
   tener en el tema.
3. Los puntos en los que las fuentes están de acuerdo, en una lista.
4. Los puntos en los que se contradicen, con las dos versiones.
   No las promedies ni elijas por mí.
5. Lo que buscaste y no encontraste.
```

Por qué está escrito así, punto por punto:

- **El límite de antigüedad** evita que se apoye en material viejo que sigue circulando en internet.
- **Quién publica y qué interés tiene** es la diferencia entre una cifra de una cámara industrial y la misma cifra de una consultora contratada por esa cámara. Las dos pueden ser correctas y no valen lo mismo.
- **Separar acuerdos de contradicciones** es lo que evita el promedio silencioso, que es cuando un resumen mezcla dos cifras incompatibles en una sola frase y el desacuerdo desaparece.
- **Lo que buscaste y no encontraste** es el punto más útil y el que casi nadie pide. Un hueco declarado te dice a quién tienes que llamar; un hueco escondido te hace tomar una decisión con información incompleta creyendo que está completa.

Para un dato puntual, basta con mucho menos:

```
Necesito [el dato]. Dame la cifra, la fecha de corte, quién la publica
y la liga directa. Si encuentras dos cifras distintas, dame las dos.
```

### Lo que pasa antes de que Research arranque

Research no empieza de inmediato. Primero hace dos cosas que conviene aprovechar en vez de saltarse:

**Te hace preguntas de aclaración.** A veces en texto libre, a veces como opciones para elegir. Contestarlas bien vale más que reescribir el prompt.

**Te pregunta con qué herramientas trabajar**: solo internet, o también los sistemas que tengas conectados. Si el encargo es público, conviene desactivar los conectores para que no mezcle fuentes internas con externas sin avisar.

Una práctica que funcionó bien en clase: antes de lanzarlo, preguntarle qué le falta a tu propio encargo.

```
Antes de lanzar esto como investigación, dime qué le falta a mi prompt
para que el informe sea más útil.
```

### Cómo se sigue mientras trabaja

Research abre un panel donde se ve el plan que armó, las fuentes que va consultando y las sub-investigaciones que abre. Puedes entrar a cada fuente desde ahí.

Ese panel es la herramienta de verificación real: no hay que esperar al informe para saber si va bien encaminado.

Y hay un botón de **detener**. Si ves que va por mal camino, se corta ahí mismo: no hay que esperar los diez minutos ni gastar el consumo completo.

### Cómo se verifica

Las respuestas traen **citas dentro del texto**, que se pueden abrir. Cada afirmación con cita se puede rastrear hasta su fuente sin salir de la conversación.

Abre dos de las ligas al azar y busca la cifra en la página. Este paso no se salta: es la única manera de distinguir una fuente real de una referencia que suena bien.

Si una liga no abre, o abre en una página que no contiene el dato, trata el informe completo con desconfianza y pide que rehaga esa parte.

Y ten presente que **el resultado no es reproducible**: si lanzas la misma búsqueda mañana, las fuentes van a ser otras. No es un fallo, es cómo funciona. Significa que el informe que guardaste es el registro, y que no puedes reconstruirlo repitiendo el prompt.

### Lo que no hace

No garantiza que la fuente sea buena. Encuentra páginas y las cita; juzgar si esa página merece confianza sigue siendo tuyo. Un blog personal indexado en un buscador puede aparecer citado junto a un informe institucional. Por eso el encargo pide quién publica y qué interés tiene: para que tú puedas juzgar.

**Puede citar fuentes que no existen.** Se le llama cita fantasma: una referencia con nombre, año y aspecto verosímil, de un documento que nunca se publicó. Es la razón por la que verificar dos ligas al azar no es exceso de cuidado.

**Sin búsqueda web activada no tiene información actual.** Claude conoce lo que había hasta su fecha de entrenamiento y nada posterior. La conexión a internet no es una propiedad del modelo: es una herramienta que se le agrega, y hay que encenderla.

Conviene también saber apagarla a propósito: cuando trabajas sobre un documento tuyo y no quieres que meta material de internet, se apaga desde el mismo menú.

No sabe lo que pasa dentro de tu organización por esta vía. Para eso están los conectores.

Y una tercera vía que existe en algunos planes corporativos: el **conocimiento interno de la organización**, que permite preguntarle sobre los documentos de tu empresa sin conectar nada. Depende de que tu organización lo tenga habilitado.

### Plan

La búsqueda web y Research son de pago.

---

## CONECTORES

### Qué es

Un conector es una llave que tú le das a Claude para que entre a otro sistema en tu nombre: el correo y los archivos de tu organización, un repositorio de documentos, una herramienta de proyectos, una base de datos.

Por debajo, todos los conectores hablan un mismo estándar llamado **MCP**. Cuando alguien dice "servidor MCP" se refiere al programa que hace de puente entre Claude y ese otro sistema. No hace falta entender el estándar; sí hace falta entender la consecuencia: una vez conectado, Claude puede consultar ese sistema sin que tú le pases los datos a mano, y en muchos casos también puede escribir en él.

### Cuándo se usa

- La información que necesitas está en un sistema de tu organización y exportarla a mano tomaría horas.
- El trabajo consiste justamente en escribir en ese sistema: crear registros, actualizar filas, dejar borradores.
- Necesitas cruzar algo que está en un sistema con algo que está en un archivo tuyo.

### Dónde funciona

| Componente | Funciona | Detalle |
|---|---|---|
| Chat | Sí, con condición | En Team y Enterprise, un Owner debe habilitar los conectores antes de que alguien de la organización pueda usarlos. |
| Design | Sí | Documentado únicamente en el blog de Anthropic de julio de 2026. |
| Cowork | Sí | |
| Office | Sí | Desde el botón + del panel. |
| Chrome | Sí | El panel corre como sesión de Cowork y hereda los conectores que ya tenías. |
| Claude Code | Sí | Los servidores MCP locales, que corren dentro de tu computadora, no funcionan en sesiones de nube. |

Es, junto con los Skills, uno de los dos únicos elementos que funcionan en los seis componentes.

### Cómo se instalan y se encienden

Hay un directorio de conectores dentro de Claude, organizado por categorías, donde se ven los disponibles. Instalar uno abre una pantalla de permisos del propio servicio —la misma que verías al conectar cualquier aplicación— y ahí decides si aceptas. Si no aceptas, el conector simplemente no queda.

Dos cosas que conviene saber:

**Necesitas ya tener cuenta en ese servicio.** El conector no te crea una.

**Se pueden encender y apagar por conversación.** En el menú del símbolo + de cada conversación aparecen los conectores disponibles, y ahí se prenden o se apagan. Conviene apagar los que no vengan al caso, para que Claude no busque en tu correo cuando le preguntaste algo público.

Algunos conectores, además, se reautorizan al empezar cada sesión nueva.

### Cómo se pide

Un conector se autoriza una vez desde la configuración de tu cuenta. En algunos casos hay que encenderlo además en cada sesión nueva.

Una vez puesto, el primer encargo conviene que sea de solo lectura:

```
Busca en [el sistema conectado] los documentos que mencionen [tema]
en los últimos tres meses. Hazme una lista con título, autor, fecha
y liga. No modifiques nada, no crees nada y no borres nada.
```

Por qué está escrito así: la última línea no es cortesía. Con el conector puesto, algunos cambios se ejecutan sin pedirte confirmación, y esa frase es una de las pocas cosas que lo detiene mientras conoces el terreno.

Cuando ya vas a escribir:

```
Antes de escribir nada en [el sistema], enséñame exactamente qué vas
a crear o modificar: qué registro, qué campos y con qué valores.
Espera mi confirmación. Después de hacerlo, dime qué quedó escrito
y dónde, para que yo lo pueda revisar.
```

Por qué está escrito así: convierte una escritura automática en un paso con revisión humana en medio. Es la práctica que evita el accidente más caro con conectores, que es modificar el sistema equivocado sin darse cuenta.

### Cómo se verifica

Entra al sistema por tu cuenta, no por Claude, y confirma que el registro está como dice que quedó. Un conector puede reportar éxito sobre un lugar distinto del que tú tenías en mente.

### Lo que no hace, y el punto de cuidado

Un conector normalmente **no se limita al proyecto en el que estás trabajando**. Da acceso a lo que esa cuenta alcance en ese servicio, no solo a la parte que te interesa. Y una vez aceptado, ese alcance no se recorta después.

Antes de autorizar un conector conviene revisar tres cosas: con qué cuenta lo estás conectando, qué alcanza esa cuenta, y si el conector es de solo lectura o también de escritura. En la mayoría de las organizaciones, la escritura la tiene que habilitar un administrador aparte.

Con el conector puesto, un cambio en el sistema conectado puede no pedir confirmación. Lo único que lo detiene es una regla escrita, y el lugar donde se escriben esas reglas es el tema de la Ficha 4.

### Plan

De pago para la mayoría de los casos. En Team y Enterprise, además, un Owner debe habilitarlos para la organización.

---

## Resumen de la ficha

| Elemento | De dónde trae la información | Qué hay que verificar siempre |
|---|---|---|
| Búsqueda en la web | páginas públicas de internet | que la liga abra y contenga la cifra |
| Research | decenas de páginas, en segundo plano | lo mismo, más los huecos declarados |
| Conectores | sistemas privados de tu organización | que el registro quedó donde tú creías |

Las dos vías tienen el mismo riesgo de fondo: **el material entró sin que tú lo vieras primero.** Por eso las dos plantillas de prompt de esta ficha piden fuente, fecha y liga, y por eso el primer encargo con un conector siempre es de solo lectura.
