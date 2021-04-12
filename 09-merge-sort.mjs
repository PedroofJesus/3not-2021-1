/*
    MERGE SORT
    No processo de ordenação, esse algoritmo "desmonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com os elementos já em ordem.
    
*/

let comps = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor) {

    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            if(vetEsq[pEsq] < vetDir[pDir]) {
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++
        }
        // Verificando de qual lado houve sobra
        let sobra
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)      // Sobra à esquerda
        else sobra = vetDir.slice(pDir)                 // Sobra à direita

        // O vetor retornado será formado pelo vetor resultado + sobra
        return [...vetRes, ...sobra]  // Concatenando os dois vetores
    }

    // Desmontando o vetor
    if(vetor.length > 1) {  // Para desmontar, são necessários pelo menos 2 elementos
        let meio = Math.floor(vetor.length / 2)
        // slice(): fatia um vetor, desde a posição inicial indicada (inclusive)
        // até a posição final (exclusive - A ÚLTIMA POSIÇÃO NÃO ENTRA NA FATIA GERADA)
        let vetEsq = vetor.slice(0, meio)
        // Quando o segundo parâmetro de slice() é omitido, são incluídos todos os elementos
        // até o final
        let vetDir = vetor.slice(meio)
        divisoes++
        
        //console.log({vetEsq, vetDir})

        // Chamadas recursivas à própria função para continuar o processo de desmontagem
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)
        
        let vetFinal = mesclar(vetEsq, vetDir)
        juncoes++

        //console.log({vetFinal})

        return vetFinal

    }
    return vetor        // Condição de saída: vetor.length === 1
}

//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

comps = 0, divisoes = 0, juncoes = 0
let numsOrd = mergeSort(nums)
console.log(numsOrd)
console.log({comps, divisoes, juncoes})

import { nomes } from './includes/100-mil-nomes.mjs'

//console.log('Antes:', nomes)
comps = 0, divisoes = 0, juncoes = 0
console.time('Ordenando nomes...')
let nomesOrd = mergeSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({comps, divisoes, juncoes, memoria})
console.log('Depois:', nomesOrd)