const firebaseSettings = {
    apiKey: "AIzaSyCgfcdOiks35vnPVRgDVd2H94j-N7GzH3A",
    authDomain: "examen-5eac4.firebaseapp.com",
    projectId: "examen-5eac4",
    storageBucket: "examen-5eac4.appspot.com",
    messagingSenderId: "690761284947",
    appId: "1:690761284947:web:a56d746b8973053a2875a6"
};

firebase.initializeApp(firebaseSettings);

function uploadImage() {
    const imgElement = document.getElementById("img");
    if (imgElement.files.length === 0) {
        alert('selecciona una  imagen');
        return;
    }
    const storage = firebase.storage();
    const storageRef = storage.ref();                                             

    Array.from(imgElement.files).forEach(file => {
        const fileName = file.name;
        const imageRef = storageRef.child('images/' + fileName);
        imageRef.put(file);
    });
}

const databaseURL = "https://examen-5eac4-default-rtdb.firebaseio.com/";
const sendButton = document.getElementById("send");

sendButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const imgFiles = document.getElementById("img").files;
    
    if (name && description && imgFiles.length > 0) {
        const imagesArray = Array.from(imgFiles).map(file => file.name);

        const postData = {
            name,
            description,
            image: imagesArray
        };
        
        uploadImage();
        postToDatabase(postData);
    } else {
        alert("llenalos campos.");
    }
});

loadData();

async function postToDatabase(data) {
    const response = await fetch(`${databaseURL}images.json`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    clearForm();
    loadData();
}

async function loadData() {
    let counter = 1;
    const response = await fetch(`${databaseURL}images.json`);
    const data = await response.json();
    const tableBody = document.getElementById("tBody");
    let rows = "";

    for (const key in data) {
        rows += `<tr><td>${counter}</td>
                    <td>${data[key].name}</td>
                    <td>${data[key].description}</td>
                    <td><button type="button" onclick="displayImages('${key}', '${counter}')">Ver</button>
                    <button type="button" onclick="removeData('${key}')">Eliminar</button></td>
                </tr>`;
        counter++;
    }
    tableBody.innerHTML = rows;
}

async function displayImages(id, counter) {
    document.getElementById("urls").innerHTML = "";
    const response = await fetch(`${databaseURL}images/${id}.json`);
    const data = await response.json();
    
    for (let i = 0; i < data.image.length; i++) {
        const storageRef = firebase.storage().ref(`images/${data.image[i]}`);
        storageRef.getDownloadURL().then((url) => {
            let imageContainer = document.getElementById("urls");
            const imgElement = `<img src=${url} class="viewImages">`;
            imageContainer.innerHTML += imgElement;
        });
    }

    const formElement = document.getElementById("form");
    formElement.innerHTML = `
    <div class="backButton">
        <button onclick="loadData()" style="align-self: center;">Volver</button>
    </div>`;
}

async function removeData(id) {
    const response = await fetch(`${databaseURL}images/${id}.json`, {
        method: "DELETE"
    });
    loadData();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("img").value = "";
}
