const text = `
    Os emails dos convidados sao:
        - email@email.com.br
        - temp_temp@chimpmail.com
        - mail.google@gmail.com
`

const regex = /[\w.]+@[\w.]+/gi

console.log(text.match(regex))