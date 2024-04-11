let btn = document.getElementById("aceptar");
let btn2 = document.getElementById("Cancelar");
btn2.addEventListener("click", element =>{
    document.getElementById("Formulario").reset();
})

btn.addEventListener("click", element => {
    let ru = document.getElementById("ru").value;
    let ci = document.getElementById("ci").value;
    let nombre = document.getElementById("NCompleto").value;
    let rowData = {
        ru: ru,
        ci: ci,
        NombreCompleto: nombre,
    };
    if(validarEntradas(rowData)){
        if (btn.value == "Enviar")
            postData(rowData);
        else 
            updateUser(rowData);
        document.getElementById("Formulario").reset();
    }else
    alert("Campos vacios");
});
getUsers();

function validarEntradas(rowData){
    return rowData.ru != "" && rowData.ci != "" && rowData.NombreCompleto != "";
}
async function getUsers() {
    let data = await fetch("https://emergentes414-default-rtdb.firebaseio.com/Users.json");
    let jsonData = await data.json();
    let table = document.getElementById("DataFire");
    let htmlRow = "";
    for (let key in jsonData) {
        htmlRow += `<tr><td>${jsonData[key].ru}</td>
                    <td>${jsonData[key].ci}</td>
                    <td>${jsonData[key].NombreCompleto}</td>
                    <td class="actions"><button onclick="editUser('${key}')">Edit</button>
                    <button onclick="deleteUser('${key}')">Delete</button></td>
                    </tr>`;
    }
    table.innerHTML = htmlRow;

}
async function postData(rowData) {
    let data = await fetch("https://emergentes414-default-rtdb.firebaseio.com/Users.json", {
        method: "POST",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    getUsers(); 
}
postData();

async function deleteUser(id) {
    await fetch(`https://emergentes414-default-rtdb.firebaseio.com/Users/${id}.json`, {
        method: "DELETE"
    });
    getUsers();

}
async function editUser(id) {
    const res = await fetch(`https://emergentes414-default-rtdb.firebaseio.com/Users/${id}.json`);
    const user = await res.json();
    document.getElementById("ru").value = user.ru;
    document.getElementById("ci").value = user.ci;
    document.getElementById("NCompleto").value = user.NombreCompleto;
    document.getElementById("aceptar").value = "Actualizar";
    document.getElementById("aceptar").setAttribute("data-key", id);
}
async function updateUser(rowData) {
    const id = document.getElementById("aceptar").getAttribute("data-key");
    await fetch(`https://emergentes414-default-rtdb.firebaseio.com/Users/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    document.getElementById("aceptar").value = "Enviar";
    getUsers();
}
