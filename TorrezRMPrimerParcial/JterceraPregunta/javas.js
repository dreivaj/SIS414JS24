function agregarFila() {
    // Obtener la referencia de la tabla
    var table = document.getElementById("miTabla");

    // Insertar una nueva fila al final de la tabla
    var newRow = table.insertRow();

    // Insertar celdas en la nueva fila
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Añadir contenido a las celdas
    cell1.innerHTML = "Nuevo Nombre";
    cell2.innerHTML = "Nueva Edad";
}

//// ya se reviso en el examen