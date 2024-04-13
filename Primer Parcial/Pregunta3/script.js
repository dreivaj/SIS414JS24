let id = 2
let btnAdd = document.getElementById("add")
btnAdd.addEventListener('click', ()=> {
    id++
    let tabla = document.getElementById("tbody")
    // Se crea elementos html 
    let fila = document.createElement("tr")
    let celda = document.createElement("td")
    // Se pone valor a una celda
    celda.textContent = id
    // Se añade el elemento creado
    fila.appendChild(celda)
    tabla.appendChild(fila)
})