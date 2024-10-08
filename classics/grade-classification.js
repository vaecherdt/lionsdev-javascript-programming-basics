function classificarNota(nota) {
    let classificacao
    switch (true) {
        case (nota >= 90 && nota <= 100):
            classificacao = 'A'
            break;
        case (nota >= 80 && nota < 90):
            classificacao = 'B'
            break;
        case (nota >= 70 && nota < 80):
            classificacao = 'C'
            break;
        case (nota >= 60 && nota < 70):
            classificacao = 'D'
            break;
        case (nota >= 0 && nota < 60):
            classificacao = 'F'
            break;
        default:
            classificacao = 'Nota inválida'
    }
    return classificacao
}

console.log(classificarNota(95))  // A
console.log(classificarNota(85))  // B
console.log(classificarNota(75))  // C
console.log(classificarNota(65))  // D
console.log(classificarNota(55))  // F
console.log(classificarNota(-5))  // Nota inválida
console.log(classificarNota(105)) // Nota inválida
