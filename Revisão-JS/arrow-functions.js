/* A rigos, a funçÃO não seria necessária, pois, usando recursos nativos do JS, poderíamos escrever c ** 2  ou Marh.pow(x, 2)

Caracteristacas desta função:
1) tem apenas um parametro
2) Seu corpo tem apenas uma linha, retonarndo um valor
*/

function quadrado(x){
    return x * x
}

console.log (quadrado(9))

/* O formato de funçao acima é perfeito para conversao em arrow function, que é um modo "abreviado" de escrever uma funcao em JS

1) os parenteses em torno do parametro foram omitidos
2) A palavra *function*, que vinha ANTES do parametro, foi substituida pelo simbolo => DEPOIS do parametro
3) As chaves foram omitidas
4) A palavra-chave *return* foi omitida
5) Uma arrow function é uma função anonima. Portanto, caso se deseje chama-la porsteriormente, é necessário atribu-la a uma variável
*/

const quadrado2 = x => x * x
console.log(quadrado2(9))


/* Função com mais de um parametro*/
function potencia(b, e){
    // b = base, e = expoente
    return b ** e
}
console.log(potencia(2,10))

/* Arrow function equivalente
Quando temos mais de um parametro, os parenteses retornam
*/
const potencia2 = (b, e) => b ** e
console.log(potencia2(2, 10))


/* Função sem parâmetros, que retorna um número aleatório entre 1 e 60 */

function megasena(){
    //Math.random() -> retorna um número aleatório entre 0 (inclusive) e 1 (exclusive)
    // * 60 -> Ajusta faixa de valores para entre 0 e 59
    // +1 -> ajusta a faixa de valores para enter 1 e 60
    // Math.ceil() -> retura as casas decimais de um número, deixando apenas a parte inteira
    return Math.ceil(Math.random() * 60 + 1)
}
console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena())

/* Os parenteses vazios (obrigatórios) marcam o lugar dos parenteses */
let megasena2 = () => Math.ceil(Math.random() * 60 + 1)
console.log(megasena2(),megasena2(),megasena2(),megasena2(),megasena2(),megasena2())


function somaVet(vet){
    let soma = 0
    for(let n of vet) soma += n // soma = soma + n
    return soma
}
console.log(somaVet([1, 2, 3, 4 , 5, 6, 7, 8, 9]))

// Com mais de uma linha no corpo, as chaves voltam e não é mais possível omitir a palavra-chave *return* caso a função retorne valor

const somaVet2 = vet => {
    let soma = 0
    for(let n of vet) soma += n  // soma = soma + n
    return soma
}
console.log(somaVet2([1, 2, 3, 4 , 5, 6, 7, 8, 9]))

// Conclusão: arrow functions São ideia spara acasos em que o corpo da função possui apenas uma linha, embora arrow functions com multiplas linhas
// não sejam incomuns.

