
const datos = [
    {
      nombre: "Producto 1",
      descripcion: "Descripción del Producto 1",
      imagenes: [
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        "https://www.google.com/images/branding/googlelogo/3x/googlelogo_color_272x92dp.png"
      ]
    },
    {
      nombre: "Producto 2",
      descripcion: "Descripción del Producto 2",
      imagenes: [
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      ]
    },
    {
      nombre: "Producto 3",
      descripcion: "Descripción del Producto 3",
      imagenes: [
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      ]
    }
  ];
  
  function llenarTabla() {
    const tablaBody = document.querySelector("#tabla tbody");
  
    datos.forEach(objeto => {
      const fila = document.createElement("tr");
  
      const nombreColumna = document.createElement("td");
      nombreColumna.textContent = objeto.nombre;
  
      const descripcionColumna = document.createElement("td");
      descripcionColumna.textContent = objeto.descripcion;
  
      const imagenesColumna = document.createElement("td");
      objeto.imagenes.forEach(imagen => {
        const imagenElemento = document.createElement("img");
        imagenElemento.src = imagen;
        imagenElemento.style.width = "100px";
        imagenesColumna.appendChild(imagenElemento);
      });
  
      fila.appendChild(nombreColumna);
      fila.appendChild(descripcionColumna);
      fila.appendChild(imagenesColumna);
  
      tablaBody.appendChild(fila);
    });
  }
  window.onload = llenarTabla;