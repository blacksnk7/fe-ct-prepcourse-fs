function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var result = 0;
  var i = 0;
  while (result < numero){
    result = Math.pow(2, i);
    if (result === numero) {
      return true;
    }
    i = i + 1;
  }
  return false;
}

console.log(esPotenciaDeDos(2), esPotenciaDeDos(4), esPotenciaDeDos(6), esPotenciaDeDos(16), esPotenciaDeDos(32), esPotenciaDeDos(100), esPotenciaDeDos(-2), esPotenciaDeDos('Hola'), esPotenciaDeDos(0));
module.exports = esPotenciaDeDos;
