function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort(function(a, b){return a - b});
}

arreglo1 = [5, 1, 16, 7];
arreglo2 = ["hola", 1, "chau"];
console.log(ordenarArray(arreglo1), ordenarArray(arreglo2));
module.exports = ordenarArray;
