const text = `
    Lista telefonica:
        - (92) 99282-7060
        - (71) 99299-9849
        - 3387-9347
`

const regex = /(\(\d{2}\))?\s?\d{4,5}-\d{4}/g

console.log(text.match(regex))