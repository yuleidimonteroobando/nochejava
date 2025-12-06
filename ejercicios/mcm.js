function mcm(a, b) {
    let numero = 1;
    while (true) {
        if (numero % a === 0 && numero % b === 0) {
            return numero;
        }
        numero++;
    }}
console.log(mcm(4, 6)); 
