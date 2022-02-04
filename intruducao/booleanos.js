//Trabalhando com operadorer true or false em JavaScript

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('os verdadeiros');

let nome = '';
console.log(nome || 'Nenhum nome foi identificado!');// Veja que esse cód faz um IF e Else se um nome foi verificado ou não.
