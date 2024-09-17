//preguntaUno
const numeros = [1, 3, 2, 7, 8, 10, 8];
const encontrarMediana = (lista) => {
  const numerosOrdenados = lista.sort((a, b) => {return a - b;});
  console.log(numerosOrdenados);
  const longitud = lista.length;
  console.log(longitud);
  const indiceMedio = numerosOrdenados[(longitud - 1) / 2];
  const mitadDer = numerosOrdenados[longitud / 2];
  const mitadIzq = numerosOrdenados[longitud / 2 - 1];
  const respuesta =
  longitud % 2 !== 0 ? indiceMedio : (mitadDer + mitadIzq) / 2;
  return respuesta;
};
console.log("La mediana es: ", encontrarMediana(numeros));

//preguntaDos
function control(){
  const r1 = document.querySelectorAll('input[name="r1"]')
  r1.forEach(element => {
    element.addEventListener('click', event =>{
      const checked = document.querySelectorAll('input[name="r1"]:checked').length
      checked > 2 ? event.preventDefault() : false
    })
  });
}
control()
function calcular() {
  
  let result = 0;
  const r1 = document.getElementsByName("r1");
  r1.forEach((element) => {
        element.checked === true ? (result += Number(element.value)) : false;
  });
  result < 0 ? result = 0: false 
  document.getElementById("result").innerHTML = "puntaje: " + result;
}



//preguntaTres
let contador = 0
function addRows(){
  const bodyTable = document.getElementById("bodyTable")
  contador++
  const newRow = `<tr>
                  <td>${contador}</td>
                  <td>fulanito</td>
                  <td>Alimaña</td>
                  <td>5145424</td>
                  </tr>`
  bodyTable.innerHTML += newRow
}


//preguntaCuatro
const firebaseConfig = {
  apiKey: "AIzaSyDUrqKEp6bv07havXmzhslH9M4hzlnk6Xo",
  authDomain: "imagesexamen.firebaseapp.com",
  databaseURL: "https://imagesexamen-default-rtdb.firebaseio.com",
  projectId: "imagesexamen",
  storageBucket: "imagesexamen.appspot.com",
  messagingSenderId: "310784000538",
  appId: "1:310784000538:web:a629a3df6ea856507107a3"
};
firebase.initializeApp(firebaseConfig)


var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentval;
var fileItem;
var fileName;
var img = document.querySelector(".img")
function getFile(e){
fileItem = e.target.files[0];
fileName = fileItem.name;
fileText.innerHTML = fileName;
}

function uploadImage(){
  let storageRef = firebase.storage().ref("img/"+fileName);
  let uploadTask = storageRef.put(fileItem);

  uploadTask.on("state_changed", (snapshot)=>{
      console.log(snapshot);
      percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes) * 100);
      console.log(percentVal);
      uploadPercentage.innerHTML = percentVal+"%";
      progress.style.width = percentVal+"%";
  }, (error)=>{
  console.log("Error is ", error);
  }, ()=>{
    uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
    console.log("URL", url);
    if(url != ""){
      img.setAttribute("src", url);
      img.style.display="block";
    }
  })
})
}


const URL = "https://imagesexamen-default-rtdb.firebaseio.com/";

async function postData(data) {
    const dataBase = await fetch(`${URL}people.json`, {
        method: "POST",
        body: JSON.stringify(data)
    });
    getPost();
}

let btn = document.getElementById("btnAdd");
btn.addEventListener('click', () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    // Validar que los campos no estén vacíos
    if (name.trim() === "" || description.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return; // Detener la ejecución si hay campos vacíos
    }

    let data = {
        name: name,
        description: description,
        userId: "1",
    };

    postData(data);
});



async function getPost() {
  let response = await fetch(`${URL}people.json`);
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
}