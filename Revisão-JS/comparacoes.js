let a = 10, b = 15, c = 10 // Números 
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------')

a = 'Maria'
b = 'Sebastiana'
c = 'Maria'

console.log(a > b)  // a é maior que b por conta da ordem alfabética
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------')

a = true
b = false
c = true

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------')

a = [1, 2, 3, 4, 5]
b = [10, 20, 30, 40, 50]
c = [1, 2, 3, 4, 5]

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

/* Na comparação de vetores, os resutlados para maior e menor não sáo consistentes
Conclusão: vetores NÃO SÃO diretamente comparáveis entre si */

console.log('--------------------------')

// OBJETOS

a = { marca: 'Volkswagen', modelo: 'Fusca', ano: 1976}
b = { marca: 'Fiat', modelo: '147', ano: 1980}
c = { marca: 'Volkswagen', modelo: 'Fusca', ano: 1976}

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

/* Assim como vetores, OBJETOS NÃO SÃO diretamente comparáveis entre si */

console.log('--------------------------')


// CONCLUSÃO GERAL:
// Tipos de dados que são comparáveis em JS: number, string, boolean
