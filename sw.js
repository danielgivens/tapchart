self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/roll-chart/',
        '/roll-chart/index.html',
        '/roll-chart/style.css',
        '/roll-chart/app.js',
        '/roll-chart/images/icon-undo.png',
        '/roll-chart/image-list.js',
        '/roll-chart/images/roll-0.jpg',
        '/roll-chart/images/roll-1.jpg',
        '/roll-chart/images/roll-2.jpg',
        '/roll-chart/images/roll-3.jpg',
        '/roll-chart/images/roll-4.jpg',
        '/roll-chart/images/roll-5.jpg',
        '/roll-chart/images/roll-6.jpg',
        '/roll-chart/images/roll-7.jpg',
        '/roll-chart/images/roll-8.jpg',
        '/roll-chart/images/roll-9.jpg',
        '/roll-chart/images/roll-10.jpg',
        '/roll-chart/images/roll-11.jpg',
        '/roll-chart/images/roll-12.jpg',
        '/roll-chart/images/roll-13.jpg',
        '/roll-chart/images/roll-14.jpg',
        '/roll-chart/images/roll-15.jpg',
        '/roll-chart/images/roll-16.jpg',
        '/roll-chart/images/roll-17.jpg',
        '/roll-chart/images/roll-18.jpg',
        '/roll-chart/images/roll-19.jpg',
        '/roll-chart/images/roll-20.jpg',
        '/roll-chart/images/roll-21.jpg',
        '/roll-chart/images/roll-22.jpg',
        '/roll-chart/images/roll-23.jpg',
        '/roll-chart/images/roll-24.jpg',
        '/roll-chart/images/roll-25.jpg',
        '/roll-chart/images/roll-26.jpg',
        '/roll-chart/images/roll-27.jpg',
        '/roll-chart/images/roll-28.jpg',
        '/roll-chart/images/roll-29.jpg',
        '/roll-chart/images/roll-30.jpg',
        '/roll-chart/images/roll-31.jpg',
        '/roll-chart/images/roll-32.jpg',
        '/roll-chart/images/roll-33.jpg',
        '/roll-chart/images/roll-34.jpg',
        '/roll-chart/images/roll-35.jpg',
        '/roll-chart/images/roll-36.jpg',
        '/roll-chart/images/roll-37.jpg',
        '/roll-chart/images/roll-38.jpg',
        '/roll-chart/images/roll-39.jpg',
        '/roll-chart/images/roll-40.jpg',
        '/roll-chart/images/roll-41.jpg',
        '/roll-chart/images/roll-42.jpg',
        '/roll-chart/images/roll-43.jpg',
        '/roll-chart/images/roll-44.jpg',
        '/roll-chart/images/roll-45.jpg',
        '/roll-chart/images/roll-46.jpg',
        '/roll-chart/images/roll-47.jpg',
        '/roll-chart/images/roll-48.jpg',
        '/roll-chart/images/roll-49.jpg',
        '/roll-chart/images/roll-50.jpg',
        '/roll-chart/images/roll-51.jpg',
        '/roll-chart/images/roll-52.jpg',
        '/roll-chart/images/roll-53.jpg',
        '/roll-chart/images/roll-54.jpg',
        '/roll-chart/images/roll-55.jpg',
        '/roll-chart/images/roll-56.jpg',
        '/roll-chart/images/roll-57.jpg',
        '/roll-chart/images/roll-58.jpg',
        '/roll-chart/images/roll-59.jpg',
        '/roll-chart/images/roll-60.jpg',
        '/roll-chart/images/roll-61.jpg',
        '/roll-chart/images/roll-62.jpg',
        '/roll-chart/images/roll-63.jpg',
        '/roll-chart/images/roll-64.jpg',
        '/roll-chart/images/roll-65.jpg',
        '/roll-chart/images/roll-66.jpg',
        '/roll-chart/images/roll-67.jpg',
        '/roll-chart/images/roll-68.jpg',
        '/roll-chart/images/roll-69.jpg',
        '/roll-chart/images/roll-70.jpg',
        '/roll-chart/images/roll-71.jpg',
        '/roll-chart/images/roll-72.jpg', 
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/roll-chart/images/roll-0.jpg');
      });
    }
  }));
});
