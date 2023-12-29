function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  mes = Math.round(mes);
  if ((mes <= 12) && (mes >= 1)) {
    switch (mes){
      case 2:
        return "El mes tiene 28.25 dias";
      case 4:
      case 6:
      case 7:
      case 9:
        return "El mes tiene 30 dias";
      default:
        return "El mes tiene 31 dias";
    }
  }
  return "Numero de mes invalido";
}

console.log(diasEnMes(1), diasEnMes(2), diasEnMes(4), diasEnMes(7), diasEnMes(12), diasEnMes(15), diasEnMes("Hola"));
module.exports = diasEnMes;
