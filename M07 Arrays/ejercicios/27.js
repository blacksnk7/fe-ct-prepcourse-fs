function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var joined = palabras.join(" ");
  return joined;
}

console.log(dePalabrasAFrase(["Hola", "y", "chau"]));
module.exports = dePalabrasAFrase;
