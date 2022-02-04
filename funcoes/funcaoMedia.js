//Função para cálculo de média

media = (nota1, nota2, nota3, nota4) => {
    return (nota1 + nota2 + nota3 + nota4) / 4
}

// Função identifica se o usuário foi aprovado ou não.
aprovadoReprovado = (result) => {
    if (result >= 7 && result <= 10) {
        console.log(`Parabéns você foi aprovado`)
    }
    else if (result >= 0 && result <= 6) {
        console.log(`Não foi dessa vez!\ninfelizemente você foi reprovado.`)
    }
    else {
        console.log(`A média informada deve ser entre 0 e 10.`)
    }
    return result
}

aprovadoReprovado(media(10, 10, 10, 5))