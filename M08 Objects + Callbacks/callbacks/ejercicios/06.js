function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var nuevo = [];
  for (let i = 0; i < array.length; i++){
    nuevo[i] = cb(array[i]);
  }
  return nuevo;
}
function callBack(num){
  return num * 2;
}

console.log(map([1,2,3],callBack));
module.exports = map;
