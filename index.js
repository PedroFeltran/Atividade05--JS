const lista1 = [1,2,3,4,5,6,7,8,9] // soma = 45 ; media = 5

/**
 * VALORES MAIORES MEDIA
 * @param {*} lista  recebe uma lista como parametro
 * @returns retorna os valores maiores do que o valor médio da lista
 */
function ValoresMaioresMedia(lista){

    const media = lista.reduce((total, valor) => total + valor,0 ) / lista.length;
    
    const ValoresMaiores = lista.filter(valor => valor > media)
    
    return ValoresMaiores
}
console.log(ValoresMaioresMedia(lista1))

/**
 *  MENOR VALOR
 * @param {*} lista recebe uma lista como parammetro
 * @returns retorna o menor valor da lista
 */
function MenorValor(lista){
    const MenorValor = Math.min(...lista)
    return MenorValor
}
console.log(MenorValor(lista1))

/**
 * SOMA VALORES DA LISTA
 * @param {*} lista recebe uma lista como paremetro
 * @returns retorna a soma dos itens da lista
 */
function SomaValoresLista(lista){
    const ValoresSomados = lista.reduce((total,valor) => total + valor,0)
    return ValoresSomados
}
console.log(SomaValoresLista(lista1))

/**
 * VALOR MENOR QUE 20
 * @param {*} lista  Recebe uma lista como parametro
 * @returns retorna todos os valores menores que 20
 */
function ValoresMenores20(lista){
    const MenorVinte = lista.filter(valor => valor < 20)
    return MenorVinte
}
console.log(ValoresMenores20(lista1))

/**
 * PRIMEIRO E ULTIMO
 * @param {*} lista Recebe uma lista como parametro
 * @returns retorna o primeiro e o ultimo item da lista
 */
function PrimeiroUltimo(lista){
    return [lista[0],lista[lista.length-1]]
}
console.log(PrimeiroUltimo(lista1))