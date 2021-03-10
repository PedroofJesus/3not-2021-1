let totTrocas, comps, pass

function bubbleSort(vetor, fncomp) {
    totTrocas = 0, comps = 0, pass = 0
    let trocas 
    do{
        trocas = 0  // Início de uma nova passada
        pass++

        // percuros do vetor de início até o PENÚLTIMO elemento

        for (let i = 0; i <= vetor.length - 2; i++){
            // if (vetor[i] > vetor[i + 1])
            if(fncomp(vetor[i], vetor[i + 1])) {
                
                /*
                modo classico de trocar elemento do vetor de posição

                let aux = vetor[i]
                vetor[i] = vetor[i + 1]
                vetor[i + 1] = aux
                
                */

                // troca direta em JS usando desestruturação de vetores
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]

                trocas++
            }
            comps++

        }
        totTrocas += trocas

    } while(trocas > 0)
}

/*    função de comparação precisa retornar:

True -> se o primeiro objeto for maior que o segundo
False -> caso contrário

*/

import {candidatos} from './includes/candidatos-2018.mjs'

console.log('Antes: ', candidatos)
console.time('Ordenando por nome de registro...')
bubbleSort(candidatos, (a, b) => a.NM_URNA_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('Ordenando por nome de registro...')
console.log('Depois: ', candidatos)
console.log({totTrocas, comps, pass})