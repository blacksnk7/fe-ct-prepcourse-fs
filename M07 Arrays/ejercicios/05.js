function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++){
    if (array[i].length > 5) {
      return array[i];
    }
  }
  return "No existen elementos con mas de 5 caracteres en el arreglo."
}

console.log(obtenerPrimerStringLargo(["perro", "gato", "chau", 5, 666667777]));
module.exports = obtenerPrimerStringLargo;
