var correcto = false;
var numero1 = parseInt(prompt("Escriba un número:"));
while (!correcto) {
    if(isNaN(numero1))
       numero1 = parseInt(prompt("AVISO, el dato introducido no corresponde a un número. Vuelva a introducir un número:"));
    else
        correcto = true;
}
correcto = false;
var numero2 = parseInt(prompt("Escriba un número. Asegúrese de que sea mayor que el anterior:"));
while (!correcto) {
    if(isNaN(numero2))
        numero2 = parseInt(prompt("AVISO, el dato introducido no corresponde a un número. Vuelva a introducir un número:"));
    else
        correcto = true;
}
if(numero1 > numero2) {
    alert("El segundo número introducido es menor al primero.");
    var aux = numero2;
    numero2 = numero1;
    numero1 = aux;
}
var secuencia = "Secuencia: ";
for (var i = 0; i <= (numero2 - numero1); i++)
    secuencia += (i + numero1) + " ";
alert(secuencia);