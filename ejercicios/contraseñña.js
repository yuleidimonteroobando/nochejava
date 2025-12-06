function generarPasswordUnica() {
    const minLength = 15;
    const maxLength = 87;
    const longitud = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const especiales = "!@#$%&*?+=";

    const todos = minusculas + mayusculas + numeros + especiales;
    let passwordArray = [];
    passwordArray.push(minusculas[Math.floor(Math.random() * minusculas.length)]);
    passwordArray.push(mayusculas[Math.floor(Math.random() * mayusculas.length)]);
    passwordArray.push(numeros[Math.floor(Math.random() * numeros.length)]);
    passwordArray.push(especiales[Math.floor(Math.random() * especiales.length)]);
    for (let i = passwordArray.length; i < longitud; i++) {
        passwordArray.push(todos[Math.floor(Math.random() * todos.length)]);
    }

    for (let i = 0; i < passwordArray.length; i++) {
        const j = Math.floor(Math.random() * passwordArray.length);
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }
    return passwordArray.join('');
}
console.log(generarPasswordUnica());
