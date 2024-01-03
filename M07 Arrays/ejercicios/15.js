function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  const x = array[0];
  var iguales = true;
  for (let i = 1; i < array.length; i++){
    if (x !== array[i]){
      iguales=false;
      break;
    }
  }
  return iguales;
}


arreglo1 = [5, 1, 16, 7];
arreglo2 = ["hola", 1, "chau"];
arreglo3 = [1, 1, 1];
arreglo4 = ["HOLA", "HOLA", "HOLA"];
arreglo5 = [1];
console.log(todosIguales(arreglo1), todosIguales(arreglo2), todosIguales(arreglo3), todosIguales(arreglo4), todosIguales(arreglo5))
module.exports = todosIguales;
