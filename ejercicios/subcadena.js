
function contieneCaracteres(buscada, texto) {
    let pos, seguir = true;
      let indice = 0;

    while (seguir && indice < buscada.length) {
        pos = texto.indexOf(buscada[indice]);

        if (pos >= 0) {

            texto = texto.replace(texto[pos], "");
        } else {
            seguir = false;
        }
        indice++;
    }
    return seguir;
}
function subcadenaMinima(muestra, cadena) {

    let resultado = "";
    let inicio = 0;
    let encontrado = false;

    if (!contieneCaracteres(muestra, cadena) || muestra.length >= cadena.length) {
        return "No existe";
    }

    const limite = cadena.length - muestra.length;

    while (inicio <= limite) {

        let longitud = muestra.length;
        let sub, valido;
        do {
            sub = cadena.substring(inicio, inicio + longitud);
            valido = contieneCaracteres(muestra, sub);
            longitud++;
        } while ((inicio + longitud <= cadena.length) && !valido);

        if (valido && (resultado === "" || sub.length < resultado.length)) {
            resultado = sub;
        }
        inicio++;
    }
    return resultado;
}
console.log(subcadenaMinima("nasa", "antesala"));   // debería dar "antesa"
