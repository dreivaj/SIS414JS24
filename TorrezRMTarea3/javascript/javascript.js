async function postData(rowData) {
    let data = await fetch("https://sis414g1-73353-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    let json = await data.json();
    console.log(json);
    getUsers(); // Actualizar la tabla después de agregar un usuario
}
// Función para obtener la lista de usuarios del servidor y mostrarla en la tabla
async function getUsers() {
    let data = await fetch("https://sis414g1-73353-default-rtdb.firebaseio.com/users.json");
    let jsonData = await data.json();
    let table = document.getElementById("datafire");
    let htmlRow = "";
    for (let key in jsonData) {
        htmlRow += "<tr><td>" + jsonData[key].ru + "</td>"
                 + "<td>" + jsonData[key].ci + "</td>"
                 + "<td>" + jsonData[key].nombreCompleto + "</td>"
                 + "<td><button onclick='editUser(\"" + key + "\", \"" + jsonData[key].ru + "\", \"" +
                 jsonData[key].ci + "\", \"" + jsonData[key].nombreCompleto + "\")'>Editar</button>"
                 + " <button onclick='deleteUser(\"" + key + "\")'>Eliminar</button></td>"
                 + "</tr>";
    }
    table.innerHTML = htmlRow;
}
// Función para actualizar los datos de un usuario en el servidor
async function updateUser(userId, rowData) {
    let data = await fetch("https://sis414g1-73353-default-rtdb.firebaseio.com/users/" + userId + ".json", 
    {
        method: "PUT",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    let json = await data.json();
    console.log(json);
    getUsers(); // Actualizar la tabla después de editar un usuario
}
// Función para eliminar un usuario del servidor
async function deleteUser(userId) {
    let data = await fetch("https://sis414g1-73353-default-rtdb.firebaseio.com/users/" + userId + ".json", {
        method: "DELETE"
    });
    let json = await data.json();
    console.log(json);
    getUsers(); // Actualizar la tabla después de eliminar un usuario
}
function editUser(userId, ru, ci, ncompleto) {
    document.getElementById("ru").value = ru;
    document.getElementById("ci").value = ci;
    document.getElementById("nCompleto").value = ncompleto;
    document.getElementById("save").style.display = "none";
    document.getElementById("update").style.display = "inline-block";
    document.getElementById("update").addEventListener("click", () => {
        let rowData = {
            ru: document.getElementById("ru").value,
            ci: document.getElementById("ci").value,
            nombreCompleto: document.getElementById("nCompleto").value,
        };
        updateUser(userId, rowData); // Actualizar los datos del usuario
        document.getElementById("save").style.display = "inline-block";
        document.getElementById("update").style.display = "none";
        document.getElementById("userForm").reset(); // Limpiar el formulario
    });
}
// Evento que se ejecuta al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    // Agregar evento click al botón "Guardar"
    let btnSave = document.getElementById("save");
    btnSave.addEventListener('click', () => {
        let ru = document.getElementById("ru").value;
        let ci = document.getElementById("ci").value;
        let nc = document.getElementById("nCompleto").value;

        let rowData = {
            ru: ru,
            ci: ci,
            nombreCompleto: nc
        };
        // Crear un nuevo usuario
        postData(rowData);
    });
    // Llamar a la función para obtener la lista de usuarios y mostrarla en la tabla
    getUsers();
});