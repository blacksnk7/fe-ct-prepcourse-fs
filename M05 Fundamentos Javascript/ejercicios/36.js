// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  return Math.pow(num, exponent);
}

console.log(elevar(5, 5), elevar(2, 3));

module.exports = elevar;