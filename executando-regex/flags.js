// Flags:
// g - global
// i - case insensitive

texto = 'Caboclo assinou o abaixo-assinado.'

console.log(texto.match(/C|ab/))
console.log(texto.match(/c|ab/i))
console.log(texto.match(/ab|c/gi))