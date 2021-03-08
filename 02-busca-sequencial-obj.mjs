function buscaSequencial(vetor, valorBusca, fnComp) {
    // percurso com for tradicional
    for(let i = 0; i < vetor.length; i ++){// length é o tamanho do vetor (comprimento)
        // fnComp representa a chamada à função externa
        if(fnComp(vetor[i], valorBusca))  
            return i    // encontrado o valor de busca, retorna-se a posição onde foi encontrado
    }    
    // Retorna-se -1 caso o valor de busca não tenha sido encontrado
    return -1 
}


// funcão recebe um objeto de nome e retorna true caso a propriedade first_name seja idêntica ao valor de busca

/*  

    function comparaNome(objNome, valorBusca){
        return objNome.first_name === valorBusca
}

*/

const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import {objNomes} from './includes/vetor-obj-nomes.mjs'

console.time('Buscando ZILMAR')
console.log(buscaSequencial(objNomes, 'ZILMAR', comparaNome))
console.timeEnd('Buscando ZILMAR')

console.time('Buscando PEDRO')
console.log(buscaSequencial(objNomes, 'PEDRO', (obj, busca) => obj.first_name === busca))
console.timeEnd('Buscando PEDRO')

console.time('Buscando PEDRO')
console.log(buscaSequencial(objNomes, 'PEDRO', (obj, busca) => obj.first_name === busca))
console.timeEnd('Buscando PEDRO')

console.time('Buscando nome ABRAAO')
let posEncontrado = buscaSequencial(objNomes, (obj, busca) => obj.first_name === busca)
console.time('Buscando nome ABRAAO')

console.log(objNomes[posEncontrado])