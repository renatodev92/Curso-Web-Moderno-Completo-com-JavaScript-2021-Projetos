const pilotos = ['Ayrton Senna', 'Alonso', 'Allan Prost', 'Rubinho', ' Felipe Massa']

pilotos.pop()// Esse methodo remove o ultímo dado do array
console.log(pilotos);

pilotos.push('Lewis Hamilton'); // Esse methodo adiciona um array o Lewis Hamilton
console.log(pilotos);

pilotos.shift()// O methodo remove o primeiro elemento da lista/array.
console.log(pilotos);

pilotos.unshift('Renato de Oliveira'); // o methodo adiciona um elemento a lista do array
console.log(pilotos)


// splice adiciona e remove elementos.


// Adicionar
pilotos.splice(2, 0, 'Rafael', 'Samuel')
console.log(pilotos)

//Remover 
pilotos.splice(3, 1)//A partir do incíde 3 remova um elemento
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Pega um pedaço/Novo array a partir do indíce 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)






