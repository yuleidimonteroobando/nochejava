function operar(n1, n2, signo) {

    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        return null;
    }
    switch (signo) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n2 === 0 ? null : n1 / n2;
            break;
        case '%':
            resultado = n2 === 0 ? null : n1 % n2;
            break;
        default:
            resultado = null;
    }
    return resultado;
}

console.log(operar(3, 4, "*"));
