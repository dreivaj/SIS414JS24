function calcularPuntaje() {
    var respuestas = document.getElementsByName('respuesta');
    var respuestasCorrectas = 0;
    var respuestasIncorrectas = 0;
  
    for (var i = 0; i < respuestas.length; i++) {
      if (respuestas[i].checked) {
        if (respuestas[i].value === 'correcta') {
          respuestasCorrectas++;
        } else {
          respuestasIncorrectas++;
        }
      }
    }
  
    if (respuestasCorrectas === 2) {
      document.getElementById('puntaje').innerHTML = "Tu puntaje es: 100 puntos."; // Si selecciona las dos respuestas correctas, puntaje es 100
    } else if (respuestasCorrectas === 1 && respuestasIncorrectas === 1) {
      document.getElementById('puntaje').innerHTML = "Tu puntaje es: 40 puntos."; // Si selecciona una respuesta correcta y una incorrecta, puntaje es 40
    } else if (respuestasCorrectas === 1) {
      document.getElementById('puntaje').innerHTML = "Tu puntaje es: 50 puntos."; // Si selecciona una respuesta correcta, puntaje es 50
    } else {
      document.getElementById('puntaje').innerHTML = "Tu puntaje es: 0 puntos."; // Si selecciona dos respuestas incorrectas, puntaje es 0
    }
  }
  
  