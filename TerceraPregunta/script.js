var contador = 1;

function agregarFila() {
  var nombre = prompt("Ingrese el nombre:");
  var edad = prompt("Ingrese la edad:");
  var ru = prompt("Ingrese el número de RU:");
  if (!esNumeroValido(edad) || !esNumeroValido(ru)) {
    alert("La edad y el RU deben ser números.");
    return;
  }

  var tabla = document.getElementById("miTabla").getElementsByTagName('tbody')[0];
  var fila = tabla.insertRow();
  var celdaNumero = fila.insertCell(0);
  var celdaNombre = fila.insertCell(1);
  var celdaEdad = fila.insertCell(2);
  var celdaRU = fila.insertCell(3);

  celdaNumero.innerHTML = contador++;
  celdaNombre.innerHTML = nombre;
  celdaEdad.innerHTML = edad;
  celdaRU.innerHTML = ru;
}

function esNumeroValido(numero) {
  return !isNaN(numero) && numero !== "" && numero !== null;
}



  