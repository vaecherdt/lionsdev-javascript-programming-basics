let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let senha = ''
let numeroAleatorio
console.log("Digite o comprimento da senha:")
process.stdin.once('data', function(data) {
    let comprimentoSenha = parseInt(data)

    for (let i = 0; i < comprimentoSenha; i++) {
        numeroAleatorio = Math.floor(Math.random() * caracteres.length)
        senha = senha + caracteres.charAt(numeroAleatorio)
    }
    console.log ("Sua senha aleatória é: " + senha)
    process.exit()
})