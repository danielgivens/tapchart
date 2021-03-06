self.addEventListener('install', function(event) {
  event.waitUntil((async () => {
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './image-list.js',      
        './images/apple-touch-icon.png',
        './images/touch-icon-192x192.png',
        './images/roll-0.jpg',
        './images/roll-1.jpg',
        './images/roll-2.jpg',
        './images/roll-3.jpg',
        './images/roll-4.jpg',
        './images/roll-5.jpg',
        './images/roll-6.jpg',
        './images/roll-7.jpg',
        './images/roll-8.jpg',
        './images/roll-9.jpg',
        './images/roll-10.jpg',
        './images/roll-11.jpg',
        './images/roll-12.jpg',
        './images/roll-13.jpg',
        './images/roll-14.jpg',
        './images/roll-15.jpg',
        './images/roll-16.jpg',
        './images/roll-17.jpg',
        './images/roll-18.jpg',
        './images/roll-19.jpg',
        './images/roll-20.jpg',
        './images/roll-21.jpg',
        './images/roll-22.jpg',
        './images/roll-23.jpg',
        './images/roll-24.jpg',
        './images/roll-25.jpg',
        './images/roll-26.jpg',
        './images/roll-27.jpg',
        './images/roll-28.jpg',
        './images/roll-29.jpg',
        './images/roll-30.jpg',
        './images/roll-31.jpg',
        './images/roll-32.jpg',
        './images/roll-33.jpg',
        './images/roll-34.jpg',
        './images/roll-35.jpg',
        './images/roll-36.jpg',
        './images/roll-37.jpg',
        './images/roll-38.jpg',
        './images/roll-39.jpg',
        './images/roll-40.jpg',
        './images/roll-41.jpg',
        './images/roll-42.jpg',
        './images/roll-43.jpg',
        './images/roll-44.jpg',
        './images/roll-45.jpg',
        './images/roll-46.jpg',
        './images/roll-47.jpg',
        './images/roll-48.jpg',
        './images/roll-49.jpg',
        './images/roll-50.jpg',
        './images/roll-51.jpg',
        './images/roll-52.jpg',
        './images/roll-53.jpg',
        './images/roll-54.jpg',
        './images/roll-55.jpg',
        './images/roll-56.jpg',
        './images/roll-57.jpg',
        './images/roll-58.jpg',
        './images/roll-59.jpg',
        './images/roll-60.jpg',
        './images/roll-61.jpg',
        './images/roll-62.jpg',
        './images/roll-63.jpg',
        './images/roll-64.jpg',
        './images/roll-65.jpg',
        './images/roll-66.jpg',
        './images/roll-67.jpg',
        './images/roll-68.jpg',
        './images/roll-69.jpg',
        './images/roll-70.jpg',
        './images/roll-71.jpg',
        './images/roll-72.jpg', 
        './images/roll-73.jpg',
        './images/roll-74.jpg', 
        './images/roll-75.jpg',
        './images/roll-76.jpg', 
        './images/roll-77.jpg',
        './images/roll-78.jpg', 
        './images/roll-79.jpg',
        './images/roll-80.jpg', 
        './images/roll-81.jpg',
        './images/roll-82.jpg', 
        './images/roll-83.jpg'
      ]);
    });
   })());
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
  
    if (response !== undefined) {
      //console.log(`[Service Worker] Fetching resource from cache: ${event.request.url}`);
      return response;
    } else {
      //console.log(`[Service Worker] Fetching resource from network: ${event.request.url}`);
      return fetch(event.request).then(function (response) {
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
        // console.log(`[Service Worker] Caching resource: ${event.request.url}`);
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        //console.log('offline');
      });
    }
  }));
});
