const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  return Object.keys(objeto).length;
};

var pelicula = {
  nombre: "Jaws",
  director: "Steven Spielberg",
}

console.log(contarPropiedades(pelicula));
module.exports = contarPropiedades;
