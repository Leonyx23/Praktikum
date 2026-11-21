/* ==========================================================
   Bandbreite – App-Logik (ohne Build-Schritt, ohne Abhängigkeiten)
   Hash-Routing:
     #/                      Fachbereiche
     #/fach/<id>             Krankheitsbilder eines Fachbereichs
     #/kb/<id>               Krankheitsbild mit Übungen
     #/uebungen              Alle Übungen (Filter)
     #/uebung/<id>           Übungsdetail
     #/suche                 Suche
     #/merkliste             Merkliste (druckbar)
     #/info                  Hinweise & Quellen
   ========================================================== */
(function () {
  "use strict";

  var PT = window.PT;
  var main = document.getElementById("main");

  /* ---------- Indizes ---------- */
  var fachById = {};
  PT.fachbereiche.forEach(function (f) { fachById[f.id] = f; });

  var exById = {};
  PT.uebungen.forEach(function (u) { exById[u.id] = u; u.verwendung = []; });

  var kbById = {};
  PT.krankheitsbilder.forEach(function (k) {
    kbById[k.id] = k;
    if (!k.phasen) k.phasen = [{ titel: "Übungen", uebungen: k.uebungen || [] }];
    k.phasen.forEach(function (p) {
      p.eintraege = p.uebungen.map(function (e) {
        var id = Array.isArray(e) ? e[0] : e;
        var hinweis = Array.isArray(e) ? e[1] : "";
        var ex = exById[id];
        if (!ex) { console.warn("Unbekannte Übung in " + k.id + ": " + id); return null; }
        ex.verwendung.push({ kb: k, phase: p.titel, hinweis: hinweis });
        return { ex: ex, hinweis: hinweis };
      }).filter(Boolean);
    });
  });

  function kbExerciseIds(k) {
    var set = {};
    k.phasen.forEach(function (p) { p.eintraege.forEach(function (e) { set[e.ex.id] = true; }); });
    return Object.keys(set);
  }
  function fachExerciseIds(fachId) {
    var set = {};
    PT.krankheitsbilder.forEach(function (k) {
      if (k.fach === fachId) kbExerciseIds(k).forEach(function (id) { set[id] = true; });
    });
    return Object.keys(set);
  }
  function exFachIds(ex) {
    var set = {};
    ex.verwendung.forEach(function (v) { set[v.kb.fach] = true; });
    return PT.fachbereiche.map(function (f) { return f.id; }).filter(function (id) { return set[id]; });
  }

  /* ---------- Hilfsfunktionen ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function sortKey(name) { return String(name).replace(/^[„"»‚'“]+/, ""); }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
  function fachStyle(f) { return "--fach:" + f.farbe + ";--fach-ink:" + f.text; }
  function setTitle(t) { document.title = t ? t + " – Bandbreite" : "Bandbreite – Physio-Übungen nach Krankheitsbild"; }

  var ICON_SEARCH = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/></svg>';
  var ICON_BOOKMARK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h10v17l-5-3.5-5 3.5z"/></svg>';
  var ICON_PRINT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9V3.5h10V9M7 17H4.5V9h15v8H17M7 14h10v6.5H7z"/></svg>';

  /* ---------- Merkliste (localStorage, abgesichert) ---------- */
  var STORE_KEY = "bandbreite.merkliste";
  var memoryStore = [];
  function loadSaved() {
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter(function (id) { return exById[id]; }) : [];
    } catch (e) { return memoryStore.slice(); }
  }
  function storeSaved(arr) {
    memoryStore = arr.slice();
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(arr)); } catch (e) { /* privat/gesperrt */ }
    updateCounts();
  }
  function isSaved(id) { return loadSaved().indexOf(id) !== -1; }
  function toggleSaved(id) {
    var arr = loadSaved();
    var i = arr.indexOf(id);
    if (i === -1) { arr.push(id); toast("Zur Merkliste hinzugefügt"); }
    else { arr.splice(i, 1); toast("Von der Merkliste entfernt"); }
    storeSaved(arr);
    return i === -1;
  }
  function updateCounts() {
    var n = loadSaved().length;
    document.querySelectorAll("[data-merk-count]").forEach(function (el) { el.textContent = n ? String(n) : ""; });
  }

  var toastTimer;
  function toast(msg) {
    var el = document.querySelector(".toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 1800);
  }

  function saveButton(id, label) {
    var on = isSaved(id);
    return '<button class="save" type="button" data-save="' + esc(id) + '" aria-pressed="' + on + '" aria-label="' +
      esc((on ? "Von der Merkliste entfernen: " : "Auf die Merkliste: ") + label) + '">' + ICON_BOOKMARK + "</button>";
  }

  function dots(ex) {
    return '<span class="dots" aria-hidden="true">' + exFachIds(ex).map(function (fid) {
      return '<i style="--c:' + fachById[fid].farbe + '" title="' + esc(fachById[fid].name) + '"></i>';
    }).join("") + "</span>";
  }

  function exRow(ex, hinweis) {
    var n = ex.verwendung.length;
    var fachNames = exFachIds(ex).map(function (f) { return fachById[f].name; }).join(", ");
    return '<li><a class="ex-link" href="#/uebung/' + esc(ex.id) + '">' +
      '<span class="ex-name">' + esc(ex.name) + "</span>" +
      '<span class="ex-meta"><span>' + esc(PT.arten[ex.art].name) + "</span>" +
      (ex.heim ? '<span class="tag-home">Eigenübung</span>' : "") +
      dots(ex) + '<span class="sr">Fachbereiche: ' + esc(fachNames) + "</span>" +
      "<span>" + plural(n, "Krankheitsbild", "Krankheitsbilder") + "</span></span>" +
      (hinweis ? '<span class="ex-hint">' + esc(hinweis) + "</span>" : "") +
      "</a>" + saveButton(ex.id, ex.name) + "</li>";
  }

  /* ---------- Ansichten ---------- */
  var firstHome = true;

  function viewHome() {
    setTitle("");
    var counts = PT.fachbereiche.map(function (f) { return fachExerciseIds(f.id).length; });
    var max = Math.max.apply(null, counts);
    var html = '<div class="wrap">' +
      '<section class="hero"><h1>Übungen nach Krankheitsbild</h1>' +
      '<p class="lead">' + plural(PT.uebungen.length, "Übung", "Übungen") + " aus deinen Unterlagen, zugeordnet zu " +
      plural(PT.krankheitsbilder.length, "Krankheits- und Rehabild", "Krankheits- und Rehabildern") +
      ". Viele Übungen tauchen in mehreren Fachbereichen auf.</p>" +
      '<form class="search" role="search" data-go-search><label class="sr" for="home-q">Suchen</label>' + ICON_SEARCH +
      '<input id="home-q" type="search" name="q" placeholder="Krankheitsbild oder Übung suchen" autocomplete="off"></form></section>' +
      '<ul class="bands' + (firstHome ? " stretch-in" : "") + '">';
    PT.fachbereiche.forEach(function (f, i) {
      var kbs = PT.krankheitsbilder.filter(function (k) { return k.fach === f.id; }).length;
      var span = Math.round(62 + 38 * (counts[i] / max));
      html += '<li><a class="band" href="#/fach/' + f.id + '" style="' + fachStyle(f) + ";--i:" + i + ";--span:" + span + '%">' +
        '<span class="band-name">' + esc(f.name) + "</span>" +
        '<span class="band-meta"><b>' + kbs + "</b> Bilder<br><b>" + counts[i] + "</b> Übungen</span></a></li>";
    });
    html += "</ul>" +
      '<p class="small muted band-caption" style="margin-top:.8rem">Die Länge eines Bandes zeigt, wie viele Übungen im Fachbereich vorkommen. Die Farben folgen den Thera-Band-Stärken.</p>' +
      '<div class="home-tools">' +
      '<a class="tool" href="#/uebungen"><strong>Alle Übungen</strong><span>Nach Art, Fachbereich oder Eigenübung filtern</span></a>' +
      '<a class="tool" href="#/merkliste"><strong>Merkliste</strong><span>Übungen sammeln und als Übungsblatt drucken</span></a>' +
      "</div></div>";
    main.innerHTML = html;
    firstHome = false;
  }

  function viewFach(id) {
    var f = fachById[id];
    if (!f) return viewNotFound();
    setTitle(f.name);
    var kbs = PT.krankheitsbilder.filter(function (k) { return k.fach === id; });
    var html = '<div class="wrap" style="' + fachStyle(f) + '">' +
      '<div class="page-head"><a class="crumb" href="#/"><span class="swatch"></span>Alle Fachbereiche</a>' +
      "<h1>" + esc(f.name) + '</h1><div class="headband" aria-hidden="true"></div>' +
      '<p class="lead">' + esc(f.beschreibung) + "</p></div>" +
      '<form class="search" role="search" data-filter-kb>' + ICON_SEARCH +
      '<input type="search" placeholder="In ' + esc(f.name) + ' suchen" aria-label="Krankheitsbilder filtern" autocomplete="off"></form>' +
      '<p class="result-count" data-kb-count>' + plural(kbs.length, "Krankheitsbild", "Krankheitsbilder") + "</p>" +
      '<ul class="kb-list">';
    kbs.forEach(function (k) {
      var n = kbExerciseIds(k).length;
      html += '<li data-text="' + esc(norm(k.name + " " + k.kurz)) + '"><a href="#/kb/' + k.id + '">' +
        '<span class="kb-name">' + esc(k.name) + '</span><span class="kb-count">' + plural(n, "Übung", "Übungen") + "</span>" +
        '<span class="kb-desc">' + esc(k.kurz) + "</span></a></li>";
    });
    html += "</ul></div>";
    main.innerHTML = html;
  }

  function viewKb(id) {
    var k = kbById[id];
    if (!k) return viewNotFound();
    var f = fachById[k.fach];
    setTitle(k.name);
    var html = '<div class="wrap" style="' + fachStyle(f) + '">' +
      '<div class="page-head"><a class="crumb" href="#/fach/' + f.id + '"><span class="swatch"></span>' + esc(f.name) + "</a>" +
      "<h1>" + esc(k.name) + '</h1><div class="headband" aria-hidden="true"></div>' +
      "<p>" + esc(k.kurz) + "</p></div>";

    if (k.ziele && k.ziele.length) {
      html += '<section class="section"><h2>Ziele und Gesichtspunkte</h2><ul class="goals">' +
        k.ziele.map(function (z) { return "<li>" + esc(z) + "</li>"; }).join("") + "</ul></section>";
    }
    if (k.cave && k.cave.length) {
      html += '<section class="section cave"><h2>Vorsicht</h2><ul>' +
        k.cave.map(function (z) { return "<li>" + esc(z) + "</li>"; }).join("") + "</ul></section>";
    }
    k.phasen.forEach(function (p) {
      html += '<section class="phase"><h2 class="phase-title">' + esc(p.titel) + "</h2>" +
        (p.info ? '<p class="phase-info">' + esc(p.info) + "</p>" : "") +
        '<ul class="ex-list">' + p.eintraege.map(function (e) { return exRow(e.ex, e.hinweis); }).join("") + "</ul></section>";
    });
    if (k.quelle && k.quelle.length) {
      html += '<section class="section"><h2>Quellen aus den Unterlagen</h2><ul class="sources">' +
        k.quelle.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></section>";
    }
    html += '<p class="small muted">Dosierungen und Freigaben immer an Befund und ärztliche Vorgaben anpassen.</p></div>';
    main.innerHTML = html;
  }

  function viewUebung(id) {
    var ex = exById[id];
    if (!ex) return viewNotFound();
    setTitle(ex.name);
    var saved = isSaved(id);
    var html = '<div class="wrap"><div class="page-head ex-head">' +
      '<a class="crumb" href="#/uebungen">Alle Übungen</a>' +
      '<span class="art">' + esc(PT.arten[ex.art].name) + (ex.heim ? " – als Eigenübung geeignet" : "") + "</span>" +
      "<h1>" + esc(ex.name) + "</h1></div>" +
      '<div class="actions"><button class="btn' + (saved ? " primary" : "") + '" type="button" data-save="' + esc(id) + '" aria-pressed="' + saved + '">' +
      ICON_BOOKMARK + (saved ? "Auf der Merkliste" : "Auf die Merkliste") + "</button></div>" +
      '<div class="facts">' +
      '<div class="fact"><h2>Ausgangsstellung</h2><p>' + esc(ex.aste) + "</p></div>" +
      (ex.dosierung ? '<div class="fact"><h2>Dosierung</h2><p>' + esc(ex.dosierung) + "</p></div>" : "") +
      (ex.material ? '<div class="fact"><h2>Material</h2><p>' + esc(ex.material) + "</p></div>" : "") +
      "</div>" +
      '<section class="section"><h2>Durchführung</h2><ol class="steps">' +
      ex.ablauf.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol></section>";
    if (ex.wirkung && ex.wirkung.length) {
      html += '<section class="section"><h2>Wirkung und Ziel</h2><ul class="bullets">' +
        ex.wirkung.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></section>";
    }
    if (ex.achtung && ex.achtung.length) {
      html += '<section class="section cave"><h2>Vorsicht</h2><ul>' +
        ex.achtung.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></section>";
    }
    // Verwendung gruppiert nach Fachbereich
    html += '<section class="section"><h2>Eingesetzt bei ' + plural(ex.verwendung.length, "Krankheitsbild", "Krankheitsbildern") + "</h2>";
    if (!ex.verwendung.length) {
      html += '<p class="muted">Noch keinem Krankheitsbild zugeordnet.</p>';
    } else {
      html += '<div class="usage">';
      PT.fachbereiche.forEach(function (f) {
        var items = ex.verwendung.filter(function (v) { return v.kb.fach === f.id; });
        if (!items.length) return;
        html += '<div class="usage-group" style="--c:' + f.farbe + '"><h3><span class="swatch" aria-hidden="true"></span>' + esc(f.name) + "</h3><ul>" +
          items.map(function (v) {
            var extra = [v.kb.phasen.length > 1 ? v.phase : "", v.hinweis].filter(Boolean).join(" – ");
            return '<li><a href="#/kb/' + v.kb.id + '">' + esc(v.kb.name) + "</a>" + (extra ? "<small>" + esc(extra) + "</small>" : "") + "</li>";
          }).join("") + "</ul></div>";
      });
      html += "</div>";
    }
    html += "</section>" +
      '<section class="section"><h2>Quellen aus den Unterlagen</h2><ul class="sources">' +
      ex.quelle.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></section></div>";
    main.innerHTML = html;
  }

  /* Übungsliste mit Filtern – Zustand bleibt während der Sitzung erhalten */
  var filterState = { q: "", art: "", fach: "", heim: false };

  function viewUebungen() {
    setTitle("Alle Übungen");
    var artKeys = Object.keys(PT.arten).filter(function (a) { return PT.uebungen.some(function (u) { return u.art === a; }); });
    var html = '<div class="wrap"><div class="page-head"><h1>Alle Übungen</h1>' +
      '<p class="lead">Jede Übung zeigt, in welchen Fachbereichen sie vorkommt.</p></div>' +
      '<form class="search" role="search" data-ex-filter>' + ICON_SEARCH +
      '<input type="search" name="q" value="' + esc(filterState.q) + '" placeholder="Übung suchen, z. B. Lippenbremse" aria-label="Übungen durchsuchen" autocomplete="off"></form>' +
      '<div class="filters">' +
      '<div class="chips" role="group" aria-label="Fachbereich">' +
      '<button type="button" class="chip" data-fach="" aria-pressed="' + (filterState.fach === "") + '">Alle Fachbereiche</button>' +
      PT.fachbereiche.map(function (f) {
        return '<button type="button" class="chip" data-fach="' + f.id + '" aria-pressed="' + (filterState.fach === f.id) + '"><span class="sw" style="--c:' + f.farbe + '"></span>' + esc(f.name) + "</button>";
      }).join("") + "</div>" +
      '<div class="chips" role="group" aria-label="Übungsart">' +
      '<button type="button" class="chip" data-art="" aria-pressed="' + (filterState.art === "") + '">Alle Arten</button>' +
      artKeys.map(function (a) {
        return '<button type="button" class="chip" data-art="' + a + '" aria-pressed="' + (filterState.art === a) + '">' + esc(PT.arten[a].name) + "</button>";
      }).join("") + "</div>" +
      '<div class="filter-row"><label class="check"><input type="checkbox" data-heim' + (filterState.heim ? " checked" : "") + "> Nur Eigenübungen</label></div>" +
      "</div>" +
      '<div data-ex-results></div></div>';
    main.innerHTML = html;
    renderExResults();
  }

  function renderExResults() {
    var box = main.querySelector("[data-ex-results]");
    if (!box) return;
    var q = norm(filterState.q).trim();
    var list = PT.uebungen.filter(function (u) {
      if (filterState.art && u.art !== filterState.art) return false;
      if (filterState.heim && !u.heim) return false;
      if (filterState.fach && exFachIds(u).indexOf(filterState.fach) === -1) return false;
      if (q) {
        var hay = norm(u.name + " " + (u.wirkung || []).join(" ") + " " + u.aste);
        return q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
      }
      return true;
    }).sort(function (a, b) { return sortKey(a.name).localeCompare(sortKey(b.name), "de"); });

    if (!list.length) {
      box.innerHTML = '<div class="empty"><h2>Keine Übung gefunden</h2><p class="muted">Lockere einen Filter oder suche nach einem anderen Begriff.</p>' +
        '<button class="btn" type="button" data-reset-filter>Filter zurücksetzen</button></div>';
      return;
    }
    var html = '<p class="result-count">' + plural(list.length, "Übung", "Übungen") + "</p>";
    var letter = "";
    var open = false;
    list.forEach(function (u) {
      var l = norm(sortKey(u.name)).charAt(0).toUpperCase();
      if (!q && l !== letter) {
        if (open) html += "</ul>";
        html += '<p class="letter" aria-hidden="true">' + esc(l) + '</p><ul class="ex-list">';
        letter = l; open = true;
      } else if (!open) { html += '<ul class="ex-list">'; open = true; }
      html += exRow(u, "");
    });
    if (open) html += "</ul>";
    box.innerHTML = html;
  }

  var lastSearch = "";
  function viewSuche(initial) {
    setTitle("Suche");
    if (typeof initial === "string") lastSearch = initial;
    main.innerHTML = '<div class="wrap"><div class="page-head"><h1>Suche</h1>' +
      '<p class="lead">Finde Krankheitsbilder und Übungen über alle Fachbereiche hinweg.</p></div>' +
      '<form class="search" role="search" data-search>' + ICON_SEARCH +
      '<input type="search" name="q" value="' + esc(lastSearch) + '" placeholder="z. B. Parkinson, Beckenboden, Bridging" aria-label="Suchbegriff" autocomplete="off"></form>' +
      '<div data-search-results></div></div>';
    renderSearch();
    var input = main.querySelector("[data-search] input");
    if (input && window.matchMedia("(min-width: 900px)").matches) input.focus();
  }

  function renderSearch() {
    var box = main.querySelector("[data-search-results]");
    if (!box) return;
    var q = norm(lastSearch).trim();
    if (q.length < 2) {
      box.innerHTML = '<div class="empty"><p class="muted">Gib mindestens zwei Buchstaben ein.</p></div>';
      return;
    }
    var words = q.split(/\s+/);
    function match(text) { var h = norm(text); return words.every(function (w) { return h.indexOf(w) !== -1; }); }
    var kbs = PT.krankheitsbilder.filter(function (k) { return match(k.name + " " + k.kurz + " " + fachById[k.fach].name); });
    var exs = PT.uebungen.filter(function (u) { return match(u.name + " " + u.aste + " " + (u.wirkung || []).join(" ") + " " + PT.arten[u.art].name); });
    if (!kbs.length && !exs.length) {
      box.innerHTML = '<div class="empty"><h2>Nichts gefunden</h2><p class="muted">Versuche einen kürzeren oder anderen Begriff, z. B. „Knie“ statt „Kniegelenk“.</p></div>';
      return;
    }
    var html = "";
    if (kbs.length) {
      html += '<section class="section"><h2>Krankheitsbilder (' + kbs.length + ')</h2><ul class="kb-list">' +
        kbs.map(function (k) {
          var f = fachById[k.fach];
          return '<li><a href="#/kb/' + k.id + '"><span class="kb-name">' + esc(k.name) + "</span>" +
            '<span class="kb-count"><span class="dots"><i style="--c:' + f.farbe + '"></i></span> ' + esc(f.name) + "</span>" +
            '<span class="kb-desc">' + esc(k.kurz) + "</span></a></li>";
        }).join("") + "</ul></section>";
    }
    if (exs.length) {
      html += '<section class="section"><h2>Übungen (' + exs.length + ')</h2><ul class="ex-list">' +
        exs.map(function (u) { return exRow(u, ""); }).join("") + "</ul></section>";
    }
    box.innerHTML = html;
  }

  function viewMerkliste() {
    setTitle("Merkliste");
    var ids = loadSaved();
    var html = '<div class="wrap"><div class="page-head no-print"><h1>Merkliste</h1>';
    if (!ids.length) {
      html += '<p class="lead">Noch leer. Tippe bei einer Übung auf das Lesezeichen, um sie hier zu sammeln – zum Beispiel als Heimprogramm für einen Patienten.</p></div>' +
        '<a class="btn" href="#/uebungen">Übungen ansehen</a></div>';
      main.innerHTML = html;
      return;
    }
    html += '<p class="lead no-print">' + plural(ids.length, "Übung", "Übungen") + " gesammelt. Drucke die Liste als Übungsblatt mit Ausgangsstellung, Ablauf und Dosierung.</p></div>" +
      '<div class="actions"><button class="btn primary" type="button" data-print>' + ICON_PRINT + "Übungsblatt drucken</button>" +
      '<button class="btn" type="button" data-clear>Merkliste leeren</button></div>' +
      '<ul class="ex-list no-print">' + ids.map(function (id) { return exRow(exById[id], ""); }).join("") + "</ul>" +
      '<div class="print-only"><h1>Übungsblatt</h1><p style="margin:.5em 0 1em">Für: ________________________ &nbsp; Datum: ______________</p>' + ids.map(function (id) {
        var u = exById[id];
        return '<div class="print-ex"><h2>' + esc(u.name) + "</h2><p><b>Ausgangsstellung:</b> " + esc(u.aste) + "</p><ol>" +
          u.ablauf.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
          (u.dosierung ? "<p><b>Dosierung:</b> " + esc(u.dosierung) + "</p>" : "") +
          (u.achtung && u.achtung.length ? "<p><b>Vorsicht:</b> " + esc(u.achtung.join(" · ")) + "</p>" : "") + "</div>";
      }).join("") + "</div></div>";
    main.innerHTML = html;
  }

  function viewInfo() {
    setTitle("Info");
    var srcCount = {};
    PT.uebungen.forEach(function (u) { u.quelle.forEach(function (q) { srcCount[q] = (srcCount[q] || 0) + 1; }); });
    var srcs = Object.keys(srcCount).sort(function (a, b) { return a.localeCompare(b, "de"); });
    main.innerHTML = '<div class="wrap"><div class="page-head"><h1>Über diese App</h1>' +
      '<p class="lead">Eine Lernhilfe für die Physiotherapie-Ausbildung: Übungen aus den Unterrichtsunterlagen, sortiert nach Fachbereich und Krankheits- bzw. Rehabild.</p></div>' +
      '<section class="section cave"><h2>Wichtig</h2><ul>' +
      "<li>Die App ersetzt keinen Befund und keine ärztliche Freigabe. Belastungsstufen, Bewegungsgrenzen und Kontraindikationen gelten immer individuell.</li>" +
      "<li>Die Zuordnung der Übungen zu Krankheitsbildern ist ein Vorschlag auf Basis der Unterlagen und sollte mit Lehrkräften abgeglichen werden.</li>" +
      "</ul></section>" +
      '<section class="section"><h2>Farben der Fachbereiche</h2><p>Wie die Stärken des Thera-Bands – von gelb bis gold.</p><ul class="legend">' +
      PT.fachbereiche.map(function (f) { return '<li><span class="swatch" style="--c:' + f.farbe + '"></span>' + esc(f.name) + " <span class=\"muted\">(" + esc(f.band) + ")</span></li>"; }).join("") +
      "</ul></section>" +
      '<section class="section"><h2>Zahlen</h2><p>' + plural(PT.uebungen.length, "Übung", "Übungen") + ", " + plural(PT.krankheitsbilder.length, "Krankheitsbild", "Krankheitsbilder") + ", " +
      plural(PT.uebungen.filter(function (u) { return exFachIds(u).length > 1; }).length, "Übung", "Übungen") + " in mehr als einem Fachbereich.</p></section>" +
      '<section class="section"><h2>Quellen</h2><p class="small muted">Unterlagen, aus denen die Übungen stammen (Ordner – Datei):</p><ul class="sources">' +
      srcs.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></section>" +
      '<footer class="foot">Version ' + esc(PT.version) + ". Schriften: Atkinson Hyperlegible, Bricolage Grotesque (SIL Open Font License).</footer></div>";
  }

  function viewNotFound() {
    setTitle("Nicht gefunden");
    main.innerHTML = '<div class="wrap"><div class="empty"><h1>Seite nicht gefunden</h1><p class="muted">Der Link verweist auf einen Eintrag, den es nicht (mehr) gibt.</p>' +
      '<a class="btn" href="#/">Zu den Fachbereichen</a></div></div>';
  }

  /* ---------- Router ---------- */
  var lastRoute = "";
  function route() {
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/");
    var tab = "start";
    var sameView = parts[0] === lastRoute.split("/")[0] && parts[0] === "uebungen";
    switch (parts[0]) {
      case "": viewHome(); break;
      case "fach": viewFach(decodeURIComponent(parts[1] || "")); break;
      case "kb": viewKb(decodeURIComponent(parts[1] || "")); break;
      case "uebungen": tab = "uebungen"; viewUebungen(); break;
      case "uebung": tab = "uebungen"; viewUebung(decodeURIComponent(parts[1] || "")); break;
      case "suche": tab = "suche"; viewSuche(parts[1] ? decodeURIComponent(parts[1]) : undefined); break;
      case "merkliste": tab = "merkliste"; viewMerkliste(); break;
      case "info": tab = "info"; viewInfo(); break;
      default: viewNotFound();
    }
    document.querySelectorAll("[data-tab]").forEach(function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    if (!sameView) window.scrollTo(0, 0);
    lastRoute = hash;
  }

  /* ---------- Ereignisse (Delegation) ---------- */
  document.addEventListener("click", function (ev) {
    var t = ev.target.closest("[data-save],[data-fach],[data-art],[data-print],[data-clear],[data-reset-filter]");
    if (!t) return;
    if (t.hasAttribute("data-save")) {
      ev.preventDefault();
      var id = t.getAttribute("data-save");
      var now = toggleSaved(id);
      document.querySelectorAll('[data-save="' + id + '"]').forEach(function (b) {
        b.setAttribute("aria-pressed", String(now));
        if (b.classList.contains("btn")) {
          b.classList.toggle("primary", now);
          b.innerHTML = ICON_BOOKMARK + (now ? "Auf der Merkliste" : "Auf die Merkliste");
        } else {
          b.setAttribute("aria-label", (now ? "Von der Merkliste entfernen: " : "Auf die Merkliste: ") + exById[id].name);
        }
      });
      if (location.hash === "#/merkliste" && !now) viewMerkliste();
    } else if (t.hasAttribute("data-fach")) {
      filterState.fach = t.getAttribute("data-fach");
      main.querySelectorAll("[data-fach]").forEach(function (b) { b.setAttribute("aria-pressed", String(b === t)); });
      renderExResults();
    } else if (t.hasAttribute("data-art")) {
      filterState.art = t.getAttribute("data-art");
      main.querySelectorAll("[data-art]").forEach(function (b) { b.setAttribute("aria-pressed", String(b === t)); });
      renderExResults();
    } else if (t.hasAttribute("data-print")) {
      window.print();
    } else if (t.hasAttribute("data-clear")) {
      storeSaved([]);
      toast("Merkliste geleert");
      viewMerkliste();
    } else if (t.hasAttribute("data-reset-filter")) {
      filterState = { q: "", art: "", fach: "", heim: false };
      viewUebungen();
    }
  });

  document.addEventListener("input", function (ev) {
    var t = ev.target;
    if (t.closest("[data-ex-filter]")) { filterState.q = t.value; renderExResults(); }
    else if (t.closest("[data-search]")) { lastSearch = t.value; renderSearch(); }
    else if (t.closest("[data-filter-kb]")) {
      var q = norm(t.value).trim();
      var n = 0;
      main.querySelectorAll(".kb-list li").forEach(function (li) {
        var show = !q || q.split(/\s+/).every(function (w) { return li.getAttribute("data-text").indexOf(w) !== -1; });
        li.hidden = !show; if (show) n++;
      });
      var c = main.querySelector("[data-kb-count]");
      if (c) c.textContent = plural(n, "Krankheitsbild", "Krankheitsbilder");
    }
  });

  document.addEventListener("change", function (ev) {
    if (ev.target.hasAttribute("data-heim")) { filterState.heim = ev.target.checked; renderExResults(); }
  });

  document.addEventListener("submit", function (ev) {
    var form = ev.target;
    if (form.hasAttribute("data-go-search")) {
      ev.preventDefault();
      var q = form.querySelector("input").value.trim();
      location.hash = "#/suche/" + encodeURIComponent(q);
    } else if (form.matches("[data-search],[data-ex-filter],[data-filter-kb]")) {
      ev.preventDefault();
      var input = form.querySelector("input");
      if (input) input.blur();
    }
  });

  window.addEventListener("hashchange", route);
  updateCounts();
  route();

  /* ---------- Offline-Unterstützung (nur über http/https) ---------- */
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol) && window.self === window.top) {
    window.addEventListener("load", function () {
      try { navigator.serviceWorker.register("sw.js").catch(function () {}); } catch (e) { /* ignorieren */ }
    });
  }
})();
