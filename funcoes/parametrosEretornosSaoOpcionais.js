function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitico: ${area}m2.`)
    } else {
        return console.log(area);
    }
}

area(2,2)
area(1,1)
area(5,5)
area(6,6)