
//Normal function
function suma(x){
    console.log(x + 3);
}
//Variable function
var suma2 = function(x){
    console.log(x * 3)
}
//Lambda function
var suma3 = (x) => {
    console.log(x / 3)
}
function esVocal(letra) {
    if (typeof letra !== "string" || letra.length > 1) {
       return 'Dato incorrecto';
    } else {
       var vocales = "aeiou";
       letra = letra.toLowerCase();
       if (vocales.includes(letra)){
         return "Es vocal.";
       }
    }
   }


console.log(esVocal("a"), esVocal("E"), esVocal("Z"), esVocal(5));
suma(9);
suma2(9);
suma3(9);