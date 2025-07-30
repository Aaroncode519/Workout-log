self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("workout-log-cache").then(cache => {
            return cache.addAll([
                "/index.html",
                "https://cdn.jsdelivr.net/npm/chart.js"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});