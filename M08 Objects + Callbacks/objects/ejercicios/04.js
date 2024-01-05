function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  return objeto.hasOwnProperty(propiedad);
}

var pelicula = {
  nombre: "Jaws",
  director: "Steven Spielberg",
}

console.log(verificarPropiedad(pelicula, "nombre"), verificarPropiedad(pelicula, "apellido"));
module.exports = verificarPropiedad;
