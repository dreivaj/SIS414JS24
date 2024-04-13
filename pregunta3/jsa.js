function agregarFila() {
      const tabla = document.getElementById("miTabla");
      const fila = tabla.insertRow(-1); 
      const fila1 = fila.insertCell(0); 
      const fila2 = fila.insertCell(1);
      const fila3 = fila.insertCell(1);
      fila1.innerHTML = "Nuevo Nombre"; 
      fila2.innerHTML = "Nuevo Edad";
      fila3.innerHTML = "Carrera";
}