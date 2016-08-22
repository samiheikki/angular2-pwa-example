console.debug("starting service-worker");
var context = self;
context.addEventListener('sync', function (event) {
    console.debug("Service Worker: sync, tag=" + event.tag);
    /*if (event.tag == 'upload') {
      event.waitUntil(bs.upload().then(_ => console.debug('background-upload finished')));
    }*/
});
context.addEventListener('push', function (event) {
    console.log('Push message', event);
    var title = 'Title here';
    context.registration.showNotification(title, {
        body: 'Some info here',
        icon: '/images/touch/icon-128x128.png',
        tag: 'my-tag'
    });
});
self.addEventListener('notificationclick', function (event) {
    console.log('Notification click: tag ', event.notification.tag);
    event.notification.close();
    var url = 'http://localhost:8080';
    event.waitUntil(clients.matchAll({
        type: 'window'
    })
        .then(function (windowClients) {
        console.debug("win-count: " + windowClients.length);
        for (var i = 0; i < windowClients.length; i++) {
            var client = windowClients[i];
            console.debug(" > client-url: " + client.url + ", url: " + url);
            var clientUrl = client.url;
            if (clientUrl.startsWith(url) && 'focus' in client) {
                return client.focus();
            }
        }
        if (clients.openWindow) {
            return clients.openWindow(url);
        }
    }));
});
var context = self;
toolbox.options.debug = true;
toolbox.precache([
    '/',
    '/app/app.component.css',
    '/app/app.component.html',
    '/app/app.component.js',
    '/app/main.js',
    '/images/touch/icon-128x128.png'
]);
toolbox.router.get('/(.*)', toolbox.networkOnly, { origin: 'http://www.suoheikki.com' });
toolbox.router.default = toolbox.cacheFirst;
// v3
//# sourceMappingURL=service-worker.js.map