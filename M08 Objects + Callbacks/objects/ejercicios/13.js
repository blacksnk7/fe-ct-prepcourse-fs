function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}

var gato = {
  nombre: "Firu",
  edad: "17",
  meow: function(){
    return "Meow!";
  }
};

console.log(eliminarPropiedad(gato, "nombre"));
module.exports = eliminarPropiedad;
