function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
  console.log(objeto[metodo]());
}

var gato = {
  nombre: "Firu",
  edad: "17",
  meow: function(){
    return "Meow!";
  }
};

invocarMetodo(gato, "meow");
module.exports = invocarMetodo;
