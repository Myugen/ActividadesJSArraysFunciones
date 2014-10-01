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
var candidato = arrayNumeros[0];
for(var i = 1; i < arrayNumeros.length; i++) {
    if(candidato < arrayNumeros[i])
        candidato = arrayNumeros[i];
}
alert("El número mayor introducido es: " + candidato);