/* Krankheits- und Rehabilder: Gynäkologie */
PT.krankheitsbilder.push(
  {
    id: "schwangerschaft",
    fach: "gyn",
    name: "Schwangerschaft – Beschwerden & Geburtsvorbereitung",
    kurz: "Hormonelle Veränderungen (Bindegewebe, Wassereinlagerung, Symphysenlockerung), Gewichtszunahme von 10–12 kg und veränderte Statik (Hyperlordose, Kyphose, Schulterprotraktion). Häufig Rückenschmerzen, Ödeme, Krampfadern, Obstipation.",
    ziele: ["Wahrnehmung von Beckenboden und Atmung (Geburtsvorbereitung)", "Aufrechte, dynamische Haltung", "Venöser Rückstrom, Ödemprophylaxe", "Beckenbodenschonendes Verhalten im Alltag"],
    cave: ["Rückenlage im letzten Drittel meiden (Vena-cava-Kompression)", "Keine Pressatmung, keine Bauchmuskelübungen in Rückenlage", "Bei Komplikationen (Blutungen, vorzeitige Wehen) nur nach ärztlicher Freigabe"],
    phasen: [
      {
        titel: "Wahrnehmung und Atmung",
        uebungen: ["fadenkreuz", "seerose", "stenosierte-ausatmung-ch", "bauchatmung", "atmung-4-6"]
      },
      {
        titel: "Haltung, Becken und Füße",
        uebungen: ["igelball-fussarbeit", "dynamisches-stehen", "beckenkippung", "ball-spiel-grenzen", "goldene-kugel", "knie-ellbogen-mobilitaet", "malende-sitzknochen"]
      },
      {
        titel: "Venen und Alltag",
        uebungen: ["venenpumpe", "hochlagerung", "walking", "kontinentes-buecken-heben", "hustendreh", "transfer-ueber-seitlage", ["kreislaufanregung-aufstehen", "Langsam aufstehen, im letzten Drittel über die Seite"], ["wechselreize", "Kühle Beingüsse bei schweren Beinen – keine Wärme auf Krampfadern"]]
      }
    ],
    quelle: ["KG Gyn – Schwangerschaft", "KG Gyn – Der Beckenboden im Fadenkreuz", "KG Gyn – Übungen für Beckenbodentraining"]
  },
  {
    id: "fruehwochenbett",
    fach: "gyn",
    name: "Frühwochenbett nach vaginaler Geburt (1.–10. Tag)",
    kurz: "Rückbildung von Uterus und Rumpfkapsel, Lochienfluss, Wundheilung am Beckenboden. Beginn frühestens 12 Stunden nach der Geburt; wenige Übungen exakt und konzentriert, Übungen für zu Hause mitgeben.",
    ziele: ["Uterusrückbildung und Lochienfluss fördern", "Beckenboden sensibilisieren und sanft aktivieren (Wundheilungsreize)", "Bauchatmung zurückgewinnen, Rumpfkapsel aktivieren", "Thrombose- und Obstipationsprophylaxe", "Schonendes Aufstehen und Alltagsverhalten"],
    cave: ["In den ersten Tagen keine bewusste kräftige Beckenbodenanspannung (Traumatisierung, Wundheilung)", "Keine Bauchmuskelübungen in Rückenlage", "Überanstrengung vermeiden, beim Stillen nicht stören"],
    phasen: [
      {
        titel: "Grundlage",
        uebungen: ["bauchatmung", "therapeutische-bauchlage", "transfer-ueber-seitlage", "venenpumpe", "hustendreh", ["kreislaufanregung-aufstehen", "Postpartale Hypotonie: vor dem ersten Aufstehen"]]
      },
      {
        titel: "Beckenboden sensibilisieren",
        uebungen: ["seerose", "schwamm", ["phonationsatmung", "Explosiver Sprechatem für reaktive Beckenbodenarbeit"], "stenosierte-ausatmung-ch", "boden-gibt-kraft"]
      },
      {
        titel: "Rumpfkapsel und Mobilität",
        uebungen: ["bauch-verkuerzen", "erster-pfeiler", "tuermchen", "knie-ellbogen-mobilitaet", "igelball-fussarbeit", "dynamisches-gehen", "kolonmassage", "stillzeit-uebungen"]
      }
    ],
    quelle: ["KG Gyn – Behandlung im Frühwochenbett", "KG Gyn – Wochenbett", "KG Gyn – Beckenbodenschonende Verhaltensweisen", "KG Gyn – Übungsbeispiele rhythmischer Koordination"]
  },
  {
    id: "sectio",
    fach: "gyn",
    name: "Z. n. Sectio (Kaiserschnitt)",
    kurz: "Abdominale Schnittentbindung über einen suprasymphysären Querschnitt (Bikinischnitt). Zusätzlich zu den Wochenbettzielen: Wundschutz, Schmerzlinderung, Narbe.",
    ziele: ["Pneumonie- und Thromboseprophylaxe nach OP", "Schmerzarmes Aufstehen und Husten", "Bauchatmung und sanfte Rumpfkapselaktivierung", "Narbenpflege nach Wundheilung"],
    cave: ["Therapeutische Bauchlage zunächst nicht (Narbe)", "Kolonmassage nicht im Narbenbereich", "Keine Bauchmuskelübungen in RL, kein Heben schwerer Lasten"],
    phasen: [
      {
        titel: "Erste Tage",
        uebungen: ["venenpumpe", "kontaktatmung", ["bauchatmung", "Hände schützend auf den Unterbauch"], ["hustendreh", "Unterbauch mit beiden Händen halten"], "transfer-ueber-seitlage", "seerose", ["kreislaufanregung-aufstehen", "Vor dem ersten Aufstehen nach der OP"]]
      },
      {
        titel: "Im Verlauf",
        uebungen: ["bauch-verkuerzen", "tuermchen", "phonationsatmung", "dynamisches-gehen", ["narbenmobilisation", "Nach abgeschlossener Wundheilung"], "kontinentes-buecken-heben"]
      }
    ],
    quelle: ["KG Gyn – Wochenbett", "KG Gyn – Beckenbodenschonende Verhaltensweisen"]
  },
  {
    id: "dammverletzung",
    fach: "gyn",
    name: "Dammriss / Episiotomie (Beckenbodenverletzung)",
    kurz: "Dammriss Grad 1–4 (bis Sphinkter ani und Rektumvorderwand) oder Dammschnitt (median, mediolateral). Bindegewebige, muskuläre und neurogene Verletzungen des Beckenbodens möglich.",
    ziele: ["Wundheilung durch sanfte Reize unterstützen", "Sensibilität und Spürbarkeit des Beckenbodens", "Später Kraft und Kontinenz", "Schmerzarmes Sitzen, Aufstehen, Toilettengang"],
    cave: ["Anfangs keine kräftige bewusste Beckenbodenanspannung", "Bei Dammriss 3./4. Grades Stuhlinkontinenz beachten, ärztliche Vorgaben"],
    phasen: [
      {
        titel: "Wundheilungsphase",
        uebungen: ["bauchatmung", "seerose", "phonationsatmung", "therapeutische-bauchlage", ["hustendreh", "Bei großen Dammnähten Unterbauch halten"], "toilettenverhalten", "stillzeit-uebungen"]
      },
      {
        titel: "Reaktivierung",
        uebungen: ["schwamm", "stenosierte-ausatmung-ch", "fadenkreuz", "rueckhandbremse", "hirtenstab"]
      }
    ],
    quelle: ["KG Gyn – Wochenbett", "KG Gyn – Behandlung im Frühwochenbett", "KG Gyn – Übungen für Beckenbodentraining"]
  },
  {
    id: "rueckbildung",
    fach: "gyn",
    name: "Spätwochenbett & Rückbildung (6–8 Wochen post partum)",
    kurz: "Wiederherstellung von Beckenboden, Bauchmuskulatur und Haltung; die vollständige körperliche Rückbildung dauert weitere 2–4 Monate.",
    ziele: ["Funktionelles Beckenboden- und Bauchmuskeltraining", "Übungen im Längsverlauf der Mm. recti (Stehpendel, Sitzpendel, Brückenbauch)", "Aufrechte, dynamische Haltung", "Beckenbodenschonendes Alltagsverhalten"],
    cave: ["Bauchmuskelübungen in BL, Sitz oder Knie-Ellbogen-Stütz – nicht in Rückenlage (senkungsfördernde Schubkräfte, Rektusdiastase)"],
    phasen: [
      {
        titel: "Stand",
        uebungen: ["stehpendel", "fersenflug", "wasser-kocht", "rumpelstilzchen", "tanzendes-becken", "dynamisches-gehen"]
      },
      {
        titel: "Knie-Ellbogen-Stütz und Bauchlage",
        uebungen: ["malende-sitzknochen", "brueckenbauch", "boden-gibt-kraft", "warmer-bauch"]
      },
      {
        titel: "Pezziball",
        uebungen: ["ball-spiel-grenzen", "goldene-kugel", "abwalzen-ball", "rueckhandbremse", "wandwalze", "hirtenstab", "sitzpendel"]
      },
      {
        titel: "Alltag",
        uebungen: ["kontinentes-buecken-heben", "hustendreh", "toilettenverhalten"]
      }
    ],
    quelle: ["KG Gyn – Übungen für Beckenbodentraining", "KG Gyn – Komplikationen im Wochenbett", "KG Gyn – Beckenbodenschonende Verhaltensweisen"]
  },
  {
    id: "rektusdiastase",
    fach: "gyn",
    name: "Rektusdiastase",
    kurz: "Auseinanderstehen der Mm. recti abdominis (pathologisch > 2 cm), geprüft in RL beim Kopf-Schulter-Anheben (Fingerbreiten auf Nabelhöhe).",
    ziele: ["Funktionelles Bauchmuskeltraining im Längsverlauf der Mm. recti", "Funktionelles Beckenbodentraining", "Aktivierung der Bauchkapsel", "LWS mobilisieren"],
    cave: ["Keine Bauchmuskelübungen in Rückenlage (Sit-ups) – provozieren das Rektusphänomen", "Aufstehen über die Seite"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["bauch-verkuerzen", "stehpendel", "sitzpendel", "brueckenbauch", "erster-pfeiler", "tuermchen", "boden-gibt-kraft", "malende-sitzknochen", "transfer-ueber-seitlage"]
      }
    ],
    quelle: ["KG Gyn – Komplikationen im Wochenbett", "KG Gyn – Behandlung im Frühwochenbett"]
  },
  {
    id: "symphysenlockerung",
    fach: "gyn",
    name: "Symphysenlockerung / -ruptur",
    kurz: "Hormonell oder durch Geburtstrauma gelockerte Symphyse: Schmerzen an der Symphyse mit Ausstrahlung in Leisten und Beine, „Watschelgang“, ISG-Schmerzen. Versorgung mit Beckenring-Stützgürtel und stabilisierender Physiotherapie.",
    ziele: ["Beckenring stabilisieren", "Schmerzlinderung", "Symmetrische Rückbildungsübungen"],
    cave: ["Keine Übungen mit Einsatz der Oberschenkel-Adduktoren", "Keine asymmetrischen Übungen, keine einseitige Beckenbelastung", "Keine Wippübungen auf dem Pezziball"],
    phasen: [
      {
        titel: "Geeignete Rückbildungsübungen",
        uebungen: ["boden-gibt-kraft", "sitzpendel", "stehpendel", ["abwalzen-ball", "Nur symmetrisch vor/zurück, kurzer Weg, harter Ball"], "bauchatmung", "transfer-ueber-seitlage"]
      }
    ],
    quelle: ["KG Gyn – Komplikationen im Wochenbett"]
  },
  {
    id: "belastungsinkontinenz",
    fach: "gyn",
    name: "Belastungsinkontinenz / Beckenbodenschwäche",
    kurz: "Ungewollter Urinverlust bei Druckerhöhung (Husten, Niesen, Heben) durch insuffiziente Beckenboden-Sphinkter-Funktion, häufig nach Geburten.",
    ziele: ["Beckenboden wahrnehmen, kräftigen und reaktiv schnell machen", "Druckausgleich über die Bauchkapsel", "Kontinenzsichernde Alltagsstrategien"],
    cave: ["Bild der Inkontinenz in Übungsanleitungen vermeiden", "Pressatmung vermeiden"],
    phasen: [
      {
        titel: "Wahrnehmung",
        uebungen: ["fadenkreuz", "seerose", "schwamm", "stenosierte-ausatmung-ch"]
      },
      {
        titel: "Kraft und Reaktion",
        uebungen: ["phonationsatmung", "fersenflug", "wasser-kocht", "rumpelstilzchen", "rueckhandbremse", "wandwalze", "hirtenstab", "abwalzen-ball", "boden-gibt-kraft"]
      },
      {
        titel: "Alltag",
        uebungen: ["hustendreh", "kontinentes-buecken-heben", "toilettenverhalten"]
      }
    ],
    quelle: ["KG Gyn – Übungen für Beckenbodentraining", "KG Gyn – Beckenbodenschonende Verhaltensweisen", "KG Gyn – Übungsbeispiele rhythmischer Koordination"]
  },
  {
    id: "deszensus",
    fach: "gyn",
    name: "Deszensus (Senkung von Blase/Uterus)",
    kurz: "Tiefertreten der Beckenorgane durch geschwächten Halteapparat. Senkungsprophylaxe: Druck- und Schubkräfte nach kaudal vermeiden, Beckenboden und Rumpfkapsel aktivieren.",
    ziele: ["Zwerchfell-Beckenboden-Synergismus", "Senkungsprophylaxe durch Ausgangsstellungen mit Entlastung (BL, Knie-Ellbogen-Stütz)", "Alltagsverhalten ohne Pressen"],
    cave: ["Keine Bauch- und Beckenbodenübungen in Rückenlage mit Druckaufbau", "Kein Pressen beim Stuhlgang"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["fadenkreuz", "malende-sitzknochen", "stenosierte-ausatmung-ch", "therapeutische-bauchlage", "knie-ellbogen-mobilitaet", "boden-gibt-kraft", "wandwalze", "toilettenverhalten", "kontinentes-buecken-heben"]
      }
    ],
    quelle: ["KG Gyn – Der Beckenboden im Fadenkreuz", "KG Gyn – Übungen für Beckenbodentraining", "KG Gyn – Komplikationen im Wochenbett"]
  },
  {
    id: "venen-wochenbett",
    fach: "gyn",
    name: "Thrombose-Risiko & Varikosis im Wochenbett",
    kurz: "Postpartale Hypotonie, Blutstromverlangsamung und varikös veränderte Venen begünstigen Thrombophlebitis und Phlebothrombose. Prophylaxe durch Mobilisation, Muskelpumpe und Kompression.",
    ziele: ["Venösen Rückstrom fördern", "Frühe Mobilisation"],
    cave: ["Bei geröteten, druckdolenten Venensträngen, Schwellung oder Wadenschmerz Arzt informieren", "Bei akuter Thrombose keine MLD und keine Übungen am betroffenen Bein ohne ärztliche Freigabe"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["venenpumpe", "tiefatmung-rueckstrom", "bauchatmung", ["tuermchen", "Bauchspannung als Venenpumpe"], "hochlagerung", "dynamisches-gehen", "kreislaufanregung-aufstehen", ["wechselreize", "Nur kühle Güsse; nicht bei Thromboseverdacht"]]
      }
    ],
    quelle: ["KG Gyn – Komplikationen im Wochenbett", "KG Gyn – Behandlung im Frühwochenbett"]
  },
  {
    id: "baby-blues",
    fach: "gyn",
    name: "Postpartale Stimmungskrise (Baby Blues)",
    kurz: "Kurzfristiges Stimmungstief meist zwischen dem 3. und 5. Tag nach der Entbindung durch die hormonelle Umstellung. Länger anhaltende Symptome können auf eine postpartale Depression hinweisen.",
    ziele: ["Entlastung und Entspannung", "Sanfte Aktivierung", "Ressourcen stärken"],
    cave: ["Bei anhaltender Niedergeschlagenheit oder Suizidgedanken sofort ärztliche Hilfe einbeziehen"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["atmung-4-6", "body-scan", "walking", "stillzeit-uebungen", "resilienz"]
      }
    ],
    quelle: ["KG Gyn – Komplikationen im Wochenbett", "KG Psych – Merkblatt Depression"]
  }
);
