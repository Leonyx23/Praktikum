/*
 * Grunddaten: Fachbereiche und Übungsarten.
 * Diese Datei muss als erste Datendatei geladen werden.
 *
 * Die Farben der Fachbereiche folgen den Thera-Band-Stärken
 * (gelb – rot – grün – blau – schwarz – silber – gold).
 */
window.PT = {
  version: "1.1.0",

  fachbereiche: [
    {
      id: "innere",
      name: "Innere Medizin",
      band: "rot",
      farbe: "#C8352B",
      text: "#FFFFFF",
      beschreibung: "Herz, Kreislauf und Lunge – Belastung dosieren, Atmung erleichtern, Prophylaxen sichern."
    },
    {
      id: "neuro",
      name: "Neurologie",
      band: "blau",
      farbe: "#2C5AA0",
      text: "#FFFFFF",
      beschreibung: "Schlaganfall, Parkinson, MS und SHT – Bobath, Haltungskontrolle, Gang und Alltag."
    },
    {
      id: "paedi",
      name: "Pädiatrie",
      band: "gelb",
      farbe: "#E8C330",
      text: "#2A2410",
      beschreibung: "Säuglinge und Kinder – Handling, Schoßbehandlung, Entwicklungsförderung und Atemwege."
    },
    {
      id: "gyn",
      name: "Gynäkologie",
      band: "grün",
      farbe: "#2E8B57",
      text: "#FFFFFF",
      beschreibung: "Schwangerschaft, Wochenbett und Beckenboden – Rumpfkapsel aktivieren, schonend bewegen."
    },
    {
      id: "chirurgie",
      name: "Chirurgie",
      band: "schwarz",
      farbe: "#25282B",
      text: "#FFFFFF",
      beschreibung: "Frakturen und Verletzungen – Prophylaxen, Belastungsvorgaben, Fraktursicherung und Gangschule."
    },
    {
      id: "ortho",
      name: "Orthopädie",
      band: "silber",
      farbe: "#A9B0B6",
      text: "#1C2328",
      beschreibung: "Arthrose, Endoprothesen, Schulter, Tendopathien und Kompressionssyndrome."
    },
    {
      id: "psych",
      name: "Psychologie",
      band: "gold",
      farbe: "#B8902F",
      text: "#1F1806",
      beschreibung: "Psychiatrie und Psychosomatik – aktivieren, wahrnehmen, entspannen, Struktur geben."
    }
  ],

  arten: {
    atmung:       { name: "Atemtherapie" },
    herz:         { name: "Herz-Kreislauf & Ausdauer" },
    prophylaxe:   { name: "Prophylaxe & Lagerung" },
    adl:          { name: "Transfer, Gang & Alltag" },
    kraft:        { name: "Kräftigung & Stabilisation" },
    koordination: { name: "Koordination & Gleichgewicht" },
    mobilisation: { name: "Mobilisation & Manuelle Techniken" },
    kgtechnik:    { name: "KG-Techniken (Grifftechniken)" },
    dehnung:      { name: "Dehnung" },
    pnf:          { name: "PNF" },
    neuro:        { name: "Bobath & Neurorehabilitation" },
    paedi:        { name: "Handling & Entwicklungsförderung" },
    beckenboden:  { name: "Beckenboden & Rumpfkapsel" },
    psyche:       { name: "Wahrnehmung, Entspannung & Aktivierung" },
    passiv:       { name: "Passive & physikalische Maßnahmen" }
  },

  uebungen: [],
  krankheitsbilder: []
};
