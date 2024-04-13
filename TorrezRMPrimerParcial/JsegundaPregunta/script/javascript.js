//agregar filas a una tabla en html crear un boton para agregar
//una pregunta multiple de 2 respuestas son correctas y 5 posibles respuestas si se seleciona una correcta tiene 100 si solo 1 tiene 50y por cada mala se quita 10% en javascript y html usando un checkbox
function calificar() {
    const respuestasCorrectas = ["Rojo", "Azul"];
    const respSelect = document.querySelectorAll('input[name="respuesta"]:checked');
    let puntaje = 0;

    let correcta = 0;
    let incorrecta = 0;
    respSelect.forEach(respuesta => {
        if (respuestasCorrectas.includes(respuesta.value)) {
            correcta++;
        } else {
            incorrecta++;
        }
    });

    if (correcta === 2 && incorrecta === 0) {
        puntaje = 100;
    } else if (correcta === 1 && incorrecta === 0) {
        puntaje = 50;
    } else {
        let penalizacion = incorrecta * 0.10; // Penalización del 10% por respuesta incorrecta
        puntaje = (1 - penalizacion) * 100;
    }

    document.getElementById('resultado').textContent = `Puntaje: ${puntaje}`;
}
