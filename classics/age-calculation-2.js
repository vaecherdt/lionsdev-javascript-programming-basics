let nome
let idade
let fezAniversario
const ano = 2024

console.log('Como é seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log('Você já fez aniversário este ano? (sim/não)')

        process.stdin.once('data', function(data) {
            fezAniversario = data.toString().trim()

            processamento(nome, idade)
            process.exit()
        })
    })
})

function processamento(nome, idade) {
    console.log(`Olá ${nome}, você nasceu em ${ano - idade - (fezAniversario == 'sim' ? 0 : 1)}.`)
}