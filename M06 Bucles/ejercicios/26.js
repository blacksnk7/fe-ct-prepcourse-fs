function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  var anagram = true;
  if ((typeof str1 === typeof str2) && (str1.length == str2.length)) {
    str1 = str1.trim();
    str2 = str2.trim();
  } else {
    anagram = false;
  }
  return anagram;
}

module.exports = esAnagrama;
