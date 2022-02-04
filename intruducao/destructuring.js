// Novo recurso do ES2015 - Destructuring JS
const pessoa = {
    nome: 'Renato',
    idade: 29,
    endereco: {
        logadouro: 'Rua das Rosas',
        numero: 500
    }
};

//Pegando dados através da destruction em JS e exibindo no console.log.
const { nome, idade } = pessoa;
console.log(nome, idade);

//Pegando os dados de um objeto e colocando em uma nova variavel com destruction JS.
const { nome: nomeNew, idade: age } = pessoa;
console.log(nomeNew, age);

//Acessando os dados do endereço com 'logadouro e numero' com Destruction.
const {endereco: { logadouro, numero } } = pessoa
console.log(logadouro, numero)





