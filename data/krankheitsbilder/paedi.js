/* Krankheits- und Rehabilder: Pädiatrie */
PT.krankheitsbilder.push(
  {
    id: "entwicklungsverzoegerung",
    fach: "paedi",
    name: "Motorische Entwicklungsverzögerung im Säuglingsalter",
    kurz: "Verspätetes oder qualitativ verändertes Erreichen der Meilensteine (Kopfkontrolle, Ellbogen-/Handstütz, Drehen, Krabbeln). Ungünstiges Handling kann die Entwicklung zusätzlich bremsen; Eltern werden angeleitet, ihr Kind fördernd zu heben, halten, tragen und bewegen.",
    ziele: ["Entwicklungsschritte bahnen – das Kind erlebt seinen Körper positiv", "Symmetrie, Körperwahrnehmung und Körperschema", "Hand-Mund-, Hand-Hand-, Hand-Fuß-Koordination", "Gezielte Schwerpunktverlagerung und Haltungskontrolle", "Eltern im Handling anleiten („so wenig Hilfe wie möglich, so viel wie nötig“)"],
    cave: ["Langsam handeln, Reaktion des Kindes abwarten", "Flächig und fest greifen, Bewegungen immer zu beiden Seiten", "Baby-Hopser und Lauflerngeräte nicht empfehlen"],
    phasen: [
      {
        titel: "0–3 Monate",
        uebungen: ["schoss-kontakt", "schoss-drehen-en-bloc", "schoss-gewichtsverlagerung", "hand-mund", "hand-hand", "bauchlage-erleichtern", "hochnehmen-ablegen"]
      },
      {
        titel: "4–6 Monate",
        uebungen: ["drehen-anbahnen", "hand-knie", "hand-fuss", "greifangebote", "bl-in-sl"]
      },
      {
        titel: "Ab ca. 6 Monaten",
        uebungen: ["krabbelstand", "greifangebote"]
      },
      {
        titel: "Handling im Alltag",
        uebungen: ["tragen-senkrecht", "tragevarianten", "anziehen-wickeln", "hochnehmen-ablegen"]
      }
    ],
    quelle: ["KG Pädi – Handling / Schoßbehandlung", "KG Pädi – Motorische Entwicklung", "KG Pädi – Motorische Entwicklung 4–6 Monate", "KG Pädi – Pädi Einführung"]
  },
  {
    id: "asymmetrie-saeugling",
    fach: "paedi",
    name: "Asymmetrie / Lagerungsplagiozephalie / Schiefhals (KISS)",
    kurz: "Säuglinge mit Vorzugshaltung von Kopf und Rumpf zu einer Seite; Folge können Kopfverformung und asymmetrische Bewegungsentwicklung sein.",
    ziele: ["Symmetrie und Mittellinienorientierung erarbeiten", "Kopfdrehung zur Nicht-Vorzugsseite fördern", "Asymmetrien über Tragen und Alltagshandling beeinflussen"],
    cave: ["Tragevarianten und Angebote immer zu beiden Seiten – eigene Lieblingsseite nicht übertragen", "Bei Verdacht auf Schiefhals ärztlich abklären"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["schoss-kontakt", "schoss-gewichtsverlagerung", ["greifangebote", "Spielzeug von der Nicht-Vorzugsseite anbieten"], "hand-hand", "bauchlage-erleichtern", ["tragevarianten", "Seitliche Tragevariante und „Flieger“ zur Beeinflussung von WS-Asymmetrien"], "tragen-senkrecht", "drehen-anbahnen"]
      }
    ],
    quelle: ["KG Pädi – Handling / Schoßbehandlung", "KG Pädi – Pädi Einführung"]
  },
  {
    id: "hueftdysplasie",
    fach: "paedi",
    name: "Hüftdysplasie (Säugling)",
    kurz: "Reifungsstörung der Hüftpfanne; Förderung der Zentrierung durch Abduktion und Außenrotation (Anhock-Spreiz-Haltung) im Alltagshandling, ggf. ärztlich verordnete Spreizversorgung.",
    ziele: ["Hüfte in Abduktion/Außenrotation positionieren", "Hüftschonendes Wickeln und Tragen", "Normale motorische Entwicklung fördern"],
    cave: ["Beine beim Wickeln nicht an den Füßen hochziehen", "Ärztliche Vorgaben zur Spreizhose/Schiene beachten"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["tragen-senkrecht", ["tragevarianten", "Tragehilfen in Anhock-Spreiz-Haltung; umgekehrte Variante mit Hüftabduktionsstellung"], "anziehen-wickeln", "hand-fuss", "hochnehmen-ablegen"]
      }
    ],
    quelle: ["KG Pädi – Handling / Schoßbehandlung"]
  },
  {
    id: "zerebralparese",
    fach: "paedi",
    name: "Infantile Zerebralparese",
    kurz: "Frühkindliche Hirnschädigung mit Störung von Tonus, Haltung und Bewegung (spastisch, dyskinetisch, ataktisch). Behandlung z. B. nach Bobath oder Vojta; Hands-on bei eingeschränkter eigenaktiver Kontrolle, Hands-off-Varianten mit zunehmendem Alter.",
    ziele: ["Haltungskontrolle und Alignment", "Tonus regulieren, Kontrakturen vorbeugen", "Eigenaktivität und Teilhabe (Spiel, Alltag)", "Interdisziplinäre Hilfsmittelversorgung"],
    cave: ["Bei Griff in die Handfläche wird der Handgreifreflex ausgelöst", "Überschießende Bewegungen – Verletzungsrisiko"],
    phasen: [
      {
        titel: "Säugling und Kleinkind",
        uebungen: ["schoss-kontakt", "schoss-gewichtsverlagerung", "drehen-anbahnen", ["hand-hand", "Bei Halbseitenproblematik ggf. nur einen Arm führen"], "hand-knie", "bauchlage-erleichtern", "krabbelstand", "tragen-senkrecht"]
      },
      {
        titel: "Älteres Kind",
        uebungen: ["bobath-sitz-gewichtsverlagerung", "bobath-bewegungsuebergaenge", "sprunggelenk-dex-pflex", "dehnung-wade", "einbeinstand", "stepper", "pnf-mattenprogramm", ["kgt-sprunggelenk-bl", "Dorsalextension: Spitzfußprophylaxe"], ["kgt-huefte-sl", "Abduktion und Extension gegen Adduktoren- und Beugespastik"], ["kgt-knie-rl", "Volle Extension erhalten (Ischios)"]]
      }
    ],
    quelle: ["KG Pädi – Handling / Schoßbehandlung", "KG Pädi – Pädi Einführung", "Bobath – Einführung"]
  },
  {
    id: "muskulaere-hypotonie",
    fach: "paedi",
    name: "Muskuläre Hypotonie",
    kurz: "Kinder mit niedrigem Muskeltonus haben weniger Kraft und Ausdauer, da die Gelenke nicht immer optimal axial ausgerichtet sind; Erfahrungen wie Fuß-Fuß-Koordination werden später/seltener gemacht.",
    ziele: ["Stütz- und Haltearbeit fördern", "Bauchmuskulatur aktivieren (Hand-Fuß-Koordination)", "Propriozeptive Reize (Approximation, Rocking)"],
    cave: ["Gelenke nicht überstrecken lassen"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["schoss-kontakt", "hand-fuss", "bauchlage-erleichtern", "krabbelstand", "bl-in-sl", "tragevarianten"]
      }
    ],
    quelle: ["KG Pädi – Handling / Schoßbehandlung", "KG Pädi – Motorische Entwicklung 4–6 Monate"]
  },
  {
    id: "fruehgeborene",
    fach: "paedi",
    name: "Frühgeborene",
    kurz: "Unreifes ZNS, oft Hypotonie und Regulationsschwierigkeiten; Entwicklung nach korrigiertem Alter beurteilen. Elternanleitung zu Handling, Lagerung und Kontaktaufnahme.",
    ziele: ["Motorische Ruhe und Sicherheit vermitteln", "Positive Bewegungserfahrungen", "Eltern-Kind-Dialog"],
    cave: ["Reize einzeln setzen, Reaktion abwarten, Überstimulation vermeiden"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["schoss-kontakt", "hochnehmen-ablegen", "anziehen-wickeln", "schoss-drehen-en-bloc", "hand-mund", "tragen-senkrecht"]
      }
    ],
    quelle: ["KG Pädi – Handling / Schoßbehandlung", "KG Pädi – Reflexe, Früherkennung, APGAR"]
  },
  {
    id: "atemwegsinfekte-kind",
    fach: "paedi",
    name: "Atemwegsinfekte im Kindesalter (Bronchitis, Pneumonie)",
    kurz: "Akute Bronchitis ist die häufigste Atemwegserkrankung bei Kindern; Pneumonie im ersten Lebensjahr sehr häufig (bei Neugeborenen kann Fieber fehlen, Apnoegefahr).",
    ziele: ["Sekret lösen und Transport fördern", "Atelektasen vermeiden", "Unproduktiven Husten dämpfen", "Spielerisch verpacken"],
    cave: ["Im Akutstadium keine Klopfungen/Klatschungen, keine heiße Rolle", "Bei Säuglingen Apnoe- und Bronchiolitisgefahr"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["umlagerung", ["kontaktatmung", "Beim Säugling über Druck an Sternum/Rippen (Schoßbehandlung)"], "schoss-kontakt", "lippenbremse", "huffing", "drainagelagerung", "atemtrainer"]
      }
    ],
    quelle: ["KG Innere – Lunge 3", "KG Pädi – Handling / Schoßbehandlung"]
  },
  {
    id: "asthma-kind",
    fach: "paedi",
    name: "Asthma bronchiale im Kindesalter",
    kurz: "Bei Kindern zeigt sich häufig ein aufgewölbter unterer Thoraxrand; Atemhilfsmuskulatur verspannt, Kinder oft untrainiert.",
    ziele: ["Verhalten im Anfall einüben", "Antiobstruktives Atmen", "Spielerisches Ausdauertraining", "Thoraxbeweglichkeit"],
    cave: ["Anstrengungsasthma: Aufwärmen, Intervallbelastung", "Notfallspray immer griffbereit"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["atemerleichternde-stellungen", "lippenbremse", "kontaktatmung", "huffing", "thoraxmobilisation", "dreh-dehnlage", "peak-flow-schulung", "gehen-richtungswechsel"]
      }
    ],
    quelle: ["KG Innere – Lunge 2 (Asthma)"]
  },
  {
    id: "mukoviszidose",
    fach: "paedi",
    name: "Mukoviszidose (Cystische Fibrose)",
    kurz: "Angeborene Stoffwechselerkrankung mit zähem Sekret (Hypersekretion) und wiederkehrenden Infekten (z. B. Pseudomonas). Tägliche Atemphysiotherapie lebenslang.",
    ziele: ["Tägliche Sekretmobilisation als feste Routine", "Selbstständigkeit in Atemtechniken", "Ausdauer und Thoraxbeweglichkeit", "Hygiene"],
    cave: ["Hygieneregeln (Keimübertragung zwischen CF-Patienten)", "Inhalation vor der Atemtherapie"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["inhalation-reihenfolge", "autogene-drainage", "oszillierendes-pep", "acbt", "huffing", "drainagelagerung", "thoraxmobilisation", "ergometer"]
      }
    ],
    quelle: ["KG Innere – Lunge 2", "KG Innere – Lunge 3", "KG Innere – Bronchiektasen-Präsentation"]
  },
  {
    id: "haltungsschwaeche-kind",
    fach: "paedi",
    name: "Haltungsschwäche / Skoliose bei Kindern und Jugendlichen",
    kurz: "Haltungsschwäche (Rundrücken, Hohlkreuz) oder seitliche Verkrümmung der WS mit Rotation; schwere Skoliosen schränken auch die Atmung ein (extrapulmonale Restriktion).",
    ziele: ["Rumpfstabilität und Aufrichtung", "Thoraxbeweglichkeit, Atmung in die konkave Seite", "Motivation durch spielerische Übungen"],
    cave: ["Skoliose: konsequente Kontrolle durch Orthopädie, ggf. Korsett"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["superman-theraband", "bridging-theraband", "bruegger-rumpf", "rudern-theraband", ["dreh-dehnlage", "Gedehnte Seite belüften"], "thoraxmobilisation", "pnf-mattenprogramm", "pnf-lifting", ["kgt-schulter-sitz", "Resistiv: Flexion und Außenrotation für die Aufrichtung"]]
      }
    ],
    quelle: ["Theraband – Rumpfstabilisation", "Theraband – Thera-Band-Grundübungen nach Brügger", "KG Innere – Lunge 1"]
  },
  {
    id: "knicksenkfuss",
    fach: "paedi",
    name: "Knick-Senkfuß im Kindesalter",
    kurz: "Abgeflachtes Längsgewölbe mit Valgusstellung der Ferse; kindlich oft physiologisch, bei Beschwerden Kräftigung der Fußmuskulatur und Gangschulung.",
    ziele: ["Fußmuskulatur kräftigen", "Fußgewölbe wahrnehmen", "Beinachse verbessern"],
    cave: ["Bei Schmerzen orthopädisch abklären"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["igelball-fussarbeit", "dynamisches-gehen", ["ring-fuss-sitz", "Ring mit Zehen aufheben und einspreizen"], "pro-supination-ball", "wadenpresse", "einbeinstand", "beinachse-spiegel", ["kgt-sprunggelenk-bl", "Resistiv: Supination kräftigen"]]
      }
    ],
    quelle: ["KG Gyn – Übungen für Beckenbodentraining", "KG Innere – Hockergymnastik", "MTT – Gruppe 3"]
  }
);
