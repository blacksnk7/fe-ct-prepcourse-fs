function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra.length > 1 || (typeof letra !== "string")) {
    return 'Dato incorrecto';
  } else {
    var vocales = "aeiou";
    letra = letra.toLowerCase();
    if (vocales.includes(letra)){
      return "Es vocal.";
    } else {
      return 'No es vocal.';
    }
  }
}

console.log(esVocal("a"), esVocal("E"), esVocal("Z"), esVocal(5));
module.exports = esVocal;
