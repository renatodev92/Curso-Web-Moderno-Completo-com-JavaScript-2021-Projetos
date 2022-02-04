//Trabalhando com Objetos
//Objeto sempre irão trabalhar com chave e valor
const prod1 = {};
prod1.nome = 'Smartphone'
prod1.preco = 5000.00

console.log(prod1.nome);// Veja que consiguimos chamar a chave atráves  do indíce como se fosse uma arvore de pastas

// Veja outra forma os objetos

let documentosPessoais = {
    'cpf'          : 41616034874,
    'rg'           : 00000000000, 
    'pis'          : 00000000000, 
    'chabilitacao' : 00000000000 
};

console.log(documentosPessoais.cpf);