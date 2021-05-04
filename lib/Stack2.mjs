export class Stack {

    #data
    #tail   // Cauda (topo) da pilha

    constructor() {
        this.#data = {}     // Objeto vazio
        this.#tail = -1
    }

    push(val) {
        this.#tail++   // Incrementando o topo 
        this.#data[this.#tail] = val
    }

    pop() {
        // Se a pilha estiver vazia, retorna
        // undefined para evitar que o valor de
        // #tail fique abaixo de -1
        if(this.empty) return undefined
        
        let temp = this.#data[this.#tail]
        // Destrói a posição no objeto
        delete this.#data[this.#tail]
        this.#tail--
        return temp
    }

    print() {
        return JSON.stringify(this.#data)
    }

    get empty() {
        // Estará vazia se o tail ainda for -1
        return this.#tail < 0
    }

    peek() {
        return this.#data[this.#tail]
    }

}