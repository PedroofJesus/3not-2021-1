import { Queue } from './lib/Queue2.mjs'

let fila = new Queue()
console.log(fila.print())

fila.enqueue('Maria')
console.log(fila.print())

fila.enqueue('Heitor')
console.log(fila.print())

fila.enqueue('Jurema')
console.log(fila.print())

fila.enqueue('Otávio')
console.log(fila.print())

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())

proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

fila.enqueue('Washington')
console.log(fila.print())

atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())