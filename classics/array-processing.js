let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

let soma = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}
let media = soma / notas.length
console.log("Média das notas: " + media)

let notaMaxima = notas[0]
let notaMinima = notas[0]
for (let i = 1; i < notas.length; i++) {
    if (notas[i] > notaMaxima) {
        notaMaxima = notas[i]
    }
    if (notas[i] < notaMinima) {
        notaMinima = notas[i]
    }
}
console.log("Nota mais alta: " + notaMaxima)
console.log("Nota mais baixa: " + notaMinima)

let notasAcimaDaMedia = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        notasAcimaDaMedia++
    }
}
console.log("Notas acima da média: " + notasAcimaDaMedia)

notas.push(8.0)
console.log("Lista atualizada de notas: " + notas)

let notasReprovadas = 0
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 8.0) {
        notasReprovadas++
    }
}
console.log("Notas reprovadas: " + notasReprovadas)
