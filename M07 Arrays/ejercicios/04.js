function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  index = Math.floor(Math.random() * array.length);
  return array[index];
}

arreglo = ["hola", 1, "chau"];
console.log(obtenerElementoAleatorio(arreglo));
module.exports = obtenerElementoAleatorio;
