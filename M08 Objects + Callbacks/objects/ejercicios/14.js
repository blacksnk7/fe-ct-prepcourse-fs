function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return (objetoUsuario.email.length > 0);
}

var usuario = {
  nombre: 'Juan',
  email: 'zzz'
};

console.log(tieneEmail(usuario));
module.exports = tieneEmail;
