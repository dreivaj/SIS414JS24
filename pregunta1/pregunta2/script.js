function calcularPuntaje() {
  var respuestas = document.getElementsByName('respuesta');
  var puntaje = 0;

  var respuestasCorrectas = ['verde', 'rojo'];
  var seleccionadas = [];

  for (var i = 0; i < respuestas.length; i++) {
    if (respuestas[i].checked) {
      seleccionadas.push(respuestas[i].value);
    }
  }

  var respuestasCorrectasSeleccionadas = seleccionadas.filter(valor => respuestasCorrectas.includes(valor));

  if (respuestasCorrectasSeleccionadas.length == 2) {
    puntaje = 100;
  } else if (respuestasCorrectasSeleccionadas.length == 1 && seleccionadas.length == 1) {
    puntaje = 50;
  } else if (respuestasCorrectasSeleccionadas.length == 1 && seleccionadas.length == 2) {
    puntaje = 40;
  }

  mostrarResultado(puntaje);
}

function mostrarResultado(puntaje) {
  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = 'Tienes una nota de : ' + puntaje;
}
