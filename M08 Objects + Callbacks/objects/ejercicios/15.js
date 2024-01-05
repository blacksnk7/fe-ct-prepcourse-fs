function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objeto.hasOwnProperty(propiedad);
}

var usuario = {
  nombre: 'Juan',
  email: 'zzz'
};

console.log(tienePropiedad(usuario, 'nombre'), tienePropiedad(usuario, 'apellido'));
module.exports = tienePropiedad;
