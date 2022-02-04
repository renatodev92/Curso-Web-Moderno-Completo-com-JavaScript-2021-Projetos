//Fazendo o While - Laço de repetição

let contador = 1;
while (contador <= 10) {
    console.log(`While ${contador}`)
    contador++
}

//Fazendo o for - Laço de repetição
for (let i = 1; i <= 10; i++) {
    console.log(`For ${i}`)
}

//Percorrendo o array através do laço de repetição for
const notas = [6.7, 9, 8, 3, 5, 4]

for (i = 0; i < notas.length; i++) {
    console.log(`Percorrendo o array ${notas[i]}`)
}