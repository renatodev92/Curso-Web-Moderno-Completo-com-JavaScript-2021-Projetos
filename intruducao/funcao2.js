//Armazenando uma função em uma variavel
//JS é uma linguagem que permite armazenar Funções dentro de variaveis. Veja no exemplo abaixo;

const imprimirSoma = function  (a, b) {
    console.log(a + b);
};

//Armazenando uma funcao arrow.function em uma variavel
imprimirSoma(2,3);
const soma = (a, b) => {
    return a + b;
}

console.log(soma(4, 4));

//Return implicito(Contido numa expressão mais não impresso formalmente)
const subtracao = (a, b) => a - b;
console.log(subtracao(100, 10));