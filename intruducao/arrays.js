//Arrays
//Os arrays são uma coleção de dados e são acessados pelo índice começando sempre em 0 (Zero).
//No javascrit uma vez o array criado, podemos acessar os indíces mesmo que não existem. 

let persogensPreferidosNaruto = [
    'Naruto', 'Itacho', 'Nagato'
];

console.log(persogensPreferidosNaruto);//Aqui percorremos o array por completo
console.log(persogensPreferidosNaruto[0]);//Aqui só percorremos o indíce 0 (Zero) e retornamos o resultado no console.log.
console.log(persogensPreferidosNaruto[0], persogensPreferidosNaruto[2]);//Aqui só percorremos o indíce 0 (Zero) e 2 (Dois) retornamos o resultado no console.log.



console.log(persogensPreferidosNaruto.length);//O comando .lenght conta a quantidades de arrays que o var/let possui

//Adicionado um novos arrays através do .push a var/let persogensPreferidosNaruto´.

persogensPreferidosNaruto.push = 'Uchila Madara', 'Sasuke';
console.log(persogensPreferidosNaruto);

// Uma das formas de deletar uma infomação do indíce de array é utilizar os comandos abaixo
delete persogensPreferidosNaruto[0];
console.log(persogensPreferidosNaruto);

// Para ver o tipo de dados do array digite o comando abaixo
//Os dados de um array são tratados pelo JS como um Objcet.
console.log(typeof persogensPreferidosNaruto);


