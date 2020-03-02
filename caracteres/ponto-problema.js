const text = 'Bom\ndia'
console.log(text.match(/./g))
console.log(text.match(/..../g)) // O . não engloba o \n

// Se englobasse, seria o dotAll, cuja flag é /exp/s em várias linguagens, e que não exsite em JS.