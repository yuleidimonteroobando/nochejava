function toArray(obj) {
    const resultado = [];

    for (let clave in obj) {
        const valor = obj[clave];
        resultado.push([clave, valor]);
    }

    return resultado;
}
let fecha = { dia: 1, mes: 4, año: 23 };
console.log(toArray(fecha));