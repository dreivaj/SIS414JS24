//agergar filas a una tabla html
let contador = 1;
function getUsers() {
  const nombre = document.getElementById("nombre").value;
  const ci = document.getElementById("ci").value;
  const oficio = document.getElementById("oficio").value;
  const tabla = document.getElementById("tabla");
  
  const fila = `<tr>
                  <td>${contador}</td>
                  <td>${nombre}</td>
                  <td>${ci}</td>
                  <td>${oficio}</td>
               </tr>`;

  tabla.innerHTML += fila;
  contador++;
}