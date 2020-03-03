const text = 'O Joao recebeu 120 milhões apostando 6 9 21 23 45 46.'

console.log(text.match(/\d{1,2}/g))
console.log(text.match(/\d{2}/g))
console.log(text.match(/\d{1,}/g))

console.log(text.match(/[\wõ]{7,}/g))

// Utilizando bordas posteriormente
console.log(text.match(/\b\d{1,2}\b/g))
console.log(text.match(/\b[\wõ]{1,}\b/g))
