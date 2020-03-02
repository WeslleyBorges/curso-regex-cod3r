const text = '1,2,3,4,5,6,a.b c!d?e[f'

const regexPares = /[02468]/g
console.log(text.match(regexPares))

const text2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g
console.log(text2.match(regexComESemAcento))