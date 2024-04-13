async function postData(rowData){
    let data = await fetch("https://parcial1-8f4bf-default-rtdb.firebaseio.com/users.json",
        {
            method: 'POST',
            body: JSON.stringify(rowData),
            headers: {
                'Content.type': 'application/json; charset=UTF-8',
            }
        })
    let json = await data.json()
    console.log(json)
    // Actualizar
    getUsers()
}

async function getUsers(){
    let data = await fetch("https://parcial1-8f4bf-default-rtdb.firebaseio.com/users.json")
    let jsonData = await data.json()
    let table = document.getElementById("datafire")
    let htmlRow = ""
    for (let key in jsonData){
        console.log(jsonData[key])        
            htmlRow = htmlRow + `<tr><td> ${jsonData[key].name} </td>
                                <td> ${jsonData[key].description} </td>
                                <td> ${jsonData[key].images} </td>
                                <td> <button onclick="editUser('${key}')">Editar</button> 
                                <button onclick="deleteUser('${key}')">Eliminar</button> </td> 
                                </tr>`
        table.innerHTML = htmlRow
    }
}

// Se crea la variable keys para tener la llave de forma global para identificar a que usuario se esta realizando la edicion de datos
// Se usara esta variable en la funcion del boton editar
var keys
// Poner los datos a actualizar en los espacios designados
async function editUser(id){
    let data = await fetch(`https://parcial1-8f4bf-default-rtdb.firebaseio.com/users/${id}.json`)
    let user = await data.json()
    document.getElementById("name").value = user.name
    document.getElementById("body").value = user.description
    keys = id
}
// Subir los datos actualizados
async function updateUser(rowData, id){
    let response = await fetch(`https://parcial1-8f4bf-default-rtdb.firebaseio.com/users/${id}.json`,
        {
            method: 'PUT',
            body: JSON.stringify(rowData),
            headers: {
                'Content-type': 'aplication/json; charset=UTF-8'
            }
        })
    let json = await response.json()
    console.log(json)
    getUsers()
}

async function deleteUser(id){
    await fetch(`https://parcial1-8f4bf-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: "DELETE"
    })
    getUsers()
}

getUsers()

let btn = document.getElementById("save")
btn.addEventListener('click', ()=> {
    let name = document.getElementById("name").value
    let desc = document.getElementById("body").value
    let img = document.getElementById("img").value
    let rowData = {
        name: name,
        description: desc,
        images: img
    }
    postData(rowData)
    document.getElementById("name").value = ""
    document.getElementById("body").value = ""
    document.getElementById("img").value = ""
})

let btnUp = document.getElementById("update")
btnUp.addEventListener('click', ()=> {
    let name = document.getElementById("name").value
    let desc = document.getElementById("body").value
    let img = document.getElementById("img").value
    let datos = {
        name: name,
        description: desc,
        images: img
    }
    updateUser(datos, keys)    
    document.getElementById("name").value = ""
    document.getElementById("body").value = ""
    document.getElementById("img").value = ""
})
