function calculadora(a, b, operacao) {
    if (operacao == '+') {
        return a + b;
    } else if (operacao == '-') {
        return a - b;
    } else if (operacao == '*') {
        return a * b;
    } else if (operacao == '/') {
        return a / b;
    } else {
        return 'Operação inválida';
    }
}

console.log(calculadora(5, 3, '+'))  // 8
console.log(calculadora(5, 3, '-'))  // 2
console.log(calculadora(5, 3, '*'))  // 15
console.log(calculadora(5, 3, '/'))  // 1.666...
console.log(calculadora(5, 3, '^'))  // Operação inválida