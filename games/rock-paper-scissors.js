let opcoes = ['Pedra', 'Papel', 'Tesoura']
let escolhaUsuario = ''
let escolhaComputador = ''
let resultado = ''

console.log('Digite sua escolha: Pedra, Papel ou Tesoura')
process.stdin.once('data', function(data) {
    escolhaUsuario = data.toString().trim()
    escolhaComputador = opcoes[Math.floor(Math.random() * 3)]
    if (escolhaUsuario == escolhaComputador) {
        resultado = 'Empate!'
    } else if (
        (escolhaUsuario == 'Pedra' && escolhaComputador == 'Tesoura') ||
        (escolhaUsuario == 'Papel' && escolhaComputador == 'Pedra') ||
        (escolhaUsuario == 'Tesoura' && escolhaComputador == 'Papel')
    ){
        resultado = 'Você venceu!'
    }
    else {
        resultado = 'Você perdeu!'
    }
    console.log(`Você escolheu: ${escolhaUsuario}.`)
    console.log(`Computador escolheu: ${escolhaComputador}.`)
    console.log(resultado)
    process.exit()
})