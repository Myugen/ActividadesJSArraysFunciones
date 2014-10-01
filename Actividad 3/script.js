function elevarEntero(base, exponente) {
    var resultado = 1;
    for(var i = 0; i < exponente; i++)
        resultado = resultado*base;
    return resultado;
}

var correcto = false;
var base = parseInt(prompt("Escriba la base:"));
while (!correcto) {
    if(isNaN(base))
       base = parseInt(prompt("AVISO, el dato introducido no corresponde a un número. Vuelva a introducir un número:"));
    else
        correcto = true;
}
correcto = false;
var exponente = parseInt(prompt("Escriba el exponente:"));
while (!correcto) {
    if(isNaN(exponente))
        exponente = parseInt(prompt("AVISO, el dato introducido no corresponde a un número. Vuelva a introducir un número:"));
    else
        correcto = true;
}

alert("Resultado: " + base + "^" + exponente + "=" + elevarEntero(base, exponente));