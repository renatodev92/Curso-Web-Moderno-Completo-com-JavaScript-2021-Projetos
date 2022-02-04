function calculo(valorMensalGuardado, jurosMensal, quantidadeDeMesesPoupar) {
    let saldoAcumulado = 0;
    let msg = '';
    

    for (var i = 0; i < quantidadeDeMesesPoupar; i++) {
        
        if(i > 0) {
            saldoAcumulado = saldoAcumulado + ((saldoAcumulado / 100) * jurosMensal);
        }

        saldoAcumulado = saldoAcumulado + valorMensalGuardado;

        if(i === 0) {
            msg = `Poupado R$ ${saldoAcumulado.toFixed(2)} no ${i+1}° mês `;
        } else {
            msg = `Poupado R$ ${saldoAcumulado.toFixed(2)} no ${i+1}° mês, somado acréscimo de ${valorMensalGuardado} e rendimento de ${jurosMensal}% do acumulado do mês ${i}!`;
        }

        console.log(msg);
        
    }
    console.log(`Saldo final: ${saldoAcumulado}`);
}

calculo(500,10,10)