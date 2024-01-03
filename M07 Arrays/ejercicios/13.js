function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  prom = 0;
  for (let i=0 ; i < resultadosTest.length ; i++) {
    prom += resultadosTest[i];
  }
  prom = prom / resultadosTest.length;
  return prom;
}

nums = [8, 10, 4, 4, 2, 2, 3, 6];
console.log(promedioResultadosTest(nums));
module.exports = promedioResultadosTest;
