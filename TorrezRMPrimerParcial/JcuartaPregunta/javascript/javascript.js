// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5ZPVlodaup-ZsTGrnWt9GZh73qgYvIuQ",
    authDomain: "primerparcialsis414.firebaseapp.com",
    databaseURL: "https://primerparcialsis414-default-rtdb.firebaseio.com",
    projectId: "primerparcialsis414",
    storageBucket: "primerparcialsis414.appspot.com",
    messagingSenderId: "692641518755",
    appId: "1:692641518755:web:3b84a0d5d95b8d74061b16",
    measurementId: "G-68JTNDEHFW"
};
  // Inicialización de Firebase
firebase.initializeApp(firebaseConfig);

// Variables globales
var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var fileItem;
var fileName;
var img = document.querySelector(".img");

// Función para obtener el archivo seleccionado
function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
}

// Función para subir la imagen a Firebase Storage
function uploadImage(){
    if (!fileItem) {
        alert("Por favor, seleccione una imagen.");
        return;
    }

    let storageRef = firebase.storage().ref("img/" + fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_changed", (snapshot)=>{
        let percentVal = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        uploadPercentage.innerHTML = percentVal + "%";
        progress.style.width = percentVal + "%";
    }, (error)=>{
        console.log("Error al subir la imagen:", error);
        alert("Error al subir la imagen. Por favor, inténtelo de nuevo.");
    }, ()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL de la imagen:", url);
            img.setAttribute("src", url);
            img.style.display = "block";
        });
    });
}

// URL de la base de datos
const URL = "https://primerparcialsis414-default-rtdb.firebaseio.com";

// Función para enviar datos a la base de datos
async function postData(data) {
    try {
        const response = await fetch(`${URL}/people.json`, {
            method: "POST",
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error("Error al enviar datos.");
        }
        getPost();
    } catch (error) {
        console.error("Error al enviar datos:", error);
        alert("Error al enviar datos. Por favor, inténtelo de nuevo.");
    }
}

// Evento click del botón para agregar datos
let btn = document.getElementById("btnAdd");
btn.addEventListener('click', () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    // Validar que los campos no estén vacíos
    if (name.trim() === "" || description.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return; 
    }

    let data = {
        name: name,
        description: description,
        userId: "1",
    };

    postData(data);
});

// Función para obtener datos de la base de datos y mostrarlos en una tabla
async function getPost() {
    try {
        let response = await fetch(`${URL}/people.json`);
        if (!response.ok) {
            throw new Error("Error al obtener datos.");
        }
        let json = await response.json();
        let table = document.getElementById("tableData");
        let htmlRow = "";
        let index = 1;
        for (let key in json) {
            let rowData = json[key];
            htmlRow += `<tr>
                            <td>${index}</td>
                            <td>${rowData.name}</td>
                            <td>${rowData.description}</td>
                            <td><button onclick="uploadImage()">Ver Imagen</button></td>
                        </tr>`;
            index++;
        }
        table.innerHTML = htmlRow;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        alert("Error al obtener datos. Por favor, inténtelo de nuevo.");
    }
}
