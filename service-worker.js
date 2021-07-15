let cachables = [
    "/",
    "/index.html",
    "/scripts",
    "/stylesheets",
    "/images",
    "/scripts/script.js",
    "/scripts/functions.js",
    "/scripts/pwa-handler.js",
    "/stylesheets/style.css",
    "/images/download.svg",
    "/images/favicon.png",
    "/images/maskable.png",
    "/images/title.png",
];

self.addEventListener("install", (event) => event.waitUntil(caches.open("cache").then((cache) => cache.addAll(cachables))));

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response ? response : fetch(event.request);
        })
    );
});
