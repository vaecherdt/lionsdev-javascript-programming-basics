let nome
let idade
const ano = 2024

console.log('Como é seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    if (idade < 18) {
        let anosAteSerDeMaior = 18 - idade
        console.log(`Olá ${nome}, você vai ser maior de idade em ${anosAteSerDeMaior} anos.`)
    } else {
        console.log(`Olá ${nome}, você é maior de idade`)
    }
}