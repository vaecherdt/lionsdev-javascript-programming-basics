const readline = require('readline')

let numeroSorteado = Math.floor(Math.random() * 100 + 1)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function solicitarPalpite() {
    rl.question('Adivinhe o número (entre 1 e 100): ', (input) => {
        let palpite = parseInt(input)

        if (palpite < numeroSorteado) {
            console.log('Muito baixo!')
            solicitarPalpite()
        } else if (palpite > numeroSorteado) {
            console.log('Muito alto!')
            solicitarPalpite()
        } else {
            console.log('Parabéns! Você adivinhou o número.')
            rl.close()
        }
    })
}

solicitarPalpite()