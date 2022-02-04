//Funão em Javascript
//Função em JS é First-Class Object (Citizens)
//Higher-ordem function

// Criando um função de forma literal
function func1() { }

//Armazenar uma função em uma variavel
const func2 = function () { }

//Armazenar uma função em um array
const array = [function (a, b) { return a + b }, func1, func2]

//Armazenar uma função em um atributo de Objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar uma função como parametro para outra função
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

//Uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)