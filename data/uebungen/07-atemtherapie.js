/*
 * Übungen: Atemtherapie
 * Quellen: Kursordner „Atemtherapie“ (Praktisch 1–8, Spicker, Atemarbeit/Befundbogen)
 * und das Lehrbuch Rutte/Sturm „Atemtherapie“ (Springer) – Inhalte frei zusammengefasst.
 * Übungen, die es schon gab (z. B. Lippenbremse, Huffing, autogene Drainage), wurden
 * in den Dateien 01–05 ergänzt statt doppelt angelegt.
 */
PT.uebungen.push(

  /* ---------------- Passive Maßnahmen am Thorax (Therapeut) ---------------- */
  {
    id: "maeuschengriff",
    name: "Flächiges Abziehen (Mäuschengriff)",
    art: "passiv",
    aste: "Reitsitz, Arme auf Kissen abgelegt; alternativ SL",
    ablauf: [
      "Mit den Fingern Haut und Unterhaut heranholen, mit den Daumen eine Falte bilden und diese Falte vor sich herrollen.",
      "Richtung immer von der Wirbelsäule nach lateral und von kaudal nach kranial.",
      "Die ganze Thoraxhälfte in einem Zug durchrollen oder – bei sehr festem Gewebe – in Etappen schrittweise abziehen.",
      "Zugtiefe (oberflächlich oder tief) an Gewebe und Schmerzempfinden anpassen; erst die rechte (herzferne) Seite komplett, dann links."
    ],
    dosierung: "Mehrere Bahnen über die ganze Thoraxhälfte; Reizintensität etwa 5 von 10.",
    wirkung: ["Löst festes, verklebtes Gewebe", "Senkt Gewebs- und Strömungswiderstände, wirkt atemvertiefend", "Lokale Durchblutung (Hautrötung)"],
    achtung: [
      "Ohne Gleitmittel arbeiten – der Hautreiz ist gewollt, Schmerz nicht",
      "Gerinnungshemmer (ASS, Heparin, Marcumar): Gefahr subkutaner Blutungen – sehr vorsichtig dosieren",
      "Vegetative Frühreaktionen (Schweiß, Übelkeit, Kollapsneigung): abbrechen, Patient hinlegen, warmes Getränk"
    ],
    quelle: ["Atemtherapie – 1. Passive Maßnahmen", "Atemtherapie – Spicker"]
  },
  {
    id: "anhaken",
    name: "Anhaken mit zwei Fingern (Thorax und Beckenkamm)",
    art: "passiv",
    aste: "Reitsitz oder SL",
    ablauf: [
      "Eine Hand liegt flächig auf und baut mit leichtem Zug eine Vorspannung im Gewebe auf.",
      "Zeige- und Mittelfinger der anderen Hand haken ein und ziehen kurz zum Knochen- oder Muskelrand hin – der Strich darf hell und schneidend wirken.",
      "Variante: durchgehender Zug mit zwei Fingern entlang der Crista iliaca.",
      "Je besser die flächige Vorspannung, desto kürzer und wirksamer die einzelnen Züge."
    ],
    dosierung: "Einige kurze Striche pro Region.",
    wirkung: ["Reflektorischer Atemreiz über die Bindegewebszonen", "Löst Verklebungen an Faszienrändern", "Reize unterhalb des Nabels erleichtern das Absinken des Zwerchfells"],
    achtung: ["Gerinnungshemmer beachten", "Spätreaktionen (Müdigkeit, Wärme, vermehrter Harndrang) vorher ankündigen"],
    quelle: ["Atemtherapie – 1. Passive Maßnahmen"]
  },
  {
    id: "gabelgriff",
    name: "Gabelgriff zwischen unterem Thoraxrand und Beckenkamm",
    art: "passiv",
    aste: "RL oder SL mit gestreckten oder gebeugten Beinen; auch Reitsitz",
    ablauf: [
      "Daumen und Finger bilden eine Gabel: eine Hand greift am unteren Thoraxrand, die andere am Beckenkamm.",
      "Gewebe zwischen beiden Händen nach kranial und kaudal auseinanderziehen und die Dehnung halten.",
      "Unter gehaltener Dehnung zusätzlich in Form einer Acht verwringen.",
      "Mit dem Atemrhythmus verbinden: in der Einatmung Zug verstärken, in der Ausatmung lösen."
    ],
    dosierung: "3–5 Durchgänge pro Seite.",
    wirkung: ["Dehnt Flanke und lumbale Region", "Fördert die costo-abdominale Atembewegung", "Senkt den Gewebetonus"],
    achtung: ["Nicht über frischen Bauch- oder Flankennarben", "Gerinnungshemmer beachten"],
    quelle: ["Atemtherapie – 1. Passive Maßnahmen"]
  },
  {
    id: "klopfungen",
    name: "Klopfungen am Thorax (Hohlhand, Fingerspitzen, gedämpft)",
    art: "passiv",
    aste: "Reitsitz, SL oder Drainagelagerung",
    ablauf: [
      "Mit gewölbten Hohlhänden im Wechsel rhythmisch auf den Brustkorb klopfen – Gleichmäßigkeit zählt, nicht Kraft.",
      "Kleine, umschriebene Bereiche mit den Fingerspitzen klopfen.",
      "Gedämpft (eigene Hand als Polster unterlegen) bei Kleinkindern, älteren, knochigen oder schmerzempfindlichen Menschen.",
      "Danach tief einatmen und Huffing bzw. abhusten – sinnvoll nur, wenn dabei Trachealrasseln hörbar wird und produktiv abgehustet wird."
    ],
    dosierung: "3–5 Minuten pro Lungenabschnitt.",
    wirkung: ["Erschüttert den Thorax und löst haftendes Sekret", "Exogene Erschütterung unterstützt die mukoziliäre Clearance"],
    achtung: [
      "Nicht bei Osteoporose, Rippenfraktur, frischer Sternotomie, Schrittmacher-/ICD-Bereich, Gerinnungsstörung oder Hämoptoe",
      "Nicht im Asthmaanfall und im Akutstadium",
      "Wirbelsäule und Nierenregion aussparen"
    ],
    quelle: ["Atemtherapie – 1. Passive Maßnahmen", "Atemtherapie – Spicker", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "schuettelungen",
    name: "Schüttelungen (Arm, Bein, Becken)",
    art: "passiv",
    aste: "RL; für Beckenschüttelungen auch SL",
    ablauf: [
      "Direkt: Extremität mit leichtem Zug fassen (Arm in maximaler oder 90° Flexion; Bein unter der Kniekehle und oberhalb der Ferse) und den Zug rhythmisch verstärken und nachlassen.",
      "Die passende Frequenz ist gefunden, wenn die Bewegung sichtbar bis in den Rumpf weiterläuft.",
      "Becken: in SL beide Hände flächig an den Beckenkamm und leicht vor und zurück schütteln; in RL mit aufgestellten oder seitlich abgelegten Beinen über Oberschenkel bzw. Beckenkamm.",
      "Indirekt: lokal über dem Muskelbauch quer zum Faserverlauf, grob- oder feinschlägig."
    ],
    dosierung: "Mehrere Minuten, ruhig und gleichmäßig.",
    wirkung: ["Lockert Muskulatur und Gewebe, wirkt entspannend", "Schwingungen können Bronchialsekret lockern"],
    achtung: ["Freigaben nach OP oder Fraktur beachten", "Nicht am Arm ziehen bei subluxierter oder schmerzhafter Schulter (z. B. Hemiparese)"],
    quelle: ["Atemtherapie – 1. Passive Maßnahmen", "Atemtherapie – 7. Entspannung", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "kaetzchen-kaninchengriff",
    name: "Kätzchen- und Kaninchengriff (Nacken, M. trapezius)",
    art: "passiv",
    aste: "Sitz oder Reitsitz, Kopf hängt locker nach vorn",
    ablauf: [
      "Kätzchengriff: die Haut im Nacken mit einem Packegriff fassen, abheben und halten – so wie eine Katze ihr Junges trägt.",
      "Der Patient lässt den Kopf der Schwere nach hängen und bewegt ihn ggf. leicht nach rechts und links.",
      "Kaninchengriff: Handwurzel unterhalb von C7 neben der Wirbelsäule anlegen, mit den Fingern den vorderen Rand des M. trapezius fassen und nach hinten dehnen; dann Gegenseite."
    ],
    dosierung: "Kätzchengriff 15–30 s halten, 2–3 ×; Kaninchengriff je Seite 3–5 ×.",
    wirkung: ["Entspannt die Nackenmuskulatur und entlastet die Atemhilfsmuskeln", "Dehnt bindegewebige und muskuläre Strukturen"],
    achtung: ["Nicht zu weit seitlich am Hals fassen – Gefäße", "Vorsicht bei HWS-Instabilität und Schwindel"],
    quelle: ["Atemtherapie – 1. Passive Maßnahmen"]
  },
  {
    id: "massage-atemtherapie",
    name: "Klassische Massage zur Detonisierung (Streichungen, Knetungen, Zirkelungen)",
    art: "passiv",
    aste: "Bequeme ASTE: Reitsitz, Sitz mit abgelegten Armen, BL oder RL",
    ablauf: [
      "Streichungen flächig: lange Rückenstrecker vom Kreuzbein nach kranial, Bauchdecke quer und gegengleich, Mm. trapezii vom Ursprung bis zur Schulterhöhe, Zwischenrippenräume von paravertebral nach ventral.",
      "Knetungen weich und rhythmisch an den geraden Bauchmuskeln und am M. trapezius (Finger der einen gegen den Handballen der anderen Hand).",
      "Zirkelungen: M. pectoralis flächig, Rückenmuskeln mit Handballen und Fingern, autochthone Muskeln mit den Fingerkuppen aufsteigend von der LWS bis zur HWS, Zwischenrippenräume mit der Zeigefingerkuppe.",
      "Packegriffe an Bauchdecke und unterem Thoraxrand ergänzen; Selbstmassage (z. B. Trapezius-Knetung) anleiten."
    ],
    dosierung: "5–10 Minuten, nur vorbereitend – genug Zeit für die aktive Atemtherapie lassen.",
    wirkung: ["Senkt den Tonus hypertoner Atemhilfsmuskeln (Trapezius, Pectoralis, Bauchmuskeln)", "Erleichtert die Atembewegung", "Entspannung"],
    achtung: ["Nicht über frischen Narben, Hautdefekten oder akuten Entzündungen", "Bei Thromboseverdacht keine Massage"],
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 1. Passive Maßnahmen"]
  },
  {
    id: "schroepfen",
    name: "Schröpfmassage (bewegtes Schröpfen)",
    art: "passiv",
    aste: "BL, Reitsitz oder SL",
    ablauf: [
      "Haut am Rücken mit Öl vorbereiten.",
      "Schröpfglas mit Unterdruck auf einen Muskelbauch setzen – nicht über Knochen.",
      "Bewegtes Schröpfen: das Glas langsam entlang der Muskulatur verschieben; klassisch: einige Minuten stehen lassen.",
      "Im Befund die Schmerzempfindlichkeit testen und den Unterdruck danach dosieren."
    ],
    dosierung: "Wenige Minuten; Hautreaktion beobachten.",
    wirkung: ["Starke lokale Durchblutung", "Lockert verspanntes Gewebe an Rücken und Thorax"],
    achtung: ["Nicht bei Gerinnungshemmern oder Gerinnungsstörung (Hämatome)", "Nicht über Knochen, Krampfadern oder Hautdefekten", "Blutiges Schröpfen ist keine physiotherapeutische Maßnahme"],
    material: "Schröpfgläser mit Saugball oder Pumpe, Massageöl",
    quelle: ["Atemtherapie – 6. Hilfsmittel"]
  },
  {
    id: "hivamat",
    name: "Tiefenoszillation (Hivamat®)",
    art: "passiv",
    aste: "Bequeme Lagerung je nach Behandlungsgebiet",
    ablauf: [
      "Therapeut (über Klebeelektrode) und Patient (über ein Kontaktelement) werden mit dem Gerät verbunden; behandelt wird mit Spezialhandschuhen oder dem Handapplikator.",
      "Ein pulsierendes elektrostatisches Feld zieht das Gewebe im Takt der gewählten Frequenz (5–200 Hz) an und lässt es wieder los.",
      "Mit leichtem Druck flächig über das Gebiet arbeiten; kombinierbar mit Lymphdrainage oder Atemtherapie."
    ],
    dosierung: "Nach Geräte- und Praxisvorgabe.",
    wirkung: ["Wirkt auch bei minimalem Druck in die Tiefe – schon in frühen, schmerzhaften Phasen einsetzbar", "Laut Hersteller entstauend, schmerzlindernd und detonisierend; bei COPD und Mukoviszidose entspannend für die Atemmuskulatur"],
    achtung: ["Kontraindikationen laut Gebrauchsanweisung prüfen, u. a. bei elektronischen Implantaten", "Die Wirkangaben stammen überwiegend vom Hersteller"],
    material: "Hivamat-Gerät, Handschuhe oder Handapplikator",
    quelle: ["Atemtherapie – 6a. Hivamat"]
  },

  /* ---------------- Atembewegung passiv unterstützt ---------------- */
  {
    id: "manuelle-thoraxkompression",
    name: "Manuelle Thoraxkompression (Ausatemunterstützung)",
    art: "atmung",
    aste: "RL mit aufgestellten Beinen, SL oder Sitz mit aufgelegten Armen; Selbsthilfe im angelehnten Sitz",
    ablauf: [
      "Hände flächig auf den Brustkorb, Handwurzeln auf den Rippenbögen, Finger etwa im Rippenverlauf; Blickkontakt halten.",
      "Einige Atemzüge nur mitgehen, dann ankündigen und in der Ausatmung nach medial-kaudal komprimieren.",
      "In der Einatmung Kontakt halten und die Bewegung begleiten, ohne zu drücken.",
      "Selbsthilfe: eigene Hände auf die unteren Rippenbögen legen und die Ausatmung unterstützen – bei Obstruktionsneigung mit dosierter Lippenbremse."
    ],
    dosierung: "3–6 Wiederholungen, bei hoher Atemfrequenz Pausen.",
    wirkung: ["Vergrößert Ausatembewegung und Ausatemvolumen", "Der folgende Einatemzug wird größer", "Grundgriff für Widerstand gegen die Einatmung und für die Hustenhilfe"],
    achtung: ["Nicht bei Rippenfraktur, Osteoporose, frischer Sternotomie oder instabilem Thorax", "Wirkt es anstrengend: Arbeitstempo prüfen (meist zu langsam) oder Pausen einbauen"],
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 5. Atemtechnik Husten"]
  },
  {
    id: "dehnung-koerperwaende",
    name: "Dehnung der Körperwände (Flanke, Bauchdecke, lumbal)",
    art: "atmung",
    aste: "SL mit angewinkelten Beinen (Flanke), RL mit aufgestellten Beinen (Bauchdecke), BL (lumbal)",
    ablauf: [
      "Flanke: eine Hand an den unteren Rippen, eine am Beckenkamm; mit Beginn der Einatmung die Rippen nach kranial und das Becken nach kaudal dehnen.",
      "Bauchdecke: beide Hände seitlich am Beckenkamm; in der Einatmung die Beckenschaufeln nach ventral kippen.",
      "Lumbal: in BL den Beckenkamm seitlich umfassen und in der Einatmung nach dorsal anheben.",
      "Die Ausatmung jeweils mit beiden Händen bewusst begleiten und die Dehnung lösen."
    ],
    dosierung: "3–6 Atemzüge pro Region.",
    wirkung: ["Passiver Einatemreiz – mehr Atembewegung in der gedehnten Region", "Dehnt Rumpfwand und Faszien"],
    achtung: ["Nicht über frischen Narben im Dehnbereich oder bei akuten Rückenschmerzen", "Bei Hyperventilationszeichen (Schwindel, Kribbeln) zu aktiver Bewegung wechseln"],
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "dehnzuege",
    name: "Therapeutische Dehnzüge an Arm und Bein",
    art: "atmung",
    aste: "RL oder SL",
    ablauf: [
      "Extremität bequem lagern und fassen (siehe Grifftechnik).",
      "Mit Beginn der Einatmung sanft in Verlängerung der Längsachse ziehen, mit der Ausatmung den Zug lösen.",
      "Bei hoher Atemfrequenz die Dehnung über mehrere Atemzüge halten.",
      "Das Bein wirkt meist stärker als der Arm, weil sich der Zug bis zum Zwerchfell fortsetzt."
    ],
    technik: [
      { bewegung: "Bein aus Rückenlage", hinweis: "Bein leicht abduziert.", proximal: "Fasst von unten in die Kniekehle.", distal: "Umschließt von dorsal das obere Sprunggelenk; Zug in Richtung Beinlängsachse." },
      { bewegung: "Arm aus Rückenlage", hinweis: "Arm in Flexion, Abduktion und Außenrotation bequem auf dem Beckenkamm des Therapeuten abgelegt.", proximal: "Umfasst den Oberarm schulternah.", distal: "Umfasst den Oberarm ellbogennah; beide Hände dehnen gemeinsam in Verlängerung der Oberarmlängsachse." },
      { bewegung: "Bein aus Seitlage", hinweis: "Unteres Bein angewinkelt, oberes in Neutralstellung auf einem Kissen.", proximal: "An der Innenseite des Knies.", distal: "Am oberen Sprunggelenk." },
      { bewegung: "Arm aus Seitlage", hinweis: "Beide Beine angewinkelt, oberer Arm möglichst weit in Flexion und Außenrotation.", proximal: "Umfasst den Oberarm.", distal: "Umfasst das Handgelenk." }
    ],
    dosierung: "Etwa 10 Wiederholungen pro Extremität.",
    wirkung: ["Regt eine tiefe Einatmung an, vergrößert das inspiratorische Reservevolumen", "Gleicht den Atemrhythmus aus und entspannt"],
    achtung: ["Nicht bei Problemen oder frischer OP an Schulter, Hüfte oder Knie", "Nach Hüft-TEP die Luxationsrichtungen beachten", "Bei Beckenfraktur kein Zug am Bein"],
    quelle: ["Atemtherapie – 3. Thoraxmobilisation", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },

  /* ---------------- Atemtechniken des Patienten ---------------- */
  {
    id: "nasenstenose",
    name: "Einatmung mit Nasenstenose",
    art: "atmung",
    aste: "Sitz oder RL mit erhöhtem Oberkörper",
    ablauf: [
      "Ein Nasenloch mit der Fingerkuppe verschließen und durch das andere langsam und vertieft einatmen.",
      "Seite wechseln: durch das andere Nasenloch ausatmen und dort wieder einatmen.",
      "Variante: den freien Nasenflügel antippen und so den Einatemstrom mehrmals kurz unterbrechen.",
      "Ausatmen durch Nase oder Mund, bei Obstruktion mit Lippenbremse."
    ],
    dosierung: "3–6 Wiederholungen, dann Pause.",
    wirkung: ["Verlangsamt den Einatemstrom und vertieft die Ventilation", "Kräftigt die Einatemmuskulatur durch höhere Atemarbeit", "Schult die Nasenatmung"],
    achtung: ["Nicht bei verstopfter Nase oder Nasenbluten", "Bei Schwindel oder Kribbeln pausieren"],
    heim: true,
    quelle: ["Atemtherapie – 4. Atemtechniken", "Atemtherapie – Spicker", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "einatmung-halten",
    name: "Tiefe Einatmung mit kurzem Atemanhalten",
    art: "atmung",
    aste: "Sitz, RL oder Drainagelagerung",
    ablauf: [
      "Langsam und gleichmäßig durch die Nase tief einatmen, möglichst costo-abdominal.",
      "Am Ende der Einatmung 2–5 Sekunden halten, ohne Druck aufzubauen (Stimmritze bleibt offen).",
      "Genauso langsam wieder ausatmen, bei großem Volumen durch den Mund.",
      "Diese tiefen Atemzüge mehrmals täglich zwischen die normalen Atemzüge einstreuen."
    ],
    dosierung: "3–5 Atemzüge pro Serie, mehrmals täglich.",
    wirkung: ["Bessere Luftverteilung auch in verlegte Atemwege", "Verstärkt die Rippenbewegung, unterstützt den venösen Rückstrom", "Pneumonieprophylaxe und -behandlung"],
    achtung: ["Nicht pressen", "Pausen einbauen, um Hyperventilation zu vermeiden"],
    heim: true,
    quelle: ["Atemtherapie – 4. Atemtechniken", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "verlaengerte-ausatmung",
    name: "Verlängerte Ausatmung (ins exspiratorische Reservevolumen)",
    art: "atmung",
    aste: "Sitz oder RL",
    ablauf: [
      "Normal einatmen, dann langsam weiter ausatmen als gewohnt.",
      "Eine Hand auf der Bauchdecke spürt die leichte Bauchmuskelspannung am Ende der Ausatmung.",
      "Die nächste Einatmung kommen lassen – sie wird von selbst größer."
    ],
    dosierung: "3–6 Wiederholungen.",
    wirkung: ["Sekrettransport aus den peripheren Atemwegen", "Größerer reflektorischer Einatemzug"],
    achtung: ["Nicht pressen; bei Obstruktion mit Lippenbremse kombinieren"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "ausatem-sichtbar",
    name: "Den Ausatem sichtbar und spürbar machen (Watte, Taschentuch, Seifenblasen)",
    art: "atmung",
    aste: "Sitz",
    ablauf: [
      "Watte: beide Handflächen hintereinander auf Kinnhöhe halten und einen Wattebausch vorsichtig von der vorderen auf die hintere Hand blasen.",
      "Taschentuch: an einer Ecke etwa 20 cm vor den Mund halten und mit kräftigem, gleichmäßigem Strom schräg in der Luft halten.",
      "Seifenblasen über die Stärke des Ausatemstroms groß oder klein werden lassen; einen Spiegel anhauchen.",
      "Spüren: einmal in die eigene Handfläche pusten, einmal hauchen und den Unterschied wahrnehmen."
    ],
    dosierung: "3–6 Wiederholungen je Variante.",
    wirkung: ["Schult einen dosierten, verlängerten Ausatemstrom", "Macht die Ausatmung bewusst – motivierend, auch für Kinder"],
    achtung: ["Bei Schwindel pausieren"],
    material: "Watte, Papiertaschentuch, Seifenblasen, Spiegel",
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 6. Hilfsmittel"]
  },
  {
    id: "toenen-ptkm",
    name: "Tönen von P, T, K und M (Sekretlösung durch Schwingung)",
    art: "atmung",
    aste: "Sitz oder Drainagelagerung",
    ablauf: [
      "Explosivlaute: mehrmals stoßweise auf P, T oder K ausatmen; eine Hand auf Brustbein oder unteren Rippen spürt die Erschütterung.",
      "Summen: auf M ausatmen, ohne die Ausatmung stark zu verlängern; eine Hand auf dem Brustbein, ein Handrücken etwa auf Höhe BWK 10–12 fühlt die Vibration.",
      "Varianten: auf b–p, d–t, g–k ausatmen (der kurze Anstoß gegen den geschlossenen Mund fördert das Sekret) oder auf „aaa“ (hält die Bronchien weit).",
      "Gelöstes Sekret mit Huffing oder kurzem Abhusten herausbefördern."
    ],
    dosierung: "3–6 Wiederholungen, dann Pause.",
    wirkung: ["Endogene Thoraxschwingung löst Sekret", "Kräftigt die Ausatemmuskulatur exzentrisch", "Summen, Sprechen und Singen regen auch den Darm an"],
    achtung: ["Nicht pressen; bei instabilen Atemwegen nur sanft tönen"],
    heim: true,
    quelle: ["Atemtherapie – 2. ASTEn", "Atemtherapie – 4. Atemtechniken", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "selbstklopfungen",
    name: "Selbstklopfungen",
    art: "atmung",
    aste: "Sitz oder Stand",
    ablauf: [
      "Mit den Fingerkuppen den Brustkorb vorne und seitlich abklopfen.",
      "Steigerung: mit der hohlen Hand klopfen.",
      "Dabei weiteratmen; anschließend tief einatmen und Huffing."
    ],
    dosierung: "1–3 Minuten.",
    wirkung: ["Lockert Sekret ohne Therapeut", "Weckt die Wahrnehmung für die Atembewegung"],
    achtung: ["Wie bei Klopfungen: nicht bei Osteoporose, Rippenfraktur, frischer OP oder Gerinnungsstörung"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "reizhusten-atemhilfen",
    name: "Atemhilfen gegen Reizhusten (Hustenvermeidung)",
    art: "atmung",
    aste: "Atemerleichternde ASTE, z. B. Kutschersitz",
    ablauf: [
      "Beim Hustenreiz durch die Nase etwas mehr einatmen und kurz anhalten; danach mit kleinen, etwas schnelleren Atemzügen oberflächlich weiteratmen – den Kitzel aushalten.",
      "Ist der Reiz zu stark: nur kurz gegen geschlossene Lippen, Faust oder Handfläche anhusten („Breitmaulfrosch“) und sofort zur Atemtechnik zurückkehren.",
      "Mit dosierter Lippenbremse ausatmen, Speichel schlucken oder ein lauwarmes Getränk trinken.",
      "Aufmerksamkeit auf die costo-abdominale Atembewegung lenken; Kindern über den Rücken streichen.",
      "Räuspern statt Husten – baut deutlich weniger Druck auf."
    ],
    dosierung: "Bei jedem unproduktiven Hustenreiz; vorher in Ruhe üben.",
    wirkung: ["Vermeidet hohe intrathorakale Drücke und Hustenattacken", "Schützt instabile Atemwege vor dem Kollaps"],
    achtung: ["Besonders wichtig bei Hustensynkopen, Schwindel, instabilen Atemwegen, im Asthmaanfall und nach OP", "Produktiven Husten nicht unterdrücken – dann Huffing oder gezielt abhusten"],
    heim: true,
    quelle: ["Atemtherapie – 5. Atemtechnik Husten", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "hustenhilfe",
    name: "Hustenhilfe durch Kompression und Wundfixierung",
    art: "atmung",
    aste: "Sitz oder RL mit erhöhtem Kopfteil",
    ablauf: [
      "Zu schwacher Husten: tief einatmen, kurz halten; auf Kommando husten – der Therapeut verstärkt den Hustenstoß mit einer manuellen Thoraxkompression.",
      "Selbsthilfe mit Tuch: Tuch um den unteren Thoraxrand legen, die Enden über Kreuz fassen und im Hustenrhythmus zuziehen.",
      "Nach OP: die Wunde (Brustbein, Bauch) vor dem Husten mit den Händen, einer Handtuchrolle oder einem Kissen fixieren.",
      "2/3-Husten: nach tiefer Einatmung etwa zwei Drittel ausatmen, im letzten Drittel ein kurzer Druck mit Nachfedern über dem Sternum.",
      "Zu starker Husten: nur mäßig tief einatmen, etwas Luft mit Lippenbremse abgeben, dann 2–3 kurze Hustenstöße; erst husten, wenn Trachealrasseln hörbar ist."
    ],
    dosierung: "Bei hörbarem Sekret 2–3 Hustenstöße, danach ruhige Atemzüge.",
    wirkung: ["Ermöglicht produktives Abhusten trotz Schwäche oder Schmerz", "Dämpft die Erschütterung im Wundgebiet"],
    achtung: ["2/3-Husten und Kompression nicht bei Herzerkrankungen, Osteoporose, Rippenfraktur oder obstruktiven Atemwegserkrankungen", "Kindern den Ekel vor Sekret spielerisch nehmen (z. B. Zielspucken)"],
    heim: true,
    quelle: ["Atemtherapie – 5. Atemtechnik Husten", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "atemerschwerende-aste",
    name: "Atmen in atemerschwerender Ausgangsstellung",
    art: "atmung",
    aste: "Flache RL, BL, SL (unten liegende Seite), RL mit Sandsäckchen auf dem Bauch",
    ablauf: [
      "In flacher RL schieben die Bauchorgane das Zwerchfell in Ausatemstellung – bei der Einatmung arbeitet es dagegen an.",
      "Steigerung BL: die Bauchorgane können nicht nach vorn ausweichen, das Zwerchfell muss mehr leisten.",
      "Weitere Steigerung: Sandsäckchen auf den Oberbauch; in SL wird die unten liegende Seite gefordert.",
      "Ruhig und costo-abdominal atmen, Atemhilfsmuskeln locker lassen."
    ],
    dosierung: "5–10 Atemzüge bzw. einige Minuten, Pausen nach Bedarf.",
    wirkung: ["Kräftigt das Zwerchfell", "Unten liegende Lungenabschnitte werden besser durchblutet und belüftet"],
    achtung: ["Patienten mit reduziertem AZ empfinden schon die flache RL als Forderung", "Bei Atemnot, Herzinsuffizienz oder Reflux nicht flach lagern"],
    heim: true,
    quelle: ["Atemtherapie – 2. ASTEn", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "pnf-atmung",
    name: "PNF: Fazilitation der Atmung / Atmen gegen manuellen Widerstand",
    art: "pnf",
    aste: "RL, SL oder BL",
    ablauf: [
      "Griff wählen: Hände wie bei der Thoraxkompression flächig auf die Rippen, übereinander auf das Sternum oder mit den Daumen in den epigastrischen Winkel (diaphragmal).",
      "Die Ausatembewegung begleiten, am Ende einen kurzen Stretch geben (Sternum nach kaudal-dorsal, Rippen nach kaudal-medial, diaphragmal mit den Daumen unter den Rippenbögen nach kranial).",
      "Klares Kommando „Einatmen“ und der Einatembewegung einen dosierten Widerstand entgegensetzen.",
      "Widerstand so dosieren, dass mehrere Wiederholungen gelingen."
    ],
    dosierung: "4–5 Wiederholungen, dann Pause.",
    wirkung: ["Kräftigt die Einatemmuskulatur gezielt in der gewünschten Region", "Verbessert die sternale, costale oder diaphragmale Atembewegung"],
    achtung: ["Nicht bei Rippenfraktur, Osteoporose oder frischer Sternotomie", "Puls, Atemfrequenz und subjektive Atemnot beobachten"],
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "bauchmuskeln-ausatmung",
    name: "Kräftigung der Ausatemmuskulatur (Bauchmuskeln mit Ausatmung)",
    art: "kraft",
    aste: "Stand, Sitz auf der Stuhlkante, RL mit aufgestellten Beinen",
    ablauf: [
      "Hände zwischen Schambein und Nabel: den Unterbauch anspannen, die Bauchdecke geht nach innen, ohne Bewegung in der LWS.",
      "Im Sitz mit Unterbauchspannung den ganzen Rumpf in kleinen, schnellen Bewegungen vor und zurück bewegen.",
      "RL: Unterbauchspannung aufnehmen, mit der Ausatmung den Kopf heben und zu den Knien schauen, mit der Einatmung ablegen.",
      "Schräge Bauchmuskeln: Hände auf die gleichseitigen Schultern, mit der Ausatmung einen Ellbogen Richtung Gegenknie führen und bis zum unteren Schulterblattrand anheben."
    ],
    dosierung: "Wiederholungen nach Kraftausdauer, z. B. 2–3 × 8–12.",
    wirkung: ["Kräftigt die Ausatemmuskeln für einen wirksamen Hustenstoß", "Stabilisiert den Rumpf"],
    achtung: ["Nicht pressen – die Ausatmung läuft mit", "Nach Bauch-OP, Sectio oder bei Rektusdiastase nur die Unterbauchspannung, kein Kopfheben", "Bei Osteoporose kein Aufrollen"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "pep-maske",
    name: "PEP-Maske (positiver Ausatemdruck)",
    art: "atmung",
    aste: "Aufrechter Sitz, Ellbogen aufgestützt",
    ablauf: [
      "Maske dicht über Nase und geöffneten Mund halten.",
      "Langsam und tief einatmen, 1–3 Sekunden halten.",
      "Aktiv und möglichst vollständig gegen den Widerstand ausatmen, ohne zu pressen.",
      "Nach 10–20 Atemzügen kurz ausruhen; gelöstes Sekret durch Räuspern, Anhusten gegen die Lippen oder Huffing entfernen – Husten in die Maske ist möglich."
    ],
    dosierung: "Mehrere Zyklen je nach Sekretmenge; Widerstand individuell einstellen.",
    wirkung: ["Erhöhter Druck in den Bronchien wirkt einem Kollaps entgegen", "Bessere Luftverteilung, erleichtert Sekretlösung und -transport", "Mit Inhalation und autogener Drainage kombinierbar"],
    achtung: ["Maske personenbezogen verwenden und reinigen", "Nicht bei unbehandeltem Pneumothorax"],
    material: "PEP-Maske mit Widerstandseinsatz",
    heim: true,
    quelle: ["Atemtherapie – 6. Hilfsmittel", "Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "threshold-imt",
    name: "Einatemmuskeltraining mit Threshold® (IMT)",
    art: "atmung",
    aste: "Bequemer Sitz, Nasenklemme",
    ablauf: [
      "Widerstand am Federventil auf etwa 30 % des maximalen Einatemdrucks einstellen.",
      "Nase mit der Klemme verschließen und durch das Mundstück so kräftig einatmen, dass sich das Ventil öffnet und offen bleibt.",
      "Ohne Widerstand ausatmen.",
      "Die Belastung darf ermüden, aber nicht erschöpfen."
    ],
    dosierung: "10–30 Minuten, 5 × pro Woche; Widerstand schrittweise steigern.",
    wirkung: ["Steigert Kraft und Ausdauer der Einatemmuskulatur", "Mehr Belastbarkeit im Alltag"],
    achtung: ["Bei Atemnot oder Schwindel sofort abbrechen", "Bei Emphysemblasen oder Z. n. Pneumothorax vorher ärztlich klären"],
    material: "Threshold®-IMT",
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "nasendusche",
    name: "Nasendusche und Nasenpflege",
    art: "atmung",
    aste: "Stand über dem Waschbecken, Oberkörper vorgeneigt; Säuglinge halb aufrecht",
    ablauf: [
      "Nasendusche mit isotoner Kochsalzlösung füllen.",
      "Kopf leicht vorneigen und zur Seite drehen, durch den Mund atmen; Lösung in das obere Nasenloch laufen lassen – sie fließt aus dem anderen ab.",
      "Seite wechseln, danach sanft schnäuzen, immer nur ein Nasenloch.",
      "Kinder, die noch nicht schnäuzen können: Nasensauger nach Anleitung verwenden."
    ],
    dosierung: "1–2 × täglich oder nach ärztlicher Empfehlung.",
    wirkung: ["Reinigt und befeuchtet die Nasenschleimhaut", "Freie Nase als Voraussetzung für die Einatemtechniken"],
    achtung: ["Nur isotone Lösung und sauberes bzw. abgekochtes Wasser", "Nicht bei akuter Mittelohrentzündung oder Nasenbluten"],
    material: "Nasendusche, isotone Salzlösung, ggf. Nasensauger",
    heim: true,
    quelle: ["Atemtherapie – 6. Hilfsmittel"]
  },

  /* ---------------- Atemrhythmus ausgleichen ---------------- */
  {
    id: "aktives-dehnen",
    name: "Aktives Dehnen und Räkeln im Atemrhythmus",
    art: "atmung",
    aste: "Jede ASTE: RL, Sitz oder Stand",
    ablauf: [
      "Sich genüsslich dehnen und räkeln wie nach dem Aufwachen – Arme, Rumpf, Beine, auch kleine Muskelgruppen im Schulter-Nacken-Bereich.",
      "Jede Dehnung lässt die Einatmung kommen, das Lösen geschieht mit der Ausatmung.",
      "Einen eigenen Rhythmus aus Dehnen und Lösen finden, ohne den Atem anzuhalten."
    ],
    dosierung: "Etwa 10 Wiederholungen, bei Wohlbefinden länger.",
    wirkung: ["Gleicht den Atemrhythmus aus (Einatmung – Ausatmung – Atemruhe)", "Senkt eine erhöhte Atemfrequenz"],
    achtung: ["Im schmerzfreien Bereich bleiben"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "middendorf-hand",
    name: "Atem und Hand (nach Middendorf): Hände bewusst machen und dehnen",
    art: "atmung",
    aste: "Unabhängig von der ASTE, z. B. RL oder Sitz",
    ablauf: [
      "Hände durch Reiben und Kneten geschmeidig machen: Handflächen von der Mitte sternförmig ausstreichen, Finger einzeln ausstreichen, Handgelenke warmreiben, die Hand locker wachschütteln.",
      "In RL beide Hände aus der Handmitte heraus dehnen (Finger nicht ganz strecken) und die Spannung vollständig lösen.",
      "Eine Hand liegt auf der Bauchdecke, die andere dehnt und löst im eigenen Rhythmus – nicht willkürlich an den Atem koppeln.",
      "Spürfragen: Wann kommt der Einatem? Wann der Ausatem? Passt sich die Bewegung dem Atem an?"
    ],
    dosierung: "Etwa 10 Wiederholungen.",
    wirkung: ["Wohltuende Verbindung von Bewegung und Atem entdecken", "Gleicht den Atemrhythmus aus, beruhigt"],
    achtung: ["Den Atem kommen und gehen lassen – nicht steuern"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "fingerkuppendruck",
    name: "Druck der Fingerkuppen & Handwurzelgriff (Atem lenken)",
    art: "atmung",
    aste: "Sitz oder RL",
    ablauf: [
      "Daumen- und Zeigefingerkuppen beider Hände flächig gegeneinanderdrücken und über mehrere Atemzüge halten – die Atembewegung wird oft im oberen Brustkorb größer.",
      "Mittelfingerkuppen: Atembewegung am unteren Thoraxrand; Ring- und kleine Finger (ganze Fläche der Endglieder): Atembewegung im Beckenraum; alle zehn Finger: gesamte Atembewegung.",
      "Ausatem fördern: Hände falten und mit jeder Fingerkuppe leicht auf den Handrücken drücken – oder mit den Fingerkuppen auf die Handwurzel derselben Hand (Handwurzelgriff).",
      "Forschend vergleichen, wo sich die Atembewegung verändert."
    ],
    dosierung: "Jeweils mehrere Atemzüge; Druck aller zehn Finger höchstens 7–10 Atemzüge.",
    wirkung: ["Lenkt die Atembewegung in bestimmte Regionen", "Handwurzelgriff verlängert den Ausatem – bei Obstruktion in Ruhe und unter Belastung einsetzbar"],
    achtung: ["Druck deutlich, aber nicht zu stark"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "auflageflaeche-atemstrom",
    name: "Erspüren der Auflagefläche & dem Atemstrom folgen",
    art: "psyche",
    aste: "RL oder angelehnter Sitz, warmer ruhiger Raum",
    ablauf: [
      "Die Aufmerksamkeit nacheinander auf die Auflagepunkte lenken (RL: Fersen, Beine, Becken, Rücken, Schultern, Arme, Hals, Hinterkopf; Sitz: Füße, Gesäß, Rücken, Arme).",
      "Zum Sinkenlassen anleiten – überflüssige Spannung abgeben, die Kontaktfläche wird größer.",
      "Dem Atemstrom folgen: den Weg der Luft durch Nase, Luftröhre und Bronchien bis in den Brustkorb und wieder hinaus beschreiben, ohne den Atem zu verändern.",
      "Zum Abschluss Wahrnehmungsfragen stellen, die nicht beantwortet werden müssen."
    ],
    dosierung: "Mit kurzen Sequenzen (ca. 5 Minuten) beginnen und steigern; später selbstständig.",
    wirkung: ["Verbessert die Entspannungsfähigkeit", "Senkt Atemfrequenz und Einsatz der Atemhilfsmuskeln"],
    achtung: ["Klare Wortwahl, ruhige Stimme", "Bei Psychose oder Dissoziationsneigung nur kurz, mit offenen Augen und Orientierung nach außen"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 3. Thoraxmobilisation"]
  },

  /* ---------------- Thoraxmobilisation und Beweglichkeit ---------------- */
  {
    id: "brustdrehlage",
    name: "Brustdrehlage",
    art: "dehnung",
    aste: "SL",
    ablauf: [
      "Unteres Bein anbeugen, oberes strecken; das obere Knie liegt in der Fußwölbung des unteren Beins.",
      "Schulter und Rumpf gegen das Becken nach vorne drehen, bis das Brustbein auf der Unterlage liegt.",
      "Beide Arme in etwa 135° Abduktion nach oben führen – den Schultergürtel dabei nicht hochziehen.",
      "Drehung verstärken, den Rumpf kopfwärts dehnen und in die Dehnung atmen."
    ],
    dosierung: "6–7 Atemzüge halten, in RL nachspüren, Seitenwechsel.",
    wirkung: ["Dehnt die BWS auf", "Fördert die lumbocostale Atmung"],
    achtung: ["Nicht bei Rotationsverbot der WS, Schulterproblemen oder Schrittmacher/ICD auf der gedehnten Seite", "Arme und Bein ggf. mit Kissen unterlagern"],
    heim: true,
    quelle: ["Atemtherapie – 3. Thoraxmobilisation"]
  },
  {
    id: "statische-dehnstellungen",
    name: "Statische Dehnstellungen für den Brustkorb (Päckchenlage, Babygiraffe, Knoten, Überschlag)",
    art: "dehnung",
    aste: "Matte",
    ablauf: [
      "Päckchenlage/Rutschbahn: aus dem Vierfüßlerstand das Gesäß Richtung Fersen schieben, die Arme lang nach vorne, der Brustkorb sinkt zum Boden – Dehnung von Rücken und Flanken.",
      "Babygiraffe: Seitsitz mit angewinkelten Beinen, eine Hand stützt seitlich, der andere Arm geht über den Kopf – Flankendehnung.",
      "Knoten: Langsitz, ein Bein über das andere aufstellen, Oberkörper zum aufgestellten Bein drehen, den Gegenellbogen außen ans Knie legen, die andere Hand stützt hinten.",
      "Überschlag: aus RL die Beine über den Kopf führen, die Hände stützen das Becken – nur für junge, gesunde Wirbelsäulen.",
      "Jede Position einnehmen, halten und danach nachspüren."
    ],
    dosierung: "Dehnung 6–7 Atemzüge halten, danach nachspüren.",
    wirkung: ["Verstärkte Zwerchfellatmung in der Dehnstellung", "Größere Atembewegung in der Entspannungsphase", "Thorax- und WS-Beweglichkeit"],
    achtung: ["Überschlag nicht bei HWS-Problemen, Osteoporose, Bluthochdruck, Glaukom oder Herzinsuffizienz", "Keine Rotation, wo sie verboten ist (z. B. frische WS-OP)"],
    heim: true,
    quelle: ["Atemtherapie – 3. Thoraxmobilisation"]
  },
  {
    id: "oelschiene",
    name: "Ölschiene",
    art: "mobilisation",
    aste: "SL, Beine angewinkelt, beide Arme in 90° Flexion",
    ablauf: [
      "Daumen, Handfläche und Finger der unteren Hand bilden in der Vorstellung eine geölte Schiene.",
      "Der obere Arm gleitet mit locker gestrecktem Ellbogen darauf vor und zurück – Schultergürtel und BWS bewegen mit.",
      "Ohne Anstrengung im schmerzfreien Bereich bleiben; mit jeder Wiederholung wird die Bewegung leichter und flüssiger.",
      "Nach einer Seite in RL die Körperhälften vergleichen (Auflage, Spannung, Atembewegung)."
    ],
    dosierung: "10–15 Wiederholungen pro Seite.",
    wirkung: ["Mobilisiert Schultergürtel, Rippen und BWS-Rotation", "Fördert die costale Atembewegung der oberen Seite"],
    achtung: ["Nicht auf der Schrittmacherseite in der Einheilphase oder nach Schulter-OP ohne Freigabe"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 3. Thoraxmobilisation"]
  },
  {
    id: "ws-vierfuessler",
    name: "Wirbelsäulenbeweglichkeit im Vierfüßlerstand (Flexion/Extension, Rotation, Lateralflexion)",
    art: "mobilisation",
    aste: "Vierfüßlerstand: Knie unter den Hüften, Hände unter den Schultern",
    ablauf: [
      "Flexion/Extension: Katzenbuckel und Hohlkreuz im Wechsel, Ausmaß und Tempo variieren; mit Ein- oder Ausatmung verbinden.",
      "Schwerpunkt verlagern: Fingerspitzen direkt vor den Knien betonen die BWS, der Unterarmstütz die LWS.",
      "Rotation: diagonale Stützpunkte wechselnd belasten; im Unterarmstütz Arm und Bein der Diagonalen leicht anheben.",
      "Lateralflexion: Knie zusammen, Unterschenkel anheben und nach rechts und links schwenken, Blick zu den Füßen; oder einen Arm in die Horizontale, das gleichseitige Bein nach hinten strecken und die Flanke aufdrehen."
    ],
    dosierung: "Je Richtung 8–10 Wiederholungen.",
    wirkung: ["Verbessert die Beweglichkeit der ganzen Wirbelsäule", "Taktile Reize des Therapeuten beziehen wenig bewegte Segmente ein"],
    achtung: ["Knie und Handgelenke ggf. polstern", "Bei akutem Bandscheibenvorfall keine endgradigen Bewegungen"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "aufrechter-sitz",
    name: "Den aufrechten Sitz erarbeiten",
    art: "mobilisation",
    aste: "Sitz auf Hocker oder Stuhl",
    ablauf: [
      "Ein Bein am Knie umfassen und locker schütteln, den Fuß dann von der Zehenspitze aus langsam aufsetzen; Seitenvergleich.",
      "Den Sitzbeinhöcker mit zwei Fingern umkreisen, sich kurz auf die Finger setzen, die Hand herausziehen und den Kontakt zur Sitzfläche spüren.",
      "Hände aufs Kreuzbein: Becken nach hinten (Rücken rund) und nach vorne (Bauchdecke gedehnt) rollen, die Bewegung kleiner werden lassen und die Mitte über den Sitzbeinhöckern finden.",
      "Mit einer Fingerkuppe auf den Scheitel tippen und diesen Punkt sanft Richtung Decke schieben; die Hände ruhen locker auf den Oberschenkeln."
    ],
    dosierung: "Einmal ausführlich erarbeiten, danach als kurze Einstimmung vor Übungen im Sitz.",
    wirkung: ["Aufrichtung ohne Stützaktivität der Arme", "Günstige Ausgangslage für die Atembewegung", "Bewegungsbereite Haltung"],
    achtung: ["Bei geringer Belastbarkeit (z. B. kurz nach Herz-OP) das Beinschütteln weglassen"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "schinkengang",
    name: "Schinkengang (Gehen auf dem Gesäß)",
    art: "mobilisation",
    aste: "Aufrechter Sitz, Hände auf den Oberschenkeln",
    ablauf: [
      "Vorübung: Hände über Kreuz auf die Schultern, abwechselnd die rechte und linke Gesäßhälfte anheben bzw. die Knie abwechselnd nach vorne schieben – der Oberkörper bleibt ruhig.",
      "Gewicht über eine Gesäßhälfte verlagern, die andere wird leicht.",
      "Die entlastete Gesäßhälfte macht einen „Schritt“ nach hinten, dann Seitenwechsel.",
      "Berührt die Kniekehle die Sitzfläche, auf dieselbe Weise wieder nach vorne gehen."
    ],
    dosierung: "Mehrmals vor und zurück.",
    wirkung: ["Mobilisiert LWS und Becken in Lateralflexion und Rotation", "Bewegt Flanken und untere Rippen"],
    achtung: ["Nach Hüft-TEP die Freigaben beachten"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "beckenacht",
    name: "Beckenacht im Sitz",
    art: "mobilisation",
    aste: "Aufrechter Sitz",
    ablauf: [
      "Die Sitzbeinhöcker spüren und das Gewicht auf einen verlagern.",
      "Diesen Sitzbeinhöcker mit dem Körpergewicht mehrmals umkreisen, dann den anderen.",
      "Beide Kreise zu einer liegenden Acht verbinden, in beide Richtungen."
    ],
    dosierung: "Je Richtung 5–10 Achten.",
    wirkung: ["Mobilisiert Becken und LWS in alle Richtungen", "Fördert einen ruhig mitlaufenden Atem"],
    achtung: ["Im schmerzfreien Bereich bewegen"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },

  /* ---------------- Pezziball in Anlehnung an FBL ---------------- */
  {
    id: "fbl-cowboy",
    name: "Pezziball: Cowboy (rhythmisches Hopsen)",
    art: "koordination",
    aste: "Aufrechter Sitz auf dem Pezziball, Beine beckenbreit, Füße am Boden",
    ablauf: [
      "Zur Aufrichtung mit einem Finger auf den Scheitel tippen.",
      "Auf dem Ball hopsen – der Impuls kommt zuerst aus den Beinen, dann aus rhythmischem Fersenheben.",
      "Steigerung: Impuls über hackende Unterarmbewegungen, über Fallenlassen der Schultern oder über Gehen auf der Stelle mit gegengleichem Armschwung.",
      "Aufrecht bleiben, der Atem läuft weiter. Alternative für die Sekretlösung: Hüpfen auf dem Trampolin."
    ],
    dosierung: "Tempo etwa 120 Hopser pro Minute, 1–3 Minuten, Pausen nach Belastungsempfinden.",
    wirkung: ["Erschütterungen unterstützen die Sekretlösung", "Steigert die Belastbarkeit", "Aktiviert die Rumpfmuskulatur"],
    achtung: ["Ballgröße passend wählen (Hüfte etwas höher als Knie)", "Nicht bei osteoporotischen Frakturen, frischer WS-OP oder Gleichgewichtsstörung ohne Sicherung", "Puls und Atemfrequenz beobachten"],
    material: "Pezziball, ggf. Trampolin",
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 5. Atemtechnik Husten", "Atemtherapie – Spicker"]
  },
  {
    id: "fbl-hula-hula",
    name: "Pezziball: Hula-Hula (Beckenbewegungen auf dem Ball)",
    art: "mobilisation",
    aste: "Aufrechter Sitz auf dem Pezziball, Füße mit gutem Bodenkontakt",
    ablauf: [
      "Hände auf dem Brustbein: den Ball durch Schwenken des Beckens nach rechts und links rollen, der Oberkörper bleibt aufrecht.",
      "Steigerung: Hände über dem Kopf zusammenlegen – Oberkörper und Arme bleiben in der Aufrichtung.",
      "Vor und zurück: den Ball nach vorne und hinten rollen (Becken kippt), der Brustkorb bleibt an seinem Platz; die Arme hängen und bewegen reaktiv mit."
    ],
    dosierung: "Je Richtung 10–20 Wiederholungen, rhythmisch.",
    wirkung: ["Lateralflexion und Flexion/Extension der LWS bei ruhigem Brustkorb", "Dehnt die Flanken, fördert die Atembewegung"],
    achtung: ["Füße bleiben am Boden", "Bei Gleichgewichtsproblemen den Ball sichern (Wand, Therapeut)"],
    material: "Pezziball",
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 3. Thoraxmobilisation"]
  },
  {
    id: "fbl-brunnenfigur",
    name: "Pezziball: Brunnenfigur (Rumpfrotation, abgewandelt)",
    art: "mobilisation",
    aste: "Aufrechter Sitz auf dem Ball, Füße etwas mehr als beckenbreit, Hände auf den gleichseitigen Schultern",
    ablauf: [
      "Kopf und Rumpf drehen gemeinsam, z. B. nach rechts; das Gewicht geht auf die rechte Ferse und den linken Zehenballen.",
      "Kopf, Oberkörper und die waagrechten Oberarme drehen weiter, die Aufrichtung bleibt.",
      "Zurück in den aufrechten Sitz; mehrmals zu einer Seite, dann Richtungswechsel."
    ],
    dosierung: "Je Seite 8–10 Wiederholungen.",
    wirkung: ["Rotation der BWS, mobilisiert die Rippen-Wirbel-Gelenke", "Fördert die costale Atembewegung"],
    achtung: ["Nicht bei Rotationsverbot (z. B. frische WS-OP)", "Nach Sternotomie erst nach Freigabe"],
    material: "Pezziball",
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "fbl-galionsfigur",
    name: "Pezziball: Galionsfigur",
    art: "mobilisation",
    aste: "Kniestand hinter dem Ball, Zehen aufgestellt, Bauch auf dem Ball, Hände seitlich am Ball, Kinn berührt den Ball",
    ablauf: [
      "Mit einem Impuls aus den Füßen die Knie strecken – der Ball rollt nach vorne.",
      "Das Kinn löst sich vom Ball, die Arme stützen, der Rücken streckt sich.",
      "Knie lassen in der Streckung nach, der Ball rollt zurück, bis Oberkörper und Kinn wieder aufliegen."
    ],
    dosierung: "8–12 Wiederholungen.",
    wirkung: ["Extension der BWS, Aufdehnung des Brustkorbs", "Kräftigt Rücken- und Stützmuskulatur"],
    achtung: ["Nicht nach Bauch-OP, in der Schwangerschaft oder bei Schulterschmerz im Stütz"],
    material: "Pezziball",
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 3. Thoraxmobilisation"]
  },
  {
    id: "fbl-eslein",
    name: "Pezziball: Eslein streck' dich",
    art: "dehnung",
    aste: "Aufrechter Sitz auf dem Ball, Hände hinter dem Kopf gefaltet",
    ablauf: [
      "Die Füße wandern nach vorne, der Ball rollt unter Rücken und Kopf.",
      "Beine ausstrecken – der Ball rollt weiter nach hinten; die Hände lösen sich und führen die Arme in die Streckung.",
      "Endstellung: Arme und Beine gestreckt, Rumpf und Kopf auf dem Ball abgelegt (oft erst nach einigen Übungseinheiten erreichbar).",
      "Zurück: Knie beugen, Hände wieder hinter den Kopf (sie stützen ihn), Füße wandern zurück bis in den Sitz."
    ],
    dosierung: "3–6 Wiederholungen, Endstellung einige Atemzüge halten.",
    wirkung: ["Dehnt die vordere Rumpfwand und den Brustkorb", "Extension der gesamten Wirbelsäule"],
    achtung: ["Nicht bei Schwindel, HWS-Problemen, frischer Sternotomie oder Bauch-OP", "Ball sichern"],
    material: "Pezziball",
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "fbl-seeigel",
    name: "Pezziball: (Betrunkener) Seeigel",
    art: "koordination",
    aste: "Fersensitz, der Ball liegt auf den Oberschenkeln und wird von den Armen gehalten",
    ablauf: [
      "Mit dem Oberkörper Schwung holen.",
      "Mit Schwung nach vorne über den Ball rollen, Arme und Beine strecken sich, die Hände stützen vor dem Ball.",
      "Knie anziehen, der Ball rollt mit; durch Beinstrecken und Abdrücken der Hände zurück in die Ausgangsstellung."
    ],
    dosierung: "5–10 Wiederholungen.",
    wirkung: ["Ganzkörperkoordination und Belastbarkeit", "Lagewechsel und Erschütterung unterstützen die Sekretmobilisation"],
    achtung: ["Nur für gut belastbare Patienten (z. B. Kinder und Jugendliche mit Mukoviszidose)", "Nicht bei Osteoporose, Schulter- oder Handgelenksproblemen"],
    material: "Pezziball",
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 3. Thoraxmobilisation"]
  },
  {
    id: "fbl-seejungfrau-goldfisch",
    name: "Pezziball: Seejungfrau, Waage und Goldfisch",
    art: "kraft",
    aste: "Bauch- bzw. Rückenlage über dem Pezziball",
    ablauf: [
      "Seejungfrau: Bauch auf dem Ball, die Hände stützen am Boden, die gestreckten Beine heben sich – der Körper bildet eine Linie.",
      "Waage: den Rücken über den Ball legen, Füße am Boden, Arme über den Kopf strecken – der Brustkorb wird vorne aufgedehnt.",
      "Goldfisch: aus der Bauchlage weit nach vorne über den Ball rollen, Hände weit vorne am Boden, die gestreckten Beine zeigen schräg nach oben.",
      "Jede Position kurz halten und dabei weiteratmen."
    ],
    dosierung: "3–5 Wiederholungen, je 3–5 Atemzüge halten.",
    wirkung: ["Kräftigt Rumpf- und Rückenstrecker", "Dehnt die Brustwand, verbessert die Thoraxbeweglichkeit"],
    achtung: ["Anspruchsvoll – nur für gut belastbare Patienten", "Nicht nach Bauch-OP, in der Schwangerschaft oder bei HWS- und Schulterproblemen"],
    material: "Pezziball",
    quelle: ["Atemtherapie – 3. Thoraxmobilisation"]
  },

  /* ---------------- Belastbarkeit ---------------- */
  {
    id: "bewegung-atmung-liegen",
    name: "Verbindung von Bewegung und Atmung im Liegen",
    art: "atmung",
    aste: "RL mit aufgestellten Beinen oder SL",
    ablauf: [
      "Flexion/Extension in RL: Kreuzbein und LWS Richtung Unterlage bewegen und dabei die Einatmung zulassen, mit der Ausatmung zurück; beim nächsten Einatmen die LWS leicht von der Unterlage lösen. Steigerung: beide Arme gleichzeitig nach oben führen.",
      "Lateralflexion in SL: den oberen Arm nach kranial und/oder das obere Bein nach kaudal schieben und dabei einatmen; mit der Ausatmung zurück.",
      "Rotation: in RL beide Beine zur Seite sinken lassen und einatmen; in SL die Hand auf die Schulter, den Ellbogen nach hinten führen, bis der Oberkörper aufdreht – einatmen; mit der Ausatmung zurück.",
      "Atem nicht anhalten, das Tempo dem eigenen Atemrhythmus anpassen."
    ],
    dosierung: "Je Bewegung 5–10 Wiederholungen.",
    wirkung: ["Ökonomisiert Bewegung und Atmung", "Grundlage für Belastungen im Alltag"],
    achtung: ["Bei Rotationsverbot nur Flexion/Extension", "Nach Herz-OP Armbewegungen über 90° erst nach Freigabe"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 4. Atemtechniken"]
  },
  {
    id: "aufstehen-heben-treppe-ausatmung",
    name: "Aufstehen, Heben und Treppensteigen mit der Ausatmung",
    art: "adl",
    aste: "Sitz in Schrittstellung; Stand vor Gewicht bzw. Treppe",
    ablauf: [
      "Aufstehen: Füße in Schrittstellung, Becken nach hinten neigen und einatmen; mit der Kraft der Ausatmung (Armschwung hilft) in den Stand kommen – die Beckenbewegung mit Atmung vorher 2 × vorüben.",
      "Heben: in die Knie gehen, das Gewicht fassen und einatmen; mit der Ausatmung (z. B. auf ein stimmloses „hu“) körpernah aufrichten.",
      "Treppe: einen Fuß auf die erste Stufe, einatmen; mit der Ausatmung eine Stufe steigen und die nächste Einatmung abwarten. Später mehrere Stufen pro Ausatmung, ggf. mit gähnender Einatmung und Lippenbremse.",
      "Dasselbe Prinzip bei Transfers, beim Aufstehen aus dem Bett und beim Gehen mit Hilfsmitteln anwenden."
    ],
    dosierung: "Im Alltag bei jeder Belastung; gezielt 5–10 Wiederholungen üben.",
    wirkung: ["Vermeidet Pressatmung (Blutdruckspitzen, Rhythmusstörungen, Druck auf Wunden und Beckenboden)", "Mehr Kraft, weniger Atemnot bei Belastung"],
    achtung: ["Pressen über 10 s vermeiden – besonders bei Hypertonie, KHK, nach Herz- oder Bauch-OP", "Nach Sternotomie beim Aufstehen nicht mit den Armen abdrücken"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – 4. Atemtechniken"]
  },
  {
    id: "intervallgehen",
    name: "Intervallgehen (15-s-15-s, 30-s-15-s, 3-min-1-min nach Wiraeus)",
    art: "herz",
    aste: "Gehen in der Ebene (Flur oder draußen)",
    ablauf: [
      "Einstieg bei stark eingeschränkter Belastbarkeit: 15 s gehen, 15 s Pause – über 3 Minuten; Tempo so wählen, dass die Anstrengung bei 4–6 von 10 liegt.",
      "Steigerung: 30 s gehen, 15 s Pause über 3 Minuten; nach vollständiger Erholung wiederholen.",
      "Weitere Steigerung: 3 Minuten gehen, 1 Minute Pause.",
      "Bei Obstruktion mit dosierter Lippenbremse gehen; Puls, Atemfrequenz und Borg vor und nach der Belastung erheben."
    ],
    dosierung: "Nach Trainingszustand; die Pausen sind „lohnend“ – kurz genug, dass keine vollständige Erholung eintritt.",
    wirkung: ["Ausdauertraining nach der Intervallmethode", "Sanfter Einstieg auch bei geringer Belastbarkeit"],
    achtung: ["Abbruch bei Schwindel, Brustschmerz, starker Atemnot oder Zyanose", "Unter Betablockern über Borg und Atemform statt über den Puls steuern", "Orientierung Trainingspuls: (220 − Alter − Ruhepuls) × 2/3 + Ruhepuls"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – Atemarbeit/Befundbogen"]
  },
  {
    id: "sinnvolle-pausen",
    name: "Gehen mit „Sinn-vollen“ Pausen (nach Wiraeus)",
    art: "herz",
    aste: "Gehen in der Ebene",
    ablauf: [
      "1 Minute gehen, dann 30 Sekunden Pause.",
      "Jede Pause bekommt eine Aufgabe: den Atem wahrnehmen, dem Herzen zuhören, spüren, wo die Belastung ankommt, oder den Puls messen.",
      "Weitere Pausenaufgaben: bewusst hören oder kurz die Augen schließen und die Umgebung danach neu ansehen."
    ],
    dosierung: "Mehrere Durchgänge, z. B. insgesamt 6 Minuten.",
    wirkung: ["Ausdauer bei geringer Belastbarkeit", "Schult die Selbstwahrnehmung von Belastung", "Pausen werden zu echter Erholung"],
    achtung: ["Subjektive Anstrengung regelmäßig erfragen", "Vitalwerte vor und nach der Belastung dokumentieren"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },
  {
    id: "sechs-minuten-gehen",
    name: "6-Minuten-Gehen (Test und Training)",
    art: "herz",
    aste: "Flur mit bekannter Strecke",
    ablauf: [
      "Ruhewerte erheben: Puls, Blutdruck, Atemfrequenz, Borg-Skalen für Anstrengung und Atemnot.",
      "6 Minuten gehen, das Tempo darf variieren; Pausen sind erlaubt und werden notiert.",
      "Gegangene Meter, Belastungswerte und Erholungszeit dokumentieren.",
      "Als Training: das subjektive Empfinden im Bereich „anstrengend“ halten."
    ],
    dosierung: "Test zu Beginn und im Verlauf; Training mehrmals pro Woche.",
    wirkung: ["Macht Belastbarkeit und Fortschritt messbar", "Trainiert die Langzeitausdauer"],
    achtung: ["Abbruchkriterien vorher festlegen", "Sättigung beobachten (Kursvorgabe 88–95 %; ärztliche Zielwerte gehen vor)"],
    material: "Stoppuhr, Pulsoximeter, Borg-Skala",
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)", "Atemtherapie – Atemarbeit/Befundbogen", "Atemtherapie – Spicker"]
  },
  {
    id: "schneckenlaufen",
    name: "Schneckenlaufen (Gehen in Zeitlupe)",
    art: "koordination",
    aste: "Stand, freie Gehstrecke",
    ablauf: [
      "Sehr langsam gehen – mit dem Bild einer Zeitlupe oder einer Schnecke.",
      "Jeden Schritt kontrolliert abrollen und das Gewicht vollständig übernehmen.",
      "Durch das langsame Tempo werden die Schritte meist kleiner."
    ],
    dosierung: "Reizdauer und -umfang nach Trainingszustand, z. B. 2–5 Minuten.",
    wirkung: ["Trainiert Ausdauer, Kraftausdauer und Koordination zugleich"],
    achtung: ["Sturzgefahr: Sicherung oder Handlauf"],
    heim: true,
    quelle: ["Atemtherapie – Buch Rutte/Sturm (Springer)"]
  },

  /* ---------------- Entspannung ---------------- */
  {
    id: "autogenes-training",
    name: "Autogenes Training (Unterstufe nach Schultz)",
    art: "psyche",
    aste: "RL oder Droschkenkutschersitz, Augen geschlossen",
    ablauf: [
      "Einstimmung: Ruhe – nichts stört – der Atem fließt ruhig und gleichmäßig.",
      "Schwereübung („Arme ganz schwer“), Wärmeübung („Arme ganz warm“), Herzübung („Herz schlägt ruhig und gleichmäßig“).",
      "Atemübung („Atmung ganz ruhig“ – „es atmet mich“), Sonnengeflecht („strömend warm“), Kopfübung („Stirn angenehm kühl“).",
      "Formeln jeweils mehrmals innerlich wiederholen; die Atemübung kann mit einem Bild verbunden werden (Wellen am Meer, Schaukelstuhl am Kamin).",
      "Zurücknehmen: Arme fest anspannen, tief atmen, Augen öffnen, Körper abklopfen."
    ],
    dosierung: "Für Anfänger 10–15 Minuten täglich; braucht langes, regelmäßiges Üben.",
    wirkung: ["Entspannung durch gedankliche Konzentration (Selbsthypnose)", "Senkt Herz- und Atemfrequenz, verbessert die periphere Durchblutung"],
    achtung: ["Kontraindiziert bei Psychosen", "Herzübung bei Herzangst oder Rhythmusstörungen weglassen"],
    heim: true,
    quelle: ["Atemtherapie – 7. Entspannung", "Atemtherapie – 7c. Autogenes Training Beispiel"]
  },
  {
    id: "kopfarbeit",
    name: "Kopfarbeit (passives Kopfrollen)",
    art: "passiv",
    aste: "RL, Kopfteil leicht negativ, Patient zugedeckt; Therapeut am Kopfende in Grätschstellung, Hände fest ineinander gefaltet unter dem Hinterkopf",
    ablauf: [
      "Vorbereitung mit der schnellen Lagerung.",
      "Bewegungsmuster nacheinander, jedes mehrmals: kleine Rotation – große Rotation bis zum Unterarm des Therapeuten – Lateralflexion mit Rotation zur Gegenseite – Lateralflexion mit Rotation zur gleichen Seite – große Rotation, die immer kleiner wird.",
      "In der Mitte eine Pause einlegen; der Kopf soll von selbst rollen."
    ],
    dosierung: "Etwa 5–10 Minuten.",
    wirkung: ["Tiefe Entspannung von Nacken und Atemhilfsmuskulatur", "Fördert das Loslassen"],
    achtung: ["Kein Ziehen, Drücken oder Bohren am Hals, kein Endgefühl auslösen", "Keinen Schmuck tragen", "Nicht bei HWS-Instabilität, frischem HWS-Trauma oder Schwindel"],
    quelle: ["Atemtherapie – 7. Entspannung"]
  },
  {
    id: "drachen-geschichte",
    name: "Entspannungsgeschichte vom kleinen Drachen (PMR für Kinder)",
    art: "psyche",
    aste: "RL auf der Matte, warmer Raum",
    ablauf: [
      "Der kleine Drache will groß werden und muss Aufgaben lösen – jede Aufgabe ist ein kurzes Anspannen mit anschließendem Lösen.",
      "Zum Beispiel: einen Stein in der Hand zusammendrücken, ein Holz hochheben, über ein Loch steigen, mit den Zehen etwas festkrallen, mit der Brust etwas wegschieben.",
      "Der Drache möchte mehr Feuer: eine ruhige Atemübung wie beim autogenen Training anschließen.",
      "Abschluss mit einer Reise an den Lieblingsort: Was siehst, hörst, riechst und spürst du?"
    ],
    dosierung: "10–15 Minuten; kurz anspannen, etwa dreimal so lange lösen.",
    wirkung: ["Spielerische progressive Muskelentspannung", "Körperwahrnehmung und Ruhe für Kinder"],
    achtung: ["Kinder nicht zum Augenschließen zwingen", "Mit Lob und kurzer Bewegung beenden"],
    heim: true,
    quelle: ["Atemtherapie – 7d. Entspannung Beispiel", "Atemtherapie – 7. Entspannung"]
  },

  /* ---------------- Kinder ---------------- */
  {
    id: "atemspiele-kinder",
    name: "Puste- und Atemspiele für Kinder",
    art: "paedi",
    aste: "Sitz am Tisch, RL oder freie Spielsituation",
    ablauf: [
      "Ausatmung: Watte, Tischtennisbälle oder Papierschnipsel über den Tisch pusten, eine Kerzenflamme flackern lassen (nicht auspusten), Windrad drehen, Seifenblasen machen.",
      "Mit dem Strohhalm im Wasserglas blubbern (dosierte Ausatmung) oder Klecksbilder pusten; einen Spiegel anhauchen.",
      "Einatmung: an etwas riechen (Blume, Gewürz), „vorsichtig“ und „fest“ schnüffeln, mit dem Strohhalm Papier ansaugen („Staubsaugerspiel“).",
      "Stofftieratmung: das Kuscheltier auf dem Bauch fährt mit der Atmung Aufzug; die Ausatmung bildlich machen (Atemraupe, Sonne um den Nabel)."
    ],
    dosierung: "Kurze Spielsequenzen von 1–3 Minuten, Pausen einbauen.",
    wirkung: ["Schult dosierte Aus- und vertiefte Einatmung", "Bereitet autogene Drainage und Inhalation vor", "Motivation durch Spiel"],
    achtung: ["Schwindel durch Hyperventilation vermeiden – Pausen", "Luftballon aufblasen erzeugt hohen Druck – nicht bei Asthma, Emphysem oder Pneumothoraxgefahr"],
    material: "Watte, Strohhalm, Glas Wasser, Seifenblasen, Windrad, Kerze, Kuscheltier, Spiegel",
    heim: true,
    quelle: ["Atemtherapie – 6. Hilfsmittel", "Atemtherapie – 4. Atemtechniken"]
  },
  {
    id: "inhalation-kinder",
    name: "Inhalation bei Kindern vorbereiten und begleiten",
    art: "paedi",
    aste: "Aufrechter Sitz, ggf. auf dem Schoß",
    ablauf: [
      "Einatmung vorher üben: kurz mit dem Strohhalm ansaugen, schnüffelnd oder riechend einatmen.",
      "Ausatmung üben: auf Laute ausatmen, Puste- und Blasespiele; die Inhalation ggf. mit einem Ausatemgerät (z. B. RC-Cornet) koppeln.",
      "Die Maske über ein Spiel mit der Puppe akzeptieren lernen; visuelle Anreize nutzen (z. B. Rechenschieber zum Mitzählen).",
      "Keine Zeitangabe machen, nicht zu viel verlangen – lieber halbe Portionen; Arbeits- und Spielphase trennen und in einer positiven Phase aufhören."
    ],
    dosierung: "Nach ärztlicher Verordnung; Mundstück, sobald das Kind mit dem Strohhalm trinken kann (etwa ab 2–4 Jahren).",
    wirkung: ["Bessere Medikamentenwirkung durch langsame, tiefe Atemzüge", "Kooperation und Selbstständigkeit des Kindes"],
    achtung: ["Mundstück ist wirksamer als Maske", "Reihenfolge: Bronchienerweiterung – Sekretolyse – weitere Medikamente"],
    material: "Vernebler mit Mundstück oder Maske, Strohhalm, Puppe",
    heim: true,
    quelle: ["Atemtherapie – 6. Hilfsmittel"]
  },
  {
    id: "feldenkrais-hochhaus",
    name: "Feldenkrais für Kinder: Klingeln im Hochhaus",
    art: "paedi",
    aste: "SL auf Bank oder Matte, Körper wie ein Stuhl ausgerichtet (Oberschenkel = Sitzfläche, Unterschenkel = Stuhlbeine, Rumpf und Kopf = Lehne)",
    ablauf: [
      "Die obere Hand liegt auf dem Scheitel; oberes Knie und Ellbogen nähern sich – die ganze Wirbelsäule rundet sich; zurück zum Stuhl-Bild.",
      "Knie und Ellbogen entfernen sich voneinander (der Kniewinkel bleibt) – die Wirbelsäule macht sich hohl.",
      "Der Therapeut „klingelt“ an einzelnen Dornfortsätzen: das Kind öffnet die Tür (hohl machen), schiebt hinaus (rund machen) und schließt sie (gerade ausrichten) – Stockwerk für Stockwerk von der LWS nach oben.",
      "Zum Schluss im Sitz an der Bankkante runden und strecken und den Unterschied zwischen „gerade“ und „aufrecht“ erspüren."
    ],
    dosierung: "10–20 Minuten als Teil einer Einzelstunde.",
    wirkung: ["Segmentale Wahrnehmung der Wirbelsäule", "Aktive Aufrichtung statt starrem Geradesitzen"],
    achtung: ["Spüren statt Vormachen – Fragen stellen", "Im schmerzfreien Bereich bewegen"],
    quelle: ["Atemtherapie – 7a. Feldenkrais für Kinder (Schilling)"]
  },
  {
    id: "feldenkrais-krokodilfuesse",
    name: "Feldenkrais für Kinder: Krokodilfüße und Fußhöhle",
    art: "paedi",
    aste: "Sitz auf der Matte, Fußsohlen und Zehen aneinander („Krokodilmaul“)",
    ablauf: [
      "Das Kind öffnet die Vorfüße – das Fußkrokodil frisst ein Kirschkernsäckchen und hält es mit den „Zehenzähnen“ fest, während der Therapeut daran zieht.",
      "Die Innenränder der Fußsohlen bewusst anspannen; nach hinten rollen und das Säckchen mit den Füßen weit nach hinten werfen.",
      "Im Stand vor dem Spiegel die „Fußhöhle“ öffnen und schließen und beobachten, was die Knie dabei machen.",
      "Genau ansagen, nicht vormachen – das Kind organisiert die Bewegung selbst."
    ],
    dosierung: "5–10 Wiederholungen je Teilaufgabe.",
    wirkung: ["Kräftigt die Fußmuskulatur und richtet das Längsgewölbe auf", "Wahrnehmung für Spannung und Entspannung, Übertrag in den Stand"],
    achtung: ["Spielerisch bleiben, Eltern einbeziehen"],
    material: "Kirschkernsäckchen, Spiegel",
    heim: true,
    quelle: ["Atemtherapie – 7a. Feldenkrais für Kinder (Schilling)"]
  },
  {
    id: "feldenkrais-hand-fuss",
    name: "Feldenkrais für Kinder: „Rechte Hand trifft linken Fuß“ und Freiheitsstatue",
    art: "paedi",
    aste: "RL auf der Matte",
    ablauf: [
      "Rechtes Bein aufstellen, den linken Fuß durch das „Tor“ des rechten Beins schieben und mit der rechten Hand festhalten.",
      "Den linken Arm lang am Boden ausstrecken, zur Hand schauen und über den linken Arm auf den Bauch rollen – und zurück; dann Seitenwechsel.",
      "Fragen statt Vormachen: Mit welcher Hand schreibst du? Wo ist dein rechtes Bein?",
      "Steigerung „Freiheitsstatue“: dieselbe Figur im Einbeinstand – auf dem rechten Fuß stehen, linken Arm hoch, mit der rechten Hand den linken Fuß suchen; der Therapeut sichert und schiebt das Gewicht langsam über den Standfuß."
    ],
    dosierung: "Mehrere Durchgänge pro Seite, über mehrere Stunden aufbauen.",
    wirkung: ["Rechts-links-Orientierung, Körperschema und Rotation", "Gleichgewicht und Fußgewölbe im Einbeinstand", "Fördert Selbstständigkeit (Ich-Bild)"],
    achtung: ["Im Einbeinstand sichern"],
    heim: true,
    quelle: ["Atemtherapie – 7a. Feldenkrais für Kinder (Schilling)"]
  }
);
