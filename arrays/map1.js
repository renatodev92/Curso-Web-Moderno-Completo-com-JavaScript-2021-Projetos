//Map - Gera um novo array
//Map percorre o array e retorna o resultado desejado
//Map tranforma o array gerando outro array da forma que você quer.

const nums = [1, 2, 3, 4, 5]
console.log(nums)

//For com propósito
let resultado = nums.map(function (element) {
    return element * 10

})

console.log(resultado);

const soma10 = nums.map(function (element) {
    return element + 20
})

console.log(soma10)