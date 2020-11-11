self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/aeon/a2hs/',
       '/aeon/a2hs/index.html',
       '/aeon/a2hs/index.js',
       '/aeon/a2hs/style.css',
       '/aeon/a2hs/images/fox1.jpg',
       '/aeon/a2hs/images/fox2.jpg',
       '/aeon/a2hs/images/fox3.jpg',
       '/aeon/a2hs/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
