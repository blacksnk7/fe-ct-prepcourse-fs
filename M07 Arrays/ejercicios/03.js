function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  return array.includes(elemento);
}

arreglo = ["hola", 1, "chau"];
elemento = 2;
console.log(encontrarElemento(elemento, arreglo));
module.exports = encontrarElemento;
