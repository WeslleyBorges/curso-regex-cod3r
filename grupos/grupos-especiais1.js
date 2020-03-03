const text = 'Joao é calmo, mas no transito fica nervoso.'

// Positive lookahead
console.log(text.match(/[\w]+(?=,)/g))
console.log(text.match(/[\w]+(?=\.)/g))

// Negative lookahead
console.log(text.match(/[\wé]+\b(?!,)/g)) // Caracteres acentuados sao bordas