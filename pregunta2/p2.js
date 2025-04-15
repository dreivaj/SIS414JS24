document.addEventListener("DOMContentLoaded", function() {
    const tab = document.getElementById("tabla");
    const b = document.getElementById("boton");
    let c = 0;

    function tablita() {
        tab.querySelector("tbody").innerHTML += 
        `<tr>
        <td>${++c}</td>
        <td>Nombre</td>
        <td>Apellido</td>
        <td>Datos</td>
        </tr>`;
    }
    b.addEventListener("click", tablita);
    tablita();
});
