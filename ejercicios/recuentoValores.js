
let tonos = ["blanco", "verde", "rojo", "verde", "verde", "rojo", "verde", "azul"];

function obtenerFrecuencias(lista) {

    let registro = {};
    let sinDuplicados = Array.from(new Set(lista));

    for (let k = 0; k < sinDuplicados.length; k++) {

        let actual = sinDuplicados[k];
        registro
        for (let x = 0; x < lista.length; x++) {
            if (lista[x] === actual) {
                registro[actual]++;
            }
        }
    }

    return registro;
}

function ordenarFrecuencias(datos) {

    let arreglo = [];

    for (let clave in datos) {
        arreglo.push({
            nombre: clave,
            total: datos[clave]
        });
    }

    arreglo.sort((a, b) => a.total - b.total);

    return arreglo.map(item => {
        let obj = {};
        obj[item.nombre] = item.total;
        return obj;
    });
}
let resultadoConteo = obtenerFrecuencias(tonos);
let resultadoOrdenado = ordenarFrecuencias(resultadoConteo);

console.log("Conteo:", resultadoConteo);
console.log("Ordenado:", resultadoOrdenado);
