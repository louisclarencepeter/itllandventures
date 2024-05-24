self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/logo192.png',
          '/logo512.png',
          // Add more assets to cache during installation
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    // Intercept fetch requests and serve cached assets if available
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });