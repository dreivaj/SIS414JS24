
       /* function agregarFila() {
          var tabla = document.getElementById("miTabla");
          var fila = tabla.insertRow(); // Crea una nueva fila
      
          // Crea celdas y les asigna contenido
          var celda1 = fila.insertCell(0);
          var celda2 = fila.insertCell(1);
          celda1.innerHTML = "Nuevo Dato 1";
          celda2.innerHTML = "Nuevo Dato 2";
        }*/
    
function agregarFila() {
    var tabla = document.getElementById("miTabla");
    // Inserta una fila al final 
    var fila = tabla.insertRow(); 
    // Inserta una celda en la nueva fila en la primera posición
    var celda1 = fila.insertCell(0); 
    var celda2 = fila.insertCell(1); 
    var celda3 =fila.insertCell(2)
    celda1.innerHTML = "Nuevo Dato 1"; 
    celda2.innerHTML = "Nuevo Dato 2"; 
    celda3.innerHTML = "nuevo datos 3"
  }
  