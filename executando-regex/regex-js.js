const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')

console.log('Metodos da RegExp:')
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexString = /[a-f]/g

console.log('Metodos da string:')
console.log(texto.match(regexString))