/*
Na pasta variáveis, crie um novo arquivo chamado boas-vindas.js.
Crie uma variável chamada nome, sem atribuir um nome.
Use o console.log(“”) para perguntar o nome do usuário.
Usando o stdin, colete o nome do usuário.
Crie uma variável chamada saudação personalizada no formato “Olá, Nome”.
Use o console.log() para imprimir essa saudação personalizada no console.
Execute o programa usando o Node.js.
*/

let nome = ''

console.log('Qual é seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    let saudacao = `Olá, ${nome}`
    console.log(saudacao)
    process.exit()
})