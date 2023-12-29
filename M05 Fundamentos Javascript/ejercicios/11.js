function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  const now = Date();
  var fechaAct = Date.parse(now);
  var fechanNac = Date.parse(fechaNacimiento);
  if (!isNaN(fechanNac)){
    const day = 86400000;
    const year = day * 365;
    var fecha = fechaAct - fechanNac;
    var age = fecha / year;
    return (age >= 18);
  } else {
    return "ERROR. Please enter a correct date...";
  }
}
console.log(esMayorDeEdad("07/19/1995"), esMayorDeEdad("hola!"), esMayorDeEdad("05/05/2020"));

module.exports = esMayorDeEdad;