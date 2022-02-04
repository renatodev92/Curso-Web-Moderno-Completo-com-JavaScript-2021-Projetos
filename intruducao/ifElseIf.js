//Utilizando IF, ELSE IF e Else.

Number.prototype.entre = function (notainicio, notafim) {
    return this >= notainicio && this <= notafim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log(`Você está no quadro de honra!`)
    } else if (nota.entre(7, 8.99)) {
        console.log(`Aprovado`)
    } else if (nota.entre(4, 6.99)) {
        console.log(`Recuperação`)
    } else if (nota.entre(0, 3.99)) {
        console.log(`Você foi reprovado!`)
    } else {
        console.log(`A nota digitada é inválida`)
    }
}

imprimirResultado(9)
imprimirResultado(10)
imprimirResultado(8.99)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(6.99)
imprimirResultado(0)
imprimirResultado(3.99)
imprimirResultado(40)