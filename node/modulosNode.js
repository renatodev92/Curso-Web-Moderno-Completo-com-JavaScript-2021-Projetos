//Acessando os módulos com o require
// ModuloA e ModuloB

console.log(`Acessando os módulos ModuloA e ModuloB com o require`)

const moduloA = require("./moduloA") // Através dessa linha você invoca o módulo A.js
const moduloB = require("./moduloB") // Através dessa linha você invoca o módulo A.js


console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())


