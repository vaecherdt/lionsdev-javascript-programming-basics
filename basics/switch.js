function calculadora(a, b, operacao) {
    switch (operacao) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(5, 3, '+'))  // 8
console.log(calculadora(5, 3, '-'))  // 2
console.log(calculadora(5, 3, '*'))  // 15
console.log(calculadora(5, 3, '/'))  // 1.666...
console.log(calculadora(5, 3, '^'))  // Operação inválida