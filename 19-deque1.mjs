import { Deque }  from './lib/Deque.mjs'

let deque = new Deque()

deque.insertBack('Astrogildo')
deque.insertBack('Neuza')
deque.insertBack('Pierina')
deque.insertBack('Belarmino')

console.log(deque.print())

deque.insertFront('Osvaldina')
console.log(deque.print())

let desistente = deque.removeBack()
console.log({desistente})
console.log(deque.print())

let atendido = deque.removeFront()
console.log({atendido})
console.log(deque.print())

let proximo = deque.peekFront()
let ultimo = deque.peekBack()
console.log({proximo, ultimo})
console.log(deque.print())