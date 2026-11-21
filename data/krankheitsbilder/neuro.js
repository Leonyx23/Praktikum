/* Krankheits- und Rehabilder: Neurologie */
PT.krankheitsbilder.push(
  {
    id: "schlaganfall-akut",
    fach: "neuro",
    name: "Schlaganfall / Hemiparese – Akutphase",
    kurz: "Ischämischer oder hämorrhagischer Insult mit halbseitiger Lähmung. Physiotherapie beginnt vom ersten Tag an in Kooperation mit der Pflege, sobald die Vitalfunktionen stabil sind (24-Stunden-Konzept nach Bobath).",
    ziele: ["Spastikentwicklung vermeiden, Muskeltonus normalisieren", "Wahrnehmung der betroffenen Seite fördern – Ansprache von der betroffenen Seite", "Schulterschmerz vermeiden", "Pneumonie-, Dekubitus-, Kontraktur- und Thromboseprophylaxe", "Patient so aktiv wie möglich in Lagerung und Transfer einbinden"],
    cave: ["Nicht an der Fußsohle greifen (kann Spastik fördern)", "Schulter immer zentriert lagern, nie am Hemiarm ziehen", "Außenrotation des betroffenen Beins vermeiden"],
    phasen: [
      {
        titel: "Lagerung",
        uebungen: ["a-lagerung", "lagerung-weniger-betroffene-seite", "lagerung-betroffene-seite", "umlagerung"]
      },
      {
        titel: "Erste Mobilisation",
        uebungen: ["bobath-bewegungsuebergaenge", ["schleifende-ferse", "Passiv bis assistiv"], "sprunggelenk-dex-pflex", "rumpfrotation", "bobath-sitz-gewichtsverlagerung", "kontaktatmung", "neglect-aufmerksamkeit"]
      }
    ],
    quelle: ["KG Neuro – Schlaganfall/Hemiparese", "Bobath – A-Lagerung", "Bobath – Lagerung auf der weniger betroffenen Seite", "Bobath – Einführung"]
  },
  {
    id: "schlaganfall-reha",
    fach: "neuro",
    name: "Hemiparese – Rehabilitation von Rumpf, Gang und Alltag",
    kurz: "Nach der Akutphase: Haltungskontrolle (Core Stability), selektive Bewegungen, Gang und Alltagsaktivitäten. Bobath: Fazilitation über Schlüsselpunkte, Alignment, Shaping.",
    ziele: ["Proximale Stabilität für distale Mobilität", "Selektivität der Beckenbewegungen beim Gehen, Sitzen, Stehen", "Gehfähigkeit und Gleichgewicht", "Teilhabe im Alltag"],
    cave: ["Überanstrengung steigert den Tonus", "Sturzgefahr"],
    phasen: [
      {
        titel: "Rumpf und Transfer",
        uebungen: ["bobath-sitz-gewichtsverlagerung", "bobath-bewegungsuebergaenge", "bridging", "rumpfrotation", "pnf-lifting", "pnf-chopping", "pnf-scapula-ant-elevation", "pnf-scapula-post-depression", "pnf-scapula-ant-depression", "pnf-pelvis-ant-elevation", "pnf-pelvis-post-depression", "pnf-pelvis-ant-depression", "pnf-massenextension", ["pnf-stretch", "Zur Fazilitation des Bewegungsanfangs bei hypotoner Muskulatur"]]
      },
      {
        titel: "Stand und Gang",
        uebungen: ["aufstehen-stuhl", "gewichtsverlagerung-stand", "stepper", "seilgang", "vier-halbe-baelle", "pnf-schwungbein", "pnf-standbein", "pnf-ext-add-aro", "fusskreisen-sitz", "gangschule-hilfsmittel", "pnf-mattenprogramm"]
      },
      {
        titel: "Obere Extremität und Feinmotorik",
        uebungen: ["pnf-stuetz", "pnf-kuess-bizeps", "feinmotorik", "bruegger-hand-unterarm"]
      }
    ],
    quelle: ["Bobath – Einführung", "KG Neuro – Gelenkmobilität UEX", "PNF – Lifting und Chopping"]
  },
  {
    id: "pusher-syndrom",
    fach: "neuro",
    name: "Pusher-Syndrom",
    kurz: "Patienten drücken sich in jeder Position zur hemiparetischen Seite und wehren passive Korrektur ab; meist große rechtshemisphärische Läsionen. Das Pushen ist eine Adaptation auf das Fallen des Körpers (veränderte subjektive Mittellinie). Assessment: Klinische Skala für Contraversive Pushing.",
    ziele: ["Stabilität der paretischen Seite erarbeiten", "Paretische Seite in Bewegungsübergänge integrieren", "Vertikalität erfahren (Stehbalance)", "Bewegungen in allen Dimensionen und Ebenen"],
    cave: ["Starke Sturzgefahr – Therapeut braucht Standfestigkeit", "Nicht gegen das Pushen ankämpfen, selbst Ruhe bewahren", "Patienten sind sich der Störung nicht bewusst"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["pusher-vertikalitaet", ["bobath-sitz-gewichtsverlagerung", "Gewicht zur nicht betroffenen Seite und nach vorne"], "bobath-bewegungsuebergaenge", "sicherer-stand", "rumpfrotation", "neglect-aufmerksamkeit"]
      }
    ],
    quelle: ["KG Neuro – Pusher-Syndrom", "KG Neuro – Klinische Skala für Contraversive Pushing"]
  },
  {
    id: "neglect",
    fach: "neuro",
    name: "Neglect",
    kurz: "Aufmerksamkeitsstörung (keine Wahrnehmungsstörung) für eine Raum- oder Körperhälfte, meist links nach rechtsseitiger Parietallappenschädigung. Visuell, akustisch, taktil, motorisch; oft mit Anosognosie. Vier Stadien von Leugnen bis spontaner Berücksichtigung.",
    ziele: ["Zuwendung zur vernachlässigten Seite", "Körperschema und Mittellinie", "Sicherheit im Alltag (Essen, Körperpflege, Rollstuhl)"],
    cave: ["Konfrontation dosieren – Stadium beachten", "Begrenzungen nahe am Patienten geben Orientierung"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["neglect-aufmerksamkeit", "neglect-nacken-augen", "bobath-bewegungsuebergaenge", "rumpfrotation", "hand-hand", "greifangebote", "igelball-koerperwahrnehmung"]
      }
    ],
    quelle: ["KG Neuro – Neglect"]
  },
  {
    id: "parkinson",
    fach: "neuro",
    name: "Morbus Parkinson (IPS)",
    kurz: "Neurodegenerative Erkrankung mit Akinese/Bradykinese, Rigor, Tremor und posturaler Instabilität; Freezing, On-/Off-Phasen. Stadien nach Hoehn und Yahr. Evidenz: „Hauptsache Bewegung“ – angepasst und häufig üben.",
    ziele: ["Mobilität, Sturzprophylaxe, Selbstständigkeit", "Cueing-Strategien und Bewegungsaufteilung nutzen", "Große Amplituden, Haltung aufrichten", "Heimübungsprogramm und Einbezug der Angehörigen (24-h-Konzept)"],
    cave: ["Training nach On-/Off-Phasen timen", "Drehregel: nie abrupt umdrehen, im großen Bogen gehen", "Reines Krafttraining meiden (verstärkt Tremor)", "Dual-Task nur mit Schutzschritten und nicht als Heimübung"],
    phasen: [
      {
        titel: "Evidenzbasierte Trainingsformen",
        uebungen: [["ergometer", "HIIT oder kontinuierliches Radfahren"], "lsvt-big", "tanzen", "tai-chi-qigong", "dual-task-gehen", "cueing-gang"]
      },
      {
        titel: "Beispielstunde (Stadium 2)",
        info: "Aus dem Fallbeispiel im Kurs.",
        uebungen: [["aufrichten-schulterkreisen", "Aufwärmen"], ["igelball-koerperwahrnehmung", "Igelball über die Handflächen rollen"], ["marschieren-stand", "Im Raum marschieren"], "reaktionsspiele", "feinmotorik", "transfer-ueber-seitlage"]
      },
      {
        titel: "Haltung, Beweglichkeit und Gleichgewicht",
        uebungen: ["thoraxmobilisation", "dehnung-pectoralis", "dehnung-iliopsoas", "dehnung-wade", "bruegger-rumpf", "rumpfrotation", "tandem", "einbeinstand", "pnf-lifting"]
      }
    ],
    quelle: ["KG Neuro – Morbus Parkinson", "KG Neuro – Fallbeispiel Parkinson", "Theraband – Thera-Band-Grundübungen nach Brügger"]
  },
  {
    id: "multiple-sklerose",
    fach: "neuro",
    name: "Multiple Sklerose",
    kurz: "Chronisch-entzündliche ZNS-Erkrankung (schubförmig, primär oder sekundär progredient) – „Krankheit mit den 1000 Gesichtern“: Sensibilitäts-, Seh-, Koordinations- und Gangstörungen, Spastik, Ataxie, Fatigue, Blasenstörungen.",
    ziele: ["Sekundärschäden behandeln/vermeiden", "Motorisch-funktionelle Fähigkeiten erhalten", "Haltetonus im Rumpf gezielt aufbauen", "Sensibilität und kardiorespiratorische Leistungsfähigkeit verbessern", "Anleitung zum selbstständigen Üben"],
    cave: ["Individuellen Ermüdungsrhythmus beachten – Pausen (Fatigue)", "Im akuten Schub meist nur Prophylaxen", "Sensibilitätsstörungen an den Füßen: Stand- und Gehsicherheit", "Wärme kann Symptome verstärken"],
    phasen: [
      {
        titel: "Im Schub",
        uebungen: ["umlagerung", "venenpumpe", "durchbewegen", "kontaktatmung"]
      },
      {
        titel: "Remission und Intervall (Bobath-Grundsätze)",
        uebungen: ["bobath-sitz-gewichtsverlagerung", "bobath-bewegungsuebergaenge", "bridging", "superman-theraband", "einbeinstand", "tandem", "seilgang", "igelball-fussarbeit", "pnf-rhythmische-stabilisation", "pnf-stabilisierende-umkehr", "pnf-dynamische-umkehr", "pnf-pelvis-ant-elevation", "ergometer", "gangschule-hilfsmittel"]
      },
      {
        titel: "Eigenübungen",
        uebungen: ["dehnung-wade", "dehnung-ischios", "dehnung-adduktoren", "tai-chi-qigong"]
      }
    ],
    quelle: ["KG Neuro – Multiple Sklerose"]
  },
  {
    id: "schaedel-hirn-trauma",
    fach: "neuro",
    name: "Schädel-Hirn-Trauma",
    kurz: "Commotio (funktionell, rasche Mobilisation) bis Contusio cerebri mit Hirnsubstanzschädigung; mögliche Folgen: Hemi-, Para-, Tetraparese, apallisches Syndrom, Epilepsie.",
    ziele: ["Lagern, Kontraktur- und Dekubitusprophylaxe", "Kreislauf anregen, Pneumonieprophylaxe", "Spastik vorbeugen", "Schlüsselsequenzen erarbeiten: Kopf, Brustkorb, Rumpfrotation, Schultergürtel, Sitz, untere Extremität"],
    cave: ["Rückenlage möglichst vermeiden (Extensionstonus, Schluckprobleme)"],
    phasen: [
      {
        titel: "Frühphase",
        uebungen: ["lagerung-sht", "umlagerung", "durchbewegen", "dekubitus-lagerung", "kontaktatmung", "atemreizgriffe", "venenpumpe"]
      },
      {
        titel: "Mobilisation",
        uebungen: ["sht-sequenzen", "rumpfrotation", "bobath-sitz-gewichtsverlagerung", "bobath-bewegungsuebergaenge", "sicherer-stand", "pnf-mattenprogramm"]
      }
    ],
    quelle: ["KG Neuro – Schädel-Hirn-Trauma"]
  },
  {
    id: "polyneuropathie",
    fach: "neuro",
    name: "Polyneuropathie / Sensibilitäts- und Gleichgewichtsstörung",
    kurz: "Periphere Nervenschädigung (z. B. bei Diabetes, Alkohol) mit gestörter Sensibilität an den Füßen und unsicherem Stand. Assessment: modifizierter Romberg-Stehtest, Tandemstand.",
    ziele: ["Sensorische Reize an den Füßen", "Gleichgewicht und Gangsicherheit", "Sturzprophylaxe"],
    cave: ["Fußkontrolle auf Verletzungen", "Neurale Mobilisation bei Diabetes nur vorsichtig (relative Kontraindikation)"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["igelball-fussarbeit", "dynamisches-gehen", "tandem", "einbeinstand", "seilgang", "vier-halbe-baelle", "gewichtsverlagerung-stand", "ring-fuss-sitz", "tai-chi-qigong"]
      }
    ],
    quelle: ["KG Innere – Innere Medizin (Romberg-Test)", "KG Neuro – Multiple Sklerose", "KG Gyn – Übungen für Beckenbodentraining"]
  }
);
