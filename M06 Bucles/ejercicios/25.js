function esPalindromo(texto) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var newStr = "";
  for (let i = texto.length; i > 0; i--) {
    newStr += texto.charAt(i-1);
  }
  if (newStr === texto) {
    return true;
  }
  return false;
}

console.log(esPalindromo("Hola!"), esPalindromo("neuquen"), esPalindromo(52));
module.exports = esPalindromo;
