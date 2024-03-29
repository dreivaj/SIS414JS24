function Calcular() {
    let result = 0;

    // Pregunta 1
    const p1 = document.querySelector('input[name="p1"]:checked');
    if (p1 !== null) {
        result += parseInt(p1.value);
    }

    // Pregunta 2
    const p2 = document.getElementById('p2').value.toLowerCase().trim();
    if (p2 === 'mata') {
        result += 10;
    }
    // Pregunta 3
    const color = document.querySelector('select').value;
    if (color === 'Verde') {
        result += 10;
    }
    // Pregunta 4
    const p4 = document.getElementById('p4').value.toLowerCase().trim();
    if (p4 === 'zoología') {
        result += 10;
    }
     // Pregunta 5
     const deportes = document.querySelectorAll('input[type="checkbox"]');
     const deportesNoPracticados = ['Fútbol', 'Tenis', 'Motociclismo'];
 
     deportes.forEach(deporte => {
         if (deporte.checked && deportesNoPracticados.includes(deporte.nextSibling.textContent.trim())) {
             result += 10;
         }
     });
    // Pregunta 6
    const p6 = document.getElementById('p6').value.trim();
    if (p6 === '1939') {
        result += 10;
    }

    // Pregunta 7
    const p7 = document.querySelector('input[name="p7"]:checked');
    if (p7 !== null) {
        result += parseInt(p7.value);
    }

    // Pregunta 9
    const p9 = document.querySelector('input[name="p9"]:checked');
    if (p9 !== null) {
        result += parseInt(p9.value);
    }

    // Pregunta 10
    const p10 = document.getElementById('p10').value.trim();
    if (p10 === "3.1416") {
        result += 10;
    }

    // Mostrar resultado
    document.getElementById("result").innerHTML = "Puntaje: " + result;
}