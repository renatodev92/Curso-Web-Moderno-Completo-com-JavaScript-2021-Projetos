//Trabalhando com foreach para percorrer array
//Para trabalhar com o foreach você tem que adicionar uma função callback(ligar de volta)
//Primeiro parametro (nome) retorna o dado dentro do array
//Segunda parametro retorna (indice) dentro do array
//Terceiro parametro retorna (o array completo)

//Obs. Você tamm pode passar menos parametros.


const aprovados = ['Ned', 'Sansa', 'Arya', 'Briene', 'Tormand']
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

// Fazendo o loop com o for
for (i = 0; i < aprovados.length; i++) {
    console.log(`${i+1} - ${aprovados[i]}`)
}

// Outra alternativa foreach com arrow function
aprovados.forEach(nome => console.log(nome))

const melhoresDesenhos = ['Naruto', 'Dragon Bal', 'Bleach', 'Apenas um Show', 'Buck', 'Os cavaleiros do Zodiáco']
aprovados.forEach(function (nome, indice){
    console.log(`${nome} - ${indice}`)
}) 

// Arrow function foreach

melhoresDesenhos.forEach(nome => console.log(nome))
