function buscarAlumno(clase, nombre) {
    for (var i = 0; i < clase.length; i++)
        if (clase[i][0].toUpperCase == nombre.toUpperCase)
            return i;
    return (-1);
}
function modificarNota(clase) {
    var nombre = prompt("Escribe el nombre del alumno:");
    var alumnoBuscado = buscarAlumno(clase, nombre);
    if (alumnoBuscado != -1) {
        var notaNueva = parseInt(prompt("Alumno - " + clase[alumnoBuscado][0].toUpperCase + "\nEscriba nueva nota:"));
        var correcto = false;
        while(!correcto)
            if(isNaN(notaNueva))
                notaNueva = parseInt(prompt("AVISO, el dato introducido no es numérico. Vuelva a introducirlo:"));
            else
                correcto = true;
        clase[alumnoBuscado][1] = notaNueva;
    }
    else
        alert("No existe alumno con ese nombre.");
}
function obtenerMedia (clase) {
    var media = 0;
    for (var i = 0; i < clase.length; i++)
        media += clase[i][1];
    media = media/clase.length;
    return media;
}
function obtenerMejorNota(clase) {
    var candidato = clase[0];
    for (var i = 1; i < clase.lenght; i++)
        if (candidato[1] < clase[i][1])
            candidato = clase[i];
    return candidato;
}
function obtenerPeorNota(clase) {
    var candidato = clase[0];
    for (var i = 1; i < clase.lenght; i++)
        if (candidato[1] > clase[i][1])
            candidato = clase[i];
    return candidato;
}
var clase = new Array();
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 2; j++) {
        var variable;
        switch (j) {
            case 0:
                variable = prompt("ALUMNO " + i + "\nIntroduzca el nombre del alumno: ");
                clase[i][j] = variable;
                break;
            case 1:
                var correcto = false;
                variable = parseInt(prompt("ALUMNO " + i + "\nIntroduzca la nota del alumno:"));
                while(!correcto)
                    if (isNaN(variable))
                        variable = parseInt(prompt("AVISO, el dato introducido no es numérico. Vuelva a introducirlo:"));
                    else
                        correcto = true;
                clase[i][j] = variable;
                break;
        }
    }
}
