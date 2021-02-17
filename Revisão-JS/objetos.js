// Criação de um onjeto vazio

let vazio1 = {}   // Forma "Moderna"
let vazio2 = new Object() // Forma "Tradicional"

// Criação de objetos já com dados

let pessoa = {
    /* Objetos organizam-se em pares de propriedade: valor 
       também chamados de atributos: valor */
    nome: 'Orkutilson da Silva',
    dataNasc: '2009-01-29',
    sexo: 'M',
    ocupacao: 'Estudante',
    // Nomes de propriedade podem ter espaços e/ou acentos,
    // mas nesse caso, precisam vir entre aspas
    'cidade de origem': 'Franca/SP',

}

/* Acessando uma propriedade do objeto */
// console.log(OBJETO.ATRIBUTO)
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
/* Quando o nome da propriedade tem espaços ou acentos, não é possível acessá-la pela sintaxe do ponto. 
   Deve-se usar a sentaxe dos colchetes. */
console.log(pessoa['cidade de origem'])

/* A sintaxe dos colchetes SEMPRE funciona */

 console.log(pessoa.dataNasc)       // Sintaxe do ponto
 console.log(pessoa['dataNasc'])    // Sintaxe dos colchetes

 // A sintaxe dos colchetes é importante também quando o nome da propriedade está armazenada em uma variável

 let prop = 'nome'
 console.log(pessoa[prop])
 prop = 'sexo'
 console.log(pessoa[prop])
 prop = 'cidade de origem'
 console.log(pessoa[prop])

 /* Fomas de exibição de um objeto inteiro no console */

 console.log(pessoa)
 console.table(pessoa)



 /* Objeto inicia-se vazio */

 let veiculo = {}
     // Foi criada a propriedade marca e colocado o valor 'Volkswagen' dentro dela
     veiculo.marca = 'Volkswagen'
     veiculo.modelo = 'Variant'
     veiculo.ano = 1974
     // propriedade com acento -> sintaxe dos colchetes
     veiculo['combustível'] = 'gasolina'
     veiculo.cor = 'azul'

 console.log(veiculo)
 console.table(veiculo)


 console.log('-----------------------------------------------')

 // listando todas as propriedades de um objeto

 /* for...in -> lista todas as propriedades de um objeto 
    variáveis:
    prop -> a variável que irá conter o nome de cada uma das propriedade do objeto (pode ser qualquer nome válido de variável)
    pessoa -> o objeto do qual queremos listar as propriedades
*/

 for (let prop in pessoa){
     console.log(prop)
 }

 console.log('-----------------------------------------------')

 for (let x in veiculo){
     console.log(x)
 }
    
console.log('-----------------------------------------------')

/* Listando propriedades e valores do objeto veiculo com for...in*/
for(let atrib in veiculo){
    console.log(atrib + "->" + veiculo[atrib])  // console.log(propriedade + '->' + objeto[valor])
}

console.log('-----------------------------------------------')

// Objeto veiculo antes da exclusão da propriedade
console.table(veiculo)

// Apagando uma propriedade de um objeto -> delete
delete veiculo.ano
console.table(veiculo)
