let btn = document.getElementById("add");
let cont = 0;
btn.addEventListener("click", () =>{
    cont +=1;
    let table = document.getElementById("table");
    let fila =`<tr><td>${cont}</td><td>lis</td><td>cuenca</td><td>12846091</td></tr>`;
    table.innerHTML += fila;
})