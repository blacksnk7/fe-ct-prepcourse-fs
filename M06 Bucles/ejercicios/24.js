function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var newStr = "";
  for (let i = texto.length; i > 0; i--) {
    newStr += texto.charAt(i-1);
  }
  return newStr;
}

console.log(invertirTexto("Hola!"), invertirTexto(52));
module.exports = invertirTexto;