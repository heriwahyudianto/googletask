self.addEventListener('install', function(event) {
 	console.log('Service worker installing...');
	event.waitUntil(       
		caches.create('static-v2').then(
			function(cache) {          
				return cache.addAll(
			        [
			          'project3/css/mystyle.css',
			          'project3/javascript/bundle.js',
			          'project3/index.html'
			        ]
			    );    
			}
		)
	) 
});
self.addEventListener('activate', function(event) {
 console.log('Service worker activating...');
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});