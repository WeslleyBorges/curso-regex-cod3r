const text = '.$+*?-'

console.log(text.match(/[.$+*?-]/g)) // Metacaracteres dentro de conjuntos sao tratados como literais
console.log(text.match(/[$-?]/g)) // Neste caso, o - esta sendo utilizado para definir intervalo
console.log(text.match(/[$\-?]/g)) // Neste caso, o - esta sendo utilizado como parte do conjunto
