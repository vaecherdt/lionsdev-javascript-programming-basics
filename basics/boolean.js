let gostaDeCafe
let resposta

console.log('Você gosta de café?')

process.stdin.once('data', function(data) {
    resposta = data.toString().trim()

    processamento(resposta)
    process.exit()
})

function processamento(nome, idade) {
    if (resposta == 'sim') {
        gostaDeCafe = true
    } else {
        gostaDeCafe = false
    }
    if (gostaDeCafe) {
        console.log('Que bom! Café é muito bom mesmo!')
    } else {
        console.log('Que pena.')
    }
}