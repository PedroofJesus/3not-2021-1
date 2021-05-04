/*
    ESTRUTURAS DE DADOS FILA
    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (enqueue) e retirada (dequeue), a primeira ocorrendo no final da
      estrutura e a outra no início da estutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das fila são tarefas que processamento de itens em ordem
      de chegada.
*/
export class Queue {

    #data

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Inserção na fila (ocorre no final)
    enqueue(val) {
        this.#data.push(val)
    }

    // Remoção da fila (ocorre no início)
    dequeue() {
        return this.#data.shift()
    }

    print() {
        return JSON.stringify(this.#data)
    }

    // Espiadinha no início da fila (próximo a ser removido)
    peek() {
        return this.#data[0]
    }

    // A fila está vazia?
    get empty() {
        return this.#data.length === 0
    }
}