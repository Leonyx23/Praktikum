/* Übungen: Atemtherapie, passive Maßnahmen, Herz-Kreislauf, Prophylaxe & Lagerung */
PT.uebungen.push(

  /* ---------------- Atemtherapie ---------------- */
  {
    id: "lippenbremse",
    name: "Dosierte Lippenbremse",
    art: "atmung",
    aste: "Sitz, Stand oder atemerleichternde Stellung",
    ablauf: [
      "Ruhig durch die Nase einatmen.",
      "Lippen locker aufeinanderlegen und die Luft langsam gegen den leichten Lippenwiderstand ausströmen lassen (wie „pfff“).",
      "Die Ausatmung ist länger als die Einatmung, ohne zu pressen."
    ],
    dosierung: "Mehrere Atemzüge, jederzeit bei Atemnot und unter Belastung (z. B. Treppe) einsetzen.",
    wirkung: ["Hält die Atemwege bei der Ausatmung offen (Stenose)", "Senkt Atemfrequenz und Überblähung", "Dämpft Hustenreiz"],
    achtung: ["Nicht forciert ausblasen – sonst Kollaps instabiler Atemwege"],
    heim: true,
    quelle: ["KG Innere – Lunge 2 (Asthma)", "KG Innere – Lunge 3 (COPD)", "KG Innere – Bronchiektasen-Präsentation", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "atemerleichternde-stellungen",
    name: "Atemerleichternde Ausgangsstellungen",
    art: "atmung",
    aste: "Kutschersitz, Torwartstellung, Stütz an Wand oder Tisch, Seitlage mit erhöhtem Oberkörper",
    ablauf: [
      "Arme abstützen (Oberschenkel, Tisch, Wand), damit die Atemhilfsmuskulatur am Schultergürtel arbeiten kann.",
      "Oberkörper leicht vorneigen, Bauch locker lassen.",
      "Mit dosierter Lippenbremse kombinieren."
    ],
    dosierung: "Bei Atemnot sofort einnehmen; als Pausenstellung beim Gehen und Treppensteigen üben.",
    wirkung: ["Entlastet die Atemarbeit", "Gibt Sicherheit im Anfall"],
    heim: true,
    quelle: ["KG Innere – Lunge 2 (Asthma)", "KG Innere – Bronchiektasen-Präsentation"]
  },
  {
    id: "kontaktatmung",
    name: "Kontaktatmung / Atemlenkung",
    art: "atmung",
    aste: "RL, SL oder Sitz",
    ablauf: [
      "Therapeut (oder Patient selbst) legt die Hände flächig auf den Thorax- oder Bauchbereich, in den geatmet werden soll (kostal, flankal, abdominal).",
      "Patient atmet gegen die Hände – „atmen Sie in meine Hände“.",
      "Hände gehen in der Ausatmung mit, geben in der Einatmung einen leichten Reiz."
    ],
    dosierung: "3–5 Minuten, mehrmals täglich; als Eigenübung mit eigenen Händen.",
    wirkung: ["Belüftung gezielter Lungenabschnitte", "Atemwahrnehmung und Entspannung", "Pneumonieprophylaxe"],
    heim: true,
    quelle: ["KG Chirurgie – Prophylaxen", "KG Innere – Herz-Klausurzusammenfassung", "KG Innere – Klausur ZF"]
  },
  {
    id: "bauchatmung",
    name: "Bauchatmung mit aphonischer Ausatmung",
    art: "atmung",
    aste: "RL mit angestellten Beinen, später Sitz und Stand",
    ablauf: [
      "Beide Hände flächig auf den Unterbauch legen.",
      "Durch die Nase einatmen – der Bauch wölbt sich in die Hände.",
      "Auf „fff“, „pff“ oder „ch“ ausatmen, der Bauch zieht sich „wie ein ausgedrückter Schwamm“ zum Nabel."
    ],
    dosierung: "5–10 Atemzüge, mehrmals täglich; Grundlage aller Wochenbettübungen.",
    wirkung: ["Kräftigt das Zwerchfell", "Druck-Sog-Pumpe für venösen Rückfluss", "Sanfte Stimulation von Rumpfkapsel und Beckenboden"],
    heim: true,
    quelle: ["KG Gyn – Behandlung im Frühwochenbett", "KG Innere – Klausur ZF"]
  },
  {
    id: "basalatmung",
    name: "Basalatmung / Atemwahrnehmung",
    art: "atmung",
    aste: "RL oder SL, später Bettrand und Sessel",
    ablauf: [
      "Ruhige Lagerung, Augen ggf. schließen.",
      "Aufmerksamkeit auf die eigene Atembewegung richten, ohne sie zu verändern.",
      "Optional: Wahrnehmung der kostalen Atembewegung mit eigenen Händen."
    ],
    dosierung: "2–5 Minuten zu Beginn und am Ende der Behandlung.",
    wirkung: ["Körperwahrnehmung und Entspannung", "Ökonomisieren des Atemrhythmus"],
    heim: true,
    quelle: ["KG Innere – Herzinsuffizienz (Kleines Programm)"]
  },
  {
    id: "schnueffelnde-einatmung",
    name: "Schnüffelnde Einatmung",
    art: "atmung",
    aste: "Sitz oder RL mit erhöhtem Oberkörper",
    ablauf: [
      "In mehreren kurzen Schnüffelstößen durch die Nase einatmen, bis die Lunge gut gefüllt ist.",
      "Kurz halten, dann langsam (z. B. mit Lippenbremse) ausatmen."
    ],
    dosierung: "5–8 Atemzüge, danach Pause.",
    wirkung: ["Vertieft das Atemzugvolumen", "Erweitert die Atembewegung", "Lockert zähes Sekret"],
    achtung: ["Bei restriktiven Erkrankungen nach jeder aktiven Maßnahme eine passive folgen lassen"],
    heim: true,
    quelle: ["KG Innere – Lunge 1", "KG Innere – Lunge 3", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "gaehnende-einatmung",
    name: "Gähnende Einatmung",
    art: "atmung",
    aste: "Sitz oder RL",
    ablauf: ["Mit weit geöffnetem Mund und tiefem Rachenraum wie beim Gähnen einatmen.", "Langsam über die Nase oder mit Lippenbremse ausatmen."],
    dosierung: "3–5 Wiederholungen.",
    wirkung: ["Vertieft die Einatmung", "Löst Verspannung im Kiefer- und Halsbereich"],
    heim: true,
    quelle: ["KG Innere – Lunge 1", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "phonische-atmung",
    name: "Phonische Ein- und Ausatemtechniken",
    art: "atmung",
    aste: "Sitz",
    ablauf: [
      "Ausatmen auf stimmlose Reibelaute „sch“, „s“ oder „f“ (dosiert, nicht pressen).",
      "Steigerung: tönendes Einatmen – Einatmung gegen einen leichten Widerstand im Rachen, hörbar."
    ],
    dosierung: "5–10 Atemzüge.",
    wirkung: ["Kräftigt Mm. intercostales und Zwerchfell", "Verlängert die Ausatmung"],
    heim: true,
    quelle: ["KG Innere – Entzündliche Herzerkrankungen"]
  },
  {
    id: "dreh-dehnlage",
    name: "Dreh-Dehnlage",
    art: "atmung",
    aste: "RL",
    ablauf: [
      "Beine angewinkelt zu einer Seite ablegen, Oberkörper bleibt auf dem Rücken bzw. dreht zur Gegenseite.",
      "Der oben liegende Arm geht in Elevation – die Flanke wird gedehnt.",
      "In die gedehnte Flanke atmen (ggf. Kontaktatmung)."
    ],
    dosierung: "1–3 Minuten pro Seite.",
    wirkung: ["Erweitert die Thoraxbeweglichkeit", "Belüftung der gedehnten Lungenabschnitte"],
    achtung: ["Nach Sternotomie/KHK-OP nicht bis die Fäden gezogen sind", "Nicht bei Herzschrittmacher/ICD auf der betroffenen Seite"],
    heim: true,
    quelle: ["KG Innere – Lunge 1", "KG Innere – Lunge 2", "KG Innere – Entzündliche Herzerkrankungen", "KG Innere – Klausur ZF"]
  },
  {
    id: "halbmondlage",
    name: "Halbmondlage",
    art: "atmung",
    aste: "RL",
    ablauf: ["Oberkörper und Beine zur gleichen Seite verschieben – der Körper bildet einen Halbmond.", "Die konvexe Seite wird gedehnt; in die gedehnte Flanke atmen."],
    dosierung: "1–3 Minuten pro Seite.",
    wirkung: ["Dehnung der Flankenregion", "Thoraxelastizität"],
    achtung: ["Wie Dreh-Dehnlage: nicht nach frischer Sternotomie / bei Schrittmacher"],
    heim: true,
    quelle: ["KG Innere – Entzündliche Herzerkrankungen", "KG Innere – Klausur ZF"]
  },
  {
    id: "huffing",
    name: "Huffing (forcierte Ausatemtechnik)",
    art: "atmung",
    aste: "Sitz, leicht vorgeneigt",
    ablauf: [
      "Mittelgroß einatmen.",
      "Mit offenem Mund und offener Stimmritze kräftig „hhh“ ausatmen (wie einen Spiegel anhauchen).",
      "Variante Doppel-Huffing: zwei Huffs hintereinander."
    ],
    dosierung: "Am Ende jeder Sekretmobilisation 2–3 Huffs.",
    wirkung: ["Sekrettransport Richtung Trachea", "Ersetzt anstrengenden, unproduktiven Husten", "Senkt hohe intrathorakale Drücke"],
    heim: true,
    quelle: ["KG Innere – Bronchiektasen-Präsentation", "KG Innere – Lunge 3"]
  },
  {
    id: "autogene-drainage",
    name: "Autogene Drainage (modifiziert)",
    art: "atmung",
    aste: "Sitz oder RL",
    ablauf: [
      "Phase 1 (Lösen): auf niedrigem Lungenvolumen atmen (nach Ausatmung nur flach einatmen).",
      "Phase 2 (Sammeln): Atemvolumen schrittweise erhöhen.",
      "Phase 3 (Evakuieren): auf hohem Volumen atmen, Sekret mit Huffing abtransportieren.",
      "Ausatmung immer passiv-aktiv mit offenen Atemwegen, nicht pressen."
    ],
    dosierung: "Individuell 10–30 Minuten, möglichst täglich; nach Präferenz des Patienten alternativ ACBT.",
    wirkung: ["Sekret aus peripheren Atemwegen lösen und transportieren", "Ohne Hilfsmittel selbstständig anwendbar"],
    heim: true,
    quelle: ["KG Innere – Bronchiektasen-Präsentation", "KG Innere – Lunge 3"]
  },
  {
    id: "acbt",
    name: "ACBT – Active Cycle of Breathing Techniques",
    art: "atmung",
    aste: "Sitz oder Drainagelagerung",
    ablauf: [
      "Atemkontrolle: ruhige Bauchatmung.",
      "3–4 tiefe Atemzüge zur Thoraxexpansion (evtl. mit kurzem Halten).",
      "Erneut Atemkontrolle.",
      "Huffing zur Sekretentfernung; Zyklus wiederholen."
    ],
    dosierung: "Mehrere Zyklen, bis Huffing trocken klingt.",
    wirkung: ["Sekretmobilisation", "Vermeidet Ermüdung durch eingeplante Pausen"],
    heim: true,
    quelle: ["KG Innere – Bronchiektasen-Präsentation"]
  },
  {
    id: "oszillierendes-pep",
    name: "Oszillierende PEP (Flutter, RC-Cornet)",
    art: "atmung",
    aste: "Aufrechter Sitz",
    ablauf: [
      "Langsam und tiefer als normal einatmen.",
      "Durch das Gerät gleichmäßig und etwas verlängert ausatmen – Wangen nicht aufblasen.",
      "Gerätewinkel/Einstellung so wählen, dass Vibrationen im Brustkorb spürbar sind.",
      "Nach einigen Zyklen Huffing anschließen."
    ],
    dosierung: "Teil des Morgenprogramms, 1–2 × täglich; Technik regelmäßig kontrollieren.",
    wirkung: ["Schwingungen verflüssigen das Sekret", "Positiver Ausatemdruck verhindert Kollaps der Atemwege"],
    material: "Flutter, RC-Cornet oder ähnliches PEP-Gerät",
    heim: true,
    quelle: ["KG Innere – Bronchiektasen-Präsentation", "KG Innere – Lunge 3"]
  },
  {
    id: "drainagelagerung",
    name: "Drainagelagerung / segmentale Lagerung",
    art: "atmung",
    aste: "Lagerung entsprechend dem betroffenen Lungenabschnitt (z. B. Kopftief-Seitlage für Unter- und Mittellappen)",
    ablauf: [
      "Betroffenes Segment so lagern, dass das Sekret der Schwerkraft folgend Richtung Hauptbronchus fließt.",
      "In der Lagerung atmen: mit PEP-Gerät, autogener Drainage oder ACBT kombinieren.",
      "Anschließend Huffing."
    ],
    dosierung: "5–10 Minuten pro Lagerung.",
    wirkung: ["Sekrettransport", "Verbessert die Perfusion"],
    achtung: ["Kopftieflage nicht bei Herzinsuffizienz, Hirndruck, Reflux"],
    quelle: ["KG Innere – Lunge 1", "KG Innere – Lunge 3", "KG Innere – Bronchiektasen-Präsentation"]
  },
  {
    id: "umlagerung",
    name: "Umlagerung & regelmäßiger Lagewechsel",
    art: "prophylaxe",
    aste: "Bettlägerige Patienten",
    ablauf: [
      "Lage mindestens alle 2 Stunden wechseln (RL – SL – SL, ggf. BL).",
      "Möglichst viel Körperfläche aufliegen lassen, Knochenvorsprünge entlasten.",
      "Patient so aktiv wie möglich mitdrehen lassen."
    ],
    dosierung: "Alle 2 Stunden, faltenfreie Unterlage.",
    wirkung: ["Pneumonieprophylaxe (Belüftung/Perfusion)", "Dekubitusprophylaxe", "Kontrakturprophylaxe"],
    quelle: ["KG Chirurgie – Prophylaxen", "KG Innere – Lunge 3"]
  },
  {
    id: "packegriffe",
    name: "Packegriffe, Hautrollungen & Hautverschiebungen am Thorax",
    art: "atmung",
    aste: "SL, Reitsitz oder RL",
    ablauf: [
      "Haut und Unterhaut flächig fassen (Packegriff) und kurz abheben, oder als Rolle über den Thorax führen.",
      "Arbeitsrichtung von kaudal nach kranial, eine Seite fertig behandeln.",
      "Den Bereich zwischen den Schulterblättern aussparen (Kopf- und Herzzone)."
    ],
    dosierung: "Einige Minuten, z. B. in den Pausen zwischen aktiven Bewegungsserien.",
    wirkung: ["Senkt erhöhte Gewebswiderstände", "Reflektorische Atemvertiefung"],
    quelle: ["KG Innere – Herzinsuffizienz", "KG Innere – Lunge 1", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "icr-ausstreichungen",
    name: "Intercostalausstreichungen (ICR)",
    art: "atmung",
    aste: "SL, Reitsitz oder RL",
    ablauf: ["Mit den Fingerkuppen die Zwischenrippenräume von dorsal nach ventral ausstreichen.", "Langsam, angepasst an die Atmung."],
    dosierung: "Mehrere Züge pro Zwischenrippenraum.",
    wirkung: ["Verschieblichkeit des Gewebes am Thorax", "Tonussenkung der Interkostalmuskulatur"],
    quelle: ["KG Innere – Herzinsuffizienz", "KG Innere – Entzündliche Herzerkrankungen", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "vibrationen-thorax",
    name: "Vibrationen am Thorax",
    art: "passiv",
    aste: "SL oder Drainagelagerung",
    ablauf: ["Manuell (flächige Hand) oder apparativ (Vibrax) in der Ausatemphase vibrieren.", "Mit tiefen Atemzügen und Huffing kombinieren."],
    dosierung: "Einige Minuten pro Lungenabschnitt.",
    wirkung: ["Lösen von zähem Sekret"],
    achtung: ["Tiefe Atemzüge sind oft wirksamer als Vibrationen", "Nicht bei Schrittmacher/ICD, frischer Sternotomie, Osteoporose", "Im Akutstadium keine Hackungen, Klopfungen oder Klatschungen"],
    material: "Ggf. Vibrax",
    quelle: ["KG Innere – Lunge 3", "KG Innere – Entzündliche Herzerkrankungen", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "heisse-rolle",
    name: "Heiße Rolle",
    art: "passiv",
    aste: "SL, BL oder Sitz",
    ablauf: ["Handtuch trichterförmig rollen, mit heißem Wasser füllen.", "Tupfend und rollend über den Behandlungsbereich führen, Haut beobachten."],
    dosierung: "Ca. 10 Minuten.",
    wirkung: ["Reflektorische Atemvertiefung", "Detonisierung, Durchblutung", "Fördert Wochenfluss (segmental)"],
    achtung: ["Nicht im OP-Gebiet", "Nicht im Akutstadium einer Pneumonie"],
    material: "Frotteehandtuch, heißes Wasser",
    quelle: ["KG Innere – Bronchiektasen-Präsentation", "KG Gyn – Wochenbett", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "reitsitzbehandlung",
    name: "Reitsitzbehandlung",
    art: "atmung",
    aste: "Reitsitz auf Stuhl oder Hocker, Arme auf Kissen abgelegt",
    ablauf: [
      "Passive Maßnahmen am Thorax zur Gewebslockerung (Packegriffe, ICR, Hautverschiebungen), immer erst eine Seite beenden.",
      "Beckenkamm, Schulterblatt und M. trapezius einschließen, Bereich zwischen den Schulterblättern aussparen.",
      "Mit Ein- und Ausatemtechniken verbinden.",
      "Abschluss: leichte aktive dynamische Übungen der Arme, Beine und des Rumpfes im Sitz."
    ],
    dosierung: "10–20 Minuten.",
    wirkung: ["Senkt Gewebswiderstände", "Gleichzeitig Befundaufnahme möglich"],
    quelle: ["KG Innere – Herzinsuffizienz (Anhang)", "KG Innere – Lunge 1"]
  },
  {
    id: "atemtrainer",
    name: "Atemtrainer (Triflow, Giebelrohr)",
    art: "atmung",
    aste: "Aufrechter Sitz",
    ablauf: [
      "Triflow: langsam und tief durch das Mundstück einatmen, die Bälle möglichst lange oben halten.",
      "Umgedrehter Triflow: gegen Widerstand ausatmen.",
      "Giebelrohr: Totraumvergrößerung, nur nach ärztlicher Anordnung."
    ],
    dosierung: "5–10 Atemzüge, mehrmals täglich.",
    wirkung: ["Vertieft das Atemzugvolumen", "Pneumonieprophylaxe", "Atemmuskeltraining"],
    material: "Triflow, Giebelrohr",
    heim: true,
    quelle: ["KG Chirurgie – Prophylaxen", "KG Innere – Lunge 1"]
  },
  {
    id: "atemmuskeltraining",
    name: "Atemmuskeltraining / Widerstandsatmung",
    art: "atmung",
    aste: "Atemerschwerende Ausgangsstellungen (z. B. Bauchlage), Sitz",
    ablauf: ["Gegen einen dosierten Widerstand ein- oder ausatmen (Hände des Therapeuten, Gerät, Ausgangsstellung).", "Pausen einhalten."],
    dosierung: "Kurze Serien, nach Ermüdung pausieren.",
    wirkung: ["Kräftigt die Atemmuskulatur"],
    achtung: ["Bauchlage nicht für jeden geeignet"],
    quelle: ["KG Innere – Lunge 1"]
  },
  {
    id: "hustentechnik",
    name: "Schonende Hustentechniken",
    art: "atmung",
    aste: "Sitz, leicht vorgeneigt",
    ablauf: [
      "Unproduktiven Hustenreiz dämpfen: gegen geschlossene Lippen anhusten, räuspern, Lippenbremse.",
      "Produktiver Husten: erst Sekret mit Huffing hochholen, dann kurz abhusten.",
      "Nach Sternotomie oder Bauch-OP: Hände oder Kissen schützend vor Brust/Bauch halten."
    ],
    dosierung: "Bei Bedarf.",
    wirkung: ["Senkt hohe intrathorakale Drücke", "Schont Wunden und Atemwege"],
    heim: true,
    quelle: ["KG Innere – Lunge 1", "KG Innere – Lunge 3", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "thoraxmobilisation",
    name: "Aktive Thoraxmobilisation mit Atemmusterschulung",
    art: "atmung",
    aste: "Sitz auf Hocker",
    ablauf: [
      "BWS-Extension mit Einatmung, BWS-Flexion mit Ausatmung.",
      "Rotation und Seitneigung des Oberkörpers, Rippen mitbewegen.",
      "Schultern locker – hochgezogene Schultern bewusst senken."
    ],
    dosierung: "8–10 Wiederholungen je Richtung.",
    wirkung: ["Verbessert Thorax- und BWS-Beweglichkeit", "Fördert kostoabdominales Atemmuster"],
    heim: true,
    quelle: ["KG Innere – Bronchiektasen-Präsentation", "KG Innere – Lunge 2"]
  },
  {
    id: "peak-flow-schulung",
    name: "Peak-Flow-Messung & Selbstmanagement",
    art: "atmung",
    aste: "Stand",
    ablauf: [
      "Zeiger auf Null, Gerät gerade halten, tief einatmen, Lippen fest um das Mundstück.",
      "So kräftig und schnell wie möglich ausatmen, 3 × messen, höchsten Wert notieren.",
      "Werte mit dem persönlichen Bestwert vergleichen (Ampelschema), Medikamente notieren."
    ],
    dosierung: "Täglich zur gleichen Zeit, Protokoll führen.",
    wirkung: ["Patient erkennt Verschlechterungen früh", "Selbstwirksamkeit"],
    material: "Peak-Flow-Meter, Protokoll",
    heim: true,
    quelle: ["KG Innere – Lunge 2 (Asthma)"]
  },
  {
    id: "inhalation-reihenfolge",
    name: "Inhalation in fester Reihenfolge mit Atemtechnik",
    art: "atmung",
    aste: "Aufrechter Sitz",
    ablauf: [
      "Erst kurzwirksamer Bronchodilatator, dann (nach ärztlicher Verordnung) hypertone Kochsalzlösung über Mundstück.",
      "Während der Inhalation langsam tief einatmen, kurz halten.",
      "Direkt danach Sekretmobilisation (PEP, autogene Drainage), Vernebler hygienisch reinigen und trocknen."
    ],
    dosierung: "Morgens vor den Atemtechniken.",
    wirkung: ["Sekret wird flüssiger, Atemtechniken wirken besser"],
    heim: true,
    quelle: ["KG Innere – Bronchiektasen-Präsentation"]
  },
  {
    id: "atemreizgriffe",
    name: "Atemreizgriffe für nicht ansprechbare Patienten",
    art: "passiv",
    aste: "RL oder SL (Intensivstation)",
    ablauf: [
      "Abklatschen mit Eiswasser zur reflektorischen Atemvertiefung.",
      "Packegriffe an Thorax und Bauch.",
      "Vibrationen; Absaugen, wenn der Patient nicht abhusten kann."
    ],
    dosierung: "Mit Umlagerung alle 2 Stunden kombinieren.",
    wirkung: ["Reflektorische Atemvertiefung", "Pneumonieprophylaxe"],
    quelle: ["KG Innere – Lunge 3", "KG Chirurgie – Prophylaxen"]
  },

  /* ---------------- Passive & physikalische Maßnahmen ---------------- */
  {
    id: "milde-kaelte",
    name: "Milde Kälte (Kurzzeiteis, Eislolli)",
    art: "passiv",
    aste: "RL, Extremität hochgelagert",
    ablauf: ["Eislolli-Abreibung oder Kurzzeiteis um das Gelenk, Haut kontrollieren.", "Keine feuchte Kälte (Umschläge) auf Wunden."],
    dosierung: "5–10 Minuten.",
    wirkung: ["Ergussbehandlung", "Schmerzlinderung"],
    achtung: ["Vorsichtiger Umgang mit Eis – nur milde Kälte"],
    quelle: ["KG Chirurgie – Frakturen und Verletzungen des Kniegelenks", "KG Chirurgie – Patellafraktur"]
  },
  {
    id: "mld-bein",
    name: "Manuelle Lymphdrainage – Beinbehandlung",
    art: "passiv",
    aste: "RL, Therapeut seitlich",
    ablauf: [
      "Vorbehandlung: Hals, Bauchtiefdrainage.",
      "Leistenlymphknoten in 3 Ansätzen (stehende Kreise).",
      "Oberschenkel: stehende Kreise und Pumpgriffe Richtung Leiste („Pumpen und Weiterschieben“).",
      "Knie: Pumpgriffe über der Patella, Kniekehlenlymphknoten.",
      "Unterschenkel: Schöpfgriffe; Fuß: stehende Kreise um die Malleolen, Ödemgriff am Vorfuß."
    ],
    dosierung: "Behandlung in Abflussrichtung, ca. 30–45 Minuten.",
    wirkung: ["Entstauung bei traumatischen und postoperativen Ödemen, venösen Stauungen, Lähmungsödemen"],
    achtung: ["Kontraindiziert bei akuter Beinvenenerkrankung", "Kontraindiziert bei (primärer Rechts-)Herzinsuffizienz", "Fußpilz zuerst behandeln"],
    quelle: ["Lymphdrainage – Manuelle Lymphdrainage Praxis", "KG Innere – Praxis Herz"]
  },
  {
    id: "kolonmassage",
    name: "Kolonmassage",
    art: "passiv",
    aste: "RL, Beine angestellt",
    ablauf: ["Flächig und ruhig im Uhrzeigersinn entlang des Dickdarmverlaufs massieren.", "Mit Bauchatmung kombinieren."],
    dosierung: "5–10 Minuten.",
    wirkung: ["Obstipationsprophylaxe", "Regt den Wochenfluss an"],
    achtung: ["Nach Sectio nicht im Narbenbereich"],
    heim: true,
    quelle: ["KG Gyn – Wochenbett"]
  },
  {
    id: "abreiben-ruecken",
    name: "Rücken abreiben / vorsichtig abklatschen",
    art: "passiv",
    aste: "Sitz an der Bettkante",
    ablauf: ["Rücken mit Franzbranntwein bzw. Aromaöl abreiben oder sanft abklatschen.", "Patient wählt das Aroma: Lavendel (ausgleichend) oder Citrus/Orange (anregend)."],
    dosierung: "2–3 Minuten.",
    wirkung: ["Sympathikotrope, belebende Wirkung", "Steigert Wohlbefinden und Motivation"],
    quelle: ["KG Innere – Herzinsuffizienz"]
  },
  {
    id: "narbenmobilisation",
    name: "Narbenmobilisation",
    art: "passiv",
    aste: "Entspannte Lagerung",
    ablauf: ["Haut um die Narbe in alle Richtungen verschieben, später Narbe selbst abheben und rollen.", "Erst nach abgeschlossener Wundheilung."],
    dosierung: "Einige Minuten; als Eigenübung täglich.",
    wirkung: ["Verhindert Verklebungen", "Verbessert Verschieblichkeit"],
    heim: true,
    quelle: ["KG Chirurgie – Patellafraktur", "KG Innere – Herzchirurgie"]
  },

  /* ---------------- Herz-Kreislauf & Ausdauer ---------------- */
  {
    id: "fussbewegungsserie",
    name: "Langsame Fußbewegungsserien im Liegen",
    art: "herz",
    aste: "RL, Kopfteil schräg",
    ablauf: [
      "Langsame, dynamische Bewegungen eines Fußes: Dorsalextension/Plantarflexion, Inversion/Eversion, Kreisen.",
      "Danach Pause von ½–1 Minute (in der Pause passive Maßnahmen am Thorax möglich).",
      "Andere Seite."
    ],
    dosierung: "5–10 Wiederholungen pro Serie; Puls kontrollieren.",
    wirkung: ["Kreislaufanregung herzfern beginnend", "Thromboseprophylaxe"],
    achtung: ["Keine Pressatmung", "Puls darf in RL nur um ca. 8–12/min steigen"],
    heim: true,
    quelle: ["KG Innere – Herzinsuffizienz", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "venenpumpe",
    name: "Muskelpumpe am Sprunggelenk (Venenpumpe)",
    art: "prophylaxe",
    aste: "RL, Beine ggf. hochgelagert; auch im Sitz",
    ablauf: [
      "Füße im Sekundenrhythmus kräftig anziehen und strecken, Zehen einbeziehen.",
      "Gleichzeitig, gegengleich oder im Wechsel; alternativ Kreisen.",
      "Variante: Plantarflexion gegen ein Tretpolster am Fußende."
    ],
    dosierung: "3 Serien à 10 oder 2 Serien à 20 Wiederholungen, stündlich.",
    wirkung: ["Beschleunigt den venösen Rückstrom", "Thromboseprophylaxe", "Ödemresorption"],
    achtung: ["Wirkt nur, solange die Bewegung dauert – häufig wiederholen", "Bei Hüftluxation/TEP kein Fußkreisen (Rotation läuft in die Hüfte weiter)"],
    heim: true,
    quelle: ["KG Chirurgie – Prophylaxen", "KG Chirurgie – Patellafraktur", "KG Innere – Hockergymnastik"]
  },
  {
    id: "tiefatmung-rueckstrom",
    name: "Tiefatemübung für den venösen Rückstrom",
    art: "prophylaxe",
    aste: "RL mit hochgelagerten Beinen",
    ablauf: ["Tief und ruhig einatmen – der Unterdruck im Thorax saugt venöses Blut an.", "Mit der Muskelpumpe am Sprunggelenk kombinieren."],
    dosierung: "5–10 Atemzüge zwischen den Bewegungsserien.",
    wirkung: ["Erhöht die venöse Strömungsgeschwindigkeit um ca. 30 %"],
    heim: true,
    quelle: ["KG Chirurgie – Prophylaxen"]
  },
  {
    id: "hueftserie-bett",
    name: "Bewegungsserie der Hüfte im Bettniveau",
    art: "herz",
    aste: "RL",
    ablauf: ["Hüfte IRO/ARO (Bein rollen), Abduktion/Adduktion schleifend, Ferse schleifen.", "Langsam, dynamisch, mit Pausen."],
    dosierung: "5–10 Wiederholungen je Bewegung.",
    wirkung: ["Kreislaufanregung mit großen Muskelgruppen", "Thromboseprophylaxe"],
    heim: true,
    quelle: ["KG Innere – Herzinsuffizienz"]
  },
  {
    id: "puls-selbstkontrolle",
    name: "Puls selbst messen & Borg-Skala anwenden",
    art: "herz",
    aste: "Sitz",
    ablauf: [
      "Ruhepuls an der A. radialis messen (Frequenz, Rhythmus, Füllung).",
      "Nach der Belastung erneut messen; Ruhepuls sollte innerhalb von 3 Minuten wieder erreicht werden.",
      "Anstrengung zusätzlich mit der Borg-Skala einschätzen (Trainingsbereich 11–14 bzw. 4–6)."
    ],
    dosierung: "Vor, während und nach jeder Belastung.",
    wirkung: ["Sichere Belastungssteuerung", "Selbstmanagement (Pulsen erlernen)"],
    achtung: ["Unter Betablockern ist die Borg-Skala aussagekräftiger als der Puls"],
    heim: true,
    quelle: ["KG Innere – Herzinfarkt", "KG Innere – Herz-Klausurzusammenfassung", "KG Innere – Der Puls"]
  },
  {
    id: "herzbett",
    name: "Herzbett-Lagerung",
    art: "prophylaxe",
    aste: "Bett",
    ablauf: ["Oberkörper/Kopfende hochstellen (sitzend bis halbsitzend).", "Beine tief lagern, Arme unterlagern."],
    dosierung: "Dauerlagerung nach Bedarf.",
    wirkung: ["Vermindert den venösen Rückfluss – entlastet das Herz", "Erleichtert die Atmung (Orthopnoe)"],
    quelle: ["KG Innere – Praxis Herz", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "armuebungen-liegen",
    name: "Leichte Armübungen im Liegen (Pilatesball, Sandsack)",
    art: "herz",
    aste: "RL",
    ablauf: [
      "Pilatesball mit beiden Händen von der Brust Richtung Decke führen und zurück.",
      "Unterarm mit Sandsack anheben und ablegen.",
      "Aktive Bewegungen der oberen Extremität, Ausatmung bei der Anstrengung."
    ],
    dosierung: "5–10 Wiederholungen, Pausen, Puls kontrollieren.",
    wirkung: ["Aktive Mobilisation in der Phase der aufgelockerten Bettruhe (25 Watt)"],
    achtung: ["Arme anfangs nicht über 90° (nach Infarkt, Sternotomie, Schrittmacher)", "Keine Pressatmung"],
    material: "Pilatesball, Sandsack",
    quelle: ["KG Innere – Klausur ZF"]
  },
  {
    id: "igelball-koerperwahrnehmung",
    name: "Körperwahrnehmung mit Igelball",
    art: "psyche",
    aste: "RL, Sitz oder SL",
    ablauf: ["Igelball langsam über Arme, Beine und Rücken rollen (selbst oder durch Therapeut/Partner).", "Nachspüren: Wie fühlt sich die Stelle jetzt an?"],
    dosierung: "3–5 Minuten.",
    wirkung: ["Körperwahrnehmung", "Vertrauen in den eigenen Körper", "Entspannung"],
    material: "Igelball",
    heim: true,
    quelle: ["KG Innere – Klausur ZF", "KG Neuro – Fallbeispiel Parkinson"]
  },
  {
    id: "hockergymnastik",
    name: "Hockergymnastik (Gruppenprogramm)",
    art: "herz",
    aste: "Aufrechter Sitz auf dem Hocker, Füße hüftbreit",
    ablauf: [
      "Aufwärmen: Kopf- und Fußkreisen, Füße in einen Ring tippen, Schulterkreisen, Handgelenke, Schulterblatt-Retraktion, leichtes Rudern, Füße wippen.",
      "Hauptteil: Ring- und Theraband-Übungen für Beine, Rumpf und Arme.",
      "Schluss: spielerischer Ausklang (z. B. „Die Ente am Teich“) und Bauchatmung."
    ],
    dosierung: "Ca. 30–45 Minuten; entspricht etwa 50 Watt.",
    wirkung: ["Dosiertes Ganzkörpertraining", "Gruppenerlebnis und Motivation"],
    achtung: ["Bei Herzpatienten keine statische Haltearbeit und keine Pressatmung", "Bei Hüft-TEP: Oberkörper zurücklehnen, um 90° Hüftflexion nicht zu überschreiten"],
    material: "Hocker, Ring, Theraband, ggf. Ball und Stab",
    quelle: ["KG Innere – Hockergymnastik", "KG Innere – Klausur ZF", "KG Innere – Herzchirurgie"]
  },
  {
    id: "ring-fuss-sitz",
    name: "Ringübungen für Fuß und Knie im Sitz",
    art: "kraft",
    aste: "Sitz auf dem Hocker, Ring am Boden",
    ablauf: [
      "Ring mit der Ferse nach hinten ziehen, mit den Zehen nach vorne schieben.",
      "Ring mit den Zehenspitzen aufheben und das Knie strecken.",
      "Ring zwischen den Großzehen (Dorsalextension) bzw. zwischen den Fersen (Plantarflexion) einspreizen.",
      "Ferse in den Ring und darüber tippen (Knieflexion/-extension); mit Fußaußen-/innenseite schieben."
    ],
    dosierung: "Je 8–10 Wiederholungen.",
    wirkung: ["Kräftigt Fuß- und Unterschenkelmuskulatur", "Kniebeweglichkeit", "Koordination"],
    material: "Gymnastikring",
    heim: true,
    quelle: ["KG Innere – Hockergymnastik"]
  },
  {
    id: "ring-druck-sitz",
    name: "Ring-Druckübungen im Sitz",
    art: "kraft",
    aste: "Sitz auf dem Hocker",
    ablauf: [
      "Ring aufgestellt auf den Oberschenkel, mit der Hand drücken – das Bein drückt dagegen nach oben.",
      "Diagonal drücken (schräge Bauchmuskulatur).",
      "Ring seitlich an den Oberschenkel – in Abduktion drücken; bei Knie-TEP Ring zwischen den Oberschenkeln in Adduktion drücken."
    ],
    dosierung: "Ein paar Sekunden halten, 5–8 Wiederholungen.",
    wirkung: ["Kräftigung Hüfte und Rumpf"],
    achtung: ["Isometrie – nicht bei Herzpatienten in der Frühphase (Pressatmung!)", "Bei Hüft-TEP keine Adduktion über die Mittellinie"],
    material: "Gymnastikring",
    quelle: ["KG Innere – Hockergymnastik"]
  },
  {
    id: "ring-arme-sitz",
    name: "Ringübungen für Arme und Rumpf im Sitz",
    art: "kraft",
    aste: "Sitz, Ring vor dem Oberkörper",
    ablauf: [
      "Ring mit gebeugten, dann gestreckten Armen zusammendrücken und den Oberkörper drehen.",
      "Mit gestreckten Armen Ring halten, Oberkörper nach hinten lehnen und wieder aufrichten."
    ],
    dosierung: "8–10 Wiederholungen.",
    wirkung: ["Rumpfstabilität", "Schultergürtel-Kräftigung"],
    material: "Gymnastikring",
    quelle: ["KG Innere – Hockergymnastik"]
  },
  {
    id: "ente-am-teich",
    name: "„Die Ente am Teich“ – spielerischer Ausklang",
    art: "herz",
    aste: "Sitz auf dem Hocker",
    ablauf: [
      "Die Ente streckt die Flügel: Ring vor der Brust, Arme nach vorne strecken (8–10 ×).",
      "Die Ente rudert: Theraband auseinanderziehen, Schulterblätter zusammen.",
      "Die Ente watschelt: Marschieren im Sitzen, Ring nach rechts und links.",
      "Die Ente schaut sich um: kleine Oberkörperrotation mit Band.",
      "Die Ente schlägt mit den Flügeln: Arme mit Ring seitlich öffnen.",
      "Die Ente ruht sich aus: Hände auf den Bauch, 3 Sek. ein-, 4 Sek. ausatmen."
    ],
    dosierung: "5–10 Minuten.",
    wirkung: ["Cool-down mit Mobilisation und Entspannung", "Motivation durch Geschichte"],
    achtung: ["Bei Hüft-TEP beim Marschieren Oberkörper zurücklehnen"],
    material: "Ring, Theraband",
    quelle: ["KG Innere – Hockergymnastik"]
  },
  {
    id: "stab-uebungen-sitz",
    name: "Stabübungen im Sitz",
    art: "herz",
    aste: "Sitz",
    ablauf: [
      "Rudern mit dem Stab, Seitneigung, Stab heben und senken.",
      "Stab in einer 8 durch die Beine führen.",
      "Partnerübung: gegenübersitzen, je ein Ende zweier Stäbe halten, gemeinsam vor und zurück bewegen."
    ],
    dosierung: "8–10 Wiederholungen je Übung.",
    wirkung: ["Mobilisation Schultergürtel und Rumpf", "Koordination, soziale Interaktion"],
    material: "Gymnastikstab",
    quelle: ["KG Innere – Klausur ZF"]
  },
  {
    id: "ball-sitz",
    name: "Ballübungen im Sitz",
    art: "herz",
    aste: "Sitz",
    ablauf: ["Ball zwischen die Knie klemmen.", "Ball um den Körper und um die Beine kreisen.", "Ball am Boden mit den Fersen bewegen."],
    dosierung: "8–10 Wiederholungen.",
    wirkung: ["Koordination", "Leichte Kräftigung"],
    material: "Gymnastikball",
    quelle: ["KG Innere – Klausur ZF"]
  },
  {
    id: "marschieren-stand",
    name: "Marschieren im Stand",
    art: "herz",
    aste: "Stand, ggf. Stuhl als Sicherung",
    ablauf: ["Auf der Stelle gehen, Knie anheben.", "Steigerung: Arme gegengleich mitschwingen."],
    dosierung: "1–3 Minuten, Puls kontrollieren.",
    wirkung: ["Kreislaufaktivierung (ca. 75 Watt)", "Koordination"],
    heim: true,
    quelle: ["KG Innere – Klausur ZF"]
  },
  {
    id: "stepper",
    name: "Stepper-Gangübung in alle Richtungen",
    art: "koordination",
    aste: "Gerader Stand vor dem Stepper",
    ablauf: [
      "Mit einem Fuß auf den Stepper steigen und wieder hinunter – vorwärts, rückwärts, seitwärts.",
      "Tempo variieren; Therapeut steht daneben und sichert."
    ],
    dosierung: "8–12 Wiederholungen pro Richtung und Bein.",
    wirkung: ["Gelenkmobilität der unteren Extremität", "Kraft und Gleichgewicht", "Vorbereitung aufs Treppensteigen"],
    material: "Stepper, ggf. Stoppersocken",
    quelle: ["KG Neuro – Gelenkmobilität UEX", "KG Innere – Klausur ZF"]
  },
  {
    id: "sidestep-kniebeuge",
    name: "Side-Steps & Kniebeuge mit Stuhl als Sicherung",
    art: "kraft",
    aste: "Stand, Stuhl hinter dem Patienten",
    ablauf: ["Seitschritte (Side Step) hin und her.", "Kniebeugen bis maximal 90°, Stuhl als Sitzstütze dahinter."],
    dosierung: "2–3 × 8–12 Wiederholungen.",
    wirkung: ["Beinkraft", "Alltagsfunktion"],
    achtung: ["Ausatmen beim Hochkommen, keine Pressatmung"],
    heim: true,
    quelle: ["KG Innere – Klausur ZF"]
  },
  {
    id: "theraband-oex-sitz",
    name: "Theraband-Kräftigung der Arme im Sitz (Brustpresse, Bizeps-Curls)",
    art: "kraft",
    aste: "Sitz, Band um die Hände gewickelt bzw. hinter dem Rücken",
    ablauf: ["Brustpresse: Arme gegen das Band nach vorne strecken.", "Bizeps-Curls: Ellbogen gegen das Band beugen.", "Rückweg langsam (2/3 der Zeit)."],
    dosierung: "2 × 10–12 Wiederholungen.",
    wirkung: ["Kräftigung der oberen Extremität (ca. 75 Watt)"],
    achtung: ["Gleichmäßig weiteratmen"],
    material: "Theraband",
    heim: true,
    quelle: ["KG Innere – Klausur ZF", "KG Innere – Hockergymnastik"]
  },
  {
    id: "gehen-ebene",
    name: "Gehen in der Ebene („Walk and Talk“)",
    art: "herz",
    aste: "Stand",
    ablauf: ["Gehen im Zimmer, auf dem Flur, dann in der Ebene draußen.", "Tempo so wählen, dass Sprechen noch möglich ist."],
    dosierung: "Steigern von wenigen Minuten auf 20–30 Minuten; Pulsanstieg Flur ca. 20/min.",
    wirkung: ["Aerobes Ausdauertraining", "Selbstständigkeit im Alltag"],
    heim: true,
    quelle: ["KG Innere – Herzinfarkt", "KG Innere – Praxis Herz"]
  },
  {
    id: "treppensteigen",
    name: "Treppentraining",
    art: "adl",
    aste: "Stand an der Treppe mit Handlauf",
    ablauf: [
      "Langsam im Atemrhythmus steigen (z. B. Ausatmung bei 2 Stufen, Lippenbremse).",
      "Pausen in atemerleichternder Stellung einplanen.",
      "Mit Gehstützen: gesundes Bein zuerst hinauf, operiertes Bein zuerst hinab."
    ],
    dosierung: "Zunächst ein Stockwerk, dann steigern; Pulsanstieg ca. 20–30/min.",
    wirkung: ["Alltagsfunktion", "Beinkraft"],
    achtung: ["Kein geeignetes aerobes Ausdauertraining (kurze, hohe, anaerobe Belastung)"],
    heim: true,
    quelle: ["KG Innere – Herzinfarkt", "KG Innere – Bronchiektasen-Präsentation", "KG Chirurgie – Patellafraktur"]
  },
  {
    id: "ergometer",
    name: "Fahrradergometer – Ausdauertraining",
    art: "herz",
    aste: "Sitz auf dem Ergometer, Sattel passend eingestellt",
    ablauf: [
      "Dauermethode: gleichmäßige Belastung, Start 10–15 Minuten, später 20–30 Minuten.",
      "Intervallmethode (z. B. 30 s Belastung / 30 s Pause), wenn Dauermethode nicht toleriert wird.",
      "Puls, Borg-Skala und ggf. SpO₂ kontrollieren."
    ],
    dosierung: "3 × pro Woche; Borg 12–14; Steigerung um 5–10 %.",
    wirkung: ["Aerobe Ausdauer", "Motorische Symptome bei Parkinson (HIIT oder kontinuierlich)"],
    achtung: ["Wattfreigabe bei Herzpatienten durch den Arzt", "Nach Knieverletzung erst ab ausreichender Flexion (> 100°), geringer Widerstand, hoher Sattel"],
    material: "Fahrradergometer, Pulsoxymeter",
    quelle: ["KG Innere – Bronchiektasen-Präsentation", "KG Neuro – Morbus Parkinson", "KG Chirurgie – Frakturen und Verletzungen des Kniegelenks", "MTT – Skript"]
  },
  {
    id: "ringspiele-partner",
    name: "Ring- und Sandsackspiele mit Partner",
    art: "psyche",
    aste: "Sitz oder Stand in der Gruppe",
    ablauf: [
      "Ring übergeben, am Boden zueinander schieben, zusammendrücken, auseinanderziehen.",
      "Zielwerfen mit dem Ring; Sandsack mit Partner zuwerfen."
    ],
    dosierung: "5–10 Minuten.",
    wirkung: ["Vertrauen in den eigenen Körper", "Bewegungsfreude, soziale Interaktion"],
    material: "Ringe, Sandsäckchen",
    quelle: ["KG Innere – Klausur ZF (Stiefmütterchen-Typ)"]
  },
  {
    id: "alltagsbewegungen-nachmachen",
    name: "Alltagsbewegungen nachmachen",
    art: "adl",
    aste: "Stand oder Sitz",
    ablauf: ["Typische Alltagsbewegungen langsam vormachen und gemeinsam nachmachen (z. B. etwas aus dem Regal holen, Schuhe binden, Tasche tragen).", "Atmung dabei bewusst fließen lassen."],
    dosierung: "5–10 Minuten.",
    wirkung: ["Angst vor Belastung abbauen", "Transfer in den Alltag"],
    quelle: ["KG Innere – Klausur ZF (Stiefmütterchen-Typ)"]
  },

  /* ---------------- Prophylaxe & Lagerung ---------------- */
  {
    id: "hochlagerung",
    name: "Hochlagerung der Extremität",
    art: "prophylaxe",
    aste: "RL",
    ablauf: ["Fußteil um ca. 20° anheben bzw. Bein auf Keil lagern (Ferse höher als Knie, Knie nicht überstreckt).", "Mit Muskelpumpe kombinieren."],
    dosierung: "Dauerhaft bzw. in Pausen.",
    wirkung: ["Steigert die venöse Strömungsgeschwindigkeit um 80–100 %", "Ödem- und Schmerzreduktion"],
    achtung: ["Bei Verdacht auf Kompartmentsyndrom NICHT hochlagern – tief lagern und Arzt informieren"],
    quelle: ["KG Chirurgie – Prophylaxen", "KG Chirurgie – Patellafraktur", "KG Chirurgie – Proximale Femur- und Sprunggelenksfrakturen"]
  },
  {
    id: "durchbewegen",
    name: "Passives, assistives und aktives Durchbewegen",
    art: "prophylaxe",
    aste: "RL oder SL",
    ablauf: [
      "Alle großen und kleinen Gelenke achsengerecht im erlaubten Ausmaß bewegen.",
      "Große Gelenke im 2-Sekunden-Rhythmus oder langsamer, Gelenke sichern.",
      "So aktiv wie möglich – passiv nur bei sehr geschwächten Patienten."
    ],
    dosierung: "3 × 10 bzw. 2 × 20 Wiederholungen.",
    wirkung: ["Kontrakturprophylaxe", "Thromboseprophylaxe"],
    achtung: ["Schmerzgrenze und Freigaben beachten", "Weiterlaufende Bewegungen ins OP- oder Frakturgebiet vermeiden"],
    quelle: ["KG Chirurgie – Prophylaxen", "KG Chirurgie – Zusammenfassung Mittelkurs", "KG Neuro – Schädel-Hirn-Trauma"]
  },
  {
    id: "dekubitus-lagerung",
    name: "Druckentlastende Lagerung (Dekubitusprophylaxe)",
    art: "prophylaxe",
    aste: "Bett",
    ablauf: [
      "Gefährdete Stellen entlasten: Kreuzbein, Fersen, Trochanter, Schulterblätter, Ellbogen, Knöchel, Fibulaköpfchen.",
      "Viel Körperfläche aufliegen lassen, normentsprechende Gelenkstellungen.",
      "Faltenfreie, trockene Unterlage; Haut pflegen und trocken halten (Schweiß, Inkontinenz)."
    ],
    dosierung: "Bei jedem Lagewechsel kontrollieren (Fingertest).",
    wirkung: ["Verhindert Druckgeschwüre"],
    achtung: ["Gerötete oder gefährdete Stellen nicht massieren, reiben oder bürsten", "Beim Hochrutschen anheben statt ziehen (Scherkräfte)"],
    quelle: ["KG Chirurgie – Prophylaxen", "KG Techniken – Dekubitusprophylaxe"]
  },
  {
    id: "a-lagerung",
    name: "A-Lagerung (Bobath)",
    art: "prophylaxe",
    aste: "RL",
    ablauf: [
      "Mehr betroffenes Bein auf Außenrotation prüfen, ggf. Handtuch auf Höhe des Trochanters unterlagern.",
      "Patient fixiert den Hemiarm auf dem Bauch; Oberkörper anheben – der Kopf leitet ein.",
      "Erstes Kissen schräg unter die weniger betroffene Schulter, zweites schräg unter die mehr betroffene – beide bilden ein „A“.",
      "Kopf ggf. mit kleinem Nackenkissen unterstützen."
    ],
    dosierung: "Im Lagerungswechsel.",
    wirkung: ["Zentriert die Schultergelenke", "Erleichtert das Kopfheben", "Vermeidet Spastikentwicklung und Hohlkreuz", "Verbessert Eigenwahrnehmung"],
    material: "2 große Kissen, ggf. kleine Kissen, Handtücher",
    quelle: ["Bobath – A-Lagerung"]
  },
  {
    id: "lagerung-weniger-betroffene-seite",
    name: "Lagerung auf der weniger betroffenen Seite (Bobath)",
    art: "prophylaxe",
    aste: "Aus RL",
    ablauf: [
      "Längs gefaltete Bettdecke entlang der weniger betroffenen Seite ablegen.",
      "Beine aufstellen (Griff an Fußrücken und Kniekehle, nicht an die Fußsohle).",
      "Kissen unter die mehr betroffene Schulter; Patient dreht sich so aktiv wie möglich.",
      "Mehr betroffenen Arm und Bein mit Kissen unterlagern."
    ],
    dosierung: "Im Lagerungswechsel.",
    wirkung: ["Patient kann die Lage selbst verändern", "Spastikprophylaxe, Aktivierung der weniger betroffenen Seite"],
    achtung: ["Griff an die Fußsohle kann Spastik fördern"],
    quelle: ["Bobath – Lagerung auf der weniger betroffenen Seite"]
  },
  {
    id: "lagerung-betroffene-seite",
    name: "Lagerung auf der mehr betroffenen Seite (Bobath)",
    art: "prophylaxe",
    aste: "Aus RL",
    ablauf: [
      "Patient über die mehr betroffene Seite drehen, Rücken mit Kissen abstützen.",
      "Mehr betroffene Schulter nach vorne holen (Scapula protrahiert), Arm liegt vor dem Körper.",
      "Weniger betroffenes Bein vor dem Körper auf ein Kissen legen."
    ],
    dosierung: "Im Lagerungswechsel; Schulter regelmäßig kontrollieren.",
    wirkung: ["Viel Wahrnehmung über die betroffene Seite", "Weniger betroffene Hand bleibt frei"],
    achtung: ["Nie auf der zurückgezogenen Schulter liegen lassen (Schulterschmerz)"],
    material: "Kissen",
    quelle: ["Bobath – A-Lagerung (Verweis)", "Bobath – Einführung"]
  },
  {
    id: "therapeutische-bauchlage",
    name: "Therapeutische Bauchlage",
    art: "prophylaxe",
    aste: "BL über einem festen Kissen oder Kissenberg",
    ablauf: ["Unterbauch (zwischen Nabel und Symphyse) hat Kontakt mit dem Kissen.", "Arme neben dem Körper oder unter dem Kopf.", "Mit Seerose, Schwamm oder „Der Boden gibt die Kraft zurück“ kombinieren."],
    dosierung: "Ab dem 1. Tag nach der Geburt, mind. 3 × täglich 10–15 Minuten.",
    wirkung: ["Fördert Uteruskontraktion und Abfluss der Lochien", "Senkungsprophylaxe, Obstipationsprophylaxe", "Entlastet die LWS"],
    achtung: ["Nach Sectio wegen der Narbe nicht bzw. erst später und angepasst"],
    material: "Festes Kissen",
    heim: true,
    quelle: ["KG Gyn – Behandlung im Frühwochenbett", "KG Gyn – Wochenbett"]
  },
  {
    id: "schnelle-lagerung",
    name: "Schnelle Lagerung (nach Schaarschuch/Haase)",
    art: "psyche",
    aste: "RL oder SL",
    ablauf: ["Körperteile nacheinander zügig mit Kissen unterlagern, bis der ganze Körper getragen wird.", "Patient spürt nach, wie der Körper abgegeben wird; ruhige Atmung."],
    dosierung: "5–10 Minuten.",
    wirkung: ["Entspannung", "Atemvertiefung", "Körperwahrnehmung"],
    material: "Mehrere Kissen",
    quelle: ["KG Innere – Herz-Klausurzusammenfassung", "KG Psych – Einführung PT Psychiatrie"]
  },
  {
    id: "lagerung-sht",
    name: "Tonusregulierende Lagerung bei schwerer Hirnschädigung",
    art: "prophylaxe",
    aste: "SL bevorzugt, BL wenn möglich",
    ablauf: [
      "Rückenlage möglichst vermeiden (Nackenextension provoziert Extensionstonus, erschwert Mundschluss und Schlucken).",
      "Seitlage: Drehen so aktiv wie möglich, offenen Raum im Bett mit Polstern füllen.",
      "Bauchlage (wenn möglich): Kontrakturprophylaxe Hüfte/Knie, Sekretabfluss."
    ],
    dosierung: "Regelmäßiger Lagewechsel.",
    wirkung: ["Spastik- und Kontrakturprophylaxe", "Pneumonieprophylaxe"],
    quelle: ["KG Neuro – Schädel-Hirn-Trauma"]
  }
);
