function media(secuencia) {
    var media = 0;
    for(var i = 0; i < secuencia.length; i++)
        media = media + secuencia[i];
    media = media/secuencia.length;
    return media;
}
function numerosSuperioresMedia(secuencia, media) {
    var resultado = new Array();
    for(var i = 0; i < secuencia.length; i++)
        if(secuencia[i] >= media)
            resultado.push(secuencia[i]);
    return resultado;
}

var arrayNumeros = new Array();
for(var i = 0; i < 10; i++) {
    var correcto = false;
    arrayNumeros[i] = parseInt(prompt("Escriba un número:"));
    while (!correcto) {
        if(isNaN(arrayNumeros[i]))
           arrayNumeros[i] = parseInt(prompt("AVISO, el dato introducido no corresponde a un número. Vuelva a introducir un número:"));
        else
            correcto = true;
    }
}
var avg = media(arrayNumeros);
alert("Los números introducidos mayores a la media (" + avg + ") son: " + numerosSuperioresMedia(arrayNumeros, avg));