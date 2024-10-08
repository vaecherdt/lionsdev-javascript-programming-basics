const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeroSorteado = Math.floor(Math.random() * 100 + 1)
let tentativas = 0
let numeroMaximoTentativas = 10

console.log('Bem vindo ao jogo de adivinhação!')
solicitarPalpite()

function solicitarPalpite() {
    tentativas++

    if (numeroMaximoTentativas < tentativas) {
        console.log(`Você excedeu o número máximo de tentativas (${numeroMaximoTentativas}). O número era ${numeroSorteado}.`)
        rl.close()
        return
    } else {
        rl.question('Adivinhe o número (entre 1 e 100): ', (input) => {
        let palpite = parseInt(input)

        switch (true) {
            case palpite < numeroSorteado:
                console.log('Muito baixo!')
                solicitarPalpite()
                break
            case palpite > numeroSorteado:
                console.log('Muito alto!')
                solicitarPalpite()
                break
            case palpite == numeroSorteado:
                console.log(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`)
                rl.close()
                break
            default:
                console.log('Número inválido, tente novamente')
                solicitarPalpite()
                break
            }
        })
    }
}