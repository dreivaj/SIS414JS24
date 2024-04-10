let btn = document.getElementById("send");
let btn2 = document.getElementById("cancel");
btn2.addEventListener("click", element =>{
    document.getElementById("formulario").reset();
})
btn.addEventListener("click", element => {
    let ru = document.getElementById("ru").value;
    let ci = document.getElementById("ci").value;
    let nombre = document.getElementById("nCompleto").value;
    let rowData = {
        ru: ru,
        ci: ci,
        nombreCompleto: nombre,
    };
    if(validarEntradas(rowData)){
        if (btn.value == "Enviar")
            postData(rowData);
        else 
            updateUser(rowData);
    document.getElementById("formulario").reset();
    }else
    alert("Campos vacios");
});
getUsers();

function validarEntradas(rowData){
    return rowData.ru != "" && rowData.ci != "" && rowData.nombreCompleto != "";
}
//OBTENER LOS USUARIOS DE LA BASE DE DATOS FIREBASE
async function getUsers() {
    let data = await fetch("https://sis414g224-default-rtdb.firebaseio.com/users.json");
    let jsonData = await data.json();
    let table = document.getElementById("dataFire");
    let htmlRow = "";
    for (let key in jsonData) {
        htmlRow += `<tr><td>${jsonData[key].ru}</td>
                            <td>${jsonData[key].ci}</td>
                            <td>${jsonData[key].nombreCompleto}</td>
                            <td class="actions"><button onclick="editUser('${key}')">Edit</button>
                            <button onclick="deleteUser('${key}')">Delete</button></td>
                        </tr>`;
    }
    table.innerHTML = htmlRow;
}
//ENVIAR UN NUEVO USUARIO A LA BASE DE DATOS
async function postData(rowData) {
    let data = await fetch("https://sis414g224-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    getUsers(); 
}
//ELIMINAR USUSARIO DE LA BASE DE DATOS
async function deleteUser(id) {
    await fetch(`https://sis414g224-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: "DELETE"
    });
    getUsers();
}
// EDITAR LOS DATOS DE UN USUARIO
async function editUser(id) {
    const res = await fetch(`https://sis414g224-default-rtdb.firebaseio.com/users/${id}.json`);
    const user = await res.json();
    document.getElementById("ru").value = user.ru;
    document.getElementById("ci").value = user.ci;
    document.getElementById("nCompleto").value = user.nombreCompleto;
    document.getElementById("send").value = "Actualizar";
    document.getElementById("send").setAttribute("data-key", id);
}
//ACTUALIZAR LOS DATOS EDITADOS DEL USUARIO EN LA BASE DE DATOS
async function updateUser(rowData) {
    const id = document.getElementById("send").getAttribute("data-key");
    await fetch(`https://sis414g224-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    document.getElementById("send").value = "Enviar";
    getUsers();
}
