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
        pregunta3: document.querySelector('input[name="pregunta3"]:checked') ? document.querySelector('input[name="pregunta3"]:checked').value : '',
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
        alert("¡Respuesta 1 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta2 === "1") {
        puntos += 5;
        alert("¡Respuesta 2 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta3 === "Sucre") {
        puntos += 5;
        alert("¡Respuesta 3 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta4.trim().toLowerCase() === "sajama") {
        puntos += 5;
        alert("¡Respuesta 4 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta5.trim().toLowerCase() === "morenada") {
        puntos += 5;
        alert("¡Respuesta 5 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta6 === "1825-08-06") {
        puntos += 5;
        alert("¡Respuesta 6 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta7.trim().toLowerCase() === "charquekan") {
        puntos += 5;
        alert("¡Respuesta 7 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta8 >= 50) {
        puntos += 5;
        alert("¡Respuesta 8 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta9.trim().toLowerCase() === "fútbol") {
        puntos += 5;
        alert("¡Respuesta 9 correcta! Te ganaste 5 puntos.");
    }
    if (respuestas.pregunta10 === "1825-08-06") {
        puntos += 5;
        alert("¡Respuesta 10 correcta! Te ganaste 5 puntos.");
    }
    
    if (puntos === 0) {
        alert("¡Ninguna respuesta correcta! Tu puntuación es cero.");
    } else {
        console.log("Total de puntos: " + puntos);
    }
    // Enviar respuestas a un servidor o realizar otras acciones
});

