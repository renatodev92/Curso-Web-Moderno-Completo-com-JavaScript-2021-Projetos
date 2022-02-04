const alunos = [
    { nome: 'João', nota: 10},
    { nome: 'Maria do Carmo', nota: 10},
    { nome: 'Ronaldo', nota: 10}
]

//Imperativo - Uma forma mais simples do passo a passo como fazer o algoritimo.

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)