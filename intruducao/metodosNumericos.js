function salarioHora (salario, cargaHoraria) {
    let salarioM = (salario / cargaHoraria);

    console.log(`O salário hora é R$ ${salarioM.toFixed(2)}.`)
}
 
//Função criada para cálculo do valor do salário hora.
function horaExtra (salario, cargaHoraria,percentualHoraExtra) {
    let valorSalarioHora = salario / cargaHoraria
    let valorAdicionalHoraExtra = (salario / cargaHoraria) / 100 * percentualHoraExtra
    salarioHora(salario, cargaHoraria)

    return (valorSalarioHora + valorAdicionalHoraExtra).toFixed(2)


}
 

 
console.log(`O salário com a H.E é R$ ${horaExtra(2684.14,220,100)}.`)


