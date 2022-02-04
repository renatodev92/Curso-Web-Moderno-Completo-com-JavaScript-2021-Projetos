// Trabalhando com o for in - Laço de repetição
const notas = [1, 2, 5, 7, 15, 20, 88]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Renato',
    sobrenome: 'Oliveira', 
    idade: 29,
    peso: 78
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}