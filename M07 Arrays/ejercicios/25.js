function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

console.log(agregarItemAlFinalDelArray([1, 15, 40], "Hola"));
module.exports = agregarItemAlFinalDelArray;
