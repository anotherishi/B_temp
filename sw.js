let urlsToCache = ["/", "/index.html"];

self.addEventListener("install", (event) => 
    event.waitUntil(caches.open("cache").then((cache) => 
        cache.addAll(urlsToCache)
    ))
);

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response ? response : fetch(event.request);
        })
    );
});
