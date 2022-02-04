
function valorDepositoFGTS(salarioBruto) {
    return (salarioBruto / 100 * 8).toFixed(2)
}

console.log(`Com base no salário informado o valor de FGTS a ser pago será R$ ${valorDepositoFGTS(8000)}.`);

