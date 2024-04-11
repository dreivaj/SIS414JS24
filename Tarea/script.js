let btn = document.getElementById("guardar");
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
async function getUsers() {
    let data = await fetch("https://sis414g2024-default-rtdb.firebaseio.com/users.json");
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
async function postData(rowData) {
    let data = await fetch("https://sis414g2024-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    getUsers(); 
}
async function deleteUser(id) {
    await fetch( "https://sis414g2024-default-rtdb.firebaseio.com/users.json", {
        method: "DELETE"
    });
    getUsers();
}
async function updateUser(rowData) {
    const id = document.getElementById("guardar").getAttribute("data-key");
    await fetch("https://sis414g2024-default-rtdb.firebaseio.com/users.json", {
        method: "PUT",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    document.getElementById("guardar").value = "Enviar";
    getUsers();
}
async function editUser(id) {
    const res = await fetch("https://sis414g2024-default-rtdb.firebaseio.com/users.json");
    const user = await res.json();
    document.getElementById("ru").value = user.ru;
    document.getElementById("ci").value = user.ci;
    document.getElementById("nCompleto").value = user.nombreCompleto;
    document.getElementById("guardar").value = "Actualizar";
    document.getElementById("guardar").setAttribute("data-key", id);
}
