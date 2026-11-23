/* Übungen: Transfer & Alltag, Kräftigung & Stabilisation, Koordination & Gleichgewicht */
PT.uebungen.push(

  /* ---------------- Transfer, Gang & Alltag ---------------- */
  {
    id: "transfer-ueber-seitlage",
    name: "Transfer RL → SL → Sitz an der Bettkante",
    art: "adl",
    aste: "RL im Bett, Kopfteil ggf. hochgestellt",
    ablauf: [
      "Beide Beine nacheinander anstellen.",
      "En bloc (ohne Rumpfrotation) auf die Seite drehen.",
      "Mit dem oberen Arm vor dem Körper abstützen, der untere Arm hilft – beim Ausatmen in den Sitz hochkommen.",
      "Sofort Fußsohlenkontakt zum Boden herstellen (Muskelpumpe), Puls und RR kontrollieren."
    ],
    dosierung: "Bei jedem Aufstehen anwenden.",
    wirkung: ["Vermeidet Pressatmung und statische Arbeit", "Rückenschonend", "Verringert Druck- und Schubkräfte auf den Beckenboden"],
    achtung: ["Nach Sternotomie nicht mit den Armen hochdrücken oder ziehen", "Bei Schwindel zurück und erneut Kreislauf anregen"],
    heim: true,
    quelle: ["KG Innere – Herzinsuffizienz", "KG Innere – Transfers erarbeiten (M. Bloch)", "KG Gyn – Beckenbodenschonende Verhaltensweisen", "KG Innere – Herz-Klausurzusammenfassung"]
  },
  {
    id: "aufstehen-boden",
    name: "Hochkommen aus der Bauchlage zum Stand",
    art: "adl",
    aste: "BL auf der Matte",
    ablauf: [
      "Hände neben den Schultern aufstützen.",
      "Beim Ausatmen auf die Arme hochstützen, gleichzeitig ein Bein anbeugen.",
      "Über den Vierfüßlerstand in den Einbeinkniestand, mit Abstützen auf dem Oberschenkel in den Stand."
    ],
    dosierung: "3–5 Wiederholungen.",
    wirkung: ["Sturzfolgen-Training: selbstständig vom Boden aufstehen", "Koordination von Atmung und Bewegung"],
    achtung: ["Bei Hüft-TEP nur mit Freigabe und angepasster Technik"],
    quelle: ["KG Innere – Transfers erarbeiten (M. Bloch)"]
  },
  {
    id: "aufstehen-stuhl",
    name: "Aufstehen vom Stuhl (Sit-to-Stand)",
    art: "adl",
    aste: "Sitz, Füße hüftbreit bzw. in Schrittstellung",
    ablauf: [
      "Füße direkt hinter den Körperschwerpunkt stellen.",
      "Oberkörper nach vorne neigen, Schwerpunkt weit nach vorne bringen.",
      "Beim Ausatmen aufstehen, kontrolliert wieder setzen; Hände bei Bedarf auf Oberschenkel oder Sitzfläche."
    ],
    dosierung: "2 Sätze à 10 Wiederholungen, 2–3 × pro Woche.",
    wirkung: ["Beinkraft", "Selbstständigkeit im Alltag", "Selbstwirksamkeit"],
    achtung: ["Nach Hüft-TEP/SH-Fraktur keine niedrigen Sitzgelegenheiten"],
    heim: true,
    quelle: ["KG Innere – Transfers erarbeiten (M. Bloch)", "KG Psych – Merkblatt Depression", "KG Innere – Bronchiektasen-Präsentation"]
  },
  {
    id: "bettkante-stuhl",
    name: "Transfer Bettkante → Stuhl mit Therapeutenhilfe",
    art: "adl",
    aste: "Sitz an der Bettkante, Stuhl neben dem Bett (fixiert)",
    ablauf: [
      "Fußsohlendruck sicherstellen (Bett herunterfahren oder Schemel), Kreislauf vorher anregen.",
      "Patient legt die Arme um die Schultern des Therapeuten; Therapeut sichert mit Fuß und Knie.",
      "Auf Kommando Schwerpunkt nach vorne-oben, Gesäß heben, drehen und auf den Stuhl setzen."
    ],
    dosierung: "Bei Bedarf; Puls, AF, Gesichtsfarbe und Schwindel kontrollieren.",
    wirkung: ["Sicherer Transfer bei geschwächten Patienten"],
    quelle: ["KG Innere – Transfers erarbeiten (M. Bloch)"]
  },
  {
    id: "sicherer-stand",
    name: "Sicheren Stand erarbeiten",
    art: "adl",
    aste: "Stand, Stuhl oder Bett als Sicherheit hinter dem Patienten",
    ablauf: [
      "Beine hüftbreit, Knie gestreckt, Hüften in Nullstellung.",
      "Oberkörper aufrichten, Sternum nach vorne, Kopf hoch.",
      "Hände zunächst auf der Schulter des Therapeuten; Therapeut gibt taktilen Input am Beckenkamm."
    ],
    dosierung: "30–60 Sekunden, mehrfach.",
    wirkung: ["Kreislaufanpassung an die Senkrechte", "Vorbereitung auf das Gehen"],
    quelle: ["KG Innere – Transfers erarbeiten (M. Bloch)"]
  },
  {
    id: "gangschule-hilfsmittel",
    name: "Gangschule mit Unterarmgehstützen / Rollator",
    art: "adl",
    aste: "Stand mit Hilfsmittel",
    ablauf: [
      "Umgang mit dem Hilfsmittel, Gewichtsverlagerung links/rechts.",
      "3-Punkte-Gang: beide Stützen und betroffenes Bein gemeinsam vor, dann gesundes Bein.",
      "Belastung nach Vorgabe (Sohlenkontakt, Teilbelastung mit Waage kontrollieren).",
      "Treppe: gesundes Bein zuerst hinauf, betroffenes Bein zuerst hinab."
    ],
    dosierung: "Im Zimmer, auf dem Gang, dann Treppe.",
    wirkung: ["Entlastendes, sicheres Gehen", "Selbstständigkeit"],
    achtung: ["Teilbelastung immer mit Waage einüben"],
    material: "UAGs, Rollator/Gehwagen, Personenwaage",
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs", "KG Chirurgie – Patellafraktur", "KG Chirurgie – Physiotherapie in der Chirurgie"]
  },
  {
    id: "verhaltensregeln-tep",
    name: "Verhaltensregeln & ADL nach Hüft-TEP",
    art: "adl",
    aste: "Alltag",
    ablauf: [
      "Nicht mit überschlagenen Beinen sitzen, keine niedrigen Sitzgelegenheiten.",
      "Ein Bein nach dem anderen aus dem Bett; betroffenes Bein nicht gestreckt abheben.",
      "Keine ruckartigen Richtungsänderungen, kein Drehen des Körpers aus dem Stand.",
      "Schuhe/Strümpfe mit Hilfsmitteln anziehen; beim Liegen auf der Seite Kissen zwischen die Knie."
    ],
    dosierung: "Die ersten Wochen nach OP konsequent.",
    wirkung: ["Luxationsprophylaxe", "Sicherheit im Alltag"],
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs", "KG Orthopädie – Ortho (Hüft-TEP)"]
  },
  {
    id: "gebrauchsbewegungen",
    name: "Gebrauchsbewegungen im Alltag üben",
    art: "adl",
    aste: "Je nach Situation",
    ablauf: [
      "Hinsetzen und Aufstehen von verschiedenen Höhen.",
      "Badewanne/Dusche (Duschhocker), Auto ein- und aussteigen.",
      "Gegenstände aufheben, Türen mit UAGs öffnen, verschiedene Untergründe."
    ],
    dosierung: "In jede Behandlung einbauen.",
    wirkung: ["Transfer der Therapie in den Alltag"],
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "kontinentes-buecken-heben",
    name: "Kontinenzsicherndes Bücken und Heben",
    art: "beckenboden",
    aste: "Stand, Füße breit, Gegenstand zwischen den Füßen",
    ablauf: [
      "Bücken: Hüfte nach hinten schieben (wie hinsetzen), Knie beugen sich fast gleichzeitig.",
      "Heben: Last mit einem Verschlusswort (z. B. „Hauruck“) anheben, Hüfte nach vorne, Knie strecken.",
      "Die Wirbelsäule macht keine eigene Bewegung."
    ],
    dosierung: "Im Alltag bei jedem Heben.",
    wirkung: ["Vermeidet kaudale Schubkräfte auf den Beckenboden", "Schützt Bandscheiben", "Funktionelles Rückentraining"],
    heim: true,
    quelle: ["KG Gyn – Beckenbodenschonende Verhaltensweisen"]
  },
  {
    id: "hustendreh",
    name: "Hustendreh & Niesrück",
    art: "beckenboden",
    aste: "Aufrechter Stand oder Sitz",
    ablauf: [
      "Kopf und Brustkorb drehen und über die Schulter nach oben-hinten husten bzw. niesen.",
      "Die aufgerichtete, rotierte BWS fängt die Druckwelle ab.",
      "Nach Sectio oder großer Dammnaht zusätzlich den Unterbauch mit beiden Händen halten."
    ],
    dosierung: "Bei jedem Husten/Niesen.",
    wirkung: ["Schutz vor ungewolltem Harnverlust", "Druckentlastung der Blase"],
    heim: true,
    quelle: ["KG Gyn – Beckenbodenschonende Verhaltensweisen"]
  },
  {
    id: "toilettenverhalten",
    name: "Schonendes Toilettenverhalten",
    art: "beckenboden",
    aste: "Sitz auf der Toilette",
    ablauf: ["Niemals pressen, gleichmäßig weiteratmen.", "Becken nach ventral und dorsal kippen, mit der Atmung kombinieren, um den Defäkationsreflex auszulösen."],
    dosierung: "Im Alltag.",
    wirkung: ["Vermeidet Druck auf den Beckenboden", "Senkungsprophylaxe"],
    heim: true,
    quelle: ["KG Gyn – Beckenbodenschonende Verhaltensweisen"]
  },

  /* ---------------- Kräftigung & Stabilisation ---------------- */
  {
    id: "schleifende-ferse",
    name: "Schleifende Ferse",
    art: "kraft",
    aste: "RL auf der Bank, Bein gestreckt",
    ablauf: [
      "Ferse auf der Unterlage Richtung Gesäß ziehen (Knie- und Hüftflexion, Fuß in Dorsalextension).",
      "Langsam zurückgleiten lassen.",
      "Steigerung: passiv – assistiv – aktiv – resistiv; Abheben der Ferse in Flexionsendstellung und kurz halten.",
      "Therapeut: proximale Hand in der Kniekehle, distale Hand an der Ferse."
    ],
    dosierung: "10–15 Wiederholungen, 3 Serien; auch gegensinnig beidseits als Kreislaufanregung.",
    wirkung: ["Gelenkmobilität Hüfte/Knie", "Thromboseprophylaxe", "Muskelaktivierung unter Abnahme des Eigengewichts"],
    achtung: ["Hüftflexion-Grenzen beachten (z. B. 60° nach Luxation, 90° nach SH-Fraktur/TEP)", "Bei Patellafraktur nur nach Freigabe, Flexion ggf. begrenzt"],
    heim: true,
    quelle: ["KG Neuro – Gelenkmobilität UEX", "KG Chirurgie – Zusammenfassung Mittelkurs", "KG Innere – Herzinsuffizienz"]
  },
  {
    id: "abduktion-schleifend",
    name: "Hüftabduktion schleifend auf der Unterlage",
    art: "kraft",
    aste: "RL, Kniescheibe zeigt zur Decke",
    ablauf: ["Bein auf der Unterlage nach außen schieben und zurück, ohne Rotation.", "Unter Bauchspannung; assistiv bis aktiv, später gegen leichten Widerstand."],
    dosierung: "10 Wiederholungen, 2–3 Serien.",
    wirkung: ["Aktiviert die Abduktoren (Beckenstabilität für den Gang)"],
    achtung: ["Bei ventraler Hüftluxation Abduktion/ARO nur mit Arztfreigabe", "Bei Trochanterabriss keine aktive Abduktion"],
    heim: true,
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "abduktion-sl-kurzer-hebel",
    name: "Hüftabduktion in Seitlage mit kurzem Hebel",
    art: "kraft",
    aste: "SL auf der gesunden Seite, Knie gebeugt",
    ablauf: ["Oberes Knie gegen die Schwerkraft anheben (kurzer Hebel), Becken stabil.", "Langsam absenken."],
    dosierung: "3 × 10 Wiederholungen.",
    wirkung: ["Kräftigung der Mm. glutei medius/minimus"],
    achtung: ["Nur wenn erlaubt (nicht bei Trochanterabriss, Acetabulum in den ersten 4 Wochen)", "Kissen zwischen die Knie bei TEP"],
    heim: true,
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs", "KG Chirurgie – Proximale Femurfrakturen"]
  },
  {
    id: "isometrie-quadriceps",
    name: "Isometrie M. quadriceps",
    art: "kraft",
    aste: "RL, ggf. in der Orthese, Rolle unter dem Knie",
    ablauf: [
      "Kniekehle gegen die Rolle drücken bzw. Oberschenkel anspannen – die Patella wird nach kranial gezogen.",
      "Therapeut palpiert Patella und M. vastus medialis."
    ],
    dosierung: "5–10 s halten, 10 Wiederholungen, 3 Sätze, mehrmals täglich.",
    wirkung: ["Quadrizepsaktivierung ohne Gelenkbewegung", "Vermeidet Streckdefizit"],
    achtung: ["Schmerzfrei; kein Widerstand am Unterschenkel bei Patellafraktur", "Nach VKB-Plastik nur in geschlossener Kette"],
    heim: true,
    quelle: ["KG Chirurgie – Patellafraktur", "KG Chirurgie – Frakturen und Verletzungen des Kniegelenks"]
  },
  {
    id: "isometrie-ischios",
    name: "Isometrie der Ischiocruralen",
    art: "kraft",
    aste: "RL",
    ablauf: ["Ferse leicht in die Unterlage drücken, Knie bleibt in Position."],
    dosierung: "5–10 s halten, 10 Wiederholungen.",
    wirkung: ["Ischios entlasten das VKB und stabilisieren das Knie", "Kein Zug am Streckapparat"],
    heim: true,
    quelle: ["KG Chirurgie – Patellafraktur", "KG Chirurgie – Frakturen und Verletzungen des Kniegelenks"]
  },
  {
    id: "isometrie-gesamt",
    name: "Isometrie in alle Richtungen / Gluteal-Isometrie",
    art: "kraft",
    aste: "RL",
    ablauf: [
      "Gesäß beidseits anspannen (bilaterale Glutealisometrie).",
      "Bein gegen leichte Widerstände in alle Richtungen anspannen, ohne Bewegung.",
      "Rücken gegen die Unterlage drücken, ggf. mit Ellbogen; Kopf leicht anheben (Bauch)."
    ],
    dosierung: "5–7 s halten, 8–10 Wiederholungen.",
    wirkung: ["Erhalt der Muskelkraft bei lagerungsstabilen Frakturen", "Fraktursicherung"],
    achtung: ["Nicht bei Herzpatienten in der Frühphase (Pressatmung)", "Isometrie in offener Kette belastet Sehnen- und Muskelnähte"],
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs", "KG Chirurgie – Physiotherapie in der Chirurgie"]
  },
  {
    id: "brunkow",
    name: "Stemmführung nach Brunkow / Ganzkörpergrundspannung",
    art: "kraft",
    aste: "RL, später Sitz oder Stand",
    ablauf: [
      "Gelenkeinstellung: proximal Rotations-Nullstellung mit minimaler Abduktion, mittlere Gelenke leicht gebeugt, distal maximale Dorsalextension.",
      "Hand: Faust, Dorsalextension (Punctum fixum Handwurzel), Finger locker strecken („Orange halten“), dann von der Handwurzel Richtung Schlüsselgelenk stemmen.",
      "Fuß: Zehen beugen, maximale Dorsalextension (Punctum fixum Ferse), Zehen locker strecken, Ferse Richtung Fußende schieben.",
      "Spannung immer von distal nach proximal aufbauen."
    ],
    dosierung: "Zu Beginn höchstens 5 Wiederholungen hintereinander.",
    wirkung: ["Normale Bewegungsmuster bahnen", "Ganzkörpergrundspannung zur Fraktursicherung", "Rumpfstabilität"],
    achtung: ["Hohe Anforderung an Konzentration – kurze Serien"],
    quelle: ["KG Chirurgie – Stemmführung nach Brunkow", "KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "bridging",
    name: "Bridging (Becken anheben)",
    art: "kraft",
    aste: "RL, Beine angestellt",
    ablauf: [
      "Becken unter Grundspannung anheben, bis Oberschenkel und Rumpf eine Linie bilden.",
      "Kurz halten, langsam abrollen.",
      "Steigerung: einbeinig, mit Stabilisierender Umkehr (PNF), auf instabiler Unterlage."
    ],
    dosierung: "3 × 10 Wiederholungen.",
    wirkung: ["Kräftigt Gluteen und Ischios", "Rumpf- und Beckenstabilität", "Erleichtert das Hochrutschen im Bett"],
    achtung: ["Nach Oberschenkel- und Schenkelhalsfraktur erst ab 20 kg Teilbelastung", "Bei Patellafraktur zunächst nur mit der gesunden Seite"],
    heim: true,
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs", "KG Chirurgie – Patellafraktur", "PNF – Fallbeispiel 78 J. Z. n. Pneumonie", "KG Innere – Transfers erarbeiten (M. Bloch)"]
  },
  {
    id: "bridging-theraband",
    name: "Bridging mit Theraband-Schlaufe und Armhebung",
    art: "kraft",
    aste: "RL, Beine leicht angestellt, Theraband als Schlaufe um beide Füße, Enden in den Händen",
    ablauf: [
      "Becken anheben und gleichzeitig die gestreckten Arme in Schulterflexion führen (Arme in ARO).",
      "Auf den Fersen stehen, eine Linie halten.",
      "Variation: Ball unter den Fersen (instabiler Untergrund)."
    ],
    dosierung: "2–3 × 8–12 Wiederholungen.",
    wirkung: ["Kräftigt Gluteen und Ischios", "Rumpfstabilisation"],
    achtung: ["Arme nicht überstrecken", "Kein Ausweichen der WS in Lateralflexion"],
    material: "Theraband, ggf. Ball",
    heim: true,
    quelle: ["Theraband – Rumpfstabilisation"]
  },
  {
    id: "superman-theraband",
    name: "Superman im Vierfüßlerstand mit Theraband",
    art: "kraft",
    aste: "Vierfüßlerstand: Knie unter der Hüfte, Hände unter den Schultern",
    ablauf: [
      "Theraband vom Fuß zur diagonalen Hand führen.",
      "Arm und gegenüberliegendes Bein gleichzeitig strecken.",
      "Wirbelsäule gerade und stabil halten, langsam zurück."
    ],
    dosierung: "2–3 × 8–10 Wiederholungen pro Seite.",
    wirkung: ["Kräftigt die gesamte Rumpfmuskulatur", "Koordination"],
    achtung: ["Keine Hyperextension in der Schulter, kein Ausweichen ins Hohlkreuz"],
    material: "Theraband, ggf. Halbigelball als labile Unterlage",
    heim: true,
    quelle: ["Theraband – Rumpfstabilisation"]
  },
  {
    id: "tubersitz",
    name: "Tubersitz / Grundspannung im Sitz mit Widerständen",
    art: "kraft",
    aste: "Aufrechter Sitz (hoher Sitz), Oberschenkel liegen auf",
    ablauf: ["Aufgerichtet auf den Sitzbeinhöckern sitzen, Grundspannung aufbauen.", "Therapeut gibt dosierte Widerstände am Schultergürtel oder Rumpf in verschiedene Richtungen."],
    dosierung: "5–8 Widerstände je Richtung.",
    wirkung: ["Rumpfstabilität", "Kräftigung der Hüftmuskulatur unter Belastung"],
    achtung: ["Scherkräfte beachten (Luxation, SH-Fraktur)", "Weiterleitung ins Frakturgebiet beachten"],
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs", "KG Chirurgie – Proximale Femurfrakturen"]
  },
  {
    id: "halteposition-endstellung",
    name: "Halteposition in Endstellung",
    art: "kraft",
    aste: "RL oder SL",
    ablauf: ["Therapeut bringt das Bein in die Endstellung der Bewegung.", "Patient hält die Position 5–10 s unter Abnahme des Eigengewichts.", "Kontrolliertes Zurückführen."],
    dosierung: "8–10 Wiederholungen.",
    wirkung: ["Exzentrische Kontrolle", "Muskelaktivierung ohne Belastung des verletzten Gelenks"],
    quelle: ["KG Chirurgie – Patellafraktur"]
  },
  {
    id: "hueftbewegen-gestrecktes-knie",
    name: "Dynamisches Hüftbewegen mit gestrecktem Knie",
    art: "kraft",
    aste: "SL (Abduktion/Adduktion), BL oder SL (Extension), Bein ggf. in Orthese",
    ablauf: ["Bein mit gestrecktem Knie langsam in Abduktion, Adduktion und Extension bewegen.", "Therapeut führt am Oberschenkel, kein Hebel über den Unterschenkel."],
    dosierung: "10–15 Wiederholungen je Richtung.",
    wirkung: ["Erhält Hüftkraft", "Keine Zugbelastung auf Patella/Streckapparat"],
    quelle: ["KG Chirurgie – Patellafraktur"]
  },
  {
    id: "slr",
    name: "Anheben des gestreckten Beines (SLR)",
    art: "kraft",
    aste: "RL, anderes Bein angestellt",
    ablauf: ["Quadrizeps anspannen, gestrecktes Bein ohne Streckdefizit (Lag) anheben.", "Langsam absenken."],
    dosierung: "3 × 10 Wiederholungen, ohne Widerstand.",
    wirkung: ["Aktive Streckkontrolle des Knies"],
    achtung: ["Nach Hüft-TEP/SH-Fraktur: kein langer Hebel", "Nach Patellafraktur erst nach Fraktursicherung"],
    heim: true,
    quelle: ["KG Chirurgie – Patellafraktur"]
  },
  {
    id: "wandlehnen",
    name: "Wandlehnen / flache Kniebeuge (geschlossene Kette)",
    art: "kraft",
    aste: "Stand mit dem Rücken an der Wand",
    ablauf: ["An der Wand nach unten gleiten bis maximal 40° Knieflexion.", "Kurz halten, Beinachse im Spiegel kontrollieren."],
    dosierung: "3 × 10 Wiederholungen, 3 s halten.",
    wirkung: ["Quadrizepskraft in geschlossener Kette", "Beinachsenstabilität"],
    achtung: ["Flexion unter Belastung nach Patellafraktur max. 40°"],
    heim: true,
    quelle: ["KG Chirurgie – Patellafraktur"]
  },
  {
    id: "step-up",
    name: "Step-up auf eine niedrige Stufe",
    art: "kraft",
    aste: "Stand vor einer Stufe (ca. 10 cm)",
    ablauf: ["Mit dem betroffenen Bein auf die Stufe steigen, Beinachse halten.", "Kontrolliert wieder absteigen."],
    dosierung: "3 × 10 Wiederholungen.",
    wirkung: ["Kraft und Kontrolle für Treppensteigen"],
    achtung: ["Knieflexion unter Belastung begrenzen, wo vorgegeben"],
    heim: true,
    quelle: ["KG Chirurgie – Patellafraktur"]
  },
  {
    id: "beinpresse",
    name: "Beinpresse",
    art: "kraft",
    aste: "Sitz an der Beinpresse",
    ablauf: ["Im freigegebenen Bewegungsausmaß drücken (z. B. Knie 0-40-90°).", "Langsam, exzentrisch zurück."],
    dosierung: "Frühphase max. 10 % des Körpergewichts; später nach MTT-Phasenmodell.",
    wirkung: ["Muskelaufbau Quadrizeps, Gluteen in geschlossener Kette"],
    material: "Beinpresse",
    quelle: ["KG Chirurgie – Frakturen und Verletzungen des Kniegelenks", "KG Innere – Bronchiektasen-Präsentation"]
  },
  {
    id: "wadenpresse",
    name: "Wadenpresse am Stepper / Zehenstand",
    art: "kraft",
    aste: "Vorfuß auf dem Stepper, Ferse frei Richtung Boden, Festhalten an Sprossenwand oder Barren",
    ablauf: ["Aus der Dehnstellung in maximale Plantarflexion drücken.", "Kurz halten, langsam zurück.", "Einfachere Variante: beidbeiniger Zehenstand am Boden."],
    dosierung: "3 × 8–12 Wiederholungen.",
    wirkung: ["Kräftigt Wade und Fußmuskulatur"],
    material: "Stepper, ggf. Zusatzgewicht",
    heim: true,
    quelle: ["MTT – Gruppe 3 (Außenbandruptur)", "KG Chirurgie – Patellafraktur"]
  },
  {
    id: "sidesteps-theraband",
    name: "Side-Steps mit Theraband",
    art: "kraft",
    aste: "Stand mit leicht gebeugten Knien, Theraband über den Malleolen",
    ablauf: ["Seitlich von Hütchen zu Hütchen gehen, hinteres Bein nachziehen, Spannung halten.", "Dann Richtungswechsel."],
    dosierung: "2 × 2 Bahnen à 8–12 m.",
    wirkung: ["Kräftigt Hüftabduktoren, Ober- und Unterschenkel", "Beinachsenstabilität"],
    material: "Theraband, 2 Hütchen",
    heim: true,
    quelle: ["MTT – Gruppe 3 (Außenbandruptur)"]
  },
  {
    id: "pro-supination-ball",
    name: "Pro- und Supination mit Ballführung",
    art: "kraft",
    aste: "Aufrechter Sitz, Ball unter dem betroffenen Fuß",
    ablauf: ["Ball von Pronation in maximale Supination am Boden rollen und zurück."],
    dosierung: "3 × 8–12 Wiederholungen je Richtung.",
    wirkung: ["Kräftigt Peroneen und Supinatoren", "Fußkoordination"],
    material: "Pilates- oder Medizinball",
    heim: true,
    quelle: ["MTT – Gruppe 3 (Außenbandruptur)"]
  },
  {
    id: "ausfallschritte",
    name: "Ausfallschritte (Lunges)",
    art: "kraft",
    aste: "Stand am ersten Hütchen",
    ablauf: ["Großen Ausfallschritt machen, in die Knie gehen (hinteres Knie berührt den Boden nicht).", "Aufrichten und weitergehen bis zum zweiten Hütchen."],
    dosierung: "2 × 2 Bahnen à 8–12 m.",
    wirkung: ["Kräftigt Ober-/Unterschenkel und Gluteen", "Gleichgewicht"],
    material: "2 Hütchen, ggf. Zusatzgewicht",
    heim: true,
    quelle: ["MTT – Gruppe 3 (Außenbandruptur)"]
  },
  {
    id: "armuebungen-bett",
    name: "Aktive Armübungen im Bett (Äpfelpflücken, Wollewickeln, Theraband)",
    art: "kraft",
    aste: "RL oder erhöhter Oberkörper",
    ablauf: [
      "Äpfelpflücken: abwechselnd nach oben greifen.",
      "Wollewickeln: Unterarme umeinander kreisen.",
      "Stützmuster gegen ein Theraband am Kopfteil."
    ],
    dosierung: "10–15 Wiederholungen.",
    wirkung: ["Erhalt der Armkraft (Gehstützen!)", "Thromboseprophylaxe, Kreislauf"],
    achtung: ["Weiterlaufende Bewegung ins Becken/Frakturgebiet beachten"],
    material: "Theraband",
    heim: true,
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs"]
  },
  {
    id: "rudern-theraband",
    name: "Rudern mit Theraband",
    art: "kraft",
    aste: "Sitz oder Stand, Band vorne befestigt oder um die Füße",
    ablauf: ["Ellbogen eng am Körper nach hinten ziehen, Schulterblätter zusammenführen, BWS aufrichten.", "Langsam zurück (Rückweg betonen)."],
    dosierung: "2 Sätze à 12 Wiederholungen, 2–3 × pro Woche.",
    wirkung: ["Aufrechte Haltung", "Kräftigt Schulterblattfixatoren"],
    material: "Theraband",
    heim: true,
    quelle: ["KG Innere – Hockergymnastik", "KG Innere – Klausur ZF", "KG Psych – Merkblatt Depression"]
  },
  {
    id: "theraband-sitz-beine",
    name: "Theraband-Übungen für die Beine im Sitz",
    art: "kraft",
    aste: "Sitz auf dem Hocker",
    ablauf: [
      "Band unter den Vorfuß: Venenpumpe und Abrollen gegen das Band.",
      "Knie hochziehen und gegen das Band wieder abstellen bzw. nach vorne strecken.",
      "Band um die Oberschenkel: Abduktion im Wechsel und gleichzeitig, Hüftflexion im Wechsel – dynamisch."
    ],
    dosierung: "8–12 Wiederholungen je Übung.",
    wirkung: ["Kräftigt Hüft- und Beinmuskulatur", "Venenpumpe"],
    achtung: ["Bei Hüft-TEP max. 90° Hüftflexion (Oberkörper zurücklehnen)"],
    material: "Theraband",
    heim: true,
    quelle: ["KG Innere – Hockergymnastik"]
  },
  {
    id: "theraband-schulterblatt",
    name: "Theraband um die Schulterblätter – Arme strecken",
    art: "kraft",
    aste: "Sitz, Band um die Schulterblätter gelegt, Enden in den Händen",
    ablauf: ["Arme gleichzeitig nach vorne strecken, dann im Wechsel.", "Steigerung: dabei die Beine im Wechsel anheben."],
    dosierung: "8–12 Wiederholungen.",
    wirkung: ["Kräftigung Schultergürtel (Serratus)", "Koordination"],
    material: "Theraband",
    heim: true,
    quelle: ["KG Innere – Hockergymnastik"]
  },
  {
    id: "scapulasetting",
    name: "Scapulasetting & Humeruskopf-Kaudalisierung",
    art: "kraft",
    aste: "Sitz oder Stand, Spiegel zur Kontrolle",
    ablauf: [
      "Schulterblatt in die Normposition bringen (Margo medialis ca. 5–7 cm von der WS, Scapulaebene ca. 30°).",
      "Humeruskopf aktiv nach kaudal-dorsal zentrieren, dann koordiniert den Arm heben.",
      "Steigerung: gelenknahe Widerstände, Theraband, PNF-Pattern."
    ],
    dosierung: "10–15 Wiederholungen, mehrmals täglich.",
    wirkung: ["Gelenkzentrierung", "Schultergürtelstabilität", "Entlastet den subakromialen Raum"],
    heim: true,
    quelle: ["KG Orthopädie – Zusammenfassung Folie 11–110", "KG Orthopädie – Übungen Scapula praktisch"]
  },
  {
    id: "exzentrisches-training",
    name: "Exzentrisches Funktionstraining bei Tendopathien",
    art: "kraft",
    aste: "Je nach betroffener Sehne",
    ablauf: [
      "Nach Abklingen der Schmerzen zuerst konzentrisch, dann exzentrisch in der mittleren Bewegungsbahn.",
      "Schrittweise bis in die äußere Bewegungsbahn steigern.",
      "Danach Kraftausdauer des Agonisten, Dehnung des Antagonisten."
    ],
    dosierung: "Langsam, z. B. 3 × 15 Wiederholungen, schmerzarm.",
    wirkung: ["Belastbarkeit der Sehne verbessern"],
    achtung: ["Überlastungssituationen finden und reduzieren"],
    heim: true,
    quelle: ["KG Orthopädie – Übungen Scapula praktisch (Tendopathien)", "KG Orthopädie – Zusammenfassung Folie 11–110"]
  },
  {
    id: "bruegger-hand-unterarm",
    name: "Thera-Band nach Brügger: Hand und Unterarm",
    art: "kraft",
    aste: "Aufrechter Sitz, Standardwickelung der Hände",
    ablauf: [
      "Handgelenk-Dorsalextension mit gleichzeitiger Fingerflexion gegen das Band (Hinweg 1/3 der Zeit).",
      "Unterarm-Supination gegen das Band.",
      "Vom Band langsam in die Ausgangsstellung ziehen lassen (Rückweg 2/3 der Zeit)."
    ],
    dosierung: "10–15 Wiederholungen; Übungen der kleinen Gelenke nur mit weißem Band.",
    wirkung: ["Wirkt dem Funktionsüberwiegen der Palmarflexoren/Pronatoren entgegen"],
    material: "Thera-Band",
    heim: true,
    quelle: ["Theraband – Thera-Band-Grundübungen nach Brügger"]
  },
  {
    id: "bruegger-schulter",
    name: "Thera-Band nach Brügger: Schulter-Außenrotation und Abduktion",
    art: "kraft",
    aste: "Aufrechter Sitz",
    ablauf: [
      "Außenrotation gegen das Band (Ellbogen am Körper).",
      "Abduktion bis max. 90° gegen das Band (Band über den Stuhl gekreuzt, Schlaufen um die Ellbogen).",
      "Rückweg langsam, exzentrisch."
    ],
    dosierung: "10–15 Wiederholungen.",
    wirkung: ["Wirkt dem Funktionsüberwiegen der Innenrotatoren/Adduktoren entgegen", "Fördert aufrechte Haltung"],
    material: "Thera-Band",
    heim: true,
    quelle: ["Theraband – Thera-Band-Grundübungen nach Brügger", "KG Innere – Hockergymnastik"]
  },
  {
    id: "bruegger-rumpf",
    name: "Thera-Band nach Brügger: Rumpfaufrichtung",
    art: "kraft",
    aste: "Sitz mittig auf dem Band; Band über Kreuz über Rücken und Schultern, unter den Oberschenkeln fixiert",
    ablauf: ["Gegen das Band in die optimale aufrechte Haltung strecken (Becken kippen, Thorax heben, Kopf aufrichten – Zahnradmodell).", "Den Zug des Bandes zurück exzentrisch abbremsen."],
    dosierung: "10–15 Wiederholungen.",
    wirkung: ["Wirkt der sternosymphysalen Belastungshaltung entgegen"],
    material: "Thera-Band",
    heim: true,
    quelle: ["Theraband – Thera-Band-Grundübungen nach Brügger"]
  },
  {
    id: "bruegger-bein-fuss",
    name: "Thera-Band nach Brügger: Hüfte und Fuß (inkl. Kombi-Wickelung)",
    art: "kraft",
    aste: "Aufrechter Sitz, Beine parallel",
    ablauf: [
      "Hüftabduktion/Außenrotation gegen das um die Unterschenkel gelegte Band.",
      "Fuß: Dorsalextension/Pronation gegen das über den Fußrücken gekreuzte Band.",
      "Kleine Kombi-Wickelung: beides gleichzeitig; große Kombi-Wickelung zusätzlich Hand-/Fingerextension und Supination."
    ],
    dosierung: "10–15 Wiederholungen.",
    wirkung: ["Physiologische Bein-Fußachse", "Dreidimensionale Bewegungsmuster"],
    material: "Thera-Band (250–300 cm)",
    heim: true,
    quelle: ["Theraband – Thera-Band-Grundübungen nach Brügger"]
  },
  {
    id: "mtt-aufbau",
    name: "Medizinische Trainingstherapie nach Phasenmodell",
    art: "kraft",
    aste: "Trainingsgeräte, freie Gewichte, Zugapparate",
    ablauf: [
      "Phase 1 – Aktivierung: Isometrie/Halteübungen, < 30 % der Maximalkraft.",
      "Phase 2 – lokale Muskelausdauer: 30–40 %, 12–25 Wdh., 1–6 Serien.",
      "Phase 3 – Muskelaufbau: 40–70 %, 8–15 Wdh., 2–6 Serien.",
      "Phase 4 – neuromuskuläre Kraft: 70–100 %, 1–6 Wdh.",
      "Phase 5 – alltags- und sportartspezifisches Training.",
      "Koordinationstraining immer vor dem Konditionstraining; Aufwärmen und Cool-down."
    ],
    dosierung: "Maximalkraft über Wiederholungsmaximum (z. B. 10 Wdh. ≈ 75 %).",
    wirkung: ["Phasengerechte Dosierung nach Verletzung/OP", "Schmerzreduktion durch Muskelkräftigung"],
    achtung: ["Wundheilungsphasen beachten", "Schmerz, der durch das Training zunimmt = Abbruch"],
    material: "MTT-Geräte",
    quelle: ["MTT – Skript"]
  },

  /* ---------------- Koordination & Gleichgewicht ---------------- */
  {
    id: "einbeinstand",
    name: "Einbeinstand – stabil bis labil",
    art: "koordination",
    aste: "Stand, Therapeut sichert",
    ablauf: [
      "Auf einem Bein stehen, Knie extensionsnah, nicht in die Flexion fallen lassen.",
      "Steigerung: Arme in Abduktion, Therapeut gibt Widerstände an den Armen.",
      "Untergrund steigern: Handtuch, Weichbodenmatte, Halbigelball, Sisselkissen, Kreisel/Wackelbrett."
    ],
    dosierung: "2 × 30 s pro Bein bzw. 10–20 s zu Beginn.",
    wirkung: ["Sensomotorik und Gelenkstabilität", "Sturzprophylaxe"],
    achtung: ["Nach Knieverletzung: labile Unterlagen erst nach Freigabe (ca. ab 7. Woche)"],
    material: "Handtuch, Weichbodenmatte, Halbigelball, Wackelbrett",
    heim: true,
    quelle: ["MTT – Gruppe 3 (Außenbandruptur)", "KG Chirurgie – Patellafraktur", "KG Chirurgie – Frakturen und Verletzungen des Kniegelenks"]
  },
  {
    id: "tandem",
    name: "Tandemstand und Tandemgang",
    art: "koordination",
    aste: "Stand, Fuß direkt vor Fuß",
    ablauf: ["Tandemstand halten.", "Tandemgang: Ferse an Zehenspitze auf einer Linie gehen (Seiltänzergang)."],
    dosierung: "10 s Stand, 8 Schritte Gang; mehrfach.",
    wirkung: ["Seitliche Balance", "Gangsicherheit"],
    heim: true,
    quelle: ["KG Innere – Innere Medizin (Assessments)", "KG Neuro – Morbus Parkinson", "KG Chirurgie – Patellafraktur"]
  },
  {
    id: "seilgang",
    name: "Balance-Gang zwischen Seilen mit Antippen",
    art: "koordination",
    aste: "Stand vor einem „Gang“ aus Seilen oder Theraband",
    ablauf: ["Durch den Gang gehen und mit dem freien Fuß nach außen tippen – ein Fuß bleibt immer zwischen den Seilen.", "Seile weiter oder enger legen."],
    dosierung: "3–5 Durchgänge.",
    wirkung: ["Gleichgewicht", "Schrittvariabilität"],
    achtung: ["Kein Stock als Begrenzung – Wegrollgefahr"],
    material: "Seile oder Theraband",
    quelle: ["KG Neuro – Gelenkmobilität UEX"]
  },
  {
    id: "vier-halbe-baelle",
    name: "Vier halbe Bälle – Fußzielbewegungen",
    art: "koordination",
    aste: "Stand in der Mitte von vier halben Bällen (oder Zahlen/Markierungen)",
    ablauf: ["Auf Ansage den Fuß zu Ball, Zahl oder Richtung bewegen und antippen bzw. draufstellen.", "Standbein stabil halten."],
    dosierung: "10–15 Ansagen pro Bein.",
    wirkung: ["Einbeinstand-Stabilität", "Reaktion und kognitive Mitarbeit"],
    material: "4 halbe Bälle, ggf. Stuhl/Stock zum Festhalten",
    quelle: ["KG Neuro – Gelenkmobilität UEX"]
  },
  {
    id: "gewichtsverlagerung-stand",
    name: "Gewichtsverlagerung im Stand / Stand- und Spielbeintraining",
    art: "koordination",
    aste: "Stand, ggf. mit Hilfsmittel",
    ablauf: ["Gewicht nach links/rechts und vor/zurück verlagern.", "Stand- und Spielbeinphase einzeln üben (Schritt vor und zurück)."],
    dosierung: "10–15 Wiederholungen.",
    wirkung: ["Vorbereitung auf Belastung und Gehen", "Gangsicherheit"],
    heim: true,
    quelle: ["KG Chirurgie – Zusammenfassung Mittelkurs", "KG Chirurgie – Patellafraktur"]
  },
  {
    id: "dual-task-gehen",
    name: "Gehen mit Doppelaufgaben (Dual-Task)",
    art: "koordination",
    aste: "Gehen, ggf. auf dem Laufband",
    ablauf: [
      "Während des Gehens eine zweite Aufgabe: reden, rechnen, Ziel ansteuern, drehen, Hindernissen ausweichen.",
      "Wechselnde Untergründe; Steigerung über die Schwierigkeit der Umgebung."
    ],
    dosierung: "Mehrere Durchgänge à 2–5 Minuten.",
    wirkung: ["Gangsicherheit im Alltag", "Senkt Sturzrisiko unter Doppelbelastung"],
    achtung: ["Nur wenn Schutzschritte möglich sind", "Nicht als Heimübung – Sturzgefahr, absichern"],
    quelle: ["KG Neuro – Morbus Parkinson"]
  },
  {
    id: "cueing-gang",
    name: "Gangtraining mit Cueing",
    art: "koordination",
    aste: "Gehen",
    ablauf: [
      "Visuelle Cues: Bodenmarkierungen, Laserstrich, Anti-Freezing-Stock.",
      "Akustische Cues: Takt, Musik, Stock im Rhythmus auftippen.",
      "Drehregel: nie abrupt umdrehen, sondern im großen Bogen gehen („Kurven wie ein LKW“)."
    ],
    dosierung: "Regelmäßig, damit die Nutzung der Cues gelernt wird.",
    wirkung: ["Durchbricht Freezing", "Größere, gleichmäßigere Schritte"],
    material: "Klebeband, Metronom/Musik, Anti-Freezing-Stock",
    heim: true,
    quelle: ["KG Neuro – Morbus Parkinson"]
  },
  {
    id: "lsvt-big",
    name: "LSVT-BIG-Übungen",
    art: "koordination",
    aste: "Stand oder Sitz",
    ablauf: [
      "Repetitive Ganzkörperbewegungen mit großer Amplitude („groß!“) und klarem Anfang und Ende.",
      "Verbale Kommandos, „euphorische“ Verstärkung durch den Therapeuten.",
      "Alltagsbewegungen groß ausführen (Aufstehen, Gehen, Greifen)."
    ],
    dosierung: "Standardprogramm 4 × pro Woche; Häufigkeit ist entscheidend.",
    wirkung: ["Verbessert Gleichgewicht, Gang, Handfunktion und ADL", "Steigert Lebensqualität"],
    heim: true,
    quelle: ["KG Neuro – Morbus Parkinson"]
  },
  {
    id: "reaktionsspiele",
    name: "Reaktions- und Koordinationsspiele",
    art: "koordination",
    aste: "Sitz oder Stand",
    ablauf: [
      "Zwei verschiedenfarbige Bälle antippen – jede Farbe für eine Hand.",
      "Farbspiel: bestimmte Bewegungsmuster je nach Farbe.",
      "Igelball werfen und mit der gerufenen Hand fangen."
    ],
    dosierung: "5–10 Minuten.",
    wirkung: ["Koordination, Reaktion", "Bewegungsumstellung (Multitasking)"],
    material: "Farbige Bälle, Igelball",
    quelle: ["KG Neuro – Fallbeispiel Parkinson"]
  },
  {
    id: "feinmotorik",
    name: "Feinmotorik- und Handübungen",
    art: "koordination",
    aste: "Sitz am Tisch",
    ablauf: [
      "Igelball über die Handflächen rollen.",
      "Handtuch mit beiden Händen über den Tisch sliden.",
      "Fingerspiele, Diadochokinese (schnelle Pro-/Supination), alltagsnahe Aufgaben (z. B. Tippen, Gitarre)."
    ],
    dosierung: "5–10 Minuten, bis kurz vor Ermüdung.",
    wirkung: ["Feinmotorik und Handgeschicklichkeit"],
    material: "Igelball, Handtuch",
    heim: true,
    quelle: ["KG Neuro – Fallbeispiel Parkinson", "KG Neuro – Morbus Parkinson"]
  },
  {
    id: "tai-chi-qigong",
    name: "Tai-Chi, Qigong und sanftes Yoga",
    art: "koordination",
    aste: "Stand oder Sitz, gern in der Gruppe",
    ablauf: ["Langsame, fließende Bewegungen mit ruhiger Atmung.", "Gewichtsverlagerungen und Drehungen kontrolliert ausführen.", "Qigong: leicht, langsam, fließend und kreisförmig, oft Tierbewegungen nachempfunden; Wechsel von Üben und Verweilen. Yoga-Sequenzen zur Atmung z. B. Kobra, Katze, Krokodil."],
    dosierung: "1–2 × pro Woche, 20–45 Minuten.",
    wirkung: ["Beinkraft, Gleichgewicht und Gang", "Entspannung, lindert muskuloskelettale Schmerzen"],
    heim: true,
    quelle: ["KG Neuro – Morbus Parkinson", "KG Psych – Merkblatt Depression", "Atemtherapie – 7. Entspannung"]
  },
  {
    id: "tanzen",
    name: "Strukturiertes Tanzen (z. B. Tango)",
    art: "koordination",
    aste: "Paar oder Gruppe",
    ablauf: ["Einfache Schrittfolgen zur Musik, Vorwärts-, Rückwärts- und Seitschritte, Drehungen im großen Bogen."],
    dosierung: "1–2 × pro Woche.",
    wirkung: ["Gleichgewicht, Gang", "Psychische und kognitive Effekte"],
    quelle: ["KG Neuro – Morbus Parkinson"]
  },
  {
    id: "beinachse-spiegel",
    name: "Beinachsentraining vor dem Spiegel",
    art: "koordination",
    aste: "Stand vor dem Spiegel",
    ablauf: ["Ein- und Zweibeinstand, Aufstehen/Hinsetzen, flache Kniebeugen.", "Knie bleibt über dem 2. Zeh, kein Valgus-/Varusausweichen."],
    dosierung: "3 × 10 Wiederholungen.",
    wirkung: ["Sensomotorische Kniekontrolle"],
    heim: true,
    quelle: ["KG Chirurgie – Patellafraktur", "KG Chirurgie – Frakturen und Verletzungen des Kniegelenks"]
  },
  {
    id: "gehen-richtungswechsel",
    name: "Gehen und Laufen mit Richtungswechseln",
    art: "koordination",
    aste: "Freie Fläche",
    ablauf: ["Vorwärts, rückwärts, seitwärts gehen, Tempo- und Richtungswechsel auf Signal.", "Später leichtes Laufen (z. B. nach Kapsel-Band-Verletzung ab ca. 16. Woche)."],
    dosierung: "5–10 Minuten.",
    wirkung: ["Alltags- und Sportfähigkeit", "Reaktive Stabilität"],
    quelle: ["KG Chirurgie – Frakturen und Verletzungen des Kniegelenks"]
  }
);
