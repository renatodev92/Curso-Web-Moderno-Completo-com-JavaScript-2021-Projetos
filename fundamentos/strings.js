//Trabalahando com funções de Strings
// A strings podem ser delimitadas por 3 tipos
// "" aspas duplas
// '' aspas simples
// `` template string

const escola = 'Cod3r';

console.log(escola.charAt(0));//O método charAt tem o intúito de trazer a 1° letra da variavel escola
console.log(escola.charAt(1));//O método charAt tem o intúito de trazer a 2° letra da variavel escola
console.log(escola.substring(1));//O método substring tem o intúido de retornar todos os valores a partir do indíce.
console.log(escola.substring(0,5));//O método substring tem o intúido de retornar todos os valores a partir de algum indíce.
console.log('Escola'.concat(escola).concat("!!!"));// A função concat, concatena os solicitados.
console.log(escola.replace(3, 'enterne'));// A função replace subistitui os dados de uma string
console.log('Renan,Renato,Rafael,Tiago,Marcos,Samuel,Luiz'.split(','));// A função slipt tranforma os dados em ARRAY