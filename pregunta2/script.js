function comprobarRespuestas() {
    const respuestasSeleccionadas = [];

    const elementosRespuesta = document.querySelectorAll('input[name="respuesta[]"]:checked');

    for (const elementoRespuesta of elementosRespuesta) {
        respuestasSeleccionadas.push(parseInt(elementoRespuesta.value));
    }

    const respuestasCorrectas = [1, 2]; // Cambia este array para las respuestas correctas

    let resultado = "";

    for (const respuestaSeleccionada of respuestasSeleccionadas) {
        if (respuestasCorrectas.includes(respuestaSeleccionada)) {
            resultado += <p class="correcto">La opción ${respuestaSeleccionada} es correcta</p>;
        } else {
            resultado += <p class="incorrecto">La opción ${respuestaSeleccionada} es incorrecta</p>;
        }
    }

    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = resultado;
    contenedorResultados.style.display = 'block';
}