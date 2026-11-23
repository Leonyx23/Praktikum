/*
 * Übungen: KG-Techniken (Grifftechniken zum passiven, assistiven und resistiven Bewegen)
 * sowie Prophylaxe-Maßnahmen aus dem Ordner „KG Techniken“.
 *
 * Optionales Feld `technik`: eine Liste von Bewegungsrichtungen mit
 * proximaler/distaler Hand, weiterlaufender Bewegung, Fixation und resistivem Griff –
 * so wie sie im Unterricht abgefragt werden. Die Bezeichnungen „proximale“ und
 * „distale Hand“ sind aus den Unterlagen übernommen.
 */
PT.uebungen.push(

  /* ---------------- Grifftechniken je Gelenk ---------------- */
  {
    id: "kgt-schulter-rl",
    name: "KG-Technik: Schultergelenk in Rückenlage",
    art: "kgtechnik",
    aste: "RL, betroffene Schulter am Bankrand; Therapeut seitlich bzw. hinter dem Patienten",
    ablauf: [
      "Patient lagern, Bewegung erklären und einmal passiv vormachen.",
      "Griffe anlegen (siehe Grifftechnik), weiterlaufende Bewegung durch Fixation verhindern.",
      "Im schmerzfreien bzw. freigegebenen Bewegungsausmaß passiv, assistiv oder aktiv bewegen.",
      "Resistiv: Widerstand dosiert anpassen, gleichmäßig weiteratmen lassen."
    ],
    technik: [
      {
        bewegung: "Flexion / Extension",
        proximal: "Fasst von ventral am distalen Humerusende. Die Hand hält immer den Ellbogen – beim Richtungswechsel mit umgreifen.",
        distal: "Umfasst das Handgelenk, Zeigefinger in der Handfläche des Patienten.",
        resistiv: "Griffe wie beim passiven Bewegen; der Therapeut steht hinter dem Patienten."
      },
      {
        bewegung: "Abduktion / Adduktion",
        proximal: "Liegt am Schultergürtel.",
        distal: "Fasst von lateral am distalen Ende des Humerus; der Unterarm des Patienten liegt auf dem Arm des Therapeuten, Ellbogen leicht gebeugt.",
        weiterlaufend: "Ausweichen des Schultergürtels nach kranial.",
        fixation: "Proximale Hand hält den Schultergürtel unten.",
        resistiv: "Widerstand am distalen Humerus bzw. oberhalb des Handgelenks, jeweils auf der Seite der Bewegungsrichtung."
      },
      {
        bewegung: "Horizontale Adduktion / Abduktion",
        proximal: "Fasst am distalen Ende des Humerus.",
        distal: "Umfasst das Handgelenk, Zeigefinger in der Handfläche.",
        hinweis: "Ellbogen in 90° Flexion, der Arm wird horizontal bewegt."
      },
      {
        bewegung: "Innen- / Außenrotation",
        proximal: "Fasst am distalen Ende des Humerus.",
        distal: "Umfasst das Handgelenk.",
        hinweis: "Schultergelenk in 90°-Stellung, Ellbogen 90° gebeugt; der Therapeut steht hinter dem Patienten."
      }
    ],
    dosierung: "Je Bewegungsrichtung 10–15 Wiederholungen, langsam und rhythmisch.",
    wirkung: ["Kontrakturprophylaxe, Erhalt der Gelenkbeweglichkeit", "Assistiv/resistiv: Kraft und Bewegungskontrolle", "Gelenkernährung und Durchblutung"],
    achtung: [
      "Freigaben nach Fraktur oder OP beachten, immer schmerzfrei",
      "Bei Hemiparese den Arm nie über 90° ohne Mitbewegung der Scapula führen, nie am Arm ziehen (Schulterschmerz)",
      "Nach Sternotomie und auf der Schrittmacherseite nicht über 90°"
    ],
    quelle: ["KG Techniken – Schultergelenk RL"]
  },
  {
    id: "kgt-schulter-sitz",
    name: "KG-Technik: Schultergelenk im Sitz",
    art: "kgtechnik",
    aste: "Sitz auf dem Stuhl, Rücken aufrecht, Hüfte und Knie 90°, Füße stabil am Boden; Therapeut in Schrittstellung hinter dem Patienten",
    ablauf: [
      "Patient aufrecht hinsetzen, Bauchspannung erklären.",
      "Griffe anlegen; der Unterarm des Therapeuten schient Unterarm und Ellbogen des Patienten.",
      "Bewegung passiv, assistiv oder resistiv durchführen, weiterlaufende Bewegung mit der proximalen Hand verhindern."
    ],
    technik: [
      {
        bewegung: "Horizontale Adduktion / Abduktion (Ellbogen angewinkelt)",
        proximal: "Am Acromion bzw. an der Clavicula.",
        distal: "Schient das Handgelenk: Finger des Therapeuten in der Handfläche des Patienten, der Unterarm des Therapeuten schient Unterarm und Ellbogen.",
        weiterlaufend: "Rotation des Thorax bzw. der BWS.",
        fixation: "Bei Adduktion am Acromion/an der Clavicula von ventral nach dorsal, bei Abduktion leichter Druck von dorsal nach ventral – die Thoraxrotation vermeiden. Patient spannt aktiv die Bauchmuskeln an.",
        resistiv: "Keine Veränderung der Griffe."
      },
      {
        bewegung: "Abduktion / Adduktion (Ellbogen gestreckt)",
        proximal: "Wie oben.",
        distal: "Wie oben.",
        weiterlaufend: "Leichte Lateralflexion; bei Abduktion zieht die Schulter nach oben.",
        fixation: "Patient spannt die Bauchmuskeln an; proximale Hand am Schultergürtel mit Druck von kranial nach kaudal.",
        resistiv: "Bei Adduktion bleibt der Griff gleich; bei Abduktion wechselt die distale Hand von der Handfläche/Unterseite des Handgelenks nach oben."
      },
      {
        bewegung: "Rotation (Ellbogen angewinkelt)",
        proximal: "Wie oben.",
        distal: "Wie oben.",
        fixation: "Patient spannt aktiv die Bauchmuskeln an.",
        resistiv: "Griffe bleiben gleich."
      },
      {
        bewegung: "Flexion / Extension (Ellbogen gestreckt)",
        proximal: "Wie oben.",
        distal: "Wie oben.",
        weiterlaufend: "Lordose (Hohlkreuz), Schultergürtel zieht nach oben.",
        fixation: "Aktives Anspannen der Bauchmuskeln; Therapeut gibt Druck von kranial nach kaudal auf den Schultergürtel.",
        resistiv: "Bei Extension bleibt der Griff gleich; bei Flexion wechselt die distale Hand an die Oberseite des Handgelenks."
      }
    ],
    dosierung: "Je Bewegungsrichtung 10–15 Wiederholungen.",
    wirkung: ["Schulterbeweglichkeit in aufrechter Haltung", "Assistiv/resistiv: Kraft und Rumpfstabilität gleichzeitig", "Gut geeignet für Patienten, die (noch) nicht flach liegen sollen"],
    achtung: ["Sitzstabilität sicherstellen (Sturzgefahr bei Neuro-Patienten)", "Freigaben und Schmerzgrenze beachten"],
    quelle: ["KG Techniken – Mobilisation Schultergelenk Sitz"]
  },
  {
    id: "kgt-ellbogen-sl",
    name: "KG-Technik: Ellenbogengelenk in Seitenlage",
    art: "kgtechnik",
    aste: "SL, Arm und oberes Bein auf einem Quader gelagert",
    ablauf: [
      "Patient in SL lagern, Arm und Bein auf Quader.",
      "Oberarm durch den Patienten in die Unterlage spannen lassen.",
      "Bewegung isoliert im Ellenbogen bzw. im Radioulnargelenk durchführen."
    ],
    technik: [
      {
        bewegung: "Flexion / Extension",
        proximal: "Umfasst das Handgelenk von volar, der Daumen liegt in der Daumengabel des Patienten.",
        distal: "Distales Ende des Oberarms von dorsal.",
        weiterlaufend: "Keine – Gelenkbewegung isoliert (Ellbogen bewegt zum Körper hin bzw. weg).",
        fixation: "Patient spannt den Oberarm in die Unterlage; der Ellbogen des Therapeuten fixiert den Schultergürtel von ventral gegen seine Hüfte."
      },
      {
        bewegung: "Flexion / Extension – Alternativgriff (für resistiv)",
        proximal: "Umfasst das Handgelenk von unten (dorsal-ulnar mit Untergriff). Passiv: bei Extension bleibt die Hand gleich, bei Flexion greift sie von oben um das Handgelenk.",
        distal: "Distales Ende des Oberarms von dorsal.",
        weiterlaufend: "Keine – Gelenkbewegung isoliert.",
        fixation: "Distales Ende des Oberarms; Patient spannt den Oberarm in die Unterlage."
      },
      {
        bewegung: "Pronation / Supination",
        proximal: "Begrüßungsgriff (wie beim Händeschütteln).",
        distal: "Distales Ende des Oberarms von dorsal.",
        weiterlaufend: "Primär im Radioulnargelenk; Pronation läuft in eine Schulter-Innenrotation, Supination in eine Außenrotation weiter.",
        fixation: "Distales Ende des Oberarms von dorsal.",
        resistiv: "Griffe bleiben gleich; der Widerstand liegt am distalen Ende des Unterarms bzw. über dem Handgelenk."
      }
    ],
    dosierung: "Je Bewegungsrichtung 10–15 Wiederholungen.",
    wirkung: ["Ellbogen- und Unterarmbeweglichkeit (Essen, Körperpflege)", "Resistiv: Kräftigung von Beugern, Streckern, Pronatoren und Supinatoren"],
    achtung: ["Nach distaler Humerus- oder Radiusfraktur nur nach Freigabe", "Ellbogen neigt zu Kontrakturen und Verkalkungen – nie forciert dehnen"],
    material: "Quader",
    quelle: ["KG Techniken – EBG SL"]
  },
  {
    id: "kgt-huefte-sl",
    name: "KG-Technik: Hüftgelenk in Seitenlage",
    art: "kgtechnik",
    aste: "SL, zu bewegendes Bein oben; Patient hält sich mit einer Hand am Bankrand fest",
    ablauf: [
      "Patient in SL lagern, unteres Bein je nach Bewegung angewinkelt oder gestreckt.",
      "Bauchspannung aufbauen und das untere Bein gegen die Unterlage spannen lassen.",
      "Becken mit der proximalen Hand fixieren, Bewegung im Unterarmschienengriff führen."
    ],
    technik: [
      {
        bewegung: "Extension / Flexion mit leichter Knieflexion",
        hinweis: "Kontralaterales Bein bei Extension angewinkelt, bei Flexion gestreckt.",
        proximal: "Am Beckenkamm (SIPS/SIAS).",
        distal: "Unterarmschienengriff, Hand am medialen Kniegelenkspalt.",
        weiterlaufend: "Bei Flexion Beckenbewegung nach dorsal, bei Extension nach ventral.",
        fixation: "Patient hält sich am Bankrand, spannt die Bauchmuskeln an und das kontralaterale Bein gegen die Unterlage. Therapeut fixiert bei Extension die SIAS von ventral nach dorsal, bei Flexion die SIPS von dorsal nach ventral."
      },
      {
        bewegung: "Abduktion / Adduktion mit Knieextension",
        hinweis: "Kontralaterales Bein angewinkelt, zu mobilisierendes Bein auf einem Quader.",
        proximal: "Am Beckenkamm.",
        distal: "Unterarmschienengriff.",
        weiterlaufend: "Bei Abduktion Lateralflexion der WS zur gleichen Seite.",
        fixation: "Therapeut fixiert den Beckenkamm nach medial."
      },
      {
        bewegung: "Innen- / Außenrotation mit Knieextension",
        hinweis: "Kontralaterales Bein angewinkelt.",
        proximal: "Am Beckenkamm.",
        distal: "Unterarmschienengriff.",
        weiterlaufend: "Bei Innenrotation Becken nach ventral, bei Außenrotation nach dorsal.",
        fixation: "Therapeut fixiert Beckenkamm/SIAS: bei Außenrotation von dorsal nach ventral, bei Innenrotation von ventral nach dorsal."
      }
    ],
    dosierung: "Je Bewegungsrichtung 10–15 Wiederholungen.",
    wirkung: ["Hüftbeweglichkeit unter Abnahme der Eigenschwere (Quader)", "Resistiv: Kräftigung der Hüftmuskulatur, z. B. Abduktoren für den Gang"],
    achtung: [
      "Nach Hüft-TEP, Schenkelhalsfraktur oder Luxation: keine Adduktion über die Mittellinie, keine Rotation, Flexionsgrenze beachten",
      "Bei Trochanterabriss keine aktive Abduktion",
      "SL nach Beckenfraktur erst bei stabiler Fraktur, betroffene Seite oben"
    ],
    material: "Quader, ggf. Kissen zwischen den Knien",
    quelle: ["KG Techniken – Hüfte SL"]
  },
  {
    id: "kgt-knie-rl",
    name: "KG-Technik: Kniegelenk in Rückenlage",
    art: "kgtechnik",
    aste: "RL; Patient hält sich mit beiden Händen am Bankrand fest",
    ablauf: [
      "Variante wählen: ohne Hüftflexion (Unterschenkel hängt über die Bank), mit Hüftflexion oder mit leichter Hüftflexion.",
      "Griffe anlegen, Unterarm schient den Fuß von plantar.",
      "Bewegung passiv, assistiv oder resistiv im freigegebenen Ausmaß."
    ],
    technik: [
      {
        bewegung: "Flexion / Extension ohne Hüftflexion",
        hinweis: "Patient liegt schräg auf der Bank, kontralaterales Bein aufgestellt, Unterschenkel hängt über den Bankrand.",
        proximal: "Ventral am distalen Oberschenkel.",
        distal: "Am Calcaneus, der Unterarm schient von plantar.",
        weiterlaufend: "Oberschenkel bewegt bei Flexion nach ventral.",
        fixation: "Kontralaterales Bein gegen die Unterlage spannen; Patient hält sich mit beiden Händen am Bankrand fest."
      },
      {
        bewegung: "Flexion mit Hüftflexion",
        proximal: "Bei Flexion ventral am distalen Oberschenkel, bei Extension in der Kniekehle.",
        distal: "Am Calcaneus, der Unterarm schient von plantar.",
        weiterlaufend: "Beckenkippung: bei Flexion nach dorsal, bei Extension nach ventral.",
        fixation: "Patient hält sich mit beiden Händen am Bankrand fest."
      },
      {
        bewegung: "Flexion mit leichter Hüftflexion",
        proximal: "Fasst unter dem Oberschenkel hindurch und vergrößert die Auflage für den Oberschenkel.",
        distal: "Am Calcaneus, der Unterarm schient von plantar.",
        weiterlaufend: "Hüftflexion.",
        fixation: "Kontralaterales Bein gegen die Unterlage spannen lassen."
      }
    ],
    dosierung: "Je Bewegungsrichtung 10–15 Wiederholungen.",
    wirkung: ["Knieflexion und -extension erhalten bzw. verbessern", "Variante ohne Hüftflexion dehnt zusätzlich den M. rectus femoris"],
    achtung: [
      "Flexionsgrenzen nach Patellafraktur, VKB-Plastik oder Tibiakopffraktur beachten (Orthese, Freigabe)",
      "Bei Erguss Flexion auf ca. 30° begrenzen",
      "Nach Hüft-TEP bei der Variante mit Hüftflexion max. 90°"
    ],
    quelle: ["KG Techniken – Mobilisation in RL (Kniegelenk)"]
  },
  {
    id: "kgt-sprunggelenk-bl",
    name: "KG-Technik: Sprunggelenk in Bauchlage",
    art: "kgtechnik",
    aste: "BL, Fuß über dem Bankende bzw. Unterschenkel unterlagert",
    ablauf: [
      "Patient in BL lagern, Knie leicht gebeugt.",
      "Malleolen fixieren, Fuß mit Daumenunter- und Fingeraufgriff führen.",
      "Passiv, assistiv oder resistiv bewegen."
    ],
    technik: [
      {
        bewegung: "Plantarflexion / Dorsalextension",
        proximal: "Fixiert die Malleolen.",
        distal: "Plantarflexion: umfasst die Ferse von plantar. Dorsalextension: fasst von medial um den Mittelfuß (Daumenuntergriff, Fingeraufgriff).",
        weiterlaufend: "Supination bzw. Pronation.",
        resistiv: "Griff genauso wie beim passiven Bewegen."
      },
      {
        bewegung: "Supination / Pronation",
        proximal: "Umfasst den Unterschenkel proximal der Malleolen – die Achillessehne muss frei bleiben.",
        distal: "Umfasst den Mittelfuß von medial (Fingeraufgriff, Daumenuntergriff).",
        resistiv: "Bei Pronation umfasst die proximale Hand den Mittelfuß von lateral, die distale Hand geht proximal der Malleolen."
      }
    ],
    dosierung: "Je Bewegungsrichtung 10–15 Wiederholungen.",
    wirkung: ["Sprunggelenksbeweglichkeit, Spitzfußprophylaxe", "Resistiv: Kräftigung von Wade, Fußhebern, Peroneen und Supinatoren"],
    achtung: [
      "Nach Sprunggelenksfraktur zunächst Dorsalextension nur bis zur Nullstellung, keine Pro-/Supination (Freigabe)",
      "Nach Außenbandruptur die Supination in der Frühphase meiden",
      "Bauchlage nicht für alle Patienten geeignet (Herz, Atmung, Schwangerschaft)"
    ],
    quelle: ["KG Techniken – Sprunggelenk in BL"]
  },

  /* ---------------- Prophylaxe & Kreislauf ---------------- */
  {
    id: "kreislaufanregung-aufstehen",
    name: "Kreislaufanregung vor dem Aufstehen",
    art: "herz",
    aste: "RL im Bett, dann Sitz an der Bettkante",
    ablauf: [
      "Im Liegen: Füße kräftig anziehen und strecken, Fäuste machen, Arme und Beine bewegen.",
      "3–5 tiefe Atemzüge (Einatmen durch die Nase, langsam ausatmen).",
      "Langsam in Etappen aufrichten: Kopfteil hoch, über die Seite an die Bettkante.",
      "Im Sitz Fußsohlen auf den Boden, Füße weiter bewegen, kurz warten und nach Schwindel fragen.",
      "Erst aufstehen, wenn es dem Patienten gut geht; Puls und RR kontrollieren."
    ],
    dosierung: "Vor jeder Mobilisation 1–3 Minuten.",
    wirkung: ["Stabilisiert den Kreislauf, beugt Schwindel und Kollaps vor", "Aktiviert die Muskelpumpe"],
    achtung: [
      "Bei Schwindel, Blässe, Schweiß oder Übelkeit zurück ins Liegen, Beine hoch",
      "Risikopatienten: ältere Menschen, Herz-Kreislauf-Erkrankungen, niedriger Blutdruck, Diabetes, nach längerer Bettruhe und OP"
    ],
    heim: true,
    quelle: ["KG Techniken – Kreislaufanregung", "KG Innere – Herzinsuffizienz"]
  },
  {
    id: "wechselreize",
    name: "Wechselreize mit Kalt und Warm (Güsse, Waschungen)",
    art: "passiv",
    aste: "Sitz oder Stand (Beinguss), Sitz (Armguss)",
    ablauf: [
      "Warm beginnen, dann kurz kalt – immer herzfern am rechten Fuß bzw. an der rechten Hand starten und zum Herzen hin führen.",
      "Wechsel 2–3 ×, mit kalt enden.",
      "Wasser abstreifen, nicht abrubbeln, danach bewegen oder warm einpacken."
    ],
    dosierung: "Wenige Minuten, 1 × täglich (morgens anregend).",
    wirkung: ["Trainiert die Gefäßreaktion und regt den Kreislauf an", "Kalte Beingüsse lindern „schwere Beine“"],
    achtung: [
      "Nur auf warme Haut und bei warmen Füßen kalt anwenden",
      "Nicht bei arteriellen Durchblutungsstörungen, Raynaud-Syndrom, akuter Thrombose oder dekompensierter Herzinsuffizienz",
      "Bei Krampfadern keine Wärme auf die Beine – nur kühl"
    ],
    material: "Gießschlauch oder Dusche, Waschlappen",
    heim: true,
    quelle: ["KG Techniken – Kreislaufanregung"]
  },
  {
    id: "hautinspektion-fingertest",
    name: "Hautinspektion mit Fingertest (Dekubitus)",
    art: "prophylaxe",
    aste: "Bei jedem Lagewechsel, gefährdete Stellen freilegen",
    ablauf: [
      "Gefährdete Stellen ansehen: Steißbein, Fersen, Hüftknochen, Ellenbogen, Schulterblätter, Hinterkopf.",
      "Fingertest: mit dem Finger kurz auf die Rötung drücken und loslassen.",
      "Wird die Stelle weiß und rötet sich wieder, ist sie wegdrückbar (noch kein Dekubitus).",
      "Bleibt die Rötung, liegt ein Dekubitus Grad 1 vor – sofort konsequent entlasten und dokumentieren."
    ],
    dosierung: "Bei jedem Lagewechsel bzw. mindestens 1 × pro Schicht.",
    wirkung: ["Früherkennung (Grad 1: nicht wegdrückbare Rötung bei intakter Haut)", "Grundlage für Lagerungsintervalle"],
    achtung: [
      "Gerötete oder gefährdete Stellen nicht massieren oder reiben",
      "Grad 2 (Blase, flache offene Stelle) bis Grad 4 (bis auf den Knochen): Arzt und Wundmanagement einbeziehen"
    ],
    quelle: ["KG Techniken – Dekubitusprophylaxe"]
  },
  {
    id: "hochrutschen-scherkraftarm",
    name: "Scherkräftearmes Hochrutschen im Bett",
    art: "prophylaxe",
    aste: "RL, Kopfteil flach, Beine angestellt",
    ablauf: [
      "Patient stellt die Beine auf und hebt das Becken an (Bridging), so weit möglich.",
      "Mit den Füßen nach kopfwärts schieben, der Therapeut unterstützt am Becken bzw. mit einem Laken oder Rutschtuch.",
      "Den Patienten anheben statt über die Unterlage ziehen."
    ],
    dosierung: "Bei jedem Hochrutschen.",
    wirkung: ["Vermeidet Scher- und Reibungskräfte – Dekubitusprophylaxe", "Aktiviert Gesäß- und Beinmuskulatur"],
    achtung: ["Bridging nach Becken-, Oberschenkel- oder Schenkelhalsfraktur erst nach Freigabe (z. B. ab 20 kg TB)", "Haut trocken halten (Schweiß, Inkontinenz)"],
    material: "Laken oder Rutschtuch",
    quelle: ["KG Techniken – Dekubitusprophylaxe", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  }
);
