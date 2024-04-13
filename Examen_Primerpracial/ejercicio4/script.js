
let btn = document.getElementById("send");
let btn2 = document.getElementById("cancel");
btn2.addEventListener("click", () => {
    document.getElementById("formulario").reset();
});

btn.addEventListener("click", () => {
    let nc = document.getElementById("nc").value;
    let des = document.getElementById("des").value;
    let n = document.getElementById("n").value.split(",").map(image => image.trim());

    let rowData = {
        nombre: nc,
        descripcion: des,
        imagenes: [
            
        ]
    };

    if (validarEntradas(rowData)) {
        if (btn.value == "Enviar") {
            postData(rowData);
        } else {
            updateUser(rowData);
        }
        document.getElementById("formulario").reset();
    } else {
        alert("Campos vacíos");
    }
});

getUsers();

function validarEntradas(rowData) {
    return rowData.nombre != "" && rowData.descripcion != "" && rowData.imagenes.length > 0;
}

async function getUsers() {
    let data = await fetch("https://sis4140024-default-rtdb.firebaseio.com/users.json");
    let jsonData = await data.json();
    let table = document.getElementById("dataFire");
    let htmlRow = "";
    for (let key in jsonData) {
        htmlRow += `<tr><td>${jsonData[key].nombre}</td>
                            <td>${jsonData[key].descripcion}</td>
                            <td>${jsonData[key].imagenes.join(', ')}</td>
                            <td class="actions"><button onclick="editUser('${key}')">Editar</button>
                            <button onclick="deleteUser('${key}')">Eliminar</button></td>
                        </tr>`;
    }
    table.innerHTML = htmlRow;
}

async function postData(rowData) {
    let data = await fetch("https://sis4140024-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    getUsers(); 
}

async function deleteUser(id) {
    await fetch(`https://sis4140024-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: "DELETE"
    });
    getUsers();
}

async function updateUser(rowData) {
    const id = document.getElementById("send").getAttribute("data-key");
    await fetch(`https://sis4140024-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(rowData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    document.getElementById("send").value = "Enviar";
    getUsers();
}


async function editUser(id) {
    const res = await fetch(`https://sis4140024-default-rtdb.firebaseio.com/users/${id}.json`);
    const user = await res.json();
    document.getElementById("nc").value = user.nombre;
    document.getElementById("des").value = user.descripcion;
    document.getElementById("send").setAttribute("data-key", id);
    document.getElementById("send").value = "Actualizar";
}
