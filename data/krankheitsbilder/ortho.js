/* Krankheits- und Rehabilder: Orthopädie */
PT.krankheitsbilder.push(
  {
    id: "coxarthrose",
    fach: "ortho",
    name: "Coxarthrose (Hüftarthrose)",
    kurz: "Degenerative Gelenkerkrankung; erst die Synovialitis macht aus der latenten eine aktivierte Arthrose. Stadium I–III von Belastungsschmerz bis Ruhe-/Nachtschmerz. Kapselmuster Hüfte: IRO zuerst eingeschränkt, später auch Extension und Flexion; Hüftbeugekontraktur (Thomas-Handgriff).",
    ziele: ["Beweglichkeit erhalten (Kapselmuster)", "Hüftabduktoren und -extensoren kräftigen (Trendelenburg/Duchenne)", "Spitzenbelastungen vermeiden, Gewicht reduzieren", "Gang und Alltag ökonomisieren"],
    cave: ["Aktivierte Arthrose (Erguss, Entzündung): schonend, keine Belastungsspitzen", "Benachbarte Gelenke (ISG, LWS) werden mitbelastet"],
    phasen: [
      {
        titel: "Reha-Sport Hüft-Gruppe: Mobilisation",
        info: "Stundenaufbau aus Bewegungserziehung: Warm-up 10–15 min, Hauptteil 20–25 min, Cool-down 5–10 min.",
        uebungen: ["seitausfall-torso", "einbeinstand-hueftflexion", "butterfly", "neunzig-neunzig", "leg-lifts-wand", "pigeon", "hueftkreisen-vierfuessler", "psoas-release", "spinal-twist", "childs-pose"]
      },
      {
        titel: "Einzeltherapie",
        uebungen: ["mt-traktion", "mt-gleiten", "thomas-dehnung", "dehnung-iliopsoas", "dehnung-adduktoren", "abduktion-sl-kurzer-hebel", "bridging", "bruegger-bein-fuss", "ergometer", ["kgt-huefte-sl", "Innenrotation und Extension (Kapselmuster) betonen; resistiv Abduktoren"]]
      }
    ],
    quelle: ["Bewegungserziehung – Hüftgelenk (Reha-Sport Hüft-Gruppe)", "KG Orthopädie – Ortho", "Manuelle Therapie – Grundlagen MT"]
  },
  {
    id: "gonarthrose",
    fach: "ortho",
    name: "Gonarthrose (Kniearthrose)",
    kurz: "Arthrose des Kniegelenks mit Belastungs- und Anlaufschmerz, später Erguss, Kontraktur und Kraftlosigkeit.",
    ziele: ["Beweglichkeit, insbesondere Streckung erhalten", "Quadrizeps und Beinachse kräftigen", "Gelenkschonende Ausdauer (Radfahren)", "Gewicht und Belastungsspitzen reduzieren"],
    cave: ["Bei Erguss Belastung und Flexion reduzieren"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["patellamobilisation", "mt-traktion", "isometrie-quadriceps", "wandlehnen", "step-up", "sidesteps-theraband", "beinachse-spiegel", "ergometer", "dehnung-wade", "dehnung-ischios", "ring-fuss-sitz", ["kgt-knie-rl", "Volle Extension erhalten; resistiv schmerzfrei"]]
      }
    ],
    quelle: ["KG Orthopädie – Ortho", "KG Chirurgie – Patellafraktur", "Manuelle Therapie – Grundlagen MT"]
  },
  {
    id: "hueft-tep",
    fach: "ortho",
    name: "Hüft-TEP",
    kurz: "Totalendoprothese bei fortgeschrittener Coxarthrose; zementiert (> 65 J., Osteoporose, sofort voll belastbar) oder zementfrei. Ausweichmechanismen (Trendelenburg, Duchenne) und Hüftbeugekontraktur beachten.",
    ziele: ["Luxationsprophylaxe durch Verhaltensregeln", "Hüftabduktoren und -extensoren kräftigen", "Gangschule und Treppensteigen", "Transfers (Bank, Drehen, Aufstehen/Hinsetzen)"],
    cave: ["Keine Flexion über 90°, keine Adduktion über die Mittellinie, keine Rotation – je nach Zugang", "Keine langen Hebel; Isometrie in offener Kette belastet Muskelnähte", "Thrombosepunkte prüfen: > 3 positive → Arzt informieren, nicht behandeln", "Keine niedrigen Sitzgelegenheiten"],
    phasen: [
      {
        titel: "Frühphase",
        uebungen: ["venenpumpe", ["schleifende-ferse", "Bis max. 90°"], "abduktion-schleifend", "isometrie-gesamt", "brunkow", "transfer-ueber-seitlage", "gangschule-hilfsmittel", "verhaltensregeln-tep", "kreislaufanregung-aufstehen"]
      },
      {
        titel: "Hockergymnastik-Gruppe (TEP)",
        info: "Bei Hüft-TEP Oberkörper zurücklehnen, damit 90° Hüftflexion nicht überschritten werden.",
        uebungen: ["hockergymnastik", "ring-fuss-sitz", ["ring-druck-sitz", "Keine Adduktion bei Hüft-TEP"], "ring-arme-sitz", "theraband-sitz-beine", "theraband-schulterblatt", "rudern-theraband", "ente-am-teich"]
      },
      {
        titel: "Aufbau",
        uebungen: ["abduktion-sl-kurzer-hebel", "bridging", "tubersitz", "thomas-dehnung", "gewichtsverlagerung-stand", "stepper", ["pnf-pelvis-post-depression", "Vorbereitung aufs Treppensteigen, nach Freigabe"], "treppensteigen", "gebrauchsbewegungen", "mtt-aufbau", ["kgt-huefte-sl", "SL auf der gesunden Seite, Kissen zwischen den Knien; keine Rotation, keine Adduktion über die Mittellinie"]]
      }
    ],
    quelle: ["KG Orthopädie – Ortho", "KG Innere – Hockergymnastik", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "knie-tep",
    fach: "ortho",
    name: "Knie-TEP",
    kurz: "Endoprothese bei Gonarthrose. Schwerpunkte: Streckung, Flexion bis ca. 90° und mehr, Quadrizepsaktivierung, Gangschulung.",
    ziele: ["Volle Streckung und ausreichende Beugung", "Quadrizepskraft ohne Streckdefizit", "Ödem- und Schmerzreduktion", "Gangschule und Treppe"],
    cave: ["Erguss und Schmerz steuern die Belastung", "Kniekehle nicht dauerhaft unterlagern (Streckdefizit)"],
    phasen: [
      {
        titel: "Frühphase",
        uebungen: ["hochlagerung", "milde-kaelte", "venenpumpe", "isometrie-quadriceps", "isometrie-ischios", "schleifende-ferse", "patellamobilisation", "gangschule-hilfsmittel", "mld-bein", ["kgt-knie-rl", "Volle Extension und Flexion bis ca. 90° anstreben"], "kreislaufanregung-aufstehen"]
      },
      {
        titel: "Hockergymnastik-Gruppe (TEP)",
        uebungen: ["hockergymnastik", "ring-fuss-sitz", ["ring-druck-sitz", "Bei Knie-TEP Ring zwischen den Oberschenkeln in Adduktion drücken"], "theraband-sitz-beine", "ente-am-teich"]
      },
      {
        titel: "Aufbau",
        uebungen: ["wandlehnen", "step-up", "einbeinstand", "beinachse-spiegel", "ergometer", "treppensteigen", "narbenmobilisation"]
      }
    ],
    quelle: ["KG Orthopädie – Ortho", "KG Innere – Hockergymnastik"]
  },
  {
    id: "impingement",
    fach: "ortho",
    name: "Subakromiales Impingement-Syndrom",
    kurz: "Schmerzhafte Einengung unter dem Schulterdach (Sehnen der Rotatorenmanschette, Bursa, Lig. coracoacromiale, ACG). Durch Haltungsabweichungen rutscht die Scapula nach ventral-kaudal, der Humeruskopf dezentriert. Painful Arc 60–120°.",
    ziele: ["Humeruskopf zentrieren und kaudalisieren", "Scapulastabilität und koordinierte Armhebung", "BWS-Aufrichtung, Dehnung verkürzter Muskeln", "Überlastungssituationen erkennen"],
    cave: ["Kaudalisierung bei jeder Armhebung", "Bursa-Entlastung durch Traktion testen (Bursa vs. Sehne)"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["humeruskopf-zentrierung", "scapula-mobilisation", "scapulasetting", "bruegger-schulter", "rudern-theraband", "thoraxmobilisation", "dehnung-pectoralis", "dehnung-subscapularis", "pnf-scapula-post-depression", "mt-traktion", ["kgt-schulter-sitz", "Schmerzhaften Bogen (60–120°) meiden, Humeruskopf zentriert halten"], ["kgt-schulter-rl", "Rotation in 90°-Stellung nur schmerzfrei"]]
      }
    ],
    quelle: ["KG Orthopädie – Zusammenfassung Folie 11–110", "KG Orthopädie – Übungen Scapula praktisch", "KG Orthopädie – Wirkorte der Physiotherapie"]
  },
  {
    id: "supraspinatus-tendopathie",
    fach: "ortho",
    name: "Tendopathie M. supraspinatus / Rotatorenmanschette",
    kurz: "Reizzustand der Supraspinatussehne: Schmerz bei Überkopfarbeit, Painful Arc, Schmerz bei Abduktion gegen Widerstand. Die Belastungsphase ist oft schmerzfrei, in Ruhe überwiegt das Entzündungsmilieu.",
    ziele: ["Schmerzlinderung (Kälte, Querfriktion, Druckinhibition, Triggerpunkte)", "Aktive und passive Zentrierung nach kaudal-dorsal", "Kaudalisierende Muskulatur und Schultergürtelstabilität trainieren", "Erst konzentrisch, dann exzentrisch"],
    cave: ["Querfriktion nicht am tendoperiostalen Übergang (Periostreizung)", "Exzentrische Belastung schmerzhaft – dosiert steigern"],
    phasen: [
      {
        titel: "Schmerzphase",
        uebungen: ["humeruskopf-zentrierung", "scapula-mobilisation", "dehnung-trapezius", "dehnung-pectoralis", "thoraxmobilisation"]
      },
      {
        titel: "Aufbau",
        uebungen: ["scapulasetting", "exzentrisches-training", "bruegger-schulter", "pnf-scapula-post-depression", "pnf-flex-abd-aro", "rudern-theraband", "theraband-oex-sitz", ["kgt-schulter-sitz", "Resistiv: Außenrotation und Abduktion, erst konzentrisch, dann exzentrisch"]]
      }
    ],
    quelle: ["KG Orthopädie – Zusammenfassung Folie 11–110", "KG Orthopädie – Übungen Scapula praktisch"]
  },
  {
    id: "tennisellenbogen",
    fach: "ortho",
    name: "Epicondylitis humeri radialis (Tennisellenbogen)",
    kurz: "Tendopathie der Handextensoren (ECRB, ECRL, Ext. digitorum) am Epicondylus lateralis durch wiederholte Überlastung, ungünstige Haltung, mangelnde BWS-Aufrichtung. Differenzialdiagnose: neurale Strukturen C5–C7, Triggerpunkte.",
    ziele: ["Schmerzlinderung (Querfriktion, Druckinhibition, Dehnung)", "Mobilisation Radiohumeralgelenk, HWS, BWS, Handwurzel", "Funktionelles Belastungstraining, Eigenübungen", "Schulter, HWS und BWS mituntersuchen"],
    cave: ["Tendopathie der Extensoren kann eine Flexoren-Tendopathie (Golferarm) nach sich ziehen"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["bruegger-hand-unterarm", "exzentrisches-training", "mt-gleiten", "thoraxmobilisation", "aufrichten-schulterkreisen", "feinmotorik", "dehnung-biceps", ["kgt-ellbogen-sl", "Resistiv: Pro-/Supination und Extension dosiert und schmerzfrei"]]
      }
    ],
    quelle: ["KG Orthopädie – Zusammenfassung Folie 11–110", "KG Orthopädie – Übungen Scapula praktisch"]
  },
  {
    id: "thoracic-outlet",
    fach: "ortho",
    name: "Thoracic-Outlet-Syndrom (TOS/TOK)",
    kurz: "Einengung von Plexus brachialis und/oder A./V. subclavia: Skalenuslücken (Scalenussyndrom, Adson-Test), Costoclavicularraum (häufigste Stelle, Eden-Test), Pectoralis-minor-Pforte (Wright-Test). Kribbeln, Taubheit, ulnare Schmerzen, ggf. Handödem.",
    ziele: ["Erst detonisieren, dann mobilisieren, dann kräftigen", "Scaleni/Subclavius detonisieren, 1. Rippe mobilisieren", "Beim Pectoralis-minor-Syndrom Scapula-Außenrotatoren beurteilen und kräftigen", "HWS und Schulter mitbehandeln"],
    cave: ["Zwischendurch fragen, ob das Kribbeln wiederkommt", "Neurologische Zeichen ärztlich abklären"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["erste-rippe-scaleni", "dehnung-trapezius", "dehnung-levator", ["dehnung-pectoralis", "Pectoralis-minor-Syndrom; Rippendehnung als Ausdauermöglichkeit"], "scapulasetting", "pnf-scapula-post-depression", "rudern-theraband", "thoraxmobilisation"]
      }
    ],
    quelle: ["KG Orthopädie – Unbenannt (TOK)", "KG Orthopädie – Zusammenfassung Folie 11–110"]
  },
  {
    id: "nervenkompression",
    fach: "ortho",
    name: "Kompressionsneuropathie / eingeschränkte Nervenmobilität (z. B. Ischialgie)",
    kurz: "Ein Nerv wird an Engstellen (Tunnel, Muskeldurchtritte) eingeengt – Folge: Entzündung, Verklebung, verminderte Gleitfähigkeit, Schmerzen und Sensibilitätsstörungen. Tests: SLR, Slump, PKB, ULNT 1–3.",
    ziele: ["Gleitfähigkeit des Nervs verbessern", "Intraneurale Flüssigkeitsbewegung und Durchblutung fördern", "Verklebungen verringern", "Umgebende Muskulatur (z. B. Piriformis) entlasten"],
    cave: ["Absolut kontraindiziert: akute Entzündung, Malignom, neurologische Zeichen", "Relativ: Diabetes, Alkoholkrankheit, Durchblutungsstörungen, Schwindel/Übelkeit", "Slider vor Tensioner"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["neural-slider", "neural-tensioner", "dehnung-piriformis", "dehnung-ischios", "psoas-release", "beckenkippung"]
      }
    ],
    quelle: ["KG Orthopädie – Nervendehnungsübungen", "KG Orthopädie – Zusammenfassung Folie 11–110", "Dehnungen – Dehnung des M. piriformis"]
  },
  {
    id: "aussenbandruptur-osg",
    fach: "ortho",
    name: "Z. n. Außenbandruptur am oberen Sprunggelenk (Supinationstrauma)",
    kurz: "Verletzung der Ligg. talofibulare anterius/posterius und calcaneofibulare durch Umknicken. Nach ca. 3 Monaten Schwerpunkt Kraft und Stabilität (MTT-Gruppenbeispiel). In der Akutphase traumatisches Ödem (MLD).",
    ziele: ["Ödem reduzieren (akut)", "Kraft von Wade, Peroneen und Beinachse", "Propriozeption und Gleichgewicht", "Rückkehr in Alltag und Sport"],
    cave: ["Chronische Instabilität und Schmerz, der durch Training zunimmt, sind Kontraindikationen für intensives MTT"],
    phasen: [
      {
        titel: "Akut",
        uebungen: ["hochlagerung", "milde-kaelte", "mld-bein", "venenpumpe"]
      },
      {
        titel: "Kraft (Beispiel nach 3 Monaten)",
        uebungen: ["wadenpresse", "sidesteps-theraband", "pro-supination-ball", "einbeinstand", "ausfallschritte", "bruegger-bein-fuss", "mtt-aufbau", ["kgt-sprunggelenk-bl", "Resistiv: Pronation (Peroneen) betonen"]]
      }
    ],
    quelle: ["MTT – Gruppe 3 (Außenbandruptur)", "MTT – Skript", "Lymphdrainage – Manuelle Lymphdrainage Praxis"]
  },
  {
    id: "osteoporose",
    fach: "ortho",
    name: "Osteoporose",
    kurz: "Verminderte Knochenmasse mit erhöhtem Frakturrisiko (Wirbelkörper, Schenkelhals). Ziel: knochenwirksame Belastung, Aufrichtung, Sturzprophylaxe.",
    ziele: ["Kräftigung und axiale Belastung", "Haltung aufrichten (Kyphose)", "Gleichgewicht, Sturzprophylaxe", "Rückenschonendes Alltagsverhalten"],
    cave: ["Manuelle Therapie (Mobilisation) und PNF-Stretch kontraindiziert", "Keine Flexion mit Rotation unter Last, keine Vibrationen am Thorax"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["bruegger-rumpf", "rudern-theraband", "aufstehen-stuhl", "einbeinstand", "tandem", "gehen-ebene", "tai-chi-qigong", "kontinentes-buecken-heben", "superman-theraband"]
      }
    ],
    quelle: ["KG Orthopädie – Ortho", "Manuelle Therapie – Grundlagen MT", "PNF – Techniken im Fach PNF"]
  },
  {
    id: "hws-nackenverspannung",
    fach: "ortho",
    name: "Zervikales Syndrom / Nacken-Schulter-Verspannung",
    kurz: "Schmerzhafte Verspannung von Trapezius und Levator scapulae, häufig bei sitzender Tätigkeit, vorgeschobenem Kopf und Stress.",
    ziele: ["Verspannte Muskulatur dehnen und lockern", "Aufrechte Haltung (Brügger)", "Schulterblattmuskulatur kräftigen", "Stressbewältigung"],
    cave: ["Bei Schwindel, Ausstrahlung oder neurologischen Zeichen ärztlich abklären", "Keine Manipulation nach Schleudertrauma"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["dehnung-trapezius", "dehnung-levator", "aufrichten-schulterkreisen", "bruegger-rumpf", "bruegger-schulter", "rudern-theraband", "scapula-mobilisation", "pmr"]
      }
    ],
    quelle: ["Dehnungen – Dehnungen alle", "Dehnungen – M. levator scapulae", "Theraband – Thera-Band-Grundübungen nach Brügger"]
  },
  {
    id: "lws-syndrom",
    fach: "ortho",
    name: "Unspezifische Rückenschmerzen / LWS-Syndrom",
    kurz: "Belastungsabhängige Kreuzschmerzen ohne spezifische Ursache (z. B. „Hexenschuss“), häufig mit Dysbalancen von Hüftbeugern, Ischios und Rumpfmuskulatur.",
    ziele: ["Rumpf stabilisieren", "Beweglichkeit von LWS und Hüfte", "Verkürzte Muskulatur dehnen", "Rückenschonendes Heben und Bücken"],
    cave: ["Red Flags ausschließen (Lähmungen, Blasen-/Mastdarmstörung)", "Bei Ausstrahlung neurale Strukturen testen"],
    phasen: [
      {
        titel: "Akut: Entlasten und Bewegen",
        uebungen: ["beckenkippung", "psoas-release", "childs-pose", "spinal-twist", "malende-sitzknochen", "atmung-4-6"]
      },
      {
        titel: "Stabilisieren und Kräftigen",
        uebungen: ["superman-theraband", "bridging-theraband", "bridging", "bruegger-rumpf", "pnf-stabilisierende-umkehr", "dehnung-iliopsoas", "dehnung-ischios", "dehnung-piriformis", "kontinentes-buecken-heben"]
      }
    ],
    quelle: ["Theraband – Rumpfstabilisation", "Bewegungserziehung – Hüftgelenk", "Dehnungen – Dehnungen alle", "Manuelle Therapie – Grundlagen MT"]
  },
  {
    id: "haltungsinsuffizienz",
    fach: "ortho",
    name: "Haltungsinsuffizienz / sternosymphysale Belastungshaltung (Brügger)",
    kurz: "Becken nach dorsal gekippt, Thorax gesenkt, großbogige Kyphose, Kopf nach vorne, Schultern protrahiert. Funktionsüberwiegen der Flexoren und Innenrotatoren. Zahnradmodell: Beckenkippung – Thoraxhebung – Inklination.",
    ziele: ["Aufrechte Körperhaltung erarbeiten", "Funktionsüberwiegen über reziproke Hemmung senken", "Thera-Band-Eigenübungen ohne negative Parameter"],
    cave: ["Negative Parameter (Ausweichbewegungen, Schmerz, Ermüdung) → Band schwächer oder Übung ändern"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["bruegger-rumpf", "bruegger-schulter", "bruegger-hand-unterarm", "bruegger-bein-fuss", "rudern-theraband", "dehnung-pectoralis", "aufrichten-schulterkreisen", "thoraxmobilisation"]
      }
    ],
    quelle: ["Theraband – Thera-Band-Grundübungen nach Brügger"]
  },
  {
    id: "morbus-bechterew",
    fach: "ortho",
    name: "Morbus Bechterew (Spondylitis ankylosans)",
    kurz: "Entzündlich-rheumatische Erkrankung mit zunehmender Versteifung von WS und Rippengelenken; extrapulmonale restriktive Ventilationsstörung.",
    ziele: ["Extension und Rotation der WS erhalten", "Thoraxbeweglichkeit und Atmung", "Haltung aufrichten, Ausdauer"],
    cave: ["Manuelle Mobilisation bei entzündlich-rheumatischen Erkrankungen mit Instabilität kontraindiziert", "Im Schub schonend"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["thoraxmobilisation", "dreh-dehnlage", "halbmondlage", "kontaktatmung", "bruegger-rumpf", "dehnung-pectoralis", "dehnung-iliopsoas", "pnf-lifting", "ergometer"]
      }
    ],
    quelle: ["KG Innere – Lunge 1", "Manuelle Therapie – Grundlagen MT"]
  },
  {
    id: "muskelverkuerzung",
    fach: "ortho",
    name: "Muskuläre Verkürzungen & Dysbalancen",
    kurz: "Verkürzungen durch Bewegungsmangel (langes Sitzen) oder einseitige Belastung; Agonist und Antagonist geraten ins Ungleichgewicht. Dehntechniken: passiv, AED, AED + Antagonist, PNF.",
    ziele: ["Gelenkbeweglichkeit verbessern", "Kontrakturen verhindern", "Dysbalancen ausgleichen (Antagonisten kräftigen)"],
    cave: ["Kontraindiziert: akute Verletzungen, Entzündungen, frische OP, radikuläre Symptomatik, akute Thrombose, schwere Osteoporose"],
    phasen: [
      {
        titel: "Dehnungen",
        uebungen: ["dehnung-adduktoren", "dehnung-wade", "dehnung-trapezius", "dehnung-levator", "dehnung-latissimus", "dehnung-biceps", "dehnung-triceps", "dehnung-iliopsoas", "dehnung-subscapularis", "dehnung-pectoralis", "dehnung-quadriceps", "dehnung-ischios", "dehnung-piriformis", "dehnung-tibialis-anterior"]
      },
      {
        titel: "Techniken",
        uebungen: ["pnf-anspannen-entspannen", "pnf-halten-entspannen"]
      }
    ],
    quelle: ["Dehnungen – Dehnungen", "Dehnungen – Dehnungen alle", "PNF – Techniken im Fach PNF"]
  }
);
