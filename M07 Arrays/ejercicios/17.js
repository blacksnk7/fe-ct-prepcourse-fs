function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var resultado = [];
  for (let i = 0; i <= 60; i++){
    resultado.push(i * 6);
  }
  return resultado;
}

console.log(tablaDelSeis());
module.exports = tablaDelSeis;
