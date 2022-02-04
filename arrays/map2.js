const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno",  "preco": 13.90 }',
    '{ "nome": "Lapiseira", "preco": 4.50 }',
    '{ "nome": "Caneta", "preco": 5.00 }'
]

// Retonar o array com apena os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
