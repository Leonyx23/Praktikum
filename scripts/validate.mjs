#!/usr/bin/env node
/*
 * Prüft die Daten auf Fehler: doppelte IDs, unbekannte Übungsarten oder
 * Fachbereiche, Verweise auf nicht vorhandene Übungen und Übungen,
 * die keinem Krankheitsbild zugeordnet sind.
 *
 * Aufruf:  node scripts/validate.mjs
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="(data\/[^"]+)"/g)].map((m) => m[1]);

const ctx = { window: {} };
vm.createContext(ctx);
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
  if (!ctx.PT) ctx.PT = ctx.window.PT;
}
const PT = ctx.window.PT;

const errors = [];
const warnings = [];

const exIds = new Map();
for (const u of PT.uebungen) {
  if (exIds.has(u.id)) errors.push(`Doppelte Übungs-ID: ${u.id}`);
  exIds.set(u.id, u);
  if (!PT.arten[u.art]) errors.push(`Übung ${u.id}: unbekannte Art "${u.art}"`);
  if (u.technik) {
    if (!Array.isArray(u.technik) || !u.technik.length) errors.push(`Übung ${u.id}: "technik" muss eine nicht leere Liste sein`);
    else u.technik.forEach((t, i) => {
      for (const key of ["bewegung", "proximal", "distal"]) if (!t[key]) errors.push(`Übung ${u.id}: technik[${i}] ohne "${key}"`);
    });
  }
  for (const key of ["name", "aste", "ablauf", "quelle"]) {
    if (!u[key] || (Array.isArray(u[key]) && !u[key].length)) errors.push(`Übung ${u.id}: Feld "${key}" fehlt`);
  }
}

const fachIds = new Set(PT.fachbereiche.map((f) => f.id));
const kbIds = new Set();
const used = new Set();
for (const k of PT.krankheitsbilder) {
  if (kbIds.has(k.id)) errors.push(`Doppelte Krankheitsbild-ID: ${k.id}`);
  kbIds.add(k.id);
  if (!fachIds.has(k.fach)) errors.push(`Krankheitsbild ${k.id}: unbekannter Fachbereich "${k.fach}"`);
  const phasen = k.phasen || [{ uebungen: k.uebungen || [] }];
  for (const p of phasen) {
    const seen = new Set();
    for (const e of p.uebungen) {
      const id = Array.isArray(e) ? e[0] : e;
      if (!exIds.has(id)) errors.push(`Krankheitsbild ${k.id}: unbekannte Übung "${id}"`);
      if (seen.has(id) && !Array.isArray(e)) warnings.push(`Krankheitsbild ${k.id}: Übung "${id}" mehrfach ohne Hinweis`);
      seen.add(id);
      used.add(id);
    }
  }
}

for (const id of exIds.keys()) if (!used.has(id)) warnings.push(`Übung "${id}" ist keinem Krankheitsbild zugeordnet`);

// Service Worker muss alle Datendateien kennen, sonst fehlen sie offline
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
for (const f of files) if (!sw.includes(`"${f}"`)) errors.push(`sw.js: Datei fehlt in FILES: ${f}`);

const perFach = {};
for (const k of PT.krankheitsbilder) perFach[k.fach] = (perFach[k.fach] || 0) + 1;

console.log(`${PT.uebungen.length} Übungen, ${PT.krankheitsbilder.length} Krankheitsbilder`);
console.log(PT.fachbereiche.map((f) => `  ${f.name}: ${perFach[f.id] || 0}`).join("\n"));
warnings.forEach((w) => console.log("Hinweis: " + w));
errors.forEach((e) => console.error("FEHLER: " + e));
process.exit(errors.length ? 1 : 0);
