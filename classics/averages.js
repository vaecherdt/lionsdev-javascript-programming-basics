let somaPares = 0
let somaImpares = 0
let totalPares = 0
let totalImpares = 0

for (let i = 0; i <= 999; i++) {
    if (i % 2 == 0) {
        somaPares += i
        totalPares++
    } else {
        somaImpares += i
        totalImpares++
    }
}

let mediaPares = somaPares / totalPares
let mediaImpares = somaImpares / totalImpares

console.log(`Soma dos números pares: ${somaPares}`)
console.log(`Soma dos números ímpares: ${somaImpares}`)
console.log(`Total de números pares: ${totalPares}`)
console.log(`Total de números ímpares: ${totalImpares}`)
console.log(`Média dos números pares: ${mediaPares}`)
console.log(`Média dos números ímpares: ${mediaImpares}`)

if (somaPares > somaImpares) {
    console.log('A soma dos números pares é maior que a soma dos números ímpares.')
} else if (somaImpares > somaPares) {
    console.log('A soma dos números ímpares é maior que a soma dos números pares.')
} else {
    console.log('A soma dos números pares é igual a soma dos números ímpares.')
}