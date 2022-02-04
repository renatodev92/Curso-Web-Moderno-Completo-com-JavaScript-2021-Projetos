
/*
// Uma função é uma ação. Ela executa um processo baseado em uma sentença de código.
// Uma função é um trecho de código que você pode montar e chamar ela quando quiser.
//Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.
//Uma função JavaScript é executada quando "algo" a invoca (chama).


// Abaixo uma função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
};

imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2,4);

// Abaixo uma função com retorno

function soma(a, b = 0) {
    return a + b
};

console.log(soma(2,5));
*/
const salario = 2000.00;
const horasTrabalhadas = 220;

function ganhoPorHora (salario, horasTrabalhadas) {

    const salarioHora = (salario / horasTrabalhadas);

    const total = salarioHora.toFixed(2);

    return total; 
};

console.log(`Seja bem-vindo seu salário por hora é R$: ${ganhoPorHora(salario,horasTrabalhadas)}.`);




    