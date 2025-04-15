
const firebaseConfig = {
    apiKey: "AIzaSyC9xL3qMPq2xlqyevhjcRdefA3IAltzWAE",
    authDomain: "examen-04.firebaseapp.com",
    databaseURL: "https://examen-04-default-rtdb.firebaseio.com",
    projectId: "examen-04",
    storageBucket: "examen-04.appspot.com",
    messagingSenderId: "507967274836",
    appId: "1:507967274836:web:268cd3b2e5a4b8a48792c1"
  };

  firefase.initializeApp(firebaseConfig);



var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector('.uploadPercentage');
var progress = document.querySelector('.progress');
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector(".img");
function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
}

function uploadImage{

    let storageBucket = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.computedStyleMap.width=percentVal+"%";
    },(error)=>{
        console.log("Error is", error);
    },()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url);

            if(url != ""){
                img.setAttribute("src", url);
                img.style.display= "block";
            }
        })
    })

}
