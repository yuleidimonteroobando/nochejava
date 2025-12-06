function dividirlasfress(frase, ancho) {
    let palabras = frase.split(" ");
    let linea = "";
    let resultado = [];
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if ((linea + palabra).length > ancho) {
            resultado.push(linea.trim());
            linea = "";
        }
        linea += palabra + " ";
    }
    resultado.push(linea.trim());
    return resultado;
}
let texto = "hola estefenia como estas? cenaras hoy?.";
let lineas = dividirFrase(texto, 20);

console.log(lineas);