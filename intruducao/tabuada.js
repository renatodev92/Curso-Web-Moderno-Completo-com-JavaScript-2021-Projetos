const number = 20;
const multiplicador = 10;

console.log(`Bem-vindo a nossa tabuada!`)

for (i = 0; i <= multiplicador; i++) {
    let resultado = number * i;
    console.log(`O resultado de ${number} x ${i} é igual á ${resultado}`);
}