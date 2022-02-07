// Primeiro cirando uma função convencional

/* function sum(number1, number2 = 0) {
    return number1 + number2
} */



//A arrow function é uma função anonima. Nela não podemos atribuir um nome só se estiver em uma variavel
const sum = (number1, number2) => {
    return number1 + number2
}
console.log(`O resultado é : ${sum(30, 10)}.`)



//Outra forma de escrever arrow function sem o return
const sum2 = (n1, n2) => n1 + n2;
console.log(sum2(100,200))

const comunity = () => {
     return'Colab Code'
}

console.log(comunity())



