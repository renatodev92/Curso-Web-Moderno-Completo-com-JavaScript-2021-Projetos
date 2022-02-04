// Trabalhando com Break e Continue em Javascipt

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//O comando break interrompe o laço quando chega no indíce 5

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log(`\n`)


//O comando continue dentro do laço imterronpe o laço quando chega no indice 5 e depois volta a executar

for (y in nums) {
    if (y == 5) {
        continue
    }

    console.log(`${y} = ${nums[y]}`)
}