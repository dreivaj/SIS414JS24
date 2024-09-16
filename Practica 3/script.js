async function postData(rowData){
    let data = await fetch("https://sis-414-g2-default-rtdb.firebaseio.com/users.json",
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
    let data = await fetch("https://sis-414-g2-default-rtdb.firebaseio.com/users.json")
    let jsonData = await data.json()
    let table = document.getElementById("datafire")
    let htmlRow = ""
    for (let key in jsonData){
        console.log(jsonData[key].ci)        
            htmlRow = htmlRow + `<tr><td> ${jsonData[key].ru} </td>
                                <td> ${jsonData[key].ci} </td>
                                <td> ${jsonData[key].nombreCompleto} </td>
                                <td> <button onclick="editUser('${key}')">Edit</button> 
                                <button onclick="deleteUser('${key}')">Delete</button> </td> 
                                </tr>`
        table.innerHTML = htmlRow
    }
}

var keys
async function editUser(id){
    let data = await fetch(`https://sis-414-g2-default-rtdb.firebaseio.com/users/${id}.json`)
    let user = await data.json()
    document.getElementById("ru").value = user.ru
    document.getElementById("ci").value = user.ci
    document.getElementById("ncompleto").value = user.nombreCompleto
    keys = id
}

async function updateUser(rowData, id){
    let response = await fetch(`https://sis-414-g2-default-rtdb.firebaseio.com/users/${id}.json`,
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
    await fetch(`https://sis-414-g2-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: "DELETE"
    })
    getUsers()
}

getUsers()

let btn = document.getElementById("save")
btn.addEventListener('click', ()=> {
    let ru = document.getElementById("ru").value
    let ci = document.getElementById("ci").value
    let nc = document.getElementById("ncompleto").value
    let rowData = {
        ru: ru,
        ci: ci,
        nombreCompleto: nc
    }
    postData(rowData)
    document.getElementById("ru").value = ""
    document.getElementById("ci").value = ""
    document.getElementById("ncompleto").value = ""
})

let btnUp = document.getElementById("update")
btnUp.addEventListener('click', ()=> {
    let ru = document.getElementById("ru").value
    let ci = document.getElementById("ci").value
    let nc = document.getElementById("ncompleto").value
    let datos = {
        ru: ru,
        ci: ci,
        nombreCompleto: nc
    }
    updateUser(datos, keys)    
    document.getElementById("ru").value = ""
    document.getElementById("ci").value = ""
    document.getElementById("ncompleto").value = ""
})
