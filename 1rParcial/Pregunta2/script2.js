const pregunta = "¿Cual de los siguientes personajes pertenecen a Naruto Shippden:";
const opciones = ["Naruto", "Minato", "Goku", "Gojan", "Bulma"];
const respuestasCorrectas = ["Naruto", "Minato"];
const puntosPorCorrecta = 50;
const penalizacionPorIncorrecta = 0.1;
const maximoSelecciones = 2;

function mostrarPregunta() {
  document.getElementById("pregunta").textContent = pregunta;

  const contenedorOpciones = document.getElementById("opciones");
  opciones.forEach(opcion => {
    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.name = "respuesta";
    casilla.value = opcion;
    contenedorOpciones.appendChild(casilla);

    const etiqueta = document.createElement("label");
    etiqueta.textContent = opcion;
    contenedorOpciones.appendChild(etiqueta);
    contenedorOpciones.appendChild(document.createElement("br"));
  });
}

function verificarRespuesta() {
  const opcionesSeleccionadas = Array.from(document.querySelectorAll('input[name="respuesta"]:checked'))
    .map(entrada => entrada.value);

  if (opcionesSeleccionadas.length !== maximoSelecciones) {
    document.getElementById("resultado").textContent = `Selecciona ${maximoSelecciones} opciones.`;
    return;
  }

  let puntaje = 0;
  const cantidadCorrectas = opcionesSeleccionadas.filter(opcion => respuestasCorrectas.includes(opcion)).length;

  puntaje = cantidadCorrectas === 2 ? 100 : cantidadCorrectas === 1 ? 40 : 0;
  puntaje -= (opcionesSeleccionadas.length - cantidadCorrectas) * puntosPorCorrecta * penalizacionPorIncorrecta;

  const resultadoPantalla = document.getElementById("resultado");
  resultadoPantalla.textContent = cantidadCorrectas === 2
    ? "¡Respuesta Correcta! Obtuviste 100 puntos."
    : `Respuesta Incorrecta. Tu puntaje es: ${puntaje} puntos.`;
}

window.onload = mostrarPregunta;