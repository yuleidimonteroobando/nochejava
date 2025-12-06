function frecuenciaDeCaracteres(texto) {
    let resultado = [];
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let encontrado = false;
        for (let j = 0; j < resultado.length; j++) {
            if (resultado[j].caracter === letra) {
                resultado[j].veces += 1;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            resultado.push({
                caracter: letra,
                veces: 1
            });
        }
    }
    return resultado;
}
console.log(frecuenciaDeCaracteres("papa"));