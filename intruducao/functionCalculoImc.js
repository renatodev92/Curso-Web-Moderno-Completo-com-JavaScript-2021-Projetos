const weight = 60;
const height = 1.65;


function calculationImc(weight, height) {

    const valueImc = weight / (height * height);
    const totalImc = valueImc.toFixed(2);

    if (totalImc <= 16.9) {
        console.log(`Muito abaixo do peso, seu IMC é ${totalImc}.\nCuidado! Queda de cabelo, infertilidade, ausência menstrual.`)
    }
    else if (totalImc > 17 && totalImc <= 18.4) {
        console.log(`Abaixo do peso, seu IMC é ${totalImc}.\nCuidado! Fadiga, stress, ansiedade.`)
    }
    else if (totalImc >= 18.5 && totalImc <= 24.9) {
        console.log(`Peso normal, seu IMC é ${totalImc}.\nVocê possui tem menor risco de doenças cardíacas e vasculares.`)
    }
    else if (totalImc >= 25 && totalImc <= 29.9) {
        console.log(`Acima do peso, seu IMC é ${totalImc}.\nCuidado! Fadiga, má circulação, varizes.`)
    }
    else if (totalImc >= 30 && totalImc <= 34.9) {
        console.log(`Obesidade Grau I, seu IMC é ${totalImc}.\nCuidado! Diabetes, angina, infarto, aterosclerose.`)
    }
    else if (totalImc >= 35 && totalImc < 40) {
        console.log(`Obesidade Grau II, seu IMC é ${totalImc}.\nCuidado! Apneia do sono, falta de ar.`)
    }
    else if (totalImc > 40) {
        console.log(`Obesidade Grau III, seu IMC é ${totalImc}.\nCuidado risco de VIDA! Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.`)
    }

    else {
        console.log(`O valor digitado não é válido: ${totalImc}.`)
    }
    return totalImc;
}

calculationImc(weight, height);