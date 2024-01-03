function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var meses = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'Enero' || array[i] ==='Marzo' || array[i] ==='Noviembre'){
      if (!meses.includes(array[i])){
        meses.push(array[i]);
      }
    }
  }
  if (meses.length === 3){
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

meses1 = ['Diciembre', 'Viernes', 'Sabado'];
meses2 = ['Diciembre', 'Marzo', 'Sabado', 'Noviembre', 'Enero'];
meses3 = ['1', 25, 'Sabado'];
console.log(mesesDelAño(meses1), mesesDelAño(meses2), mesesDelAño(meses3))
module.exports = mesesDelAño;
