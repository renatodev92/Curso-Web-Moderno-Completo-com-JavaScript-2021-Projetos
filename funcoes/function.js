
//Função sem nenhum parametro!
function escreva() {
    console.log(`Olá programador a Bordo!`)
}
escreva()

//Função passando um parametro
function escrevaMensagem(mensagem) {
    console.log(mensagem)
}

escrevaMensagem(`Harry Poter e a pedra filosofal`)

// Função executando o return(Retornando os valores).
function divisao(numero1, numero2) {
    return numero1 / numero2
}

let soma = divisao(100, 10)
console.log(soma)
console.log(divisao(200, 10))

//

function somaTudo(numeros) {
    let total = 0;

    for (let num of numeros) {
        total = total + num
    }
    return total
}

let arrayNumbers = [10, 10, 10, 10, 10]
let resultado = somaTudo(arrayNumbers)
console.log(resultado)

//... siginifica que vc pode passar parametros infinitos
function escreverEndereco (rua, cidade, pais, ...complementos) {
    console.log(rua);
    console.log(cidade);
    console.log(pais);
    console.log(complementos)
}
 
escreverEndereco('Rua das programações', 'São Paulo', 
'Brasil', 'Estado Rio de Janeiro', 'Cep 123123-12',);