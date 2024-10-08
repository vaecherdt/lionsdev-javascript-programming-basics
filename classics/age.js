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
    anoNascimento = ano - idade
    console.log(`Olá ${nome}, você nasceu em ${anoNascimento - 1} ou ${anoNascimento} se você já fez aniversário este ano.`)
}