self.addEventListener('install', evento => {
    // Abro un cache
    const cache = caches.open('mi-cache').then( cache => {
        // Guarda los datos del caché necesario para que la app funciones sin conexión
       return cache.addAll([
        './index.html',
        './pelicula.html', 
        './style.css', 
        './js/app.js',
        './js/pelicula.js',
        "https://api.themoviedb.org/3/movie/popular?api_key=4987f69fc53eddb225d45539c2b5c2ed&language=es-es"]);
    
    })
    // Espera hasta que la promesa se resuelva
    evento.waitUntil(cache)
    })

self.addEventListener('fetch', evento => {
    const respuestaCache = caches.match( evento.request).then( res => {
        if (res ) {
            return res;
        } else {
            // si no hacemos un fetch
            return fetch(evento.request).then( respuesta => {
                return respuesta;
            })
        }
    })
    evento.respondWith( respuestaCache  )
})
    