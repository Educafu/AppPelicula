const app = new Vue({
  el: "#app",
  data: {
   
    peliculas: [],
  },
  methods: {
    getPeliculas() {
      const endPoint =
        "https://api.themoviedb.org/3/movie/popular?api_key=4987f69fc53eddb225d45539c2b5c2ed&language=es-es";

      fetch(endPoint)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.peliculas = json.results;
          console.table(this.peliculas);
          //this.peliculas = results;
        })
        .catch((error) => console.log(error));
    },

    volver() {
      window.history.back(); // Esta línea regresará a la página anterior
    }
  },
});
