// Retire maejang-sori-v2. Never cache authenticated/API responses or return HTML for JSON.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const names=await caches.keys();
 await Promise.all(names.filter(name=>name.startsWith('maejang-sori-')).map(name=>caches.delete(name)));
 await self.clients.claim();
 await self.registration.unregister();
})()));
