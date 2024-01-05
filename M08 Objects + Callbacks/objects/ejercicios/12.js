function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}

var objetoMisterioso = {
  numeroMisterioso: 42,
};

console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso));
module.exports = multiplicarNumeroDesconocidoPorCinco;
