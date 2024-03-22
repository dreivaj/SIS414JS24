// Actualizar el valor del porcentaje en la pregunta 8
const pregunta8 = document.getElementById('pregunta8');
const porcentaje = document.getElementById('porcentaje');
pregunta8.addEventListener('input', () => {
    porcentaje.textContent = pregunta8.value + '%';
});

// Función para manejar el envío del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes manejar el envío de respuestas, por ejemplo:
    const respuestas = {
        pregunta1: document.getElementById('pregunta1').value,
        pregunta2: document.getElementById('pregunta2').value,
        pregunta3: document.querySelector('input[name="pregunta3"]:checked').value,
        pregunta4: document.getElementById('pregunta4').value,
        pregunta5: document.getElementById('pregunta5').value,
        pregunta6: document.getElementById('pregunta6').value,
        pregunta7: document.getElementById('pregunta7').value,
        pregunta8: document.getElementById('pregunta8').value,
        pregunta9: document.getElementById('pregunta9').value,
        pregunta10: document.getElementById('pregunta10').value,
    };
    // Comprobar respuestas y mostrar alertas
    let puntos = 0;
    if (respuestas.pregunta1.trim().toLowerCase() === "sucre") {
        puntos += 5;
        alert("¡Correcto! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta2 === "1") {
        puntos += 5;
        alert("¡Correcto! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta3 === "Sucre") {
        puntos += 5;
        alert("¡Correcto! Te ganaste 5 puntos.");
    }
    // Aquí agregar las condiciones de las demás preguntas...
    console.log("Total de puntos: " + puntos);
    // Enviar respuestas a un servidor o realizar otras acciones
});