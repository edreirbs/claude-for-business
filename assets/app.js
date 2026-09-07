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

  var FILES = [
    'Repaso/00_Indice_de_las_fichas.md',
    'Repaso/Ficha_1_Los_seis_componentes.md',
    'Repaso/Ficha_2_Fuentes_que_proporciona_el_usuario.md',
    'Repaso/Ficha_3_Fuentes_que_Claude_obtiene_por_su_cuenta.md',
    'Repaso/Ficha_4_Configuracion_que_escribe_el_usuario.md',
    'Repaso/Ficha_5_La_memoria.md',
    'Repaso/Ficha_6_Procedimientos_ejecutables.md',
    'Repaso/Ficha_7_Salidas_que_solo_abre_quien_las_produjo.md',
    'Repaso/Ficha_8_Salidas_que_puede_abrir_otra_persona.md'
  ];

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
   * Parte una ficha en su entrada y sus elementos (`##`), respetando los
   * bloques de código: la Ficha 4 trae un CLAUDE.md de ejemplo cuyas líneas
   * empiezan con `##` y no son encabezados.
   */
  function splitParts(md) {
    var lines = md.replace(/\r\n?/g, '\n').split('\n');
    var intro = [], parts = [], cur = null, fence = false, m;
    for (var i = 0; i < lines.length; i++) {
      if (/^\s*```/.test(lines[i])) fence = !fence;
      m = fence ? null : lines[i].match(/^##\s+(.*)$/);
      if (m) {
        cur = { title: m[1].trim(), lines: [] };
        parts.push(cur);
      } else {
        (cur ? cur.lines : intro).push(lines[i]);
      }
    }
    return {
      intro: trimBlock(intro.join('\n')),
      parts: parts.map(function (p) {
        return { title: p.title, md: trimBlock(p.lines.join('\n')) };
      })
    };
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
      raw: rest, intro: split.intro, parts: split.parts
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
      var hasFields = f.parts.some(function (p) { return /^###\s/m.test(p.md); });
      f.first = list.length;
      if (!hasFields || !f.parts.length) {
        list.push({ id: f.id, kind: 'whole', ficha: f, label: f.label, md: f.raw, html: null });
      } else {
        list.push({ id: f.id, kind: 'intro', ficha: f, label: f.label, md: f.intro, html: null });
        f.parts.forEach(function (p) {
          list.push({
            id: f.id + '-' + slug(p.title), kind: 'part', ficha: f,
            label: p.title, md: p.md, html: null
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

  /* ------------------------------------------------------------- pintar -- */

  function head(eyebrow, title, extra) {
    return '<header class="page-head reveal' + (extra || '') + '">' +
      (eyebrow ? '<p class="eyebrow">' + esc(eyebrow) + '</p>' : '') +
      '<h1>' + esc(title).replace(/ · /g, ' <span class="sep">·</span> ') + '</h1>' +
      '<div class="head-rule"></div>' +
    '</header>';
  }

  /** Tarjetas de los elementos de una ficha, en su portadilla. */
  function partCards(f) {
    return '<div class="fields part-map">' + f.parts.map(function (p, n) {
      var g = gist(p.md);
      return '<button class="field part-card reveal" data-go="' + (f.first + 1 + n) + '">' +
        '<span class="pc-n">' + (n + 1) + '</span>' +
        '<span class="pc-t">' + esc(p.title) + '</span>' +
        (g ? '<span class="pc-d">' + esc(g) + '</span>' : '') +
      '</button>';
    }).join('') + '</div>';
  }

  function pageHTML(p) {
    if (p.html !== null) return p.html;
    var f = p.ficha;
    if (p.kind === 'part') {
      p.html = head(f.title, p.label, ' is-part') + renderBody(p.md, { section: true });
    } else if (p.kind === 'intro') {
      p.html = head(f.sub, f.title) + renderBody(p.md) + partCards(f);
    } else {
      p.html = head(f.sub, f.title) + renderBody(p.md);
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
    var name = f.num === 'i' ? 'Índice' : 'Ficha ' + f.num;
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
        row += '<ol class="toc-sub">' + pages.slice(g.first + 1, g.first + g.count).map(function (q, n) {
          return '<li><button class="toc-sub-item" data-go="' + (g.first + 1 + n) + '"' +
            (g.first + 1 + n === cur ? ' aria-current="true"' : '') + '>' +
            esc(q.label) + '</button></li>';
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

  function load() {
    sheet.innerHTML = '<div class="loading"><div class="spinner"></div><p>Abriendo el cuadernillo…</p></div>';
    return Promise.all(FILES.map(function (f) {
      return fetch(f, { cache: 'no-cache' }).then(function (r) {
        if (!r.ok) throw new Error(f + ' → HTTP ' + r.status);
        return r.text();
      }).then(function (t) { return parseFicha(f, t); });
    })).then(function (parsed) {
      fichas = parsed;
      pages = buildPages(fichas);
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
      if (e.key === '/' && !typing) { e.preventDefault(); q.focus(); return; }
      if (e.key === 'Escape') { toggleToc(false); $('#results').hidden = true; return; }
      if (typing || e.metaKey || e.ctrlKey || e.altKey || app.hidden) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); goTo(cur + 1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); goTo(cur - 1); }
      else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      else if (e.key === 'End') { e.preventDefault(); goTo(pages.length - 1); }
    });

    var x0 = 0, y0 = 0, swipeable = false, stage = $('#stage');
    stage.addEventListener('touchstart', function (e) {
      var t0 = e.touches[0];
      swipeable = !(e.target.closest && e.target.closest('.table-wrap, pre'));
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
