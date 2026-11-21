# Bandbreite – Physio-Übungen nach Krankheitsbild

Eine Lern-App für die Physiotherapie-Ausbildung. Sie ordnet die Übungen aus den Unterrichtsunterlagen
den Krankheits- und Rehabildern in sieben Fachbereichen zu:

| Fachbereich | Farbe (Thera-Band) | Krankheitsbilder |
|---|---|---|
| Innere Medizin | rot | 16 |
| Neurologie | blau | 8 |
| Pädiatrie | gelb | 11 |
| Gynäkologie | grün | 11 |
| Chirurgie | schwarz | 11 |
| Orthopädie | silber | 16 |
| Psychologie | gold | 9 |

**255 Übungen, 82 Krankheits- und Rehabilder.** Viele Übungen kommen mehrfach vor – auch über Fachbereiche hinweg
(z. B. *Bridging* in Chirurgie, Neurologie, Orthopädie und Innere Medizin). Wo die Unterlagen Phasen vorgeben,
sind die Übungen danach gegliedert (Heidelberger Modell, Tage/Wochen nach OP, Belastungsstufen).

## Funktionen

- **Fachbereiche → Krankheitsbilder → Übungen**, mit Zielen, Vorsicht/Kontraindikationen und Phasen
- **Übungsdetail** mit Ausgangsstellung, Durchführung, Dosierung, Wirkung, Vorsicht, Material und
  allen Krankheitsbildern, bei denen die Übung eingesetzt wird
- **Alle Übungen** mit Filtern nach Fachbereich, Übungsart und „nur Eigenübungen“
- **Suche** über Krankheitsbilder und Übungen (Umlaute egal)
- **Merkliste** zum Sammeln von Übungen, druckbar als Übungsblatt (Heimprogramm)
- **Offline nutzbar** und **auf dem Handy installierbar** (Progressive Web App)
- Hell- und Dunkelmodus, barrierearme Schrift (Atkinson Hyperlegible)

## Projekt starten

Kein Build-Schritt, keine Abhängigkeiten. Einen beliebigen lokalen Webserver im Projektordner starten:

```bash
# mit Python
python3 -m http.server 8080
# oder mit Node
npm start
```

Dann <http://localhost:8080> öffnen. (Die `index.html` funktioniert auch per Doppelklick,
dann aber ohne Offline-Modus.)

## Auf GitHub veröffentlichen

Die App liegt im Repository [Leonyx23/Praktikum](https://github.com/Leonyx23/Praktikum).

1. Auf GitHub: **Settings → Pages → Build and deployment → Source: „GitHub Actions“** auswählen (einmalig).
2. Der Workflow `.github/workflows/pages.yml` prüft bei jedem Push auf `main` die Daten und veröffentlicht die App.
   Die Adresse lautet dann <https://leonyx23.github.io/Praktikum/>.
3. Läuft der Workflow vor Schritt 1, schlägt der Schritt „deploy“ fehl – dann unter **Actions** den Lauf
   mit „Re-run jobs“ neu starten.

Auf dem Handy die Seite öffnen und **„Zum Startbildschirm hinzufügen“** wählen – danach läuft die App auch offline.

## Ordnerstruktur

```
index.html                 Einstieg, lädt Daten und App
css/style.css              Gestaltung
js/app.js                  App-Logik (Hash-Routing, Filter, Suche, Merkliste)
data/kategorien.js         Fachbereiche und Übungsarten (zuerst laden!)
data/uebungen/*.js         Übungen, nach Themen aufgeteilt
data/krankheitsbilder/*.js Krankheits- und Rehabilder je Fachbereich
scripts/validate.mjs       Prüft Daten auf Fehler (läuft auch in GitHub Actions)
sw.js                      Service Worker für den Offline-Modus
manifest.webmanifest       App-Manifest (Name, Icons, Farben)
fonts/, icons/             Schriften und App-Icons
```

## Daten bearbeiten

### Neue Übung

In einer Datei unter `data/uebungen/` einen Eintrag ergänzen:

```js
{
  id: "wadenpresse",                      // eindeutig, klein, mit Bindestrichen
  name: "Wadenpresse am Stepper",
  art: "kraft",                           // Schlüssel aus PT.arten in data/kategorien.js
  aste: "Vorfuß auf dem Stepper …",       // Ausgangsstellung
  ablauf: ["Schritt 1", "Schritt 2"],     // Durchführung
  dosierung: "3 × 8–12 Wiederholungen.",
  wirkung: ["…"],
  achtung: ["…"],                         // optional
  material: "Stepper",                    // optional
  heim: true,                             // als Eigenübung geeignet
  quelle: ["MTT – Gruppe 3"]              // Unterlage, aus der die Übung stammt
}
```

### Übung einem Krankheitsbild zuordnen

In `data/krankheitsbilder/<fachbereich>.js` die ID in eine Phase eintragen –
entweder nur die ID oder mit einem Hinweis, der nur für dieses Krankheitsbild gilt:

```js
phasen: [
  {
    titel: "3. post-op Woche",
    info: "Optionaler Hinweis zur Phase",
    uebungen: [
      "venenpumpe",
      ["wandlehnen", "Max. 40° Knieflexion"]
    ]
  }
]
```

Eine Übung kann beliebig vielen Krankheitsbildern in beliebigen Fachbereichen zugeordnet werden.

### Neue Datendatei

Neue Dateien in `index.html` (Script-Tag) **und** in `sw.js` (Liste `FILES`) eintragen und die
`VERSION` in `sw.js` erhöhen. Danach prüfen:

```bash
npm run validate     # oder: node scripts/validate.mjs
```

Das Skript meldet doppelte IDs, unbekannte Übungsarten oder Fachbereiche, Verweise auf nicht vorhandene
Übungen, nicht zugeordnete Übungen und fehlende Einträge im Service Worker.

## Hinweise

- Die App ist eine **Lernhilfe** und ersetzt keinen Befund und keine ärztliche Freigabe.
  Belastungsstufen, Bewegungsgrenzen und Kontraindikationen gelten immer individuell.
- Die Zuordnung der Übungen zu Krankheitsbildern ist ein Vorschlag auf Basis der Unterlagen
  und sollte mit den Lehrkräften abgeglichen werden.
- Die Übungsbeschreibungen sind eigene Zusammenfassungen; die Original-PDFs sind nicht enthalten.
  Wenn die Unterlagen nur für den Kurs gedacht sind, das Repository lieber privat halten
  (GitHub Pages für private Repositories setzt ein kostenpflichtiges GitHub-Konto voraus).
- Schriften: Atkinson Hyperlegible und Bricolage Grotesque, beide unter der SIL Open Font License (siehe `fonts/`).
- Code unter MIT-Lizenz (siehe `LICENSE`).
