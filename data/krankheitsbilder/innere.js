/* Krankheits- und Rehabilder: Innere Medizin */
PT.krankheitsbilder.push(
  {
    id: "herzinsuffizienz",
    fach: "innere",
    name: "Herzinsuffizienz",
    kurz: "Ungenügende Pumpleistung des Herzens. Links: Stau in die Lunge (Dyspnoe, Orthopnoe, Asthma cardiale). Rechts: Stau in den Körper (Beinödeme, Halsvenenstau, Aszites). Einteilung nach NYHA I–IV.",
    ziele: ["Pneumonie- und Thromboseprophylaxe", "Atemarbeit erleichtern (aufrechte Lagerung, Thoraxwiderstände senken)", "Bewegungsübergänge erleichtern (RL → SL → Sitz)", "Selbstständigkeit in kleinen ADL", "Steigerung später nach Heidelberger Modell Stufe II"],
    cave: ["Vor, während und nach Belastung Puls und RR kontrollieren", "Keine Pressatmung, keine statische Haltearbeit", "MLD und Kompression bei (primärer Rechts-)Herzinsuffizienz kontraindiziert", "Abbruch bei Atemnot, Schwindel, Angina pectoris, Rhythmusstörungen, vegetativen Zeichen"],
    phasen: [
      {
        titel: "Erstbehandlung im Bett (NYHA III–IV)",
        info: "Ablauf aus dem Skript: Befinden – Puls/RR – Lagern – Bewegungsserien mit Pausen – Atemwahrnehmung – Transfer über SL – Puls/RR.",
        uebungen: [
          "herzbett",
          ["fussbewegungsserie", "5–10 Wdh., Pausen ½–1 min"],
          ["packegriffe", "In den Pausen zwischen den Bewegungsserien"],
          ["icr-ausstreichungen", "In den Pausen"],
          "hueftserie-bett",
          ["kontaktatmung", "Kostale Atembewegung wahrnehmen"],
          ["hustentechnik", "Sekret sanft abräuspern"],
          ["transfer-ueber-seitlage", "Beim Ausatmen aufsetzen, sofort Fußsohlenkontakt"],
          "abreiben-ruecken",
          "puls-selbstkontrolle"
        , ["kreislaufanregung-aufstehen", "Vor dem Transfer über die Seitlage"]]
      },
      {
        titel: "Alternativen und Steigerung",
        uebungen: [
          "reitsitzbehandlung",
          "basalatmung",
          ["venenpumpe", "Thromboseprophylaxe der unteren Extremität"],
          "armuebungen-liegen",
          "bettkante-stuhl",
          ["gehen-ebene", "Wenn der AZ sich bessert, nach Heidelberger Modell Stufe II"]
        ]
      }
    ],
    quelle: ["KG Innere – Herzinsuffizienz", "KG Innere – Herz-Klausurzusammenfassung", "KG Innere – Praxis Herz", "KG Innere – Klausur ZF"]
  },
  {
    id: "khk",
    fach: "innere",
    name: "Koronare Herzkrankheit (KHK) / Angina pectoris",
    kurz: "Arteriosklerotische Verengung der Herzkranzgefäße mit Sauerstoffmangel des Herzmuskels; Leitsymptom Angina pectoris (bei Frauen oft atypisch: Müdigkeit, Kurzatmigkeit, Magenbeschwerden).",
    ziele: ["Thrombose- und Pneumonieprophylaxe", "Körperwahrnehmung und Entspannungsfähigkeit fördern", "Zunehmende Mobilisation für Herz und Kreislauf", "Schonhaltung entgegenwirken", "Risikofaktoren abbauen – ca. 30 min leichtes Ausdauertraining pro Tag"],
    cave: ["Nach Herzkatheter/OP: Arme nicht über 90°, bis die Fäden gezogen sind", "Keine ruckartigen Arm-/Rumpfbewegungen, keine Pressatmung", "In den ersten 3 Tagen keine SL links, keine BL, keine Dreh-Dehnlagen bis Fäden gezogen", "Instabile Angina pectoris → sofort Notarzt"],
    phasen: [
      {
        titel: "Frühphase",
        uebungen: ["fussbewegungsserie", "venenpumpe", "kontaktatmung", "basalatmung", "transfer-ueber-seitlage", "puls-selbstkontrolle", "kreislaufanregung-aufstehen"]
      },
      {
        titel: "Mobilisation und Intervalltherapie",
        uebungen: [
          ["hockergymnastik", "Ca. 50 Watt, nach Freigabe"],
          "aufrichten-schulterkreisen",
          ["gehen-ebene", "Aerobe Ausdauer, Lebensstiländerung"],
          ["ergometer", "Wattfreigabe durch den Arzt"],
          "atmung-4-6"
        ]
      }
    ],
    quelle: ["KG Innere – KHK", "KG Innere – Klausur ZF", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "herzinfarkt",
    fach: "innere",
    name: "Herzinfarkt – Frühmobilisation (Heidelberger Modell)",
    kurz: "Akuter Verschluss eines Herzkranzgefäßes mit Untergang von Herzmuskelgewebe. Bewegungstherapie in Phasen: Akut-/Konvaleszenzphase (bis 4. Woche, 40–75 Watt), Reha/AHB (4. Woche – 3. Monat), Postkonvaleszenz.",
    ziele: ["Individuelle Belastungsfreigabe in Watt einhalten (Belastbarkeit ≠ Leistungsfähigkeit)", "Körperwahrnehmung, Entspannung, Pulsen erlernen", "Herzfern beginnen, dynamisch, intermittierend, submaximal", "Selbstständigkeit in ADL, Gehen in der Ebene"],
    cave: ["Kontraindiziert: Isometrie (> 20 % Fmax), statische Arbeit von Kopf und Rumpf, Pressatmung, abgehackte Bewegungen, unkontrollierte Temposteigerung, Leistungsdruck, Arme über 90° (Anfangsphase), Massagen im Schulter-Nacken-Bereich", "Abbruch: Puls > 100, Belastungspuls > Ruhepuls +20 oder < –10, Erholung > 3–5 min, Rhythmusstörungen, AP, Brady-/Tachypnoe, Schwindel", "Pulsanstieg: RL/Sitz 8–12, Bettkante/Zimmer 12–20, Flur ca. 20, Treppe 20–30/min"],
    phasen: [
      {
        titel: "Stufe I (ca. 1.–2. Tag, ~25 Watt): Übungen im Bett",
        uebungen: ["fussbewegungsserie", "hueftserie-bett", "armuebungen-liegen", "kontaktatmung", "igelball-koerperwahrnehmung", "puls-selbstkontrolle", "transfer-ueber-seitlage", ["kreislaufanregung-aufstehen", "Vor dem ersten Aufsitzen"]]
      },
      {
        titel: "Stufe II (ca. 3.–6. Tag, ~50 Watt): Übungen im Sitz",
        uebungen: ["hockergymnastik", "ring-fuss-sitz", "stab-uebungen-sitz", "ball-sitz", ["gehen-ebene", "Flur/Toilette in Begleitung, dann selbstständig"]]
      },
      {
        titel: "Stufe III (ab ca. 6. Tag, 75–100 Watt): Fortbewegung",
        uebungen: ["marschieren-stand", "stepper", "sidestep-kniebeuge", "theraband-oex-sitz", ["treppensteigen", "Falls indiziert – kein aerobes Ausdauertraining"], ["gehen-ebene", "„Walk and Talk“"]]
      }
    ],
    quelle: ["KG Innere – Herzinfarkt", "KG Innere – Praxis Herz", "KG Innere – Klausur ZF", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "kardiale-reha",
    fach: "innere",
    name: "Kardiale Reha & Herzsportgruppe (Manager- und Stiefmütterchen-Typ)",
    kurz: "Ambulante Phase nach Infarkt oder Herz-OP. Übungsgruppe 0,4–1,0 Watt/kg, Trainingsgruppe > 1,0 Watt/kg. Zwei typische Patiententypen: Managertyp (verdrängt, überschätzt sich) und Stiefmütterchen-Typ (übervorsichtig, ängstlich, depressiv).",
    ziele: ["Kraft und Ausdauer verbessern, Sarkopenie reduzieren", "Psychische Belastbarkeit, Schutzfaktoren", "Wiedereingliederung in Beruf und Alltag, soziale Isolation verhindern", "Managertyp bremsen und aufklären, Stiefmütterchen ermutigen und Vertrauen aufbauen"],
    cave: ["Training mäßig: Borg 11–14 bzw. 4–6", "Unter Betablockern Borg statt Puls", "Im Wasser niedrigere Pulsgrenzen", "Lieber 3 × 30 min/Woche als 1 × 90 min; Ausdauer statt Kraftsport"],
    phasen: [
      {
        titel: "Ausdauer und Kraft",
        uebungen: ["gehen-ebene", "ergometer", "marschieren-stand", "stepper", "theraband-oex-sitz", "rudern-theraband", "sidestep-kniebeuge", "puls-selbstkontrolle"]
      },
      {
        titel: "Stiefmütterchen-Typ: Vertrauen in den eigenen Körper",
        uebungen: ["igelball-koerperwahrnehmung", "kontaktatmung", "schnelle-lagerung", "body-scan", "stab-uebungen-sitz", "ringspiele-partner", "alltagsbewegungen-nachmachen"]
      },
      {
        titel: "Managertyp: Entspannen und dosieren lernen",
        uebungen: ["fantasiereise", "aufrichten-schulterkreisen", "dehnung-trapezius", "rudern-theraband", "pmr", "atmung-4-6"]
      }
    ],
    quelle: ["KG Innere – Klausur ZF", "KG Innere – Praxis Herz", "KG Innere – Herzinfarkt"]
  },
  {
    id: "entzuendliche-herzerkrankung",
    fach: "innere",
    name: "Entzündliche Herzerkrankungen (Myo-, Endo-, Perikarditis)",
    kurz: "Entzündung von Herzmuskel, -innenhaut oder -beutel; grippeähnlich, Leistungsabfall, Extrasystolen, Fieber. Befund: auffällige Herzzone (Th1–6), erhöhte AF, Einsatz der Atemhilfsmuskulatur.",
    ziele: ["Spannung von Bindegewebe und Muskulatur senken", "Thoraxelastizität und Atembewegung verbessern", "Psychovegetative Beruhigung", "Sehr langsame Wiederherstellung der Leistungsfähigkeit (Verlauf wie Herzinsuffizienz)"],
    cave: ["Akutstadium: NUR Pneumonie- und Thromboseprophylaxe – aktive Bewegungstherapie kontraindiziert", "Temperatur > 38 °C: kein Training", "Steigerung nur in Absprache mit dem Arzt"],
    phasen: [
      {
        titel: "Akutstadium",
        uebungen: ["venenpumpe", "kontaktatmung", "umlagerung"]
      },
      {
        titel: "Nach dem Akutstadium",
        uebungen: ["vibrationen-thorax", "icr-ausstreichungen", "packegriffe", ["lippenbremse", "Dosiert"], ["phonische-atmung", "Phonisches AA auf sch/s, tönendes Einatmen"], ["dreh-dehnlage", "Thoraxelastizität"], "halbmondlage", "fussbewegungsserie"]
      }
    ],
    quelle: ["KG Innere – Entzündliche Herzerkrankungen", "KG Innere – Klausur ZF"]
  },
  {
    id: "herzklappenfehler",
    fach: "innere",
    name: "Herzklappenfehler / Klappenersatz",
    kurz: "Stenose oder Insuffizienz einer Herzklappe; Symptome wie Herzinsuffizienz (links → Lunge, rechts → Körper). Mitralstenose: Dyspnoe, Vorhofflimmern; Aortenstenose: Synkopen.",
    ziele: ["Behandlung wie Herzinsuffizienz je nach betroffener Herzhälfte", "Atemarbeit erleichtern", "Dosierte Mobilisation"],
    cave: ["Aortenstenose ist absolute Kontraindikation für Training", "Nach Klappenersatz Sternotomie-Regeln beachten", "Antikoagulation: Blutungsgefahr"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["herzbett", "fussbewegungsserie", "kontaktatmung", "lippenbremse", "transfer-ueber-seitlage", "puls-selbstkontrolle", ["hockergymnastik", "Nach Freigabe"]]
      }
    ],
    quelle: ["KG Innere – Herzklappen", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "rhythmusstoerung-schrittmacher",
    fach: "innere",
    name: "Herzrhythmusstörungen / Herzschrittmacher & ICD",
    kurz: "Brady- oder Tachykardien (Schwindel, Synkopen, Herzstolpern). Versorgung mit Schrittmacher oder implantierbarem Defibrillator; Physio ab dem 1. Tag (Prophylaxen, Aufstehen), ab dem 2. Tag Hockergymnastik.",
    ziele: ["Schmerzfreie Bewegung, Angstabbau", "Langsam steigendes Intervalltraining für die kardiale Ausdauer", "Aktive Übungen für den M. pectoralis (schützt das Aggregat)", "Pulskontrolle selbst durchführen"],
    cave: ["Betroffene Schulter nicht über 90° Flexion/Abduktion", "Keine Widerstandsübungen, Dehnlagerungen, Vibrationen, Schüttelungen, Thoraxkompression, Armschwünge, Boxen, starke Zirkumduktion, ruckartige Bewegungen", "Keine Elektrotherapie", "Karotissinussyndrom: Kopfdrehen/enger Kragen kann Bradykardie auslösen"],
    phasen: [
      {
        titel: "1. Tag",
        uebungen: ["venenpumpe", "kontaktatmung", "transfer-ueber-seitlage", ["gehen-ebene", "Gehen im Zimmer"]]
      },
      {
        titel: "Ab 2. Tag",
        uebungen: [["hockergymnastik", "Arm der Schrittmacherseite ≤ 90°"], "puls-selbstkontrolle", "ergometer", "narbenmobilisation"]
      }
    ],
    quelle: ["KG Innere – Herzchirurgie", "KG Innere – Herzrhythmusstörungen", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "sternotomie-bypass",
    fach: "innere",
    name: "Z. n. Herz-OP mit Sternotomie (Bypass/ACVB, Klappen-OP)",
    kurz: "Eingriff am offenen Herzen über mediane Sternotomie mit Drahtcerclage, beim Bypass Venenentnahme am Bein. Beginn am 1. oder spätestens 2. Tag mit Prophylaxen und präoperativ geübter Atemtherapie; danach meist bald stufenlos belastbar.",
    ziele: ["Postoperative Komplikationen vermeiden", "Körperwahrnehmung und Entspannung", "Heranführen an Belastung (Heidelberger Modell)", "ADL ökonomisieren, Haltungsschulung", "Bein mit Venenentnahme: Ödemprophylaxe"],
    cave: ["Ca. 6 Wochen: keine Bewegungen, die die Narbe spreizen; kein Abstützen/Hochdrücken mit den Armen", "Keine Rumpfrotation gegen Widerstand, keine einseitigen großen Armbewegungen über 90°", "Keine Seitlage/Bauchlage, Vibrationen, Schüttelungen, Thoraxkompression, tiefes forciertes EA anfangs", "Geringe Kreislauf- und psychische Belastbarkeit (Blutverlust, Narkose)"],
    phasen: [
      {
        titel: "Frühphase",
        uebungen: ["kontaktatmung", ["hustentechnik", "Husten mit Sternumschutz"], "atemtrainer", "schnelle-lagerung", ["transfer-ueber-seitlage", "Drehen en bloc, nicht mit Armen hochdrücken"], "venenpumpe", ["hochlagerung", "Bein mit Venenentnahme"], ["kreislaufanregung-aufstehen", "Aufstehen ohne Abstützen mit den Armen"]]
      },
      {
        titel: "Mobilisation",
        uebungen: [["hockergymnastik", "Schmerzfrei, Arme ≤ 90°"], "gehen-ebene", "puls-selbstkontrolle", "aufrichten-schulterkreisen", ["narbenmobilisation", "Nach Wundheilung"]]
      }
    ],
    quelle: ["KG Innere – Herzchirurgie", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "asthma",
    fach: "innere",
    name: "Asthma bronchiale",
    kurz: "Anfallsweise Atemnot mit behinderter Ausatmung durch Bronchospasmus, Schleimhautschwellung und zähen Schleim. Typisch: verspannte Atemhilfsmuskulatur („Thorax piriformis“), Einatemstellung des Thorax, Hohl-Rundrücken.",
    ziele: ["Im Anfall: atemerleichternde Stellungen, dosierte Lippenbremse, beruhigen, Dosieraerosol – Patient nicht allein lassen", "Im Intervall: antiobstruktives Verhalten, Bronchialtoilette, Hustentechniken", "Entspannung und Körperwahrnehmung", "Ausdauer (Intervalltraining), Thoraxmobilität, Tonusregulation"],
    cave: ["Keine Maßnahmen aufzwingen – Angst reduzieren", "Anfall > 24 h (Status asthmaticus) = Lebensgefahr, Arzt verständigen"],
    phasen: [
      {
        titel: "Im Anfall",
        uebungen: ["atemerleichternde-stellungen", "lippenbremse", "atmung-4-6"]
      },
      {
        titel: "Im anfallsfreien Intervall",
        uebungen: ["kontaktatmung", "huffing", "hustentechnik", "pmr", "puls-selbstkontrolle", ["ergometer", "Intervalltraining"], "dreh-dehnlage", "thoraxmobilisation", "packegriffe", "dehnung-pectoralis", "peak-flow-schulung"]
      }
    ],
    quelle: ["KG Innere – Lunge 2 (Asthma)"]
  },
  {
    id: "copd",
    fach: "innere",
    name: "COPD / chronische Bronchitis / Lungenemphysem",
    kurz: "Chronische Obstruktion mit Überblähung, gestörter mukoziliärer Clearance und chronisch produktivem Husten; Verlust der Eigenelastizität der Lunge. Chronische Bronchitis: Husten > 8 Wochen/Jahr.",
    ziele: ["Bronchiale Reinigung unterstützen (zähen Schleim lösen, Sekrettransport)", "Hilfe bei erschwerter Ausatmung, richtiges Verhalten bei Atemnot", "Thoraxbeweglichkeit und Zwerchfellaktivität erhalten", "Ausdauerleistung erhalten/verbessern", "Hilfe zur Selbsthilfe"],
    cave: ["Tiefe Atemzüge oft wirksamer als Erschütterungen und Vibrationen", "SpO₂ unter Belastung kontrollieren"],
    phasen: [
      {
        titel: "Sekretmanagement und Atemtechnik",
        uebungen: ["lippenbremse", "atemerleichternde-stellungen", "schnueffelnde-einatmung", "oszillierendes-pep", "autogene-drainage", "drainagelagerung", "huffing", ["hustentechnik", "Husten gegen geschlossene Lippen dämpft den Reiz"], "heisse-rolle", "umlagerung"]
      },
      {
        titel: "Beweglichkeit und Belastbarkeit",
        uebungen: ["thoraxmobilisation", "packegriffe", "dreh-dehnlage", "ergometer", "gehen-ebene", ["treppensteigen", "Mit Lippenbremse und Pausen"], "aufstehen-stuhl"]
      }
    ],
    quelle: ["KG Innere – Lunge 3", "KG Innere – Lunge 2"]
  },
  {
    id: "bronchiektasen",
    fach: "innere",
    name: "Bronchiektasen",
    kurz: "Irreversible Erweiterung der Bronchien mit Sekretstau, rezidivierenden Infekten und Exazerbationen. Physio nach vier Zielbereichen: Sekretmobilisation & Heimprogramm, Treppe & Belastbarkeit, Alltagsaktivität, Selbstmanagement & Hygiene.",
    ziele: ["Sekret täglich selbstständig mobilisieren (feste Routine)", "Belastbarkeit und Treppensteigen verbessern", "Alltagsaktivität steigern (Schrittziel, Lungensport)", "Warnzeichen erkennen, Hygiene beim Vernebler"],
    cave: ["Training: Borg 12–14, SpO₂ nicht unter 90 %; Intervalltraining bei Abfall unter 85 %", "Huffing statt forciertem Husten (instabile Atemwege)", "Lungensport wegen Infektionsfrage mit der Pneumologin absprechen"],
    phasen: [
      {
        titel: "Ziel 1: Sekretmobilisation und Heimprogramm",
        uebungen: ["inhalation-reihenfolge", "oszillierendes-pep", "autogene-drainage", "acbt", ["drainagelagerung", "Unter- und Mittellappen"], "huffing"]
      },
      {
        titel: "Ziel 2: Treppe und Belastbarkeit",
        uebungen: [["ergometer", "Dauermethode 10–15 min, später 20–30 min"], ["aufstehen-stuhl", "Krafttraining Beine"], "step-up", "beinpresse", ["lippenbremse", "Unter Belastung"], "treppensteigen", "atemerleichternde-stellungen"]
      },
      {
        titel: "Ziel 3: Alltagsaktivität",
        uebungen: [["gehen-ebene", "Schrittziel mit Schrittzähler"], ["hustentechnik", "Hustenmanagement im Alltag"], "thoraxmobilisation", "heisse-rolle"]
      }
    ],
    quelle: ["KG Innere – Bronchiektasen-Präsentation", "KG Innere – Bronchiektasen", "KG Innere – Lunge 3"]
  },
  {
    id: "pneumonie",
    fach: "innere",
    name: "Pneumonie",
    kurz: "Akute oder chronische Entzündung der Lunge (Broncho-, Lobär-, interstitielle Pneumonie; ambulant oder im Krankenhaus erworben); Fieber, anfangs trockener, später produktiver Husten, Dyspnoe. Besonders gefährdet: ältere Menschen, Säuglinge und Kleinkinder, Menschen mit geschwächtem Immunsystem oder chronischen Herz-, Lungen- und Nierenerkrankungen, Asthma.",
    ziele: ["Ventilationsbedingungen verbessern", "Atelektasen vermeiden", "Sekrettransport fördern, Abhustenschulung", "Kreislauf stabilisieren"],
    cave: ["Im Akutstadium NIE: schnelle tiefe Atemzüge, heiße Rolle/heiße Tücher, Hackungen, Klopfungen, Klatschungen", "Bettruhe und Fieber beachten"],
    phasen: [
      {
        titel: "Nicht ansprechbare Patienten / Intensivstation",
        uebungen: [["umlagerung", "Alle 2 Stunden"], "atemreizgriffe", "vibrationen-thorax", "packegriffe"]
      },
      {
        titel: "Wache Patienten",
        uebungen: ["kontaktatmung", "schnueffelnde-einatmung", "gaehnende-einatmung", "lippenbremse", "huffing", "atemtrainer", "drainagelagerung", "fussbewegungsserie", "transfer-ueber-seitlage", ["kreislaufanregung-aufstehen", "Vor jeder Mobilisation"]]
      },
      {
        titel: "Rekonvaleszenz (z. B. 78 J., Z. n. Pneumonie, AZ niedrig)",
        info: "PNF-Beispielstunde aus dem Kurs.",
        uebungen: ["pnf-scapula-post-depression", "pnf-massenextension", ["bridging", "Mit Stabilisierender Umkehr"], "pnf-halleluja", "pnf-pelvis-ant-elevation", ["pnf-stuetz", "Bilateral, Agonistische Umkehr"], ["pnf-anschnall", "Mit Stretch"], "gangschule-hilfsmittel"]
      }
    ],
    quelle: ["KG Innere – Lunge 3", "KG Innere – Innere Medizin (Herr Sauer)", "PNF – Fallbeispiel 78 J. Z. n. Pneumonie", "KG Techniken – Pneumonieprophylaxe"]
  },
  {
    id: "akute-bronchitis",
    fach: "innere",
    name: "Akute Bronchitis",
    kurz: "Meist virale Entzündung der Bronchien nach Infekt der oberen Atemwege; trockener Reizhusten, dann zunehmend Schleim. Klingt nach ca. 14 Tagen ab.",
    ziele: ["Sekret lösen und Sekrettransport verbessern", "Schmerz beim Husten lindern, unproduktiven Husten dämpfen", "Prophylaxen bei älteren Menschen", "Hohe intrathorakale Drücke senken, Gewebe lockern"],
    cave: ["Viel trinken, feuchte Atemluft", "Bei Kleinkindern Bronchiolitis-Gefahr"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["schnueffelnde-einatmung", "lippenbremse", "hustentechnik", "huffing", "kontaktatmung", "packegriffe", "heisse-rolle", "oszillierendes-pep"]
      }
    ],
    quelle: ["KG Innere – Lunge 3"]
  },
  {
    id: "restriktive-lungenerkrankung",
    fach: "innere",
    name: "Restriktive Lungenerkrankungen (Lungenfibrose, Pleuraerguss, Z. n. Thorax-OP)",
    kurz: "Verringerte Atemoberfläche bzw. Dehnbarkeit von Lunge oder Thorax (z. B. Fibrose, Lungenödem, Pleuraschwarte, Teilresektion, Zwerchfellhochstand). Geringe Ruhe-, hohe Belastungsdyspnoe.",
    ziele: ["Atemzugvolumen vertiefen, Einatmung verstärken", "Atembewegung erweitern, Perfusion verbessern", "Verschieblichkeit der Pleurablätter erhalten", "Erhöhte Gewebswiderstände senken, Atemmuskelkraft verbessern", "Atemarbeit erleichtern"],
    cave: ["Erfordernisatmung: Entspannung senkt die AF nicht", "Wenig belastbar – auf jede aktive Maßnahme eine passive folgen lassen"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["schnueffelnde-einatmung", "gaehnende-einatmung", ["atemtrainer", "Auch umgedrehter Triflow"], "dreh-dehnlage", "drainagelagerung", "umlagerung", "packegriffe", "icr-ausstreichungen", "reitsitzbehandlung", "atemmuskeltraining", "hustentechnik"]
      }
    ],
    quelle: ["KG Innere – Lunge 1"]
  },
  {
    id: "venoese-insuffizienz",
    fach: "innere",
    name: "Chronisch-venöse Insuffizienz & Beinödeme",
    kurz: "Venöse Abflussstörung mit Stauungsödemen, häufig bei Varikosis. Entstauung über Muskelpumpe, Hochlagerung, Kompression und ggf. Lymphdrainage.",
    ziele: ["Venösen Rückstrom verbessern", "Ödeme reduzieren", "Thromboseprophylaxe"],
    cave: ["MLD kontraindiziert bei akuter Beinvenenerkrankung und kardialen Ödemen (Herzinsuffizienz)", "Kompressionsstrümpfe im Liegen bei entstauten Venen anziehen"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["venenpumpe", "hochlagerung", "tiefatmung-rueckstrom", "fusskreisen-sitz", "mld-bein", "theraband-sitz-beine", "gehen-ebene", "wadenpresse", ["wechselreize", "Kalte Beingüsse, keine Wärme auf die Beine"]]
      }
    ],
    quelle: ["Lymphdrainage – Manuelle Lymphdrainage Praxis", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "geriatrie-immobilitaet",
    fach: "innere",
    name: "Geriatrische Patienten: reduzierter AZ, Immobilität, Sturzgefahr",
    kurz: "Ältere, oft multimorbide Patienten nach Krankenhausaufenthalt (z. B. Pneumonie, Herzinsuffizienz) mit Dekonditionierung, Kraftverlust und Sturzrisiko. Assessments: Timed Up & Go, Chair-Rising, Tandemstand, Functional Reach, 6-Minuten-Gehtest.",
    ziele: ["Transfers sicher und ohne Pressatmung erarbeiten", "Kraft und Gleichgewicht verbessern, Sturzprophylaxe", "Gehstrecke und Selbstständigkeit steigern", "Prophylaxen bei Bettlägerigkeit"],
    cave: ["Verzögerte Kreislaufanpassung – langsame Übergänge", "Beim Wechsel in eine höhere ASTE immer Stabilisationsübungen", "Geduld, Sicherheit geben, Pausen einplanen"],
    phasen: [
      {
        titel: "Im Bett und am Bettrand",
        uebungen: ["umlagerung", "dekubitus-lagerung", "venenpumpe", "durchbewegen", ["bridging", "Becken heben zum Hochrutschen"], "transfer-ueber-seitlage", "bettkante-stuhl", "hautinspektion-fingertest", "hochrutschen-scherkraftarm", "kreislaufanregung-aufstehen"]
      },
      {
        titel: "Stand und Gehen",
        uebungen: ["sicherer-stand", "aufstehen-stuhl", "gewichtsverlagerung-stand", "tandem", "einbeinstand", "gangschule-hilfsmittel", "gehen-ebene", "aufstehen-boden"]
      },
      {
        titel: "Gruppe",
        uebungen: ["hockergymnastik", "stab-uebungen-sitz", "ball-sitz", "ente-am-teich"]
      },
      {
        titel: "KG-Techniken: passiv, assistiv und resistiv bewegen",
        uebungen: [["kgt-schulter-rl", "Kontrakturprophylaxe bei Bettlägerigkeit"], "kgt-ellbogen-sl", ["kgt-huefte-sl", "Lagewechsel in die SL gleich mit nutzen"], ["kgt-knie-rl", "Von passiv über assistiv bis resistiv steigern"], ["kgt-schulter-sitz", "Im Sitz am Bettrand oder im Stuhl"]]
      }
    ],
    quelle: ["KG Innere – Transfers erarbeiten (M. Bloch)", "KG Innere – Innere Medizin", "KG Innere – Hockergymnastik", "PNF – Fallbeispiel 78 J. Z. n. Pneumonie"]
  },
  {
    id: "kreislaufstoerung",
    fach: "innere",
    name: "Kreislaufstörung: Hypotonie und orthostatische Dysregulation",
    kurz: "Unzureichende Versorgung des Körpers mit Blut und Sauerstoff: Schwindel, Müdigkeit, niedriger Blutdruck bis zur Ohnmacht. Einteilung: Hypotonie, orthostatische Dysregulation (Probleme beim Aufstehen), Kollaps/Synkope. Ursachen u. a. zu langes Stehen, schnelles Aufstehen, Blutverlust, Dehydration, Herzschwäche, Bewegungsmangel und Stress.",
    ziele: ["Herz-Kreislauf-System stabilisieren und aktivieren", "Langsames Aufrichten in Etappen einüben", "Muskelpumpe und Atmung nutzen", "Körperliche Aktivität und Gefäßtraining (Kalt-Warm-Wechselreize)", "Auf ausreichende Flüssigkeit hinweisen"],
    cave: ["Vor und nach der Mobilisation Puls und RR messen", "Bei Schwindel, Schwarzwerden vor Augen, Blässe oder Schweiß sofort hinlegen, Beine hoch", "Risikopatienten: ältere Menschen, Herz-Kreislauf-Erkrankungen, niedriger Blutdruck, Übergewicht, Diabetes", "Synkopen ärztlich abklären lassen (EKG)"],
    phasen: [
      {
        titel: "Vor dem Aufstehen",
        uebungen: ["kreislaufanregung-aufstehen", "fussbewegungsserie", "venenpumpe", "tiefatmung-rueckstrom", "transfer-ueber-seitlage", "puls-selbstkontrolle"]
      },
      {
        titel: "Kreislauftraining",
        uebungen: ["wechselreize", "theraband-sitz-beine", "marschieren-stand", "wadenpresse", "gehen-ebene", ["ergometer", "Ausdauer in kleinen Schritten steigern"]]
      }
    ],
    quelle: ["KG Techniken – Kreislaufanregung", "KG Innere – Herzinsuffizienz", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "dekubitus",
    fach: "innere",
    name: "Dekubitus – Gefährdung und Prophylaxe",
    kurz: "Schädigung von Haut und darunterliegendem Gewebe durch anhaltenden Druck und Minderdurchblutung („Wundliegen“). Ursachen: Immobilität, Druck, Scherkräfte beim Hochziehen, Feuchtigkeit (Schweiß, Inkontinenz), Reibung, Mangelernährung. Grad 1 (nicht wegdrückbare Rötung) bis Grad 4 (tiefer Gewebsschaden, Knochen sichtbar).",
    ziele: ["Druck entlasten, Lage regelmäßig wechseln", "Scher- und Reibungskräfte vermeiden", "Haut früh kontrollieren (Fingertest)", "Eigenbewegung und Mobilität fördern"],
    cave: ["Gefährdet: Bettlägerige (Koma, Schlaganfall), ältere Menschen mit dünner Haut, Durchblutungsstörungen, Über- und Untergewicht, schlechte Hautpflege", "Typische Stellen: Steißbein, Fersen, Hüftknochen, Ellenbogen, Schulterblätter, Hinterkopf", "Gerötete Stellen nicht massieren oder reiben", "Ab Grad 2 Arzt und Wundmanagement einbeziehen"],
    phasen: [
      {
        titel: "Erkennen",
        uebungen: ["hautinspektion-fingertest"]
      },
      {
        titel: "Entlasten",
        uebungen: [["umlagerung", "Mindestens alle 2 Stunden"], "dekubitus-lagerung", "hochrutschen-scherkraftarm"]
      },
      {
        titel: "Bewegen",
        uebungen: ["bridging", "durchbewegen", ["kgt-huefte-sl", "Passiv bis assistiv, Lagewechsel gleich mit nutzen"], "kgt-knie-rl", "kreislaufanregung-aufstehen", "transfer-ueber-seitlage"]
      }
    ],
    quelle: ["KG Techniken – Dekubitusprophylaxe", "KG Chirurgie – Prophylaxen"]
  },
  {
    id: "thrombose",
    fach: "innere",
    name: "Thrombose – Gefährdung und Prophylaxe",
    kurz: "Verschluss oder Verengung eines Blutgefäßes durch ein Blutgerinnsel. Entsteht durch veränderte Blutzusammensetzung, geschädigte Gefäßwand und gestörten Blutfluss (Virchow-Trias); am häufigsten in den tiefen Bein- und Beckenvenen, mit der Gefahr einer Lungenembolie.",
    ziele: ["Venösen Rückstrom beschleunigen (Muskelpumpe, Hochlagerung, Atmung)", "Früh mobilisieren", "Risikopatienten erkennen und anleiten"],
    cave: ["Risikopatienten: nach OP (v. a. Hüfte, Knie, Bauch, Becken), Krebs, Gerinnungsstörungen, Krampfadern, höheres Alter, Bettlägerigkeit, Schwangerschaft und Wochenbett, lange Reisen, Übergewicht, Rauchen, hormonelle Medikamente", "Bei Verdacht (Schwellung, Schmerz, Überwärmung, Hautverfärbung) keine Übungen am Bein und keine MLD – sofort Arzt informieren", "Nach gesicherter Thrombose nur nach ärztlicher Anordnung mobilisieren (Antikoagulation, Kompression)"],
    phasen: [
      {
        titel: "Im Bett",
        uebungen: ["venenpumpe", "hochlagerung", "tiefatmung-rueckstrom", "fussbewegungsserie", "durchbewegen"]
      },
      {
        titel: "Mobilisation",
        uebungen: ["kreislaufanregung-aufstehen", "transfer-ueber-seitlage", "gehen-ebene", "theraband-sitz-beine", "wadenpresse"]
      },
      {
        titel: "Reise und Alltag",
        uebungen: [["fusskreisen-sitz", "Bei langen Reisen stündlich"], ["venenpumpe", "Auch im Sitz, z. B. im Flugzeug"]]
      }
    ],
    quelle: ["KG Techniken – Handout Thromboseprophylaxe", "KG Chirurgie – Prophylaxen"]
  }
);
