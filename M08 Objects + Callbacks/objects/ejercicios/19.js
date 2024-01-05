function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for (let i = 0; i < objetoMuchosUsuarios.length; i++){
    objetoMuchosUsuarios[i].esPremium=true;
  }
  return objetoMuchosUsuarios;
}

function Usuario(nom, pass, premium){
  this.nombre = nom;
  this.password = pass;
  this.esPremium = premium;
};

var user1 = new Usuario('Juan', 'zzz', false);
var user2 = new Usuario('Martin', 'yyy', false);
var user3 = new Usuario('Manuel', 'xxx', false);
var users = [user1, user2, user3]
console.log(pasarUsuarioAPremium(users));
module.exports = pasarUsuarioAPremium;
