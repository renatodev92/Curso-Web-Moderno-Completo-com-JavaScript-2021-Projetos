//Funções são ações a serem feitas e tomadas
//Sempre que possivel quebre as funções em passos para que haja aproveitamento de código

// function somando 2 números com o mode convêncional

let num1 = 10;
let num2 = 30;

function soma(num1, num2) {
    return num1 + num2
}

let result = soma(num1, num2)
console.log(`A soma de ${num1} e ${num2} é = ${result}.`)


let numero = 220;

function parimp(numero) {
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let resultado = parimp(numero)
console.log(`O número ${numero} é: ${resultado}!`)
