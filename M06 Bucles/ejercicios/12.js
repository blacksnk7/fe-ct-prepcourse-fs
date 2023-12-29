function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  var word = "";
  var value = false;
  if ((num % 3) == 0){
    word += "fizz";
    value = true;
  } 
  if ((num % 5) == 0) {
    word += "buzz";
    value = true;
  }
  if (value) {
    return word;
  } else {
    return value;
  }
}

console.log(fizzBuzz(3), fizzBuzz(5), fizzBuzz(15), fizzBuzz("hola"));
module.exports = fizzBuzz;
