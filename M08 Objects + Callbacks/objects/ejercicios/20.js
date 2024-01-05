function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var total = 0;
  for (let i = 0; i < objetoUsuario.posts.length; i++){
    total += objetoUsuario.posts[i].likes;
  }
  return total;
}

function Usuario(nom, posts){
  this.name = nom;
  this.posts = posts;
}
function Post(likes){
  this.likes = likes;
}

const usuario1 = new Usuario("Juan", [new Post(2), new Post(5), new Post(0), new Post(13)]);
console.log(sumarLikesDeUsuario(usuario1)); 
module.exports = sumarLikesDeUsuario;
