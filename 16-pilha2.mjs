import { Stack } from './lib/Stack.mjs'

const texto = "Socorram-me, subi no ônibus em Marrocos"

// Usando um vetor como pilha
const pilha = new Stack()

// Desmontando o texto e colocando cada letra na pilha
for(let i = 0; i < texto.length; i++) {
    // Na pilha, a inserção sempre ocorre no final
    pilha.push(texto.charAt(i))
}

console.log(pilha.print())

let textoRev = ''

while(! pilha.empty) {
    // Na pilha, a retirada é sempre feita também no final
    textoRev += pilha.pop()
}
console.log(textoRev)