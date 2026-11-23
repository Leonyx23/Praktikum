/*
 * Service Worker: macht die App offline nutzbar.
 * Nach Änderungen an Dateien die Versionsnummer erhöhen, damit
 * installierte Apps die neuen Dateien laden.
 */
const VERSION = "bandbreite-v1.2.0";

const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/style.css",
  "js/app.js",
  "data/kategorien.js",
  "data/uebungen/01-atmung-herz-prophylaxe.js",
  "data/uebungen/02-adl-kraft-koordination.js",
  "data/uebungen/03-mobilisation-dehnung.js",
  "data/uebungen/04-pnf-neuro-paedi.js",
  "data/uebungen/05-beckenboden-psyche.js",
  "data/uebungen/06-kg-techniken.js",
  "data/uebungen/07-atemtherapie.js",
  "data/krankheitsbilder/innere.js",
  "data/krankheitsbilder/neuro.js",
  "data/krankheitsbilder/paedi.js",
  "data/krankheitsbilder/gyn.js",
  "data/krankheitsbilder/chirurgie.js",
  "data/krankheitsbilder/ortho.js",
  "data/krankheitsbilder/psych.js",
  "fonts/atkinson-hyperlegible-latin-400-normal.woff2",
  "fonts/atkinson-hyperlegible-latin-400-italic.woff2",
  "fonts/atkinson-hyperlegible-latin-700-normal.woff2",
  "fonts/bricolage-grotesque-latin-600-normal.woff2",
  "fonts/bricolage-grotesque-latin-800-normal.woff2",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(event.request).then((res) => {
        if (res.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(VERSION).then((cache) => cache.put(event.request, copy));
        }
        return res;
      });
    })
  );
});
