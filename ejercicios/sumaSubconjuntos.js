function verificarSuma(listaNumeros, objetivo) {

    if (objetivo === 0)
        return true;

    if (listaNumeros.length === 0)
        return false;

    let elemento = listaNumeros[listaNumeros.length - 1];

    if (objetivo >= elemento) {
        let conElemento = verificarSuma(listaNumeros.slice(0, -1), objetivo - elemento);
        if (conElemento)
            return true;
    }

    let sinElemento = verificarSuma(listaNumeros.slice(0, -1), objetivo);
    return sinElemento;
}

let valores = [1, 1, 5, 4];
let meta = 3;

console.table(valores);
console.log("Meta:", meta);
console.log("¿Se puede lograr la suma?:", verificarSuma(valores, meta));
