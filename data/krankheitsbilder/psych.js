/* Krankheits- und Rehabilder: Psychologie (Psychiatrie & Psychosomatik) */
PT.krankheitsbilder.push(
  {
    id: "depression",
    fach: "psych",
    name: "Depression (F32/F33)",
    kurz: "Gedrückte Stimmung, verminderter Antrieb und Aktivität, oft eingesunkene Haltung, Grübeln und Schlafstörungen. Bewegung fördert Antrieb und Stimmung, stärkt Selbstwirksamkeit – ergänzt Psychotherapie und Medikation, ersetzt sie nicht.",
    ziele: ["Antrieb steigern, Selbstwirksamkeit erleben", "Nonverbalen Ausdruck, Körperbewusstsein und Selbstwahrnehmung verbessern", "Körperliche Belastbarkeit und Koordination", "Tagesstruktur und Schlafrhythmus", "Wohlbefinden vor Leistung"],
    cave: ["Klein anfangen, nicht überfordern; klar, deutlich, langsam sprechen", "Antidepressiva: Schwindel möglich – langsam aufstehen", "Schwere Depression oder Suizidgedanken: nur in Absprache mit dem Behandlungsteam; akut sofort Hilfe holen"],
    phasen: [
      {
        titel: "Gruppe 1: passive Maßnahmen",
        uebungen: ["schnelle-lagerung", "body-scan", "igelball-koerperwahrnehmung", "atmung-4-6", "koerpergrenzen", ["kreislaufanregung-aufstehen", "Antidepressiva: langsam aufstehen (Schwindel)"]]
      },
      {
        titel: "Gruppe 2: verstärkende Aktivierung",
        uebungen: ["walking", "aufrichten-schulterkreisen", "dehnung-pectoralis", "embodiment", "schwungtuch", "tai-chi-qigong", "pmr"]
      },
      {
        titel: "Gruppe 3: fordernde Aktivierung",
        uebungen: ["aufstehen-stuhl", "rudern-theraband", "energizing", "ringspiele-partner", "koerperschema", "aktivitaetsplanung"]
      }
    ],
    quelle: ["KG Psych – Merkblatt Depression mit Physiotherapie", "KG Psych – F3 Affektive Störungen", "KG Psych – Examensfragen"]
  },
  {
    id: "manie-bipolar",
    fach: "psych",
    name: "Manie / Bipolare Störung (F30/F31)",
    kurz: "Manie: gehobene oder gereizte Stimmung, gesteigerter Antrieb, Rededrang, Ideenflucht, vermindertes Schlafbedürfnis, oft fehlende Krankheitseinsicht. Bipolar: Wechsel manischer und depressiver Phasen.",
    ziele: ["Manische Phase: reizarme, ruhige Bewegung, Entspannung fest einbauen", "Depressive Phase: wie Depression aktivieren", "Schlafrhythmus schützen", "Überlastung und Risikoverhalten im Blick behalten"],
    cave: ["Keine Hochintensitäts- oder Wettkampftrainings, nicht spät abends trainieren", "Ruhig und freundlich bleiben, Distanz wahren, keine Diskussionen, nichts auf sich beziehen", "Keine Gegenstände, die zu Verletzungen führen können; bei Aggression Eigenschutz", "Lithium: ausreichend trinken, Hitze und starkes Schwitzen meiden"],
    phasen: [
      {
        titel: "Manische Phase",
        uebungen: ["walking", "atmung-4-6", "pmr", "body-scan", "gehmeditation", "dehnung-trapezius", "tai-chi-qigong"]
      },
      {
        titel: "Depressive Phase",
        uebungen: ["aktivitaetsplanung", "walking", "embodiment", "aufstehen-stuhl"]
      }
    ],
    quelle: ["KG Psych – Merkblatt Depression mit Physiotherapie", "KG Psych – F3 Affektive Störungen", "KG Psych – Examensfragen"]
  },
  {
    id: "schizophrenie",
    fach: "psych",
    name: "Schizophrenie (F2)",
    kurz: "Störungen von Denken, Wahrnehmung (Halluzinationen, Wahn), Affekt und Antrieb; mögliche Katatonie (Stupor: starr, reglos). Patienten brauchen in der Gruppe besonders viel Struktur.",
    ziele: ["Struktur und Sicherheit geben", "Körperschema und Körpergrenzen erfahren", "Realitätsbezug über konkrete Bewegungsaufgaben", "Soziale Interaktion"],
    cave: ["Klare Vorgaben, Zeitpläne, Regeln; Musik vorsichtig (Reizüberflutung); Geräte, in die etwas hineininterpretiert werden kann, meiden", "Entspannungsübungen mit „sich fallen lassen“ und Liegen mit geschlossenen Augen meist kontraindiziert", "Katatoner Stupor: liegen lassen, Umfeld absichern, erklärendes Tun, ruhig und flächig greifen"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["koerperschema", ["koerpergrenzen", "Sandsäckchen, Einwickeln – im Sitz statt Liegen"], "walking", "stab-uebungen-sitz", "ringspiele-partner", "gehmeditation", "tai-chi-qigong"]
      },
      {
        titel: "Katatoner Stupor: Prophylaxen",
        info: "Liegen lassen, Umfeld absichern, jede Handlung ankündigen.",
        uebungen: [["hautinspektion-fingertest", "Bei Bewegungslosigkeit regelmäßig"], "umlagerung", ["kgt-schulter-rl", "Erklärendes Tun, ruhig und flächig greifen"], "kgt-huefte-sl", "kgt-knie-rl", ["venenpumpe", "Passiv, wenn keine Eigenaktivität möglich ist"], "kontaktatmung"]
      }
    ],
    quelle: ["KG Psych – Examensfragen", "KG Psych – Einführung PT Psychiatrie", "KG Psych – Inhaltsverzeichnis"]
  },
  {
    id: "angst-ptbs",
    fach: "psych",
    name: "Angststörungen & PTBS (F4)",
    kurz: "Neurotische und Belastungsstörungen: Angst- und Panikattacken, posttraumatische Belastungsstörung mit Wiedererleben, Vermeidung und Übererregung. Körperorientierte Therapie fördert Sicherheit und Selbstregulation (Vulnerabilitäts-Stress-Coping-Modell).",
    ziele: ["Selbstregulation über Atmung", "Sicherheit im eigenen Körper", "Achtsamkeit statt Vermeidung", "Ressourcen und Resilienz stärken"],
    cave: ["Körperkontakt nur nach Absprache, Distanzzonen respektieren", "Trigger vermeiden; Augen offen lassen dürfen", "Ruhige, vorhersehbare Struktur"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["atmung-4-6", "kontaktatmung", "achtsamkeit", "body-scan", "gehmeditation", "pmr", "koerpergrenzen", "walking", "resilienz"]
      }
    ],
    quelle: ["KG Psych – Einführung PT Psychiatrie", "KG Psych – Inhaltsverzeichnis", "KG Psych – Arbeitsblatt Resilienz"]
  },
  {
    id: "somatoforme-schmerzstoerung",
    fach: "psych",
    name: "Somatoforme Schmerzstörung / psychosomatische Beschwerden (F45)",
    kurz: "Anhaltende Schmerzen ohne ausreichende organische Erklärung; Wechselwirkung von Psyche und Körper (Psychosomatik, Embodiment) – z. B. Stress führt zu Nackenschmerzen.",
    ziele: ["Körperwahrnehmung und Entspannung", "Aktivität trotz Schmerz (dosiert)", "Haltung und Embodiment", "Stressbewältigung"],
    cave: ["Beschwerden ernst nehmen, nicht bagatellisieren", "Passive Maßnahmen nicht dauerhaft in den Vordergrund stellen"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["pmr", "body-scan", "embodiment", "aufrichten-schulterkreisen", "dehnung-trapezius", "walking", "tai-chi-qigong", "aktivitaetsplanung", "resilienz"]
      }
    ],
    quelle: ["KG Psych – Einführung PT Psychiatrie", "KG Psych – Inhaltsverzeichnis"]
  },
  {
    id: "essstoerungen",
    fach: "psych",
    name: "Essstörungen (F5)",
    kurz: "Anorexie, Bulimie, Binge-Eating mit gestörtem Körperbild; oft übermäßiger Bewegungsdrang oder Rückzug. Physiotherapie zielt auf realistische Körperwahrnehmung und einen achtsamen, nicht leistungsorientierten Umgang mit Bewegung.",
    ziele: ["Körperbild und Körperschema", "Achtsame, genussvolle statt leistungsorientierte Bewegung", "Entspannung und Selbstwahrnehmung"],
    cave: ["Keine Kalorien-, Gewichts- oder Leistungsorientierung", "Belastung nur in Absprache mit dem Behandlungsteam (Untergewicht, Kreislauf, Elektrolyte)", "Keine Übungen mit Essen (z. B. Schoko-Bons-Übung)"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: [["koerpergrenzen", "Körperausdehnung malen und vergleichen nur nach Absprache im Team"], "koerperschema", "body-scan", "atmung-4-6", "tai-chi-qigong", "achtsamkeit"]
      }
    ],
    quelle: ["KG Psych – Einführung PT Psychiatrie", "KG Psych – Inhaltsverzeichnis"]
  },
  {
    id: "sucht",
    fach: "psych",
    name: "Abhängigkeitserkrankungen / Alkohol (F1)",
    kurz: "Psychische und Verhaltensstörungen durch psychotrope Substanzen. Zu erwarten: Unruhe, Aggressivität, Angst, Stimmungslabilität, mangelnde Einsicht, geringe Compliance, Craving; Folgeerkrankungen (z. B. Polyneuropathie).",
    ziele: ["Struktur und Tagesrhythmus", "Körperliche Fitness, Erfolgserlebnisse", "Stressregulation als Alternative zum Konsum", "Gleichgewicht bei Folgeerkrankungen"],
    cave: ["Klare Regeln und Grenzen", "Entzugssymptome und Kreislauf beachten"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["walking", "ergometer", "pmr", "atmung-4-6", "energizing", "aktivitaetsplanung", "resilienz", "tandem", "einbeinstand", ["kreislaufanregung-aufstehen", "Im Entzug Kreislauf beachten"]]
      }
    ],
    quelle: ["KG Psych – Examensfragen", "KG Psych – Inhaltsverzeichnis"]
  },
  {
    id: "demenz-geronto",
    fach: "psych",
    name: "Demenz / Gerontopsychiatrie (F0)",
    kurz: "Organisch bedingte psychische Störungen mit Abbau von Gedächtnis, Orientierung und Alltagskompetenz. Bewegungstherapie in der Gerontopsychiatrie will Bewegungsfreude vermitteln, Koordination und Geschicklichkeit trainieren, Stürze verhindern und soziale Interaktion fördern.",
    ziele: ["Bewegungsfreude", "Koordination und Geschicklichkeit", "Sturzprophylaxe", "Soziale Interaktionsfähigkeit"],
    cave: ["Einfache, kurze Anweisungen, vormachen statt erklären", "Vertraute Abläufe und Rituale"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["hockergymnastik", "ente-am-teich", "ball-sitz", "stab-uebungen-sitz", "schwungtuch", "ringspiele-partner", "alltagsbewegungen-nachmachen", "aufstehen-stuhl", "gewichtsverlagerung-stand", "gehen-ebene"]
      },
      {
        titel: "Bettlägerige Patienten",
        uebungen: ["hautinspektion-fingertest", "hochrutschen-scherkraftarm", ["kgt-schulter-rl", "Bewegungen vormachen und ankündigen"], "kgt-knie-rl", "kreislaufanregung-aufstehen"]
      }
    ],
    quelle: ["KG Psych – Examensfragen", "KG Psych – Inhaltsverzeichnis", "KG Innere – Hockergymnastik"]
  },
  {
    id: "stress-burnout",
    fach: "psych",
    name: "Stress, Burnout-Prävention & Resilienz",
    kurz: "Chronischer Stress als Risikofaktor für psychische und körperliche Erkrankungen. Resilienz ist erlernbar: Lebenssinn, Kohärenzgefühl, positive Emotionen, Selbstwirksamkeit, aktives Coping, soziale Unterstützung.",
    ziele: ["Entspannungsfähigkeit", "Achtsamkeit im Alltag", "Bewegung als Ausgleich", "Ressourcen erkennen und nutzen"],
    cave: ["Leistungsdruck in der Therapie vermeiden (vgl. Managertyp)"],
    phasen: [
      {
        titel: "Übungen",
        uebungen: ["resilienz", "achtsamkeit", "schoko-bons", "pmr", "body-scan", "atmung-4-6", "fantasiereise", "walking", "embodiment", "aufrichten-schulterkreisen"]
      }
    ],
    quelle: ["KG Psych – Arbeitsblatt Resilienz", "KG Psych – Perspektiven Resilienz trainieren", "KG Psych – Einführung PT Psychiatrie"]
  }
);
