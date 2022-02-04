//Função criada para cálculo do valor do salário hora.
function salarioHora (salario, cargaHoraria) {
    return (salario / cargaHoraria);
}

console.log(`O salário hora é R$ ${salarioHora(2684.14,220).toFixed(2)}.`)

function horaExtra (salario, cargaHoraria,percentualHoraExtra) {
    let valorAdicionalHoraExtra = (salario / cargaHoraria) / 100 * percentualHoraExtra
    return (salarioHora(salario, cargaHoraria) + valorAdicionalHoraExtra)
}

console.log(`O salário com a H.E é R$ ${horaExtra(2684.14,220,100).toFixed(2)}.`)