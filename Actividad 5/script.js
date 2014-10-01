//Funciones
function buscarAlumno(clase, nombre) {
    for (var i = 0; i < clase.length; i++)
        if (clase[i, 0] == nombre)
            return i;
    return (-1);
}
function modificarNota(clase) {
    var nombre = prompt("Escribe el nombre del alumno:");
    var alumnoBuscado = buscarAlumno(clase, nombre);
    if (alumnoBuscado != -1) {
        var notaNueva = parseInt(prompt("Alumno - " + clase[alumnoBuscado, 0] + "\nEscriba nueva nota:"));
        var correcto = false;
        while(!correcto)
            if(isNaN(notaNueva))
                notaNueva = parseInt(prompt("AVISO, el dato introducido no es numérico. Vuelva a introducirlo:"));
            else
                correcto = true;
        clase[alumnoBuscado, 1] = notaNueva;
        alert("Nota modificada");
    }
    else
        alert("No existe alumno con ese nombre.");
}
function obtenerMedia (clase) {
    var media = 0;
    for (var i = 0; i < clase.length; i++)
        media += clase[i, 1];
    media = media/clase.length;
    return media;
}
function obtenerMejorNota(clase) {
    var candidato = clase[0];
    for (var i = 1; i < clase.lenght; i++)
        if (candidato[1] < clase[i, 1])
            candidato = clase[i];
    return candidato;
}
function obtenerPeorNota(clase) {
    var candidato = clase[0];
    for (var i = 1; i < clase.lenght; i++)
        if (candidato[1] > clase[i, 1])
            candidato = clase[i];
    return candidato;
}
//Creacion del array
var clase = new Array();
var alumno = new Array();
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 2; j++) {
        var variable;
        switch (j) {
            case 0:
                variable = prompt("ALUMNO " + i + "\nIntroduzca el nombre del alumno: ");
                alumno[j] = variable;
                break;
            case 1:
                var correcto = false;
                variable = parseInt(prompt("ALUMNO " + i + "\nIntroduzca la nota del alumno:"));
                while(!correcto)
                    if (isNaN(variable))
                        variable = parseInt(prompt("AVISO, el dato introducido no es numérico. Vuelva a introducirlo:"));
                    else
                        correcto = true;
                clase[j] = variable;
                break;
        }
    }
    clase.push(alumno);
}
//Menu
var salir = false;
while(!salir) {
    var correcto = false;
    while(!correcto) {
        var opcion = parseInt(prompt("MENÚ:\n[1]Buscar alumno.\n[2]Modificar nota de alumno.\n[3]Obtener media\n[4]Obtener el alumno con más nota.\n[5]Obtener el alumno con menos nota.\nElija una opción:"));
        if(isNaN(opcion))
            alert("La opción introducida no es numérica");
        else
            correcto = true;
    }
    switch(opcion) {
        case 1: var nombre = prompt("Escriba el nombre del alumno:");
            var alumnoBuscado = buscarAlumno(clase, nombre);
            if(alumnoBuscado != -1)
                alert("Alumno - " + clase[alumnoBuscado, 0] + "\nNota: " + clase[alumnoBuscado, 1]);
            else
                alert("No existe un alumno con ese nombre.")
            break;
        case 2: modificarNota(clase);
            break;
        case 3: var media = obtenerMedia(clase);
            alert("Media de la clase: " + media);
            break;
        case 4: var alumnoMejorNota = obtenerMejorNota(clase);
            alert("Alumno con mejor nota.\nNombre: " + alumnoMejorNota[0] + "\nNota:" + alumnoMejorNota[1]);
            break;
        case 5: var alumnoPeorNota = obtenerPeorNota(clase);
            alert("Alumno con peor nota.\nNombre: " + alumnoPeorNota[0] + "\nNota:" + alumnoPeorNota[1]);
            break;
    }
}