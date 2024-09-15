var contadorFilas = 0; 

function agregarFila() {
    var tabla = document.getElementById("mitabla");

    var fila = tabla.insertRow();

    contadorFilas++;

    var celdaNumero = fila.insertCell();
    celdaNumero.textContent = contadorFilas;

    var celdaNombre = fila.insertCell();
    var celdaCarrera = fila.insertCell();
    var celdaEdad = fila.insertCell();

    celdaNombre.textContent = "Mario";
    celdaCarrera.textContent = "Ing. Sistemas";
    celdaEdad.textContent = "20";
}