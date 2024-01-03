function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

console.log(agregarItemAlComienzoDelArray([1, 15, 40], "Hola"));
module.exports = agregarItemAlComienzoDelArray;
