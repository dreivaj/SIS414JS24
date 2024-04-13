function agregarFilaTabla() {
    const tabla = document.getElementById("tabla")
    const fila = tabla.insertRow()
  
    const celdaNombre = fila.insertCell()
    const celdaApellido = fila.insertCell()
    const celdaEdad = fila.insertCell()
    const celdaAcciones = fila.insertCell()
    // Da valores iniciales a las celdas
    celdaNombre.textContent = "Nuevo Nombre";
    celdaApellido.textContent = "Nuevo Apellido";
    celdaEdad.textContent = "Nueva Edad";
  
    // Crea y agrega botones de (edit, delete)
    const editarBtn = document.createElement("button")
    editarBtn.textContent = "Editar";
    editarBtn.onclick = function() { editarFila(fila) }
    celdaAcciones.appendChild(editarBtn)
  
    const eliminarBtn = document.createElement("button")
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.onclick = function() { eliminarFila(fila) }
    celdaAcciones.appendChild(eliminarBtn)
  }
  function editarFila(fila) {
    const celdaNombre = fila.cells[0] //Obtener refrencias de Nombre, Apellido, otros valores-..
    const celdaApellido = fila.cells[1]
    const celdaEdad = fila.cells[2]
  
    // Crear campos de entrada para editar el contenido de las celdas
    const inputNombre = document.createElement("input")
    inputNombre.type = "text";
    inputNombre.value = celdaNombre.textContent; // Valor inicial del campo
  
    const inputApellido = document.createElement("input")
    inputApellido.type = "text";
    inputApellido.value = celdaApellido.textContent;
  
    const inputEdad = document.createElement("input")
    inputEdad.type = "number";
    inputEdad.value = celdaEdad.textContent;
    // Reemplazar el contenido de las celdas con los campos de entrada
    celdaNombre.textContent = "" // Vaciar el contenido
    celdaNombre.appendChild(inputNombre)
  
    celdaApellido.textContent = "";
    celdaApellido.appendChild(inputApellido)
  
    celdaEdad.textContent = "";
    celdaEdad.appendChild(inputEdad) 
    // Agregar un botón "Guardar" para guardar los cambios realizados
    const guardarBtn = document.createElement("button")
    guardarBtn.textContent = "Guardar";
    guardarBtn.onclick = function() { guardarCambiosFila(fila, inputNombre, inputApellido, inputEdad) };
    fila.cells[3].appendChild(guardarBtn) // Agregar el botón a la última celda (Acciones)
  }
  function guardarCambiosFila(fila, inputNombre, inputApellido, inputEdad) {
    const celdaNombre = fila.cells[0]
    const celdaApellido = fila.cells[1]
    const celdaEdad = fila.cells[2]
  
    // Actualizar el contenido de las celdas con los valores de los campos de entrada
    celdaNombre.textContent = inputNombre.value;
    celdaApellido.textContent = inputApellido.value;
    celdaEdad.textContent = inputEdad.value;
  
    // Eliminar los campos de entrada y el botón "Guardar"
    celdaNombre.removeChild(inputNombre)
    celdaApellido.removeChild(inputApellido)
    celdaEdad.removeChild(inputEdad)
    fila.cells[3].removeChild(fila.cells[3].firstChild) // Eliminar el primer hijo de la última celda (botón "Guardar")
  
    // Restaurar los botones de acción originales ("Editar", "Eliminar")
    const editarBtn = document.createElement("button")
    editarBtn.textContent = "Editar";
    editarBtn.onclick = function() { editarFila(fila) }
    fila.cells[3].appendChild(editarBtn)
  
    const eliminarBtn = document.createElement("button")
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.onclick = function() { eliminarFila(fila) }
    fila.cells[3].appendChild(eliminarBtn)
  }
  function eliminarFila(fila) {
    fila.parentNode.removeChild(fila)
  }

  window.onload = agregarFilaTabla