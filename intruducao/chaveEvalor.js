// Veja que a variavel foi declarada com uma chave e valor
const chave = "valor;"

//

function exec() {
    const saudacao = 'Fala' //
    return saudacao
}

// Objetos são grupos alinhados como chave e valor
const clientes = {
    name     : 'João Carlos da Silva',
    age      :  50,
    weight   :  75, 
    endereco :  {
        logadouro : 'Rua dos Cravos',
        numero    :  156,
        cep       :  08121640,
        cidade    :  'São Paulo',
        estado    :  'SP'
    }
};

console.log(chave);
console.log(exec());

for (let i in clientes) {
    console.log(clientes);
}
