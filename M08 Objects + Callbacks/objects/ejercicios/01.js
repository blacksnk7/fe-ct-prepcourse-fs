const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  return objeto[propiedad];
};

var pelicula = {
  nombre: "Jaws",
  director: "Steven Spielberg",
}

console.log(obtenerValorPropiedad(pelicula, "nombre"));
module.exports = obtenerValorPropiedad;
