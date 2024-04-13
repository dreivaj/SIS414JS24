function calcularPuntaje() {
    const respuestasCorrectas = ["lapiz", "mesa"];
    const form = document.getElementById("formulario");
    const opciones = form.querySelectorAll('input[type="checkbox"]');
    let puntaje = 0;

    opciones.forEach(funcion => {
        if (funcion.checked) {
            if (respuestasCorrectas.includes(funcion.value)) {
                puntaje += 50;
            }else {
                puntaje -= 10; 
            }
        }
    });
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Tu puntaje es: <strong>${puntaje} puntos</strong>`;
}
