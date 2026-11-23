/* Krankheits- und Rehabilder: Chirurgie */
PT.krankheitsbilder.push(
  {
    id: "postop-prophylaxen",
    fach: "chirurgie",
    name: "Postoperative Prophylaxen (allgemein)",
    kurz: "Nach jeder OP und bei Bettlägerigkeit: Pneumonie- (schmerzbedingte Fehlatmung, Narkose), Thrombose- (fehlende Muskelpumpe, Virchow-Trias), Dekubitus- und Kontrakturprophylaxe. Stabilitätsgrade: lagerungs-, bewegungs-, belastungs-, trainingsstabil.",
    ziele: ["Belüftung, Sekretolyse und Thoraxmobilität erhalten", "Venöse Strömung beschleunigen", "Druckentlastung der Haut", "Gelenkbeweglichkeit im erlaubten Ausmaß erhalten", "Kreislauf anregen"],
    cave: ["Wirksamste Thromboseprophylaxe: Hochlagerung + Muskelpumpe + Antithrombosestrümpfe", "ATS faltenfrei, im Liegen anziehen, 24 h tragen", "Freigaben des Operateurs beachten"],
    phasen: [
      {
        titel: "Pneumonieprophylaxe",
        uebungen: ["kontaktatmung", "schnueffelnde-einatmung", "gaehnende-einatmung", "lippenbremse", "packegriffe", "icr-ausstreichungen", "atemtrainer", "umlagerung", "einatmung-halten", "nasenstenose", ["hustenhilfe", "Wunde fixieren"], "reizhusten-atemhilfen", "toenen-ptkm", "dehnzuege", "dehnung-koerperwaende", ["pnf-atmung", "Costal oder diaphragmal, nicht bei frischer Sternotomie"]]
      },
      {
        titel: "Thromboseprophylaxe",
        uebungen: ["venenpumpe", "hochlagerung", "tiefatmung-rueckstrom", "isometrie-gesamt", "armuebungen-bett", "transfer-ueber-seitlage", "kreislaufanregung-aufstehen"]
      },
      {
        titel: "Dekubitus- und Kontrakturprophylaxe",
        uebungen: ["dekubitus-lagerung", "durchbewegen", "umlagerung", "hautinspektion-fingertest", "hochrutschen-scherkraftarm", ["kgt-schulter-rl", "Im erlaubten Ausmaß"], "kgt-ellbogen-sl", ["kgt-huefte-sl", "Nur wenn die Seitlage erlaubt ist"], "kgt-knie-rl"]
      }
    ],
    quelle: ["KG Chirurgie – Prophylaxen", "KG Chirurgie – Physiotherapie in der Chirurgie"]
  },
  {
    id: "beckenfraktur",
    fach: "chirurgie",
    name: "Beckenfraktur",
    kurz: "Einteilung nach Tile: A stabil, B rotationsinstabil (z. B. Open Book), C rotations- und vertikal instabil. Instabile Verletzungen oft mit Gefäß-, Nerven- (N. ischiadicus) und Organverletzungen. Belastung je nach Typ und Versorgung (z. B. stabile Ringfraktur ab 2.–4. Woche schrittweise).",
    ziele: ["Prophylaxen, Lagerungskontrolle", "Arm- und Beinkraft der gesunden Seite erhalten", "Beckenring stabilisieren", "Beweglichkeit Knie/OSG, Hüfte nach Freigabe", "Vorbereitung auf Belastung und Gehen"],
    cave: ["Hüftbewegung der betroffenen Seite evtl. nicht freigegeben", "Hüftflexion der nicht betroffenen Seite max. 90°", "In RL/Extension auf der betroffenen Seite nur Isometrie", "SL erst bei stabiler Fraktur, betroffene Seite oben", "Weiterlaufende Bewegung ins Frakturgebiet beachten (auch bei Armübungen)", "Heiße Rolle nicht im OP-Gebiet"],
    phasen: [
      {
        titel: "Liegephase (RL)",
        uebungen: ["venenpumpe", ["schleifende-ferse", "Gegensinnig als Kreislaufanregung; betroffen nach Freigabe"], "isometrie-gesamt", ["armuebungen-bett", "Mit dosiertem Widerstand"], "pnf-scapula-post-depression", "kontaktatmung", "brunkow", "hautinspektion-fingertest", "kreislaufanregung-aufstehen", ["dehnzuege", "Nur am Arm – kein Zug am Bein"], "einatmung-halten"]
      },
      {
        titel: "Beispiel: stabile Os-pubis-Fraktur Typ A, 5. Tag",
        info: "Hüftflexion bis 90° freigegeben; Patientenbeispiel aus dem Skript.",
        uebungen: [["schleifende-ferse", "Bis 90° nach Schmerz, 10 ×; dann mit Abheben in Flexionsendstellung"], ["abduktion-schleifend", "Bewegung erweitern, 10 ×"], ["abduktion-sl-kurzer-hebel", "SL auf der gesunden Seite, 3 × 10"], ["pnf-stuetz", "Beide Arme, evtl. Theraband am Kopfteil"], "transfer-ueber-seitlage", "aufstehen-stuhl", "gangschule-hilfsmittel", "gewichtsverlagerung-stand"]
      },
      {
        titel: "Tonusregulation",
        uebungen: ["heisse-rolle", "pnf-halten-entspannen", "durchbewegen"]
      },
      {
        titel: "KG-Techniken: passiv, assistiv und resistiv bewegen",
        uebungen: [["kgt-knie-rl", "Variante ohne Hüftflexion – das Becken bleibt ruhig"], ["kgt-huefte-sl", "Erst bei stabiler Fraktur, betroffene Seite oben; Hüftflexion nach Freigabe"], ["kgt-sprunggelenk-bl", "Bauchlage nur nach Freigabe"]]
      }
    ],
    quelle: ["KG Chirurgie – Beckenfrakturen", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "acetabulumfraktur",
    fach: "chirurgie",
    name: "Acetabulumfraktur",
    kurz: "Fraktur der Hüftpfanne (Typ A ein Pfeiler, B Querfraktur, C zwei Pfeiler – zwingende OP). Ab ca. 4 Wochen Sohlenkontakt, 5.–11. Woche TB 15–20 kg, VB ab ca. 16. Woche. Hauptziel: geringer Gelenkdruck, damit Fraktur und Knorpel heilen.",
    ziele: ["Prophylaxen, Durchblutung", "Funktion nicht betroffener Gelenke und des anderen Beins erhalten", "Hüftmuskulatur entspannen, Hüftbewegung unter Abnahme der Eigenschwere", "Sohlenkontakt und geschlossene Kette unter Entlastung (Waage)"],
    cave: ["Keine intensive Arbeit der Mm. glutei medius/minimus in offener Kette in den ersten 4 Wochen (ca. 2,5-faches Körpergewicht auf der Hüfte)", "Entlastungsvorgaben mit Waage kontrollieren", "Sitz erhöht den Druck auf das Acetabulum"],
    phasen: [
      {
        titel: "Frühphase (Beispiel Typ C, 2. post-op Woche)",
        uebungen: ["venenpumpe", ["schleifende-ferse", "Assistiv-aktiv unter Bauchspannung"], ["abduktion-schleifend", "Betroffen assistiv, gesund aktiv"], "isometrie-gesamt", ["brunkow", "Ganzkörpergrundspannung mit OEX"], "transfer-ueber-seitlage", ["gangschule-hilfsmittel", "Entlastender Gang mit Gehwagen"], ["kgt-knie-rl", "Variante ohne Hüftflexion"]]
      },
      {
        titel: "Ab ca. 4 Wochen",
        uebungen: ["gewichtsverlagerung-stand", "tubersitz", "bridging", "pnf-pelvis-ant-elevation", ["kgt-huefte-sl", "Abduktion auf dem Quader unter Abnahme der Eigenschwere"]]
      }
    ],
    quelle: ["KG Chirurgie – Frakturen und Luxationen im Bereich des Hüftgelenks", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "hueftluxation",
    fach: "chirurgie",
    name: "Traumatische Hüftgelenksluxation",
    kurz: "Meist dorsale Luxation durch „Dashboard“-Mechanismus; Reposition so schnell wie möglich. Komplikationen: N.-ischiadicus-Läsion, Femurkopfnekrose, Pfannenrandabbruch, Arthrose.",
    ziele: ["Prophylaxen, Lagerungskontrolle", "Funktion nicht betroffener Gelenke erhalten", "Funktionsschulung von Hüftbeweglichkeit und -muskulatur nach Befund und Arztabsprache"],
    cave: ["Dorsal: keine Flex/Add/IRO; ventral: keine Flex/Abd/ARO", "Bis 6./7. Woche Hüftflexion nur bis 60°", "Kein Fußkreisen (Rotation läuft in die Hüfte weiter)", "Abduktion nur mit Kniescheibe zur Decke; Tubersitz: Scherkräfte, Betthöhe anpassen"],
    phasen: [
      {
        titel: "Beispiel: reponierte Luxation nach ventral, 20 kg TB, 2. Woche",
        uebungen: [["venenpumpe", "DE/PF, kein Kreisen"], ["schleifende-ferse", "Betroffen bis 60° mit Abheben, Gegenseite bis ca. 90°"], ["abduktion-schleifend", "Nur mit Arztfreigabe, ohne ARO"], ["bridging", "Mit Grundspannung"], "transfer-ueber-seitlage", ["tubersitz", "Hoher Sitz wegen 60°-Grenze"], "gangschule-hilfsmittel", ["kgt-huefte-sl", "Nur Flexion/Extension bis 60°, keine Rotation; Abduktion nur nach Freigabe"]]
      }
    ],
    quelle: ["KG Chirurgie – Frakturen und Luxationen im Bereich des Hüftgelenks", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "schenkelhalsfraktur",
    fach: "chirurgie",
    name: "Schenkelhalsfraktur / pertrochantäre Fraktur",
    kurz: "Häufig bei älteren Menschen mit Osteoporose; Einteilung nach Pauwels (I < 30° bis III > 50°). Versorgung konservativ (eingestauchte Abduktionsfraktur) oder operativ (DHS, Gamma-Nagel, Schrauben, Endoprothese). Belastung nach Vorgabe des Arztes.",
    ziele: ["Prophylaxen und Lagerungskontrolle", "Muskelspannung zur Fraktursicherung", "Beweglichkeit und Kraft der betroffenen Hüfte nach Befund", "Geh- und Belastungsschulung, Gebrauchsbewegungen"],
    cave: ["Keine scherenden Bewegungsmuster, keine Adduktion über die Mittellinie", "Keine Flexion über 90°, keine IRO/ARO, kein langer Hebel", "Trochanterabriss: keine aktive Abduktion in RL oder SL", "Redons im Gelenk: keine Hüftbewegung", "Bridging erst ab 20 kg TB"],
    phasen: [
      {
        titel: "1.–3. Tag post-op",
        uebungen: ["venenpumpe", ["schleifende-ferse", "Beidseits"], "abduktion-schleifend", "brunkow", "isometrie-gesamt", ["armuebungen-bett", "Theraband – weiterlaufende Bewegung beachten"], "transfer-ueber-seitlage", "sicherer-stand", "kreislaufanregung-aufstehen", "einatmung-halten"]
      },
      {
        titel: "4.–7. Tag",
        uebungen: [["schleifende-ferse", "Mit Abheben der Ferse in max. Flexion"], ["dehnung-adduktoren", "Sanft"], "thomas-dehnung", "aufstehen-stuhl", ["gangschule-hilfsmittel", "3-Punkte-Gang Ebene und Treppe"], ["kgt-huefte-sl", "Kissen zwischen die Knie; keine Rotation, keine Adduktion über die Mittellinie, Flexion ≤ 90°"]]
      },
      {
        titel: "8.–15. Tag",
        uebungen: ["pnf-halten-entspannen", "brunkow", "abduktion-sl-kurzer-hebel", "tubersitz", "bridging", "verhaltensregeln-tep", "gebrauchsbewegungen"]
      }
    ],
    quelle: ["KG Chirurgie – Schenkelhalsfrakturen", "KG Chirurgie – Proximale Femurfrakturen", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "oberschenkelfraktur",
    fach: "chirurgie",
    name: "Oberschenkelschaftfraktur",
    kurz: "Subtrochantär, Schaft, suprakondylär oder Kondylen; meist Hochrasanztrauma, bei Erwachsenen OP (Verriegelungsnagel, Platte, Fixateur externe). Frühkomplikationen u. a. Embolie, Gefäßverletzung, Kompartmentsyndrom.",
    ziele: ["Prophylaxen, Schmerz-, Ödem- und Hämatomresorption", "Gleichmäßige Muskelspannung im betroffenen Oberschenkel", "Kraft des gesunden Beins und der Arme", "Knie im erlaubten Rahmen mobilisieren", "Gangschulung, ADL"],
    cave: ["Keine langen Hebel, keine Rotation", "Im Sitz muss der Oberschenkel ganz aufliegen", "Bridging erst ab 20 kg TB", "Spongiosaplastik: evtl. 8–14 Tage Ruhe", "Starke Schmerzen, Spannung oder Fußheberschwäche → Kompartmentsyndrom? Sofort Arzt informieren, nicht hochlagern"],
    phasen: [
      {
        titel: "Frühphase",
        uebungen: ["venenpumpe", "hochlagerung", "isometrie-quadriceps", "isometrie-gesamt", ["schleifende-ferse", "Assistiv-aktiv"], "brunkow", "armuebungen-bett", "transfer-ueber-seitlage", ["kgt-knie-rl", "Im erlaubten Rahmen, kein langer Hebel"], "kreislaufanregung-aufstehen"]
      },
      {
        titel: "Belastungsaufbau",
        uebungen: [["tubersitz", "Oberschenkel liegt ganz auf"], ["bridging", "Ab 20 kg TB"], "gangschule-hilfsmittel", "gewichtsverlagerung-stand", "pnf-halten-entspannen", "gebrauchsbewegungen"]
      }
    ],
    quelle: ["KG Chirurgie – Oberschenkelfrakturen", "KG Chirurgie – Oberschenkelfrakturen/Kompartment", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "patellafraktur",
    fach: "chirurgie",
    name: "Patellafraktur",
    kurz: "Meist Querfraktur durch direkten Sturz aufs Knie; Zuggurtungsosteosynthese, Orthese in ca. 10° Flexion. Ca. 6 Wochen post-op Knie 0-0-60°, ab ca. 7. Woche Belastung ohne Orthese, VB und Treppe bei reizloser Abheilung.",
    ziele: ["Erguss und Schwellung reduzieren", "Quadrizeps aktivieren ohne Zug auf die Osteosynthese", "Hüfte, OSG und Rumpf fit halten", "Später Patellamobilität, Beweglichkeit, Kraft in geschlossener Kette, Sensomotorik"],
    cave: ["Keine aktive Kniestreckung gegen Widerstand, kein Hebel am Unterschenkel (3. Woche)", "Aktive Flexion über 30° erst nach Ergussresorption und Fraktursicherung", "Knieflexion unter Belastung max. 40°", "Kein offenes Widerstandstraining (nicht vor der 12. Woche)", "Erguss, Überwärmung, Streckdefizit > 10° → zurück auf Sohlenkontakt, Arzt informieren"],
    phasen: [
      {
        titel: "3. post-op Woche (Orthese, TB)",
        uebungen: [["hochlagerung", "In der Orthese"], "milde-kaelte", "isometrie-quadriceps", "isometrie-ischios", "hueftbewegen-gestrecktes-knie", "halteposition-endstellung", "venenpumpe", ["bridging", "Mit der gesunden Seite"], ["gangschule-hilfsmittel", "3-Punkte-Gang mit Orthese"]]
      },
      {
        titel: "8. post-op Woche (Orthese wird abtrainiert)",
        uebungen: ["patellamobilisation", "narbenmobilisation", ["schleifende-ferse", "Heel-Slides bis zur freigegebenen Grenze"], ["wandlehnen", "Max. 40°"], ["step-up", "Niedrige Stufe, max. 40°"], "einbeinstand", "tandem", "bridging", "sidesteps-theraband", "wadenpresse", "slr", "beinachse-spiegel", ["ergometer", "Erst bei Flexion > 100°, geringer Widerstand"], "treppensteigen", ["kgt-knie-rl", "Flexion bis zur freigegebenen Grenze"]]
      }
    ],
    quelle: ["KG Chirurgie – Patellafraktur (Zusammenfassung)", "KG Chirurgie – Patellafraktur Einteilung, ICF-Befund, Maßnahmen", "KG Chirurgie – Frakturen und Verletzungen des Kniegelenks"]
  },
  {
    id: "tibiakopffraktur",
    fach: "chirurgie",
    name: "Tibiakopffraktur",
    kurz: "Fraktur der Gelenkfläche des Schienbeinkopfes, oft mit sekundären Band- und Meniskusläsionen. Bei übungsstabiler Osteosynthese Übungen gegen die Eigenschwere; Patellamobilisation früh.",
    ziele: ["Erguss reduzieren, Beweglichkeit im erlaubten Ausmaß", "Muskelaufbau ohne Belastung der Gelenkfläche", "Entlastender Gang"],
    cave: ["Lange Entlastung der Gelenkfläche (Arztvorgabe)", "Bei Erguss Flexion auf 30° begrenzt"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["hochlagerung", "milde-kaelte", "venenpumpe", "isometrie-quadriceps", "isometrie-ischios", "patellamobilisation", ["schleifende-ferse", "Unter Abnahme der Eigenschwere"], "hueftbewegen-gestrecktes-knie", "gangschule-hilfsmittel", ["kgt-knie-rl", "Passiv bis assistiv unter Abnahme der Eigenschwere"]]
      }
    ],
    quelle: ["KG Chirurgie – Frakturen und Verletzungen des Kniegelenks"]
  },
  {
    id: "kapsel-band-knie",
    fach: "chirurgie",
    name: "Kapsel-Band-Meniskus-Verletzung des Knies / VKB-Plastik",
    kurz: "Häufig kombinierte Verletzungen (Innenband, VKB, Meniskus). Nach VKB-Plastik baut sich das Transplantat zwischen 6. und 12. Woche um – erhöhte Rerupturgefahr; Muskelaufbau dauert ca. 1 Jahr. Schema nach Dr. Mayr.",
    ziele: ["Ergussresorption, Lagerungs- und Orthesenkontrolle", "Ausgeglichene Muskelspannung zur Gelenkstabilität", "Beweglichkeit im erlaubten Ausmaß, Patellabeweglichkeit", "Muskelaufbau Ischios, Quadrizeps, Pes anserinus, Gastrocnemius, Glut. max.", "Sensomotorische Kniekontrolle, Gangschulung"],
    cave: ["Nach VKB-Plastik kein isoliertes Quadrizepstraining (offene Kette nur 0-40-90°)", "Dynamische Widerstandsübungen im offenen System nicht vor der 12. Woche", "Bei Erguss Flexion auf 30° begrenzt", "Nur milde Kälte; Behandlung darf nie Schmerz auslösen"],
    phasen: [
      {
        titel: "1.–2. post-op Tag",
        uebungen: ["hochlagerung", "milde-kaelte", "isometrie-ischios", ["isometrie-quadriceps", "Nur in geschlossener Kette"], "venenpumpe", "patellamobilisation", "mld-bein"]
      },
      {
        titel: "3. Tag – 2. Woche",
        uebungen: [["gangschule-hilfsmittel", "Meist 3-Punkte-Gang"], ["schleifende-ferse", "Orthese 0-20-60"], "bridging", "abduktion-schleifend", ["beinpresse", "Ab 12.–14. Tag, 0-40-90°, max. 10 % KG"], "pro-supination-ball"]
      },
      {
        titel: "3.–6. Woche",
        uebungen: ["bridging", "sidesteps-theraband", ["ergometer", "Wenn Flexion > 100°"], ["einbeinstand", "Ab 5. Woche"], "beinachse-spiegel", ["kgt-knie-rl", "Im Rahmen der Orthesenfreigabe; resistive Kniestreckung in offener Kette nicht vor der 12. Woche"]]
      },
      {
        titel: "7.–12. Woche und später",
        uebungen: [["einbeinstand", "Sisselkissen, Kreisel"], "ausfallschritte", "wandlehnen", "mt-gleiten", "gehen-richtungswechsel", "mtt-aufbau"]
      }
    ],
    quelle: ["KG Chirurgie – Frakturen und Verletzungen des Kniegelenks"]
  },
  {
    id: "sprunggelenksfraktur",
    fach: "chirurgie",
    name: "Sprunggelenksfraktur (Weber A/B/C)",
    kurz: "Einteilung nach Weber: A unterhalb, B auf Höhe, C oberhalb der Syndesmose (immer zerrissen); auch bi-/trimalleolär, Pilon tibiale, Maisonneuve. Belastung z. B. 1.–6. Woche Sohlenkontakt, ab 7. Woche TB 20 kg.",
    ziele: ["Prophylaxen, Kreislaufanregung", "Schmerz- und Ödemreduktion", "Beweglichkeit im erlaubten Rahmen und der angrenzenden Gelenke", "Muskelkraft Arme, gesundes und betroffenes Bein", "Entlastendes Gehen, ab VB Koordination"],
    cave: ["Dorsalextension nur bis zur Nullstellung, keine Pro-/Supination", "Kein belastendes Gehen (Vorgabe)", "Bei Weber C: Ansatz M. biceps femoris an der distalen Fibula beachten", "VB frühestens nach der 6. Woche", "Pausen mit Hochlagerung gegen einschießende Schmerzen"],
    phasen: [
      {
        titel: "Entlastungsphase",
        uebungen: ["hochlagerung", ["venenpumpe", "Nicht betroffenes Bein; betroffen je nach Versorgung Zehen"], "isometrie-gesamt", "schleifende-ferse", "armuebungen-bett", "gangschule-hilfsmittel", "mld-bein", "kreislaufanregung-aufstehen"]
      },
      {
        titel: "Ab Vollbelastung",
        uebungen: ["einbeinstand", "pro-supination-ball", "wadenpresse", "sidesteps-theraband", "dehnung-wade", "gehen-richtungswechsel", ["kgt-sprunggelenk-bl", "Ab Freigabe auch Pro-/Supination; resistiv zur Kräftigung"]]
      }
    ],
    quelle: ["KG Chirurgie – Proximale Femur- und Sprunggelenksfrakturen"]
  },
  {
    id: "oberarmfraktur",
    fach: "chirurgie",
    name: "Oberarmfraktur (proximal/distal) mit Schonhaltung",
    kurz: "Nach Humerusfraktur entsteht häufig eine lange Schonhaltung mit verkürztem M. pectoralis und erschwerter Schulterflexion bzw. eingeschränkter Ellbogenbeweglichkeit. PNF nach Belastungsstufe: bewegungsstabil (0–5 kg, Führungskontakt) bis belastungsstabil.",
    ziele: ["Aufrichtung, Dehnung des M. pectoralis", "Beweglichkeit von Schulter und Ellbogen", "Kraft für Alltag und Sport", "Strukturelles Defizit zuerst angehen"],
    cave: ["Belastungsstufe beachten (bewegungsstabil: nur Führungskontakt)", "Kräftigende Techniken: Agonistische/Antagonistische Umkehr; Beweglichkeit: Replikation, Halten-/Anspannen-Entspannen"],
    phasen: [
      {
        titel: "PNF-Programm (Beispiel aus dem Kurs)",
        uebungen: [["pnf-rhythmische-bewegungseinleitung", "Einleitung, Therapieerklärung"], ["pnf-scapula-post-depression", "Bilateral, Agonistische Umkehr, 3 × 10"], "pnf-scapula-post-elevation", ["pnf-stuetz", "Auch auf der gesunden Seite (Irradiation)"], ["pnf-flex-abd-aro", "Tablettmuster mit Führungskontakt"], "pnf-agonistische-umkehr", ["pnf-dynamische-umkehr", "Ab belastungsstabil"], "pnf-replikation", "pnf-halten-entspannen", "pnf-anspannen-entspannen"]
      },
      {
        titel: "Ergänzend",
        uebungen: ["dehnung-pectoralis", "scapulasetting", "aufrichten-schulterkreisen", "rudern-theraband", ["kgt-schulter-rl", "Bewegungsstabil: nur passiv/assistiv mit Führungskontakt"], ["kgt-schulter-sitz", "Belastungsstabil: resistiv"], ["kgt-ellbogen-sl", "Distale Oberarmfraktur: Ellbogen und Unterarm; resistiv erst belastungsstabil"]]
      }
    ],
    quelle: ["PNF – Fallbeispiel Oberarmfraktur (Schonhaltung)", "PNF – Fallbeispiel distale Oberarmfraktur", "PNF – Bewegungsstabil (Fallbeispiele)"]
  }
);
