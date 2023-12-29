function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var prime = true;
  for (var i = 2; i < numero; i++){
    if ((numero % i) == 0) {
      prime = false;
      i = numero;
    }
  }
  return prime;
}

console.log(esNumeroPrimo(3), esNumeroPrimo(9), esNumeroPrimo(27), esNumeroPrimo(876), esNumeroPrimo(877))
module.exports = esNumeroPrimo;
