let notas = []
let prova1
let prova2
let media

console.log('Qual a primeira nota?')
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log('Qual a segunda nota?')
    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})

function processamento(prova1, prova2) {
    notas.push(prova1)
    notas.push(prova2)

    media = (notas[0] + notas[1]) / 2

    console.log(`A média entre as notas é ${media}.`)
}