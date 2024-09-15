function result(){
    // Se crea un nodo con todas las opciones con en nombre opcion
    const resp = document.getElementsByName("opcion")
    let correc = 0
    let incorrec = 0
    for (let i = 0; i < resp.length; i++) {
        // Solo ingresaran los que esten seleccionados
        if (resp[i].checked) {
            if (resp[i].value === "gato" || resp[i].value === "camino") {
                correc++
            } else {
                incorrec++
            }
        }
    }
    let puntaje = 0
    if (correc == 2 && incorrec == 0) {
        puntaje = 100
    } else if (correc == 1 && incorrec == 1) {
        puntaje = 50 - (100 * 0.1)
    } else if (correc == 1 && incorrec == 0) {
        puntaje = 50
    } else if (correc < incorrec) {
        puntaje = 0
    }
    document.getElementById("result").innerHTML = "Resultado: " + puntaje
}

