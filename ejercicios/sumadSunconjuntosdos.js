function sumarSubconjunto(lista, objetivo) {

    if (lista.length === 0)
        return false;
    if (lista.includes(objetivo))
        return true;

    let tabla = [];
    let acumulados = [];
    let fila = 0;
    let logrado = false;
    do {
        tabla[fila] = [];
        acumulados.push(lista[fila]);

        for (let valor = 0; valor <= objetivo; valor++) {

            tabla[fila][valor] = acumulados.includes(valor);

            if (!tabla[fila][valor] && fila > 0) {
            if (lista[fila - 1] > valor) {
                    tabla[fila][valor] = tabla[fila - 1][valor];
                } else {
                    tabla[fila][valor] = tabla[fila - 1][valor - lista[fila - 1]];
                }
            }    }
        logrado = tabla[fila][objetivo];
        fila++;
    } while (fila < lista.length + 1 && !logrado);
    console.table(tabla);
    return logrado;
}
let datos = [1, 1, 5, 4];
console.table(datos);
console.log("Resultado:", sumarSubconjunto(datos, 2));
