function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  if ((typeof num1 === "number") && (typeof num2 === "number") && (typeof num3 === "number")) {
    if ((num1 < 0) || (num2 < 0) || (num3 < 0)) {
      return "Hay negativos.";
    } else if ((num1 > num2) && (num1 > num3)) {
      return "Numero 1 es el mayor.";
    } else if ((num3 > num2)) {
      return num3 + 1;
    } else if ((num1 === 0) && (num2 === 0) && (num3 === 0)) {
      return "Error";
    }
  }
  return false;
}


console.log(operadoresLogicos(-1, 4, 5), operadoresLogicos(25, 3, 0), operadoresLogicos(15, 25, 50), operadoresLogicos(0, 0, 0), operadoresLogicos("Hola!", 25, 45));
module.exports = operadoresLogicos;
