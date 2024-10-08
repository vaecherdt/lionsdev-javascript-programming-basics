let tabuada

console.log("Qual é a tabuada que você deseja saber?")
process.stdin.once('data', (data) => {
    tabuada = parseInt(data.toString().trim())
    calcular(tabuada)
    process.exit()
})

function calcular(tabuada) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    }
}