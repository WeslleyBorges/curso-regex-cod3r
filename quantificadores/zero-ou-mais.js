const text = 'De longe eu avistei o fogo e uma pessoa guitando: FOGOOOO!'
const text2 = 'There is a large fog in NYC'

const regex = /fogo*/gi

console.log(text.match(regex))
console.log(text2.match(regex))