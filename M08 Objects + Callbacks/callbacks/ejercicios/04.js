function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var suma = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++){
    suma += arrayOfNumbers[i];
  }
  cb(suma);
}
function callBack(num){
  console.log("La sumatoria es "+ num);
}

sumarArray([5, 10, 15], callBack);
module.exports = sumarArray;
