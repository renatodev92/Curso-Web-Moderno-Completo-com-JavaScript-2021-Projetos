// Agora vamos trabalhar com conceitos de NULL e UNDEFINID em JS
let valor //não inicializada
console.log(valor);//Not que aparece no console Undefined porque o valor não foi definido

// Quando quiser zerar o valor de uma var/let atribua a ela o valor null
valor = null //Ausência de valor
console.log(valor);

const produto = {}//Objeto {}
console.log(produto.preco);//Diz que não foi definido

produto.celular = 'Iphone';
produto.preço   =  1500,00;
produto.cor     = 'Pink';
produto.versao  = 2.0.toFixed(1);

for (const contador in produto) {
    console.log(produto);
}

const amigos = ['Samuel', 'Rafael', 'Renan', 'Tiago', 'Marcos'];

for (var i = 0; i < amigos.length; i++ ) {
    console.log(`Obrigado por ser meu amigo ${amigos[i]} !.`)
};