const text = 'De longe eu avistei o fogo e uma pessoa guitando: FOGOOOO!'
const text2 = 'There is a large fog in NYC'

const regex = /fogo+/gi

console.log(text.match(regex))
console.log(text2.match(regex))

const text3 = 'Os numeros: 012345789'

console.log(text3.match(/[0-9]/g))

console.log(text3.match(/[0-9]+/g))
// OU UTILIZANDO SHORTHAND
console.log(text3.match(/\d+/))
