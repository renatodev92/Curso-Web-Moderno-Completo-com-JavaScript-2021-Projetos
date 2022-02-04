//Estratégias para gerar valor padrão
// || Operando ou - or
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))
console.log(`\n`)


//Valor padrão do es2015
function soma3(a= 1, b= 1, c = 1) {
    return a + b + c
}
console.log(soma3())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))