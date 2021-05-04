/*
    ESTRUTURAS DE DADOS PILHA
    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/
export class Stack {

    #data

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Inserção
    push(val) {
        this.#data.push(val)
    }

    // Remoção
    pop() {
        return this.#data.pop()
    }

    // Permite visualizar o conteúdo de #data fora da classe
    print() {
        return JSON.stringify(this.#data)
    }

    // PROPRIEDADE CALCULADA: retorna se a pilha está ou não vazia
    get empty() {
        return this.#data.length === 0
    }

    // Dá uma "espiadinha" no topo da pilha (último elemento), mas sem retirá-lo
    peek() {
        return this.#data[this.#data.length - 1]
    }
}

/*
let pilha = new Stack()
pilha.push(5)
pilha.push(2)
pilha.push(9)
pilha.push(4)
console.log(pilha.print())
console.log('Peek', pilha.peek())
console.log('Pop', pilha.pop())
console.log('Peek', pilha.peek())
console.log('Pop', pilha.pop())
console.log('Peek', pilha.peek())
console.log(pilha.print())
*/