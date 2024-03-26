const quizData = [
  {
    question: "Cual es la region mas grande de Bolivia?",
    choices: ["Los Andes", "La Amazonia", "El Chaco", "El Altiplano"],
    correctAnswer: "La Amazonia",
  },
  {
    question: "Cual es el lago mas grande de Bolivia?",
    choices: ["Lago Titicaca", "Lago Poopo", "Lago Coipasa", "Lago Uru Uru"],
    correctAnswer: "Lago Titicaca",
  },
  {
    question: "¿Quien fue el lider de la Revolucion Boliviana en 1952?",
    choices: [
      "Evo Morales",
      "Gualberto Villaroel",
      "Victor Paz Estessoro",
      "Juan Jose Torres",
    ],
    correctAnswer: "Victor Paz Estessoro",
  },
  {
    question: "¿Que es el TIPNIS?",
    choices: [
      "Un parque nacional",
      "Una reserva indigena",
      "Una mina de cobre",
      "Una plantacion de coca",
    ],
    correctAnswer: "Una reserva indigena",
  },
  {
    question: "¿Que evento historico es como el dia de la Patria",
    choices: [
      "La Revolcion de 1952",
      "La nacionalidad de los recursos naturales",
      "La eleccion de Evo Morales como Presidente",
      "La independencia de Bolivia",
    ],
    correctAnswer: "La independencia de Bolivia",
  },
  {
    question: "Cual es el principal producto agricola de Bolivia",
    choices: ["Trigo", "Soya", "Papas", "Coco"],
    correctAnswer: "Papas",
  },
  {
    question: "Cual es el principal producto minero de Bolivia",
    choices: ["Estaño", "Zinc", "Plata", "Litio"],
    correctAnswer: "Estaño",
  },
  {
    question: "Cual es la Feria de  la luna de mayo",
    choices: [
      "Un festival religioso",
      "Una feria comercial",
      "Una celebracion Cultural",
      "Una feria de agricultura",
    ],
    correctAnswer: "Una celebracion Cultural",
  },
  {
    question: "Que es el carnaval de oruro",
    choices: [
      "Una celebracion religiosa",
      "Una feria comercial",
      "Una celebracion Cultural",
      "Una feria de agricultura",
    ],
    correctAnswer: "Una celebracion Cultural",
  },
  {
    question: "Cual es la capital de Bolivia",
    choices: ["La Paz", "Cochabamba", "Santa Cruz", "Sucre"],
    correctAnswer: "Sucre",
  },
];

const questionElement = document.getElementById('question');
const choicesForm = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const quizContainer = document.querySelector('.quiz-container');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const question = quizData[currentQuestion];
  questionElement.textContent = question.question;

  choicesForm.innerHTML = '';

  question.choices.forEach(choice => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = choice;
    checkbox.name = 'choice';
    choicesForm.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = choice;
    choicesForm.appendChild(label);
    
    choicesForm.appendChild(document.createElement('br'));
  });
}
let cont=0;
function checkAnswer() {
  const selectedChoices = Array.from(choicesForm.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
  const question = quizData[currentQuestion];
  cont++;
  if (selectedChoices.join(', ') === question.correctAnswer) {
    score++;
    resultElement.textContent = `Pregunta ${cont} Verdadero`;
    resultElement.style.color= 'green';
    quizContainer.style.border = '8px solid green';
  } else {
    resultElement.textContent = `Pregunta ${cont} Falso`;
    resultElement.style.color= 'red';
    quizContainer.style.border = '8px solid red';
  }
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionElement.textContent = `Tus Respuestas son ${score} de ${quizData.length} cuestonario correcto.`;
  choicesForm.innerHTML = '';
  submitButton.style.display = 'none';
  resultElement.textContent = '';
}

submitButton.addEventListener('click', checkAnswer);

displayQuestion();
