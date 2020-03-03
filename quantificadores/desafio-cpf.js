const text = `
    CPF dos aprovados:
        - 075.602.945-08
        - 343.565.734-98
        - 034.888.989-90
        - 23412345676
`

const regex = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g

console.log(text.match(regex))