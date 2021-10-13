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
        './images/roll0.jpg',
        './images/roll1.jpg',
        './images/roll2.jpg',
        './images/roll3.jpg',
        './images/roll4.jpg',
        './images/roll5.jpg',
        './images/roll6.jpg',
        './images/roll7.jpg',
        './images/roll8.jpg',
        './images/roll9.jpg',
        './images/roll10.jpg',
        './images/roll11.jpg',
        './images/roll12.jpg',
        './images/roll13.jpg',
        './images/roll14.jpg',
        './images/roll15.jpg',
        './images/roll16.jpg',
        './images/roll17.jpg',
        './images/roll18.jpg',
        './images/roll19.jpg',
        './images/roll20.jpg',
        './images/roll21.jpg',
        './images/roll22.jpg',
        './images/roll23.jpg',
        './images/roll24.jpg',
        './images/roll25.jpg',
        './images/roll26.jpg',
        './images/roll27.jpg',
        './images/roll28.jpg',
        './images/roll29.jpg',
        './images/roll30.jpg',
        './images/roll31.jpg',
        './images/roll32.jpg',
        './images/roll33.jpg',
        './images/roll34.jpg',
        './images/roll35.jpg',
        './images/roll36.jpg',
        './images/roll37.jpg',
        './images/roll38.jpg',
        './images/roll39.jpg',
        './images/roll40.jpg',
        './images/roll41.jpg',
        './images/roll42.jpg',
        './images/roll43.jpg',
        './images/roll44.jpg',
        './images/roll45.jpg',
        './images/roll46.jpg',
        './images/roll47.jpg',
        './images/roll48.jpg',
        './images/roll49.jpg',
        './images/roll50.jpg',
        './images/roll51.jpg',
        './images/roll52.jpg',
        './images/roll53.jpg',
        './images/roll54.jpg',
        './images/roll55.jpg',
        './images/roll56.jpg',
        './images/roll57.jpg',
        './images/roll58.jpg',
        './images/roll59.jpg',
        './images/roll60.jpg',
        './images/roll61.jpg',
        './images/roll62.jpg',
        './images/roll63.jpg',
        './images/roll64.jpg',
        './images/roll65.jpg',
        './images/roll66.jpg',
        './images/roll67.jpg',
        './images/roll68.jpg',
        './images/roll69.jpg',
        './images/roll70.jpg',
        './images/roll71.jpg',
        './images/roll72.jpg', 
        './images/roll73.jpg',
        './images/roll74.jpg', 
        './images/roll75.jpg',
        './images/roll76.jpg', 
        './images/roll77.jpg',
        './images/roll78.jpg', 
        './images/roll79.jpg',
        './images/roll80.jpg', 
        './images/roll81.jpg',
        './images/roll82.jpg', 
        './images/roll83.jpg',
        './images/roll84.jpg', 
        './images/roll85.jpg',
        './images/roll86.jpg'
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
