function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var nuevo = [];
  for (let i=0; i< arrayOfStrings.length;i++){
    if (arrayOfStrings[i].toLowerCase().charAt(0)==="a"){
      nuevo.push(arrayOfStrings[i]);
    }
  }
  return nuevo;
}

console.log(filter(["Hola", "Adela", "!"]));
module.exports = filter;
