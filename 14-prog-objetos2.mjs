/*
    Uma classe (class) é uma estrutura que permite controlar a criação de 
    objetos de acordo com seus requisitos de utilização. 
    Uma classe pode ser comparada a uma forma de bolo. Se uma forma de bolo
    é redonda, com um furo no meio, não importam os ingredientes que serão
    utilizados na receita, o bolo (ou o pudim, ou o quindim) sairão no formato
    determinado pela forma.
*/

// Por convenção, nomes de classe iniciam com Letra Maiúscula em JavaScript
class FormaGeometrica {

    // Declaração de atributos privados
    #base
    #altura
    #tipo

    // Quando uma função está dentro de uma classe, ela é denominada MÉTODO.
    // constructor() é um método especial que é chamado toda vez que se tenta
    // criar um objeto a partir da classe. Nele, é possível fazer as validações
    // que permitirão ou não a existência de um objeto.
    // O processo de criação de um objeto pode ser abortado se o constructor()
    // gerar um erro do tipo Error.
    constructor(base, altura, tipo) {
        // base, altura e tipo são os PARÂMETROS do construtor
        
        // Atribuindo valores iniciais a PROPRIEDADES. O setter de cada
        // uma delas será chamado, fazendo as validações
        this.base = base
        this.altura = altura
        this.tipo = tipo

        // Impede a criação de novas propriedades públicas do lado de fora da classe
        Object.seal(this)

    }

    // getter: permite que o valor de um atributo PRIVADO seja acessado fora da classe,
    // mas no modo SOMENTE-LEITURA
    get base() {
        return this.#base
    }
    
    get altura() {
        return this.#altura
    }

    get tipo() {
        return this.#tipo
    }

    /*******************************************************************
     * Quando um atributo tem associado a ele um getter e/ou um setter,
     * passamos a denominá-lo PROPRIEDADE do objeto.
    */

    // setter: permite com que o valor do atributo seja alterado, opcionalmente
    // fazendo algum tipo de validação
    set base(valor) {   // valor é o conteúdo que está TENTANDO entrar no atributo
        // base deve ser numérica e maior que zero
        if(isNaN(valor) || valor <= 0)
            throw new Error('A base deve ser numérica e maior que zero.')

        this.#base = valor
    }

    set altura(valor) {
        // altura deve ser numérica e maior que zero
        if(isNaN(valor) || valor <= 0)
            throw new Error('A altura deve ser numérica e maior que zero.')
            
        this.#altura = valor
    }

    set tipo(valor) {
        // tipo deve ser Q, T ou E
        // if(tipo !== 'Q' || tipo !== 'T' || tipo !== 'E') {
        if(! ['Q', 'T', 'E'].includes(valor)) {
            throw new Error('O tipo deve ser Q, T ou E.')
        }

        this.#tipo = valor
    }

    /************************************************** */

    // Método
    calcularArea() {
        switch(this.forma) {
            case 'Q':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            //case 'E':
            default:
                return (this.base / 2) * (this.altura / 2) * Math.PI            
        }
    }

    /************************************************************** 
    PROPRIEDADE CALCULADA: é uma propriedade somente-leitura (portanto,
    tem apenas o getter) cujo valor é calculado com base em outros
    atributos e propriedades. O cálculo acontece "ao vivo", ou seja,
    é efetuado no momento em que o getter é acionado.
    ************************************************************** */
    get area() {
        switch(this.forma) {
            case 'Q':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            //case 'E':
            default:
                return (this.base / 2) * (this.altura / 2) * Math.PI            
        }       
    }

}

let forma1, forma2, forma3

try {
    // Criando objetos a partir da classe
    forma1 = new FormaGeometrica(5.4, 7.7, 'T') // -> parâmetros do construtor
    console.log('forma1:', forma1.base, forma1.altura, forma1.tipo)
}
catch(erro) {
    console.log('ERRO: ' + erro.message)
}

// Tratamento de exceção
try {   // TENTA executar as instruções que estão dento desse bloco
    // Caso aconteça algum erro dentro deste bloco, ele será interrompido
    // e a execução passará ao bloco catch
    forma2 = new FormaGeometrica(8, 3.5, 'J')
    console.log('forma2:', forma2.base, forma2.altura, forma2.tipo)
}
// O bloco catch recebe o erro que aconteceu, e nos dá oportunidade de 
// tratá-lo sem abortar a execução do programa
catch(erro) {
    console.log('Não foi possível criar o objeto. Motivo: ' + erro.message)
}

try {
    // Criando objetos a partir da classe
    forma3 = new FormaGeometrica(4, 3, 'E') // -> parâmetros do construtor
    console.log('forma3:', forma3.base, forma3.altura, forma3.tipo)
}
catch(erro) {
    console.log('ERRO: ' + erro.message)
}

// Tentando adicionar uma propriedade 'descricao' ao objeto. Não dá certo,
// pois o objeto foi selado no final do construtor, impedindo esse tipo de operação.
//forma1.descricao = 'batata'
//console.log(forma1)

// Lendo o atributo base da forma1 (será acionado o getter)
console.log('base de forma1:', forma1.base)

// Tentativa de alteração da proprieda base
forma1.base = 3.6
//forma1.altura = 'S'
console.log('base de forma1:', forma1.base)

// Cálculo da área via método
console.log('Área da forma1:', forma1.calcularArea())

// Cálculo da área via propriedade
console.log('Área da forma1:', forma1.area)

forma1.altura = 10
console.log('Área da forma1:', forma1.area)