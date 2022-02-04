// A estrtura IF vai retornar um retorno caso a condição seja verdadeira ou falsa

function soBoaNoticia (nota) {
    if (nota >= 7) {
        console.log('Aprovado com a nota ' + nota + '.') 
    } else {
        console.log('Sinto te dizer mais você foi Reprovado!')
    }
}

soBoaNoticia(6);

function seForVerdade(valor) {
    if(valor) {
        console.log(`É verdade? ${valor}`)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1,2])
seForVerdade({})
