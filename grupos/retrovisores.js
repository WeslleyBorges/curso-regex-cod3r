// O retrovisor e representado por /numero_do_grupo_armazenado
const text = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(text.match(/<(\w+)>.*<\/\1>/g))

const text2 = 'Lentamente e mente muito lenta.'
console.log(text2.match(/(?:lenta)(mente).*\1/gi)) // O ?: evita o armazenamento do grupo
console.log(text2.replace(/(lenta)(mente)/gi, '$2')) // Substitui o termo encontrado pelo segundo grupo