/* ==========================================================================
   Cuadernillo de repaso · Claude for Business
   Universidad Panamericana Aguascalientes

   Sitio estático, sin dependencias: lee los .md de /Repaso y los presenta
   como un cuadernillo que se hojea.

   Para agregar o quitar una ficha basta con editar FILES (más abajo):
   el título, el resumen y el índice se leen del propio Markdown.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------ ajustes -- */

  /* El cuadernillo arranca en la Ficha 0. `00_Indice_de_las_fichas.md` se queda
     en el repositorio pero fuera del sitio: describe cómo está organizado el
     material, y esa explicación no se quiso en la web. Para reponerlo, basta
     con volver a listarlo aquí arriba. */
  var FILES = [
    'Repaso/Ficha_0_Los_controles_y_los_ajustes.md',
    'Repaso/Ficha_1_Los_seis_componentes.md',
    'Repaso/Ficha_2_Fuentes_que_proporciona_el_usuario.md',
    'Repaso/Ficha_3_Fuentes_que_Claude_obtiene_por_su_cuenta.md',
    'Repaso/Ficha_4_Configuracion_que_escribe_el_usuario.md',
    'Repaso/Ficha_5_La_memoria.md',
    'Repaso/Ficha_6_Procedimientos_ejecutables.md',
    'Repaso/Ficha_7_Salidas_que_solo_abre_quien_las_produjo.md',
    'Repaso/Ficha_8_Salidas_que_puede_abrir_otra_persona.md'
  ];

  // La página de inicio: la matriz de componentes contra elementos.
  var MATRIZ = 'assets/matriz.json';

  /* Figuras por hoja. Van en un manifiesto aparte y no dentro del Markdown
     porque `sync.sh` espeja la carpeta del curso sobre `Repaso/` con
     `rsync --delete`: cualquier `![imagen]()` escrito ahí se perdería en la
     siguiente sincronización. La clave es el id de la hoja («ficha-1»,
     «ficha-0-el-modelo»). El Markdown también acepta imágenes, para quien
     prefiera escribirlas en su propia copia de las fichas. */
  var FIGURAS = 'assets/figuras.json';

  // SHA-256 de la contraseña del curso: la contraseña no vive en el código.
  var PASS_HASH = '5a5d14a76d3c8e7326bfc10545ee01170d06758d87f87aa96ac7193d065e696f';

  var K_KEY = 'cfb.key', K_THEME = 'cfb.theme';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  var reduceMotion = function () {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  };

  /* ------------------------------------------------------------- texto --- */

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function fold(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
  function slug(s) {
    return fold(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'x';
  }
  /** Como esc(), pero además apto para el valor de un atributo. */
  function escA(s) {
    return esc(s).replace(/"/g, '&quot;');
  }

  /** Formato en línea: `código`, **negritas**, *cursivas*, [liga](url). */
  function inline(src) {
    var codes = [];
    var s = esc(src).replace(/`([^`]+)`/g, function (_, c) {
      codes.push(c);
      return '\u0000' + (codes.length - 1) + '\u0000';
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[\s(¡¿"'—–-])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return s.replace(/\u0000(\d+)\u0000/g, function (_, i) { return '<code>' + codes[i] + '</code>'; });
  }

  /* -------------------------------------------------- Markdown -> HTML --- */

  var BADGES = { 'si': 'yes', 'si, con condicion': 'cond', 'no': 'no', 'no documentado': 'undoc' };

  function tableCell(raw) {
    var b = BADGES[fold(raw)];
    return b ? '<span class="badge badge-' + b + '">' + esc(raw) + '</span>' : inline(raw);
  }

  function splitRow(row) {
    var t = row.trim();
    if (t.charAt(0) === '|') t = t.slice(1);
    if (t.charAt(t.length - 1) === '|') t = t.slice(0, -1);
    return t.split('|').map(function (c) { return c.trim(); });
  }

  /* Una imagen sola en su renglón. La misma expresión decide que ese renglón no
     es un párrafo: si un `![…]` no coincide aquí —un pie escrito después, un
     nombre de archivo con espacios— tiene que seguir viéndose como texto. */
  var IMG_SOLA = /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/;

  /**
   * Una figura del cuadernillo. La usan las dos vías —el manifiesto y la
   * imagen escrita en el Markdown—, para que no puedan separarse.
   * `capHTML` llega ya escapado por quien llama: uno pasa texto plano y el
   * otro, formato en línea. `attr` es el atributo `class` de la figura.
   */
  function shotHTML(src, alt, capHTML, attr) {
    alt = alt || '';
    return '<figure' + (attr || ' class="shot"') + '>' +
      /* El nombre accesible del botón lleva la descripción: un `aria-label`
         suelto ganaría sobre el `alt` y las figuras se anunciarían todas
         iguales, «Ver en grande», sin decir qué se ve. */
      '<button class="shot-open" type="button" aria-label="' +
        escA(alt ? 'Ver en grande: ' + alt : 'Ver la figura en grande') + '">' +
      '<img src="' + escA(src) + '" alt="' + escA(alt) +
      '" loading="lazy" decoding="async"></button>' +
      (capHTML ? '<figcaption>' + capHTML + '</figcaption>' : '') +
    '</figure>';
  }
  function renderBody(md, opts) {
    var lines = md.replace(/\r\n?/g, '\n').split('\n');
    var out = '', sec = null, cards = null, card = null, i = 0;

    /* Una hoja de elemento ya viene sin su `##`, así que se abre la sección
       de entrada para que sus campos sigan formando la rejilla. */
    if (opts && opts.section) { sec = ''; cards = ''; }

    /* Tres niveles: la hoja, la sección de cada elemento (##) y la tarjeta de
       cada campo (###). Los campos van en rejilla para que se vean varios a la
       vez, en vez de una sola columna larga. */
    function push(html) {
      if (card !== null) card += html;
      else if (sec !== null) sec += html;
      else out += html;
    }
    /** Añade `reveal` solo fuera de las tarjetas: adentro anima la tarjeta entera. */
    function cls(base) {
      var c = card === null ? (base ? base + ' reveal' : 'reveal') : base;
      return c ? ' class="' + c + '"' : '';
    }
    function closeCard() {
      if (card === null) return;
      var wide = /<table|class="prompt"/.test(card) ? ' is-wide' : '';
      cards += '<div class="field' + wide + ' reveal">' + card + '</div>';
      card = null;
    }
    function closeSec() {
      closeCard();
      if (cards) sec += '<div class="fields">' + cards + '</div>';
      cards = null;
      if (sec !== null) {
        var kind = sec.indexOf('class="fields"') === -1 ? '' : ' has-fields';
        out += '<section class="element' + kind + '">' + sec + '</section>';
        sec = null;
      }
    }
    function nextMeaningful(from) {
      var j = from;
      while (j < lines.length && !lines[j].trim()) j++;
      return j < lines.length ? lines[j] : '';
    }

    while (i < lines.length) {
      var L = lines[i];
      if (!L.trim()) { i++; continue; }

      /* bloque de prompt */
      if (/^\s*```/.test(L)) {
        var buf = [];
        i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        push(
          '<figure' + cls('prompt') + '>' +
            '<div class="prompt-bar"><span class="prompt-tag">Prompt</span>' +
            '<button class="copy" type="button">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/>' +
              '<path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg><span>Copiar</span></button></div>' +
            '<pre><code>' + esc(buf.join('\n')) + '</code></pre>' +
          '</figure>'
        );
        continue;
      }

      /* imagen sola en su renglón: se muestra como figura con pie. El pie es
         el título entre comillas; el texto alternativo no sirve de pie, porque
         está escrito para quien no puede ver la imagen, no para acompañarla. */
      var img = IMG_SOLA.exec(L.trim());
      if (img) {
        push(shotHTML(img[2], img[1], img[3] ? inline(img[3]) : '', cls('shot')));
        i++;
        continue;
      }

      /* tabla */
      if (L.trim().charAt(0) === '|' && /^\s*\|?[\s:|-]*-[\s:|-]*\|/.test(lines[i + 1] || '')) {
        var rows = [];
        while (i < lines.length && lines[i].trim().charAt(0) === '|') { rows.push(lines[i]); i++; }
        var head = splitRow(rows[0]);
        var html = '<div' + cls('table-wrap') + '><table><thead><tr>';
        head.forEach(function (h) { html += '<th>' + inline(h) + '</th>'; });
        html += '</tr></thead><tbody>';
        rows.slice(2).forEach(function (r) {
          html += '<tr>';
          splitRow(r).forEach(function (c, n) {
            var label = head[n] || '';
            html += '<td' + (label ? ' data-label="' + esc(label) + '"' : '') + '>' + tableCell(c) + '</td>';
          });
          html += '</tr>';
        });
        push(html + '</tbody></table></div>');
        continue;
      }

      /* encabezado */
      var h = L.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        var lvl = h[1].length, txt = h[2].trim();
        var head = '<h' + lvl + ' id="' + slug(txt) + '"';
        if (lvl <= 2) {
          closeSec();
          sec = '';
          cards = '';
          push(head + ' class="reveal">' + inline(txt) + '</h' + lvl + '>');
        } else if (lvl === 3 && cards !== null) {
          closeCard();
          card = head + '>' + inline(txt) + '</h' + lvl + '>';
        } else {
          push(head + '>' + inline(txt) + '</h' + lvl + '>');
        }
        i++;
        continue;
      }

      /* regla: se omite cuando solo separa dos secciones */
      if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(L)) {
        if (!/^#{1,6}\s/.test(nextMeaningful(i + 1))) push('<hr>');
        i++;
        continue;
      }

      /* cita = llamada de entrada de la ficha */
      if (/^\s*>/.test(L)) {
        var q = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) { q.push(lines[i].replace(/^\s*>\s?/, '')); i++; }
        push('<blockquote' + cls('lede') + '>' + renderBody(q.join('\n')) + '</blockquote>');
        continue;
      }

      /* listas */
      var isUl = /^\s*[-*+]\s+/.test(L), isOl = /^\s*\d+\.\s+/.test(L);
      if (isUl || isOl) {
        var tag = isUl ? 'ul' : 'ol', items = [], item = null;
        var re = isUl ? /^\s*[-*+]\s+/ : /^\s*\d+\.\s+/;
        while (i < lines.length) {
          var Li = lines[i];
          if (re.test(Li)) {
            if (item !== null) items.push(item);
            item = Li.replace(re, '');
            i++;
          } else if (Li.trim() && item !== null && /^\s{2,}\S/.test(Li)) {
            item += ' ' + Li.trim();
            i++;
          } else { break; }
        }
        if (item !== null) items.push(item);
        push('<' + tag + cls('') + '>' + items.map(function (t) {
          return '<li>' + inline(t) + '</li>';
        }).join('') + '</' + tag + '>');
        continue;
      }

      /* párrafo */
      var p = [];
      while (i < lines.length && lines[i].trim() &&
             !IMG_SOLA.test(lines[i].trim()) &&
             !/^\s*(#{1,6}\s|>|```|\||[-*+]\s|\d+\.\s|(-{3,}|\*{3,}|_{3,})\s*$)/.test(lines[i])) {
        p.push(lines[i].trim());
        i++;
      }
      if (!p.length) { i++; continue; }
      var body = inline(p.join(' '));
      push('<p' + cls(/^<strong>[^<]*:<\/strong>/.test(body) ? 'note' : '') + '>' + body + '</p>');
    }

    closeSec();
    return out;
  }

  /* --------------------------------------------------- ficha -> objeto --- */

  /** Quita blancos sobrantes y la regla `---` con la que cierra cada bloque. */
  function trimBlock(s) {
    s = s.replace(/^(?:[ \t]*\n)+/, '').replace(/(?:[ \t]*\n)+$/, '');
    s = s.replace(/\n[ \t]*(?:-{3,}|\*{3,}|_{3,})[ \t]*$/, '');
    return s.replace(/(?:[ \t]*\n)+$/, '');
  }

  /**
   * Parte una ficha en su entrada y sus elementos (`##`).
   *
   * Un `#` posterior al título es un divisor de parte —la Ficha 0 se divide en
   * «Parte 1 · Los controles de cada conversación» y «Parte 2 · Los ajustes de
   * tu cuenta»—: agrupa los elementos que lo siguen y no se pinta como título.
   *
   * Todo esto respeta los bloques de código: la Ficha 4 trae un CLAUDE.md de
   * ejemplo cuyas líneas empiezan con `#` y `##` y no son encabezados.
   */
  function splitParts(md) {
    var lines = md.replace(/\r\n?/g, '\n').split('\n');
    var intro = [], parts = [], groups = [];
    var cur = null, group = null, fence = false, m;

    for (var i = 0; i < lines.length; i++) {
      if (/^\s*```/.test(lines[i])) fence = !fence;

      m = fence ? null : lines[i].match(/^#\s+(.*)$/);
      if (m) {
        group = { title: m[1].trim(), lines: [], parts: [] };
        groups.push(group);
        cur = null;
        continue;
      }

      m = fence ? null : lines[i].match(/^##\s+(.*)$/);
      if (m) {
        cur = { title: m[1].trim(), lines: [], group: group };
        parts.push(cur);
        if (group) group.parts.push(cur);
        continue;
      }

      (cur ? cur.lines : group ? group.lines : intro).push(lines[i]);
    }

    parts.forEach(function (p) { p.md = trimBlock(p.lines.join('\n')); });
    groups.forEach(function (g) { g.intro = trimBlock(g.lines.join('\n')); });
    return { intro: trimBlock(intro.join('\n')), parts: parts, groups: groups };
  }

  /** Primera frase del «Qué es» de un elemento, para las tarjetas de entrada. */
  function gist(md) {
    var body = md.split(/^###\s+.*$/m);
    var text = (body[1] || body[0] || '').split(/\n[ \t]*\n/).filter(function (b) {
      return b.trim() && !/^[#>|`\-*]/.test(b.trim());
    })[0] || '';
    text = text.replace(/[*`]/g, '').replace(/\s+/g, ' ').trim();
    var cut = text.indexOf('. ');
    if (cut > 40) text = text.slice(0, cut + 1);
    if (text.length > 150) text = text.slice(0, 147).replace(/\s\S*$/, '') + '…';
    return text;
  }

  function parseFicha(file, md) {
    var lines = md.replace(/\r\n?/g, '\n').split('\n');
    var title = '', sub = '', k = 0, m;

    for (; k < lines.length; k++) {
      m = lines[k].match(/^#\s+(.*)$/);
      if (m) { title = m[1].trim(); k++; break; }
    }
    var j = k;
    while (j < lines.length && !lines[j].trim()) j++;
    if (j < lines.length && /^\*\*/.test(lines[j]) && /Panamericana/i.test(lines[j])) {
      sub = lines[j].replace(/\*\*/g, '').trim();
      k = j + 1;
    }
    var rest = lines.slice(k).join('\n').replace(/^(?:[ \t]*\n)+/, '').replace(/^-{3,}[ \t]*\n/, '');

    var num = '·', label = title;
    m = title.match(/^Ficha\s+(\d+)\s*[·:.-]\s*(.+)$/i);
    if (m) {
      num = m[1];
      label = m[2];
    } else if (/[ií]ndice/i.test(title)) {
      num = 'i';
      label = 'Índice de las fichas';
    }

    var name = file.split('/').pop();
    var fn = name.match(/^Ficha_(\d+)_/);
    var id = fn ? 'ficha-' + fn[1] : (num === 'i' ? 'indice' : slug(name.replace(/\.md$/, '')));

    var split = splitParts(rest);
    return {
      id: id, file: file, title: title, sub: sub, num: num, label: label,
      raw: rest, intro: split.intro, parts: split.parts, groups: split.groups
    };
  }

  /**
   * Aplana las fichas en hojas. Una ficha con campos (`###`) se abre en una
   * portadilla más una hoja por elemento: así cada vuelta de página cabe en
   * una o dos pantallas en vez de pedir diez de scroll. Las que no los tienen
   * —el índice— se quedan enteras.
   */
  function buildPages(fichas) {
    var list = [];
    fichas.forEach(function (f) {
      f.first = list.length;
      if (f.matrix) {
        list.push({ id: f.id, kind: 'matrix', ficha: f, label: f.label, md: f.md, ord: 1, html: null });
        f.count = 1;
        return;
      }
      var hasFields = f.parts.some(function (p) { return /^###\s/m.test(p.md); });
      if (!hasFields || !f.parts.length) {
        list.push({ id: f.id, kind: 'whole', ficha: f, label: f.label, md: f.raw, html: null });
      } else {
        list.push({ id: f.id, kind: 'intro', ficha: f, label: f.label, md: f.intro, html: null });
        f.parts.forEach(function (p) {
          p.page = list.length;
          list.push({
            id: f.id + '-' + slug(p.title), kind: 'part', ficha: f,
            label: p.title, group: p.group, md: p.md, html: null
          });
        });
      }
      f.count = list.length - f.first;
      for (var n = f.first; n < list.length; n++) { list[n].ord = n - f.first + 1; }
    });
    return list;
  }

  /* -------------------------------------------------------- estructura --- */

  var gate = $('#gate'), app = $('#app'), sheet = $('#sheet'), veil = $('#turnVeil');
  var fichas = [], pages = [];
  var cur = 0, turning = false, io = null;

  function pageIndexById(id) {
    for (var i = 0; i < pages.length; i++) if (pages[i].id === id) return i;
    return -1;
  }

  /* ------------------------------------------- tableros «dónde funciona» -- */

  /* Estos tableros no se escriben: se leen de la tabla «Dónde funciona» que ya
     trae cada elemento. Así no pueden contradecir al texto que tienen debajo,
     y se actualizan solos cuando alguien edita la ficha. */

  var COMPS = [
    { k: 'chat', t: 'Chat' }, { k: 'design', t: 'Design' }, { k: 'cowork', t: 'Cowork' },
    { k: 'office', t: 'Office' }, { k: 'chrome', t: 'Chrome' }, { k: 'code', t: 'Claude Code' }
  ];
  var REACH = { yes: 'Sí', cond: 'Con condición', undoc: 'No documentado', no: 'No', none: 'No listado' };

  /**
   * Los componentes que nombra una celda. Varias tablas juntan los que se
   * comportan igual en un solo renglón —«Design, Office, Chrome»—: si eso no se
   * separa, la ficha dice una cosa y el tablero de arriba dice otra.
   */
  function compsDe(celda) {
    return String(celda == null ? '' : celda).split(/\s*(?:,|\/|·| y )\s*/)
      .map(function (nombre) {
        var hit = null;
        COMPS.forEach(function (x) { if (fold(x.t) === fold(nombre)) hit = x; });
        return hit;
      }).filter(Boolean);
  }

  function reachState(v) {
    var f = fold(v);
    if (f === 'si') return 'yes';
    if (f.indexOf('si,') === 0) return 'cond';
    if (f.indexOf('no documentado') === 0) return 'undoc';
    if (f === 'no') return 'no';
    return null;
  }

  /**
   * Busca la tabla «Componente · Funciona» de un elemento y la clasifica.
   * Devuelve null si no encuentra ninguna o si alguna celda no es un sí/no:
   * hay tablas con esa cabecera cuyo contenido es prosa —los modos de permisos
   * de la Ficha 0— y de ésas no se puede sacar un tablero.
   */
  function reachOf(md) {
    var lines = md.split('\n'), fence = false;
    for (var i = 0; i < lines.length; i++) {
      if (/^\s*```/.test(lines[i])) { fence = !fence; continue; }
      if (fence || !/^\|\s*Componente\s*\|\s*Funciona\s*\|/i.test(lines[i])) continue;

      var map = {}, n = 0, ok = true;
      for (var j = i + 2; j < lines.length && lines[j].trim().charAt(0) === '|'; j++) {
        var c = splitRow(lines[j]), comps = compsDe(c[0]);
        if (!comps.length) continue;
        var st = reachState(c[1] || '');
        if (!st) { ok = false; break; }
        comps.forEach(function (comp) { map[comp.k] = st; n++; });
      }
      /* Basta un renglón: varias tablas listan solo los componentes donde el
         elemento sí funciona, y omiten el resto en vez de escribir «No». */
      if (ok && n >= 1) return map;
    }
    return null;
  }

  /**
   * Franja bajo el título de un elemento. Muestra **solo** los componentes que
   * la tabla nombra: si la ficha no menciona uno, la franja tampoco lo inventa
   * —ni como «sí» ni como «no»—.
   */
  function reachHTML(map) {
    if (!map) return '';
    var cells = COMPS.filter(function (c) { return map[c.k]; }).map(function (c) {
      return '<div class="reach-cell is-' + map[c.k] + '">' +
        '<span class="reach-k">' + esc(c.t) + '</span>' +
        '<span class="reach-v">' + esc(REACH[map[c.k]]) + '</span></div>';
    }).join('');
    if (!cells) return '';
    return '<div class="reach reveal" role="group" aria-label="Dónde funciona este elemento">' +
      '<p class="reach-h">Dónde funciona</p><div class="reach-row">' + cells + '</div></div>';
  }

  /** Tablero de la ficha completa, en su portadilla: elementos por componente. */
  function boardHTML(f) {
    var rows = [];
    f.parts.forEach(function (p) {
      var m = reachOf(p.md);
      if (m) rows.push({ t: p.title, m: m, page: p.page });
    });
    if (rows.length < 2) return '';

    var head = COMPS.map(function (c) {
      return '<div class="board-col"><span>' + esc(c.t) + '</span></div>';
    }).join('');
    var body = rows.map(function (r) {
      return '<button class="board-row" data-go="' + r.page + '">' + esc(r.t) + '</button>' +
        COMPS.map(function (c) {
          /* El punto no puede ser solo color y `title`: en el celular no hay
             globo y un `<span>` vacío no se lee. La palabra va escrita, oculta
             a la vista pero no al lector de pantalla. */
          var s = r.m[c.k] || 'none', dice = c.t + ': ' + REACH[s];
          return '<span class="board-dot is-' + s + '" title="' + escA(dice) + '">' +
            '<i aria-hidden="true"></i><span class="vh">' + esc(dice) + '</span></span>';
        }).join('');
    }).join('');

    return '<div class="board reveal">' +
      '<p class="board-h">Dónde funciona · según la tabla de cada elemento</p>' +
      '<div class="board-wrap"><div class="board-grid">' +
        '<div class="board-corner"></div>' + head + body +
      '</div></div>' +
      '<p class="board-key">' + ['yes', 'cond', 'undoc', 'no'].map(function (s) {
        return '<span class="board-legend"><span class="board-dot is-' + s + '"><i></i></span>' +
          esc(REACH[s]) + '</span>';
      }).join('') +
        '<span class="board-legend board-legend-none">sin marca · no aparece en esa tabla</span>' +
      '</p></div>';
  }

  /* -------------------------------------------------------------- matriz -- */

  /* La matriz se dibuja desde `assets/matriz.json`, no como SVG escrito a mano:
     así se edita un renglón sin recalcular coordenadas. La geometría es la
     misma retícula de siempre —105 px entre columnas, 34 px entre renglones—. */
  var MX = { x0: 538.5, colw: 105, row: 34, gap: 36, sep: 29, top: 100, w: 1144 };

  /** Tramos contiguos de columnas donde el elemento sí funciona. */
  function mxRuns(row, cols) {
    var out = [], i = 0, j;
    while (i < cols.length) {
      if (!row.c[cols[i].k]) { i++; continue; }
      j = i;
      while (j + 1 < cols.length && row.c[cols[j + 1].k]) j++;
      out.push([i, j]);
      i = j + 1;
    }
    return out;
  }

  function matrixSVG(m) {
    var cols = m.cols;
    var cx = cols.map(function (_, i) { return MX.x0 + i * MX.colw; });
    var y = MX.top, seps = [], body = '', hits = '', k = 0, H = 0;

    m.groups.forEach(function (g, gi) {
      var labelY = y, first = labelY + MX.gap;
      body += '<text class="mx-grouplab mx-g-' + g.k + '" x="20" y="' + labelY + '">' + esc(g.t) +
        '<tspan class="mx-groupsub"> · ' + esc(g.s) + '</tspan></text>' +
        '<line class="mx-ghair mx-g-' + g.k + '" x1="420" x2="462" y1="' + (labelY - 4.5) +
        '" y2="' + (labelY - 4.5) + '"/><g class="mx-g-' + g.k + '">';

      g.rows.forEach(function (r, ri) {
        var ry = first + ri * MX.row, cy = ry - 5;
        body += '<text class="mx-rowlab" x="20" y="' + ry + '">' + esc(r.t) +
          '<tspan class="mx-gloss"> · ' + esc(r.g) + '</tspan></text>';
        mxRuns(r, cols).forEach(function (run) {
          body += '<rect class="mx-bar" x="' + (cx[run[0]] - 40) + '" y="' + (ry - 16.5) +
            '" width="' + (80 + MX.colw * (run[1] - run[0])) + '" height="23" rx="7"/>';
        });
        cols.forEach(function (c, ci) {
          var cell = r.c[c.k];
          if (!cell) {
            body += '<circle class="mx-no" cx="' + cx[ci] + '" cy="' + cy + '" r="2"/>';
            return;
          }
          body += '<circle class="mx-dot" id="mxd' + k + '" cx="' + cx[ci] + '" cy="' + cy + '" r="4"/>';
          hits += '<circle class="mx-hit" data-k="' + k + '" tabindex="0" role="button"' +
            ' aria-label="' + escA(r.t + ' en ' + c.t) + '"' +
            ' data-t="' + escA(r.t + '  ·  ' + c.t) + '"' +
            ' data-d="' + escA(cell[0]) + '"' +
            (cell[1] ? ' data-n="' + escA(cell[1]) + '"' : '') +
            ' cx="' + cx[ci] + '" cy="' + cy + '" r="14"/>';
          k++;
        });
      });

      body += '</g>';
      var last = first + (g.rows.length - 1) * MX.row;
      if (gi < m.groups.length - 1) { seps.push(last + MX.sep); y = last + MX.sep * 2; }
      else { H = last + MX.row; }
    });

    var pre = '';
    cx.forEach(function (x) {
      pre += '<rect class="mx-cband" x="' + (x - 49.5) + '" y="72" width="99" height="' + (H - 84) + '" rx="9"/>';
    });
    cols.forEach(function (c, i) {
      pre += '<text class="mx-colh" x="' + cx[i] + '" y="46">' + esc(c.t) + '</text>' +
        '<text class="mx-colsub" x="' + cx[i] + '" y="63">' + esc(c.s) + '</text>';
    });
    var lines = seps.map(function (sy) {
      return '<line class="mx-sep" x1="20" x2="1124" y1="' + sy + '" y2="' + sy + '"/>';
    }).join('');

    return '<svg class="mx-svg" viewBox="0 0 ' + MX.w + ' ' + H + '" role="img" aria-label="' +
      escA('Matriz de los elementos de Claude cruzados con los seis componentes donde funcionan.') +
      '">' + pre + body + lines + '<g>' + hits + '</g></svg>';
  }

  var figuras = {};

  /** Figuras enganchadas a una hoja desde el manifiesto. */
  function figurasHTML(id) {
    var list = figuras[id];
    if (!list || !list.length) return '';
    return list.map(function (f) {
      /* `gen` pide una figura que el sitio dibuja con los datos que ya tiene,
         en vez de un archivo: así no puede quedarse vieja. */
      if (f.gen) {
        var svg = GENERADAS[f.gen] ? GENERADAS[f.gen]() : '';
        return svg ? '<figure class="shot reveal">' + svg +
          (f.cap ? '<figcaption>' + esc(f.cap) + '</figcaption>' : '') + '</figure>' : '';
      }
      return shotHTML(f.src, f.alt, f.cap ? esc(f.cap) : '', ' class="shot reveal"');
    }).join('');
  }

  function matrixHTML(m) {
    /* `sub` y los textos de `lee` traen <b> y <code> a propósito: son contenido
       autorizado del repositorio, no algo que escriba quien visita la página. */
    var lee = m.lee.map(function (b) {
      return '<div><h2>' + esc(b[0]) + '</h2><p>' + b[1] + '</p></div>';
    }).join('');
    return head(m.kicker, m.title) +
      '<p class="mx-sub reveal">' + m.sub + '</p>' +
      '<div class="mx-lee reveal">' + lee + '</div>' +
      /* El globo va fuera del contenedor con scroll: `overflow-x:auto` obliga
         a `overflow-y:auto`, y ahí dentro se le cortaría la parte de arriba. */
      '<div class="mx-canvas reveal"><div class="mx-scroll">' + matrixSVG(m) + '</div>' +
        '<div class="mx-tip" role="status" aria-live="polite"></div></div>';
  }

  /**
   * Abre una figura a pantalla completa. Se cierra al hacer clic o con Escape,
   * y mientras está abierta la página de abajo no se mueve ni se hojea.
   */
  function openShot(img) {
    if (!img || $('.lightbox')) return;
    var vuelve = document.activeElement;
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.tabIndex = -1;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', img.getAttribute('alt') || 'Figura');
    box.innerHTML = '<img src="' + escA(img.getAttribute('src')) + '" alt="' +
      escA(img.getAttribute('alt') || '') + '">';
    box.cierra = function () {
      box.remove();
      document.body.classList.remove('is-zoom');
      if (vuelve && vuelve.focus) vuelve.focus();
    };
    box.addEventListener('click', box.cierra);
    document.body.classList.add('is-zoom');
    document.body.appendChild(box);
    box.focus();
  }

  function mxHide() {
    var on = $('.mx-dot.on', sheet);
    if (on) on.classList.remove('on');
    var tip = $('.mx-tip', sheet);
    if (tip) tip.classList.remove('on');
  }

  function mxShow(hit) {
    var canvas = hit.closest('.mx-canvas'), tip = canvas && $('.mx-tip', canvas);
    if (!tip) return;
    mxHide();
    var dot = document.getElementById('mxd' + hit.getAttribute('data-k'));
    if (dot) dot.classList.add('on');

    var nota = hit.getAttribute('data-n');
    tip.innerHTML = '<span class="mx-tt">' + esc(hit.getAttribute('data-t')) + '</span>' +
      '<p class="mx-td">' + esc(hit.getAttribute('data-d')) + '</p>' +
      (nota ? '<p class="mx-tn"><b>Salvedad</b>' + esc(nota) + '</p>' : '');
    tip.classList.add('on');

    /* Ambos rectángulos son relativos al viewport, así que el scroll horizontal
       de la matriz ya viene descontado: no hay que sumarlo. */
    var cb = canvas.getBoundingClientRect(), r = hit.getBoundingClientRect();
    var w = tip.offsetWidth, h = tip.offsetHeight, pad = 12;
    var x = r.left - cb.left + r.width / 2;
    var y = r.top - cb.top;

    /* Arriba por defecto; abajo cuando no cabe. El umbral es la barra superior
       fija, no el borde de la ventana: si no, se metería debajo de ella. */
    var below = r.top - h - 16 < 72;
    tip.classList.toggle('below', below);
    tip.style.top = (below ? y + r.height + 10 : y - 10) + 'px';
    tip.style.left = Math.max(w / 2 + pad, Math.min(x, cb.width - w / 2 - pad)) + 'px';
  }

  /* ------------------------------------------------------------- pintar -- */

  function head(eyebrow, title, extra) {
    return '<header class="page-head reveal' + (extra || '') + '">' +
      (eyebrow ? '<p class="eyebrow">' + esc(eyebrow) + '</p>' : '') +
      '<h1>' + esc(title).replace(/ · /g, ' <span class="sep">·</span> ') + '</h1>' +
      '<div class="head-rule"></div>' +
    '</header>';
  }

  function cardsFor(list) {
    return '<div class="fields part-map">' + list.map(function (p, n) {
      var g = gist(p.md);
      return '<button class="field part-card reveal" data-go="' + p.page + '">' +
        '<span class="pc-n">' + (n + 1) + '</span>' +
        '<span class="pc-t">' + esc(p.title) + '</span>' +
        (g ? '<span class="pc-d">' + esc(g) + '</span>' : '') +
      '</button>';
    }).join('') + '</div>';
  }

  /** Tarjetas de los elementos de una ficha, en su portadilla. */
  function partCards(f) {
    if (!f.groups.length) return cardsFor(f.parts);
    /* Con divisores de parte, las tarjetas van agrupadas bajo cada uno. */
    var loose = f.parts.filter(function (p) { return !p.group; });
    return (loose.length ? cardsFor(loose) : '') + f.groups.map(function (g) {
      return '<div class="group reveal">' +
        '<h2 class="group-head" id="' + slug(g.title) + '">' + inline(g.title) + '</h2>' +
        renderBody(g.intro) +
      '</div>' + cardsFor(g.parts);
    }).join('');
  }

  function pageHTML(p) {
    if (p.html !== null) return p.html;
    var f = p.ficha;
    if (p.kind === 'matrix') {
      p.html = matrixHTML(f.data) + figurasHTML(p.id);
    } else if (p.kind === 'part') {
      /* «Parte 1 · Los controles…» se recorta a «Parte 1» para el antetítulo. */
      var eyebrow = f.title + (p.group ? ' · ' + p.group.title.split(' · ')[0] : '');
      p.html = head(eyebrow, p.label, ' is-part') + reachHTML(reachOf(p.md)) +
        figurasHTML(p.id) + renderBody(p.md, { section: true });
    } else if (p.kind === 'intro') {
      p.html = head(f.sub, f.title) + renderBody(p.md) + figurasHTML(p.id) +
        partCards(f) + boardHTML(f);
    } else {
      p.html = head(f.sub, f.title) + figurasHTML(p.id) + renderBody(p.md);
    }
    return p.html;
  }

  function nextCardHTML() {
    var n = cur + 1;
    if (n < pages.length) {
      var nx = pages[n];
      var lbl = nx.ficha === pages[cur].ficha ? 'Siguiente' : 'Siguiente ficha';
      return '<button class="next-card reveal" data-go="' + n + '">' +
        '<span class="nc-txt"><span class="nc-lbl">' + lbl + '</span>' +
        '<span class="nc-ttl">' + esc(nx.kind === 'part' ? nx.label : nx.ficha.title) + '</span></span>' +
        '<span class="nc-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h13M12 5l7 7-7 7"/></svg></span>' +
        '</button>';
    }
    return '<button class="next-card reveal" data-go="0">' +
      '<span class="nc-txt"><span class="nc-lbl">Fin del cuadernillo</span>' +
      '<span class="nc-ttl">Volver al índice</span></span>' +
      '<span class="nc-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M19 12H6M12 5l-7 7 7 7"/></svg></span>' +
      '</button>';
  }

  function paint() {
    sheet.innerHTML = pageHTML(pages[cur]) + nextCardHTML();
  }

  function observeReveals() {
    if (io) io.disconnect();
    var targets = $$('.reveal', sheet);
    if (reduceMotion() || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var idx = targets.indexOf(e.target);
        e.target.style.transitionDelay = (Math.min(idx, 4) * 50) + 'ms';
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.02 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* -------------------------------------------------------- navegación --- */

  function scrollTop() {
    var html = document.documentElement, prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }

  function onceAnim(el, fn) {
    function handler(e) {
      if (e.target !== el) return;
      el.removeEventListener('animationend', handler);
      fn();
    }
    el.addEventListener('animationend', handler);
  }

  function goTo(i, opts) {
    opts = opts || {};
    i = Math.max(0, Math.min(pages.length - 1, i));
    if (turning) return;
    if (i === cur && !opts.force) {
      if (opts.then) opts.then();
      return;
    }

    var dir = i >= cur ? 1 : -1;
    cur = i;
    location.hash = pages[cur].id;
    syncChrome();
    scrollTop();

    function finish() {
      mxHide();
      observeReveals();
      if (opts.then) opts.then();
    }

    if (reduceMotion()) { paint(); finish(); return; }

    turning = true;
    veil.classList.add('is-on');
    sheet.classList.add('is-turning', dir > 0 ? 'turn-out-fwd' : 'turn-out-back');

    onceAnim(sheet, function () {
      sheet.classList.remove('turn-out-fwd', 'turn-out-back');
      paint();
      sheet.classList.add(dir > 0 ? 'turn-in-fwd' : 'turn-in-back');
      onceAnim(sheet, function () {
        sheet.classList.remove('turn-in-fwd', 'turn-in-back', 'is-turning');
        veil.classList.remove('is-on');
        turning = false;
        finish();
      });
    });
  }

  /** Migaja del paginador: en qué ficha se está y en qué hoja de ella. */
  function crumb(p) {
    var f = p.ficha;
    var name = f.crumbName || (f.num === 'i' ? 'Índice' : 'Ficha ' + f.num);
    return f.count > 1 ? name + ' · ' + p.ord + ' de ' + f.count : name;
  }

  function syncChrome() {
    var p = pages[cur], f = p.ficha;
    $('#pgCount').textContent = crumb(p);
    $('#prev').disabled = cur === 0;
    $('#next').disabled = cur === pages.length - 1;

    /* Los puntos son las hojas de la ficha en curso, no las 48 del cuadernillo. */
    $('#dots').innerHTML = pages.slice(f.first, f.first + f.count).map(function (q, n) {
      return '<button class="dot" data-go="' + (f.first + n) + '" aria-label="Ir a ' + esc(q.label) + '"' +
        (f.first + n === cur ? ' aria-current="true"' : '') + '></button>';
    }).join('');

    /* El índice despliega los elementos solo de la ficha abierta. */
    $('#tocList').innerHTML = fichas.map(function (g) {
      var open = g === f;
      var row = '<li><button class="toc-item" data-go="' + g.first + '"' +
        (open ? ' aria-current="true"' : '') + '>' +
        '<span class="n">' + esc(g.num) + '</span><span class="t">' + esc(g.label) + '</span></button>';
      if (open && g.count > 1) {
        var seen = null;
        row += '<ol class="toc-sub">' + pages.slice(g.first + 1, g.first + g.count).map(function (q, n) {
          var at = g.first + 1 + n, li = '';
          /* Divisor cuando la ficha viene partida (la Ficha 0, en dos partes). */
          if (q.group && q.group !== seen) {
            li = '<li class="toc-group">' + esc(q.group.title.split(' · ')[0]) + '</li>';
          }
          seen = q.group;
          return li + '<li><button class="toc-sub-item" data-go="' + at + '"' +
            (at === cur ? ' aria-current="true"' : '') + '>' + esc(q.label) + '</button></li>';
        }).join('') + '</ol>';
      }
      return row + '</li>';
    }).join('');

    document.title = (p.kind === 'part' ? p.label + ' · ' + f.label : f.label) + ' · Claude for Business';
  }

  /* ----------------------------------------------------------- índice ---- */

  var drawerOpen = false;
  function toggleToc(open) {
    drawerOpen = open === undefined ? !drawerOpen : open;
    $('#toc').classList.toggle('is-open', drawerOpen);
    $('#scrim').hidden = !drawerOpen;
    $('#btnToc').setAttribute('aria-expanded', String(drawerOpen));
  }

  /* --------------------------------------------------------- buscador ---- */

  var index = [];
  function buildIndex() {
    index = [];
    pages.forEach(function (p, n) {
      var section = p.label, anchor = '', fence = false;
      p.md.split('\n').forEach(function (line) {
        if (/^\s*```/.test(line)) { fence = !fence; return; }
        var h = fence ? null : line.match(/^(#{2,4})\s+(.*)$/);
        if (h) {
          section = h[2].trim();
          anchor = slug(section);
          return;
        }
        var t = line.trim();
        if (!t || t.charAt(0) === '|' || /^-{3,}/.test(t)) return;
        index.push({
          page: n, section: section, anchor: anchor,
          text: t.replace(/[*`>]/g, '').replace(/^\s*[-+]\s+/, '').trim()
        });
      });
      /* Las figuras traen prosa que está en pantalla y no en el Markdown: el
         pie y la descripción entran al buscador como cualquier otro renglón. */
      (figuras[p.id] || []).forEach(function (f) {
        [f.alt, f.cap].forEach(function (t) {
          if (t) index.push({ page: n, section: p.label, anchor: '', text: String(t) });
        });
      });
    });
  }

  function search(q) {
    var needle = fold(q), hits = [];
    if (needle.length < 2) return hits;
    for (var i = 0; i < index.length && hits.length < 24; i++) {
      if (fold(index[i].text).indexOf(needle) !== -1) hits.push(index[i]);
    }
    return hits;
  }

  function highlight(text, q) {
    var at = fold(text).indexOf(fold(q));
    if (at === -1) return esc(text.slice(0, 130));
    var from = Math.max(0, at - 44), to = Math.min(text.length, at + q.length + 86);
    return (from ? '…' : '') + esc(text.slice(from, at)) +
      '<mark>' + esc(text.slice(at, at + q.length)) + '</mark>' +
      esc(text.slice(at + q.length, to)) + (to < text.length ? '…' : '');
  }

  function renderResults(q) {
    var box = $('#results');
    if (q.trim().length < 2) { box.hidden = true; box.innerHTML = ''; return; }
    var hits = search(q);
    if (!hits.length) {
      box.innerHTML = '<p class="res-empty">Sin coincidencias para «' + esc(q.trim()) + '».</p>';
      box.hidden = false;
      return;
    }
    box.innerHTML = hits.map(function (h) {
      var pg = pages[h.page];
      var bits = [pg.ficha.label];
      if (pg.label !== pg.ficha.label) bits.push(pg.label);
      if (h.section !== pg.label && h.section !== pg.ficha.label) bits.push(h.section);
      var where = bits.map(esc).join(' · ');
      return '<button class="res" type="button" data-page="' + h.page + '" data-anchor="' + esc(h.anchor) + '">' +
        '<b>' + where + '</b><span>' + highlight(h.text, q.trim()) + '</span></button>';
    }).join('');
    box.hidden = false;
  }

  function jumpTo(page, anchor) {
    $('#results').hidden = true;
    $('#q').blur();
    toggleToc(false);
    goTo(Number(page), {
      force: true,
      then: function () {
        if (!anchor) return;
        var el = document.getElementById(anchor);
        if (!el) return;
        el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
        el.classList.remove('flash');
        void el.offsetWidth;
        el.classList.add('flash');
      }
    });
  }

  /* ------------------------------------------------------------- carga --- */

  /* Los datos de la matriz, guardados para las figuras que se derivan de ella. */
  var matriz = null;

  /**
   * Cuántos de los elementos alcanza cada componente. Se cuenta sobre
   * `matriz.json` en el momento de pintar: agregar un renglón a la matriz
   * mueve esta gráfica sola, sin recalcular anchos a mano.
   */
  function alcanceSVG() {
    if (!matriz) return '';
    var filas = [];
    matriz.groups.forEach(function (g) { filas = filas.concat(g.rows); });
    var total = filas.length;
    var datos = matriz.cols.map(function (c) {
      var n = 0;
      filas.forEach(function (r) { if (r.c && r.c[c.k]) n++; });
      return { t: c.t, s: c.s, n: n };
    }).sort(function (a, b) { return b.n - a.n; });

    var G = { x: 22, lbl: 176, fin: 654, y0: 76, alto: 22, paso: 44 },
        tope = datos[0].n || 1,
        H = G.y0 + datos.length * G.paso - (G.paso - G.alto) + 18,
        W = 720;

    var barras = datos.map(function (d, i) {
      var y = G.y0 + i * G.paso,
          w = Math.round((d.n / tope) * (G.fin - G.lbl) * 10) / 10;
      return '<text class="lbl" x="' + G.x + '" y="' + (y + 12) + '">' + esc(d.t) + '</text>' +
        '<text class="sub" x="' + G.x + '" y="' + (y + 27) + '">' + esc(d.s) + '</text>' +
        '<rect class="track" x="' + G.lbl + '" y="' + y + '" width="' + (G.fin - G.lbl) +
          '" height="' + G.alto + '" rx="6"/>' +
        '<rect class="bar" x="' + G.lbl + '" y="' + y + '" width="' + w +
          '" height="' + G.alto + '" rx="6"/>' +
        '<text class="val" x="' + (G.fin + 10) + '" y="' + (y + 16) + '">' + d.n + '</text>';
    }).join('');

    var titulo = 'Cuántos de los ' + total + ' elementos alcanza cada componente';
    return '<div class="gen-scroll"><svg class="gen-svg" viewBox="0 0 ' + W + ' ' + H +
      '" role="img" aria-label="' + escA('De los ' + total + ' elementos: ' +
        datos.map(function (d) { return d.t + ' ' + d.n; }).join(', ') + '.') + '">' +
      '<text class="ttl" x="' + G.x + '" y="34">' + esc(titulo) + '</text>' +
      '<line class="rule" x1="' + G.x + '" y1="52" x2="698" y2="52"/>' +
      barras + '</svg></div>';
  }

  var GENERADAS = { alcance: alcanceSVG };

  /** La matriz es la hoja de inicio: una ficha de una sola página. */
  function matrixFicha(data) {
    matriz = data;
    var texto = [];
    data.groups.forEach(function (g) {
      g.rows.forEach(function (r) {
        texto.push(r.t + ' · ' + r.g);
        Object.keys(r.c).forEach(function (k) { texto.push(r.c[k][0]); });
      });
    });
    return {
      matrix: true, data: data, id: 'matriz', num: '·',
      label: 'Matriz de componentes y elementos', crumbName: 'Matriz',
      title: data.title, sub: data.kicker, md: texto.join('\n'),
      parts: [], groups: []
    };
  }

  /**
   * Una clave mal escrita en el manifiesto no rompe nada: simplemente la figura
   * no sale, y quien la agregó se queda buscando el error en la ruta del
   * archivo. Se dice en la consola, con los nombres que sí existen.
   */
  function avisaFigurasHuerfanas() {
    var vivas = {};
    pages.forEach(function (p) { vivas[p.id] = true; });
    var sueltas = Object.keys(figuras).filter(function (k) { return !vivas[k]; });
    if (sueltas.length && window.console) {
      console.warn('figuras.json: estas claves no corresponden a ninguna hoja y no se ven: ' +
        sueltas.join(', '));
    }
  }

  function load() {
    sheet.innerHTML = '<div class="loading"><div class="spinner"></div><p>Abriendo el cuadernillo…</p></div>';
    /* El manifiesto se espera junto con las fichas: el HTML de cada hoja se
       guarda en caché la primera vez que se pinta, así que si llegara tarde
       la figura no aparecería nunca. Si falta o está roto, el cuadernillo
       abre igual, sin figuras. */
    var figs = fetch(FIGURAS, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (f) { figuras = f || {}; })['catch'](function () { figuras = {}; });

    var contenido = [fetch(MATRIZ, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(MATRIZ + ' → HTTP ' + r.status);
      return r.json();
    }).then(matrixFicha)].concat(FILES.map(function (f) {
      return fetch(f, { cache: 'no-cache' }).then(function (r) {
        if (!r.ok) throw new Error(f + ' → HTTP ' + r.status);
        return r.text();
      }).then(function (t) { return parseFicha(f, t); });
    }));
    /* El manifiesto va en su propia rama de la espera, no mezclado con las
       fichas: así no hay un hueco en el arreglo que haya que recortar por
       posición, que se rompería en cuanto se sumara otra carga. */
    return Promise.all([figs, Promise.all(contenido)]).then(function (r) {
      fichas = r[1];
      pages = buildPages(fichas);
      avisaFigurasHuerfanas();
      buildIndex();
      var want = pageIndexById((location.hash || '').replace(/^#/, ''));
      cur = want >= 0 ? want : 0;
      location.hash = pages[cur].id;
      syncChrome();
      paint();
      observeReveals();
    })['catch'](function (err) {
      sheet.innerHTML = '<div class="error"><strong>No se pudieron cargar las fichas.</strong>' +
        '<p>' + esc(err.message) + '</p>' +
        '<p>El cuadernillo lee los archivos de <code>Repaso/</code> con <code>fetch</code>, ' +
        'así que necesita un servidor: la GitHub Page, o <code>python3 -m http.server</code> en local. ' +
        'Abrir <code>index.html</code> con doble clic no funciona.</p></div>';
    });
  }

  /* ------------------------------------------------------------ candado -- */

  function sha256(text) {
    if (!(window.crypto && window.crypto.subtle)) return Promise.reject(new Error('insecure'));
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    });
  }

  function openBooklet(animate) {
    document.body.classList.remove('is-locked');
    document.documentElement.classList.add('unlocked');
    app.hidden = false;
    load();
    if (!animate) { gate.hidden = true; return; }
    gate.classList.add('is-open');
    setTimeout(function () { gate.hidden = true; }, reduceMotion() ? 0 : 950);
  }

  function initGate() {
    var form = $('#gateForm'), input = $('#pw'), msg = $('#gateMsg');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!input.value) return;
      sha256(input.value).then(function (hex) {
        if (hex === PASS_HASH) {
          msg.className = 'gate-msg ok';
          msg.textContent = 'Abriendo…';
          store.set(K_KEY, '1');
          openBooklet(true);
        } else {
          msg.className = 'gate-msg';
          msg.textContent = 'Esa no es la contraseña del curso.';
          gate.classList.add('is-wrong');
          setTimeout(function () { gate.classList.remove('is-wrong'); }, 520);
          input.select();
        }
      })['catch'](function () {
        msg.className = 'gate-msg';
        msg.textContent = 'Abre el cuadernillo por https (o localhost) para poder desbloquearlo.';
      });
    });

    setTimeout(function () { input.focus(); }, 420);
  }

  /* -------------------------------------------------------------- tema --- */

  function initTheme() {
    $('#btnTheme').addEventListener('click', function () {
      var root = document.documentElement;
      var dark = root.dataset.theme === 'dark' ||
        (root.dataset.theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = dark ? 'light' : 'dark';
      root.dataset.theme = next;
      store.set(K_THEME, next);
    });
  }

  /* ------------------------------------------------------------ eventos -- */

  function initEvents() {
    $('#prev').addEventListener('click', function () { goTo(cur - 1); });
    $('#next').addEventListener('click', function () { goTo(cur + 1); });
    $('#btnToc').addEventListener('click', function () { toggleToc(); });
    $('#scrim').addEventListener('click', function () { toggleToc(false); });

    $('#btnLock').addEventListener('click', function () {
      store.del(K_KEY);
      location.hash = '';
      location.reload();
    });

    document.addEventListener('click', function (e) {
      var t = e.target;
      var go = t.closest && t.closest('[data-go]');
      if (go) {
        if (window.matchMedia('(max-width:1179px)').matches) toggleToc(false);
        goTo(Number(go.getAttribute('data-go')));
        return;
      }
      var res = t.closest && t.closest('.res');
      if (res) {
        jumpTo(res.getAttribute('data-page'), res.getAttribute('data-anchor'));
        return;
      }
      var hit = t.closest && t.closest('.mx-hit');
      if (hit) { mxShow(hit); e.stopPropagation(); return; }
      if (!(t.closest && t.closest('.mx-tip'))) mxHide();

      var shot = t.closest && t.closest('.shot-open');
      if (shot) { openShot(shot.querySelector('img')); return; }

      var copy = t.closest && t.closest('.copy');
      if (copy) {
        var code = copy.closest('.prompt').querySelector('code').textContent;
        var label = copy.querySelector('span');
        var done = function () {
          copy.classList.add('done');
          label.textContent = 'Copiado';
          setTimeout(function () { copy.classList.remove('done'); label.textContent = 'Copiar'; }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(done)['catch'](function () {});
        }
        return;
      }
      if (!(t.closest && t.closest('#search'))) $('#results').hidden = true;
    });

    /* Globo de la matriz: delegado en la hoja, porque se repinta en cada vuelta. */
    function onHit(fn) {
      return function (e) {
        var h = e.target.closest && e.target.closest('.mx-hit');
        if (h) fn(h);
      };
    }
    sheet.addEventListener('mouseover', onHit(mxShow));
    sheet.addEventListener('mouseout', onHit(mxHide));
    sheet.addEventListener('focusin', onHit(mxShow));
    sheet.addEventListener('focusout', mxHide);

    var q = $('#q'), timer;
    if (window.matchMedia('(max-width:760px)').matches) q.placeholder = 'Buscar…';
    q.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { renderResults(q.value); }, 120);
    });
    q.addEventListener('focus', function () { if (q.value.trim().length > 1) renderResults(q.value); });
    q.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { q.value = ''; $('#results').hidden = true; q.blur(); }
      if (e.key === 'Enter') {
        e.preventDefault();
        var first = $('.res', $('#results'));
        if (first) jumpTo(first.getAttribute('data-page'), first.getAttribute('data-anchor'));
      }
    });

    document.addEventListener('keydown', function (e) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
      /* Con la figura abierta el teclado le pertenece a ella: si no, una flecha
         hojearía la página de abajo y quedaría a la vista una figura que ya no
         es de esa hoja. */
      var lb = $('.lightbox');
      if (lb) {
        if (e.key === 'Escape') { e.preventDefault(); lb.cierra(); }
        else if (/^(Arrow|Page)/.test(e.key) || e.key === 'Home' || e.key === 'End' ||
                 e.key === ' ') { e.preventDefault(); }
        return;
      }
      if (e.key === '/' && !typing) { e.preventDefault(); q.focus(); return; }
      if (e.key === 'Escape') {
        toggleToc(false); mxHide(); $('#results').hidden = true; return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey || app.hidden) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); goTo(cur + 1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); goTo(cur - 1); }
      else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      else if (e.key === 'End') { e.preventDefault(); goTo(pages.length - 1); }
    });

    var x0 = 0, y0 = 0, swipeable = false, stage = $('#stage');
    stage.addEventListener('touchstart', function (e) {
      var t0 = e.touches[0];
      /* Todo lo que se desplaza a lo ancho queda fuera del gesto de hojear: si
         no, arrastrar el tablero de la portadilla voltea la página. */
      swipeable = !(e.target.closest &&
        e.target.closest('.table-wrap, pre, .mx-canvas, .board-wrap, .gen-scroll, .lightbox'));
      x0 = t0.clientX;
      y0 = t0.clientY;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (!swipeable) return;
      var t1 = e.changedTouches[0], dx = t1.clientX - x0, dy = t1.clientY - y0;
      if (Math.abs(dx) > 64 && Math.abs(dx) > Math.abs(dy) * 1.6) goTo(cur + (dx < 0 ? 1 : -1));
    }, { passive: true });

    var bar = $('#readbar'), pager = $('#pager'), ticking = false, idle;
    window.addEventListener('scroll', function () {
      pager.classList.add('is-dim');
      clearTimeout(idle);
      idle = setTimeout(function () { pager.classList.remove('is-dim'); }, 650);
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 4 ? Math.min(100, (window.scrollY / max) * 100) : 0) + '%';
        ticking = false;
      });
    }, { passive: true });

    window.addEventListener('hashchange', function () {
      var i = pageIndexById((location.hash || '').replace(/^#/, ''));
      if (i >= 0 && i !== cur) goTo(i);
    });
  }

  /* --------------------------------------------------------------- run --- */

  initTheme();
  initEvents();

  if (store.get(K_KEY) === '1') {
    openBooklet(false);
  } else {
    document.body.classList.add('is-locked');
    initGate();
  }
})();
