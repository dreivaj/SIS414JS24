
const firebaseConfig = {
    apiKey: "AIzaSyBUdcu0m5EH2nZleR1kDdOULvKvl3pFlg8",
  authDomain: "edwin-55449.firebaseapp.com",
  projectId: "edwin-55449",
  storageBucket: "edwin-55449.appspot.com",
  messagingSenderId: "934965202751",
  appId: "1:934965202751:web:8534d71762bcdcbdbb4d8a",
  measurementId: "G-6YF7RM8YEB"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  function addData() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').files[0];
  
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`images/${imagen.name}`);
  
    imageRef.put(imagen)
      .then(() => {
        imageRef.getDownloadURL().then((url) => {
          db.collection("productos").add({
            nombre: nombre,
            descripcion: descripcion,
            imagenURL: url
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value = '';
            document.getElementById('descripcion').value = '';
            document.getElementById('imagen').value = '';
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
        });
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  }
  function displayData() {
    db.collection("productos").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("Producto:", doc.id, data);
        });
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }
  