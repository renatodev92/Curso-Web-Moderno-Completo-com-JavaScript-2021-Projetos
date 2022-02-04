let aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados);
console.log(aprovados[0])


aprovados[3] = 'Renato' // Adicionando dados em um array
aprovados.push('Larissa Tatiane') // Adicionando dados de um array


//Usando o for para percorrer o array
for (i = 0; i < aprovados.length; i++) {
    console.log(`Parabéns! ${aprovados[i]} você foi aprovado(a)!`)
}

console.log(aprovados.length)
aprovados.sort()//Função sort altera por ordem alfabética, alterando o array original
console.log(aprovados)

delete aprovados[1]// Você consegue deletar um dado do array.

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Samuel', 'Rafael', 'Renato', 'Renan', 'Tiago', 'Marcos','Luiz']

//Usando o for para percorrer o array
for (i = 0; i < aprovados.length; i++) {
    console.log(`Parabéns! ${aprovados[i]} você foi aprovado(a)!`)
}

aprovados.splice(1, 2);//Função splice exclui nesse caso a partir do indíce 1 , 2 elementos
console.log(aprovados)

aprovados.splice(4,2, 'Leandro', 'André');//Função spice a partir do indíce 4 adiciona 2 elementos novos no array
console.log(aprovados);

