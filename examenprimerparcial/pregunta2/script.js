const question = "¿Cuáles son los personajes correctos de Mickey Mouse?";
const options = ["Deysi", "Pluto", "Aladín", "Blanca Nieves", "Cenicienta"];

const correctAnswers = ["Deysi", "Pluto"];
const pointsForCorrectAnswer = 50;
const penaltyForIncorrectAnswer = 0.1;
const maxSelections = 2;

function displayQuestion() {
    document.getElementById("question").innerText = question;

    const optionsContainer = document.getElementById("options");
    options.forEach(option => {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "answer");
        checkbox.setAttribute("value", option);
        optionsContainer.appendChild(checkbox);

        const label = document.createElement("label");
        label.innerText = option;
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement("br"));
    });
}

function checkAnswer() {
    const selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked'))
        .map(input => input.value);

    if (selectedOptions.length !== maxSelections) {
        document.getElementById("result").innerText = `Por favor selecciona exactamente ${maxSelections} respuestas.`;
        return;
    }

    let score = 0;
    let correctCount = 0;

    selectedOptions.forEach(selectedOption => {
        if (correctAnswers.includes(selectedOption)) {
            score += pointsForCorrectAnswer;
            correctCount++;
        } else {
            score -= pointsForCorrectAnswer * penaltyForIncorrectAnswer;
        }
    });

    if (correctCount === 2) {
        score = 100;
    } else if (correctCount === 1) {
        score = 40;
    } else {
        score = 0;
    }

    const resultDisplay = document.getElementById("result");
    if (score === 100) {
        resultDisplay.innerText = `¡Respuesta Correcta! Obtuviste 100 puntos.`;
    } else {
        resultDisplay.innerText = `Respuesta Incorrecta. Tu puntaje es: ${score} puntos.`;
    }
}

// Display question when the page loads
window.onload = displayQuestion;

