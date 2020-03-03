const text = `1,2,3,4,5,6,a.b c!d?e\r   -
f_g`

console.log(text.match(/\d/g)) // digitos de 0 a 9, numerais [0-9]
console.log(text.match(/\D/g)) // exclui os numerais de 0 a 9 [^0-9]

console.log(text.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(text.match(/\W/g)) // nao caracteres [^a-zA-Z0-9]

console.log(text.match(/\s/g)) // espacos em branco [ \t\r\f\n]
console.log(text.match(/\S/g)) // tudo o que nao for espaco em branco [^ \t\r\f\n]