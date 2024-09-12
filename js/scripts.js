const Preguntas = [
    { question: "¿Cuál es la capital de Francia?", answer: "Paris" },
    { question: "¿Cuántos continentes hay en el mundo?", answer: "7" },
    { question: "¿Quién escribió 'El Quijote'?", answer: "Miguel de Cervantes" },
    { question: "¿Cuál es el símbolo químico del agua?", answer: "H2O" },
    { question: "¿Cuál es el río más largo del mundo?", answer: "Amazonas" },
    { question: "¿En qué año comenzó la Segunda Guerra Mundial?", answer: "1939" },
    { question: "¿Cuál es el planeta más grande del sistema solar?", answer: "Jupiter" },
    { question: "¿Quién pintó 'La Mona Lisa'?", answer: "Leonardo da Vinci" },
    { question: "¿Cuál es el océano más grande del mundo?", answer: "Pacifico" },
    { question: "¿En qué año llegó el hombre a la luna por primera vez?", answer: "1969" }
];


function mostrarPreguntas() {
    const PreguntasContainer = document.getElementById("Preguntas");
    
    Preguntas.forEach((item, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<strong>Pregunta ${index + 1}:</strong> ${item.question}`;
        PreguntasContainer.appendChild(questionDiv);
    });
}


function Resultado() {
    let score = 0;

    Preguntas.forEach((item, index) => {
        const userAnswer = prompt(`Pregunta ${index + 1}: ${item.question}`);
        if (userAnswer.toLowerCase() === item.answer.toLowerCase()) {
            score++;
        }
    });

    alert(`Tu puntaje es ${score} de ${Preguntas.length}`);
}


window.onload = mostrarPreguntas;