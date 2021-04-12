/*
    QUICK SORT
    Escolhe um dos elementos do vetor para ser o pivô (na nossa implementação,
    o último elemento) e, na primeira passada, divide o vetor, a partir da posição
    final do vetor, em um subvetor à esquerda contendo apenas valores menores que
    o vetor e outro subvetor à direita, que contém apenas valores maiores que o pivô.
    Em seguida, recursivamente, repete o processo em cada um dos subvetores até que
    todo o vetor esteja ordenado.
*/

let comps, trocas, passadas

function quickSort(vetor, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {     // Deve ter mais de um elemento para ordenar
        passadas++
        let pivot = fim
        let div = ini - 1
        // for indo do primeiro elemento até o PENÚLTIMO
        for(let i = ini; i < fim; i++) {
            if(vetor[i] < vetor[pivot]) {
                div++
                [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                trocas++
            }
            comps++
        }
        div++
        // Colocando o pivô em seu lugar definitivo
        if(vetor[pivot] < vetor[div]) {
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

        // Quicksort à esquerda
        quickSort(vetor, ini, div - 1)

        // Quicksort à direita
        quickSort(vetor, div + 1, fim)
    }
}

comps = 0, trocas = 0, passadas = 0
//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
quickSort(nums)
console.log(nums)
console.log({comps, trocas, passadas})

import { nomes } from './includes/100-mil-nomes.mjs'

//console.log('Antes:', nomes)
comps = 0, trocas = 0, passadas = 0
console.time('Ordenando nomes...')
quickSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({trocas, comps, passadas, memoria})
console.log('Depois:', nomes)