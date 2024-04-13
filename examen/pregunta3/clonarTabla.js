function agregarFila() {
    // Obtener los valores ingresados por el usuario
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;

    // Validar que ambos campos estén completos
    if (nombre === '' || edad === '') {
        alert('Por favor ingrese tanto el nombre como la edad.');
        return;
    }

    // Crear una nueva tabla
    let nuevaTabla = document.createElement('table');
    nuevaTabla.border = '1';
    nuevaTabla.innerHTML = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    // Obtener el cuerpo de la tabla
    let tbody = nuevaTabla.querySelector('tbody');

    // Crear una nueva fila
    let fila = document.createElement('tr');

    // Crear las celdas para la nueva fila
    let celdaNombre = document.createElement('td');
    let celdaEdad = document.createElement('td');

    // Asignar valores a las celdas
    celdaNombre.textContent = nombre;
    celdaEdad.textContent = edad;

    // Agregar las celdas a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);

    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(fila);

    // Agregar la nueva tabla al contenedor de tablas
    document.getElementById('contenedorTablas').appendChild(nuevaTabla);

    // Limpiar los campos del formulario después de agregar la fila
    document.getElementById('formulario').reset();
}
