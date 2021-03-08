function buscaSequencial(vetor, fnComp) {
     // Percurso com for tradicional
     for(let i = 0; i < vetor.length; i++) {
        //if(vetor[i] === valorBusca) return i

        // Encontrado o valor de busca, retorna-se a posição onde foi encontrado 
        // fnComp representa a chamada à função externa
        if(fnComp(vetor[i])) return i
     }
     // Retorna-se -1 caso o valor de busca não tenha sido encontrado
     return -1
 }

 // Recebe apenas um objeto de nome e retorna true caso a propriedade
 // first_name seja idêntica ao valor de busca
 /*function comparaNome(objNome, valorBusca) {
     return objNome.first_name === valorBusca
 }*/
 const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

 import { objNomes } from './includes/vetor-obj-nomes.mjs'

 console.time('Buscando ZILMAR')
 console.log(buscaSequencial(objNomes, obj => obj.first_name === 'ZILMAR'))
 console.timeEnd('Buscando ZILMAR')

 console.time('Buscando KATIUSCIA')
 console.log(buscaSequencial(objNomes, obj => obj.first_name === 'KATIUSCIA'))
 console.timeEnd('Buscando KATIUSCIA')

 console.time('Buscando nome ABRAAO')
 let posEncontrado = buscaSequencial(objNomes, obj => obj.first_name === 'ABRAAO')
 console.timeEnd('Buscando nome ABRAAO')

 console.log(objNomes[posEncontrado])

 console.time('Buscando group_name MARIA')
 console.log(buscaSequencial(objNomes, obj => obj.group_name === 'MARIA'))
 console.timeEnd('Buscando group_name MARIA')