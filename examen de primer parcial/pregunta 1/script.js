const checkbox = document.querySelectorAll('.checkbox');
const max = 2;
for (let i = 0 ; i < checkbox.length; i++) {
    checkbox[i].onclick = seleccionarCheckbox;
    function seleccionarCheckbox(event) {
        let checkboxRevisados = document.querySelectorAll('.checkbox:checked');
        if (checkboxRevisados.length > max) {
            return false;
        }
    }
}

function calificacion() {
    let pregunta1 = document.querySelectorAll('.checkbox')
    let checkboxRevisados = document.querySelectorAll('.checkbox:checked');
    if (pregunta1[0].checked && pregunta1[1].checked) {
        alert("100 / 100")
    } else if ((pregunta1[0].checked || pregunta1[1].checked) && checkboxRevisados.length == 1) {
        alert("50 / 100")
    } else if ((pregunta1[0].checked || pregunta1[1].checked) && checkboxRevisados.length == 2) {
        alert("40 / 100")
    } else if ((!pregunta1[0].checked && !pregunta1[1].checked) && checkboxRevisados.length > 0) {
        alert("0 / 100")
    }
}

const boton = document.getElementById('submit')

boton.addEventListener('click', () => {
    calificacion()
})