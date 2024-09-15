
const firebaseConfig = {
    apiKey: "AIzaSyDiZw-fffBQFr7iKC5PbCMmGhAPwyR8O3o",
    authDomain: "imagenes-b807f.firebaseapp.com",
    databaseURL: "https://imagenes-b807f-default-rtdb.firebaseio.com",
    projectId: "imagenes-b807f",
    storageBucket: "imagenes-b807f.appspot.com",
    messagingSenderId: "752936706983",
    appId: "1:752936706983:web:f655961767aaf18d55cc82"
};
firebase.initializeApp(firebaseConfig);
function updateImage(){
    const img = document.getElementById("img");
    if (img.files.length === 0) {
        alert('Por favor selecciona al menos una imagen.');
        return;
    }
    const storage = firebase.storage();
    const storageRef = storage.ref();

    Array.from(img.files).forEach(file => {
        const filename = file.name;
        const imageRef = storageRef.child('images/' + filename);
        imageRef.put(file);
    });
}

const url = "https://imagenes-b807f-default-rtdb.firebaseio.com/";
let btnEnviar = document.getElementById("send");
btnEnviar.addEventListener("click", () =>{
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let images = document.getElementById("img");
    let desImages = images.files;
    let image = [];
    if(name != "" && description != "" && desImages.length>0){
        for(let i = 0; i< desImages.length; i ++){
            image.push(desImages[i].name);
        }

        let data={
            name,
            description,
            image,
        }
        updateImage();
        postData(data);
    }else
        alert("complete los campos");
})

getData();

async function postData(data){
    const res = await fetch(`${url}images.json`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
		    'Content-type': 'application/json; charset=UTF-8'
        }
    });
    limpiar();
    getData();
}

async function getData(){
    let count = 1;
    const res = await fetch(`${url}images.json`);
    const data = await res.json();
    const table = document.getElementById("tBody");
    let rows = "";
    for (const key in data) {
        rows += `<tr><td>${count}</td>
                    <td>${data[key].name}</td>
                    <td>${data[key].description}</td>
                    <td><button type="button" onclick="viewImages('${key}', '${count}')">Ver</button>
                    <button type="button" onclick="deleteData('${key}')">Eliminar</button></td>
                </tr>`;
        count ++;
    }
    table.innerHTML = rows;
}

async function viewImages(id, count){
    document.getElementById("urls").innerHTML = "";
    const res = await fetch(`${url}images/${id}.json`);
    const data = await res.json();
    
    for(let i=0; i<data.image.length; i++){
        const storageRef = firebase.storage().ref(`images/${data.image[i]}`); 
        storageRef.getDownloadURL().then((url) => {
        let v = document.getElementById("urls");
        let i = `<img src=${url} class="verImages">`;
        v.innerHTML += i;
    })
    document.getElementById("tBody").innerHTML = `<tr><td>${count}</td>
                                                    <td>${data.name}</td>
                                                    <td>${data.description}</td>
                                                    <td><button type="button" onclick="deleteData('${id}')">Eliminar</button></td>
                                                </tr>`;

    const f = document.getElementById("form");
    f.innerHTML = `
    <div class="volver">
      <button onclick="getData()" style="align-self: center;">Volver</button>
    </div>`;
}
}

async function deleteData(id){
    /*const r = await fetch(`${url}images/${id}.json`);
    const data = await r.json();
    for(let i=0; i<data.image.length; i++){
    const storageRef = firebase.storage().ref(`images/${data.image[i]}`);
    storageRef.delete().then(() => {
        console.log("Archivo eliminado correctamente");
    })
    }*/
    const res = await fetch(`${url}images/${id}.json`,{
        method:"Delete"
    });
    getData();
}
 function limpiar(){
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("img").value = "";
 }