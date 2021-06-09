let urlsToCache = [
    "/",
    "/index.html",
    "/script.js", 
    "/pwa-handler.js",
    "/style.css"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open('cache').then((cache) => {
            console.log("Caching started.");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});