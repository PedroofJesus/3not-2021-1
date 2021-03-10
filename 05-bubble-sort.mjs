/*  

    ALGORITMO DE ORDENAÇÃO BUBBLE SORT

        Percorre o vetor, comparando um elemento com seu sucessor. Caso o sucessor seja menor que o valor atual, ocorre a troca entre eles.
        Esse processo se rete em várias passadas até que, no percuso final, nenhuma troca seja feita.

*/

let totTrocas, comps, pass

function bubbleSort(vetor) {
    totTrocas = 0, comps = 0, pass = 0
    let trocas 
    do{
        trocas = 0  // Início de uma nova passada
        pass++

        // percuros do vetor de início até o PENÚLTIMO elemento

        for (let i = 0; i <= vetor.length - 2; i++){
            if(vetor[i] > vetor[i + 1]) {
                
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

// let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

// pior caso
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

console.log('Antes: ', nums)
bubbleSort(nums)
console.log('Depois: ', nums)
console.log({totTrocas, comps, pass})


import {nomes} from './includes/100-mil-nomes.mjs'

console.log('Antes: ', nomes)
console.time('Ordenando nomes...')
bubbleSort(nomes)
console.timeEnd('Ordenando nomes...')
console.log({totTrocas, comps, pass})
console.log('Depois: ', nomes)