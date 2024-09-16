function calcularPuntuacion() {
    var puntuacion = 0;
    var respuestasCorrectas = {
        respuesta1: "1825",
        respuesta2: "verdadero",
        respuesta3: "Sucre",
        respuesta4: "Luis Arce Catacora",
        respuesta5: "condor",
        respuesta6: ["9"],
        respuesta7: "falso",
        respuesta8: "Estado Plurinacional de Bolivia",
        respuesta9: "esclavos",
        respuesta10: ["Pando", "Beni"]
    };

    var respuestasUsuario = {
        respuesta1: obtenerRespuesta("respuesta1"),
        respuesta2: obtenerRespuesta("respuesta2"),
        respuesta3: obtenerRespuesta("respuesta3"),
        respuesta4: obtenerRespuesta("respuesta4"),
        respuesta5: document.getElementById('respuesta5').value.trim().toLowerCase(),
        respuesta6: obtenerRespuesta("respuesta6"),
        respuesta7: obtenerRespuesta("respuesta7"),
        respuesta8: obtenerRespuesta("respuesta8"),
        respuesta9: document.getElementById('respuesta9').value.trim().toLowerCase(),
        respuesta10: obtenerRespuestas("respuesta10")
    };

    for (var pregunta in respuestasCorrectas) {
        if (respuestasCorrectas.hasOwnProperty(pregunta)) {
            if (Array.isArray(respuestasCorrectas[pregunta])) {
                if (arraysIguales(respuestasCorrectas[pregunta], respuestasUsuario[pregunta])) {
                    puntuacion += 10;
                }
            } else {
                if (respuestasCorrectas[pregunta] === respuestasUsuario[pregunta]) {
                    puntuacion += 10;
                }
            }
        }
    }

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultado del cuestionario:</h2>" +
        "<div id='puntuacion'>" + puntuacion + " puntos</div>";

    if (puntuacion < 50) {
        resultadoDiv.innerHTML += "<p>Estudia pe' chato.</p>";
    } else if (puntuacion < 70) {
        resultadoDiv.innerHTML += "<p>Bien hecho, Goku.</p>";
    } else if (puntuacion >= 70) {
        resultadoDiv.innerHTML += "<p>Genial! MAYFREY :).</p>";
    }
}

function arraysIguales(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function obtenerRespuesta(nombrePregunta) {
    var opciones = document.getElementsByName(nombrePregunta);
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            return opciones[i].value;
        }
    }
    return ""; 
}

function obtenerRespuestas(nombrePregunta) {
    var respuestas = [];
    var checkboxes = document.getElementsByName(nombrePregunta);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            respuestas.push(checkboxes[i].value);
        }
    }
    return respuestas;
}