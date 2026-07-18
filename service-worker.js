const CACHE_NAME = "dvanshop-v4";

const urlsToCache = [
  "/",
  "/index.html",

  "/css/style.css",

  "/js/app.js",
  "/js/products.js",
  "/js/detail.js",

  "/pages/detail.html",

  "/data/products.json",

  "/manifest.json"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        if (response) {
          return response;
        }

        return fetch(event.request)
          .then(networkResponse => {

            if (
              event.request.method === "GET" &&
              networkResponse.status === 200
            ) {

              const clone = networkResponse.clone();

              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, clone);
                });

            }

            return networkResponse;

          });

      })

  );

});