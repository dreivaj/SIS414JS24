const quizData = [
  {
    question: "Cual es la region mas grande de Bolivia?",
    type: "radio",
    choices: ["Los Andes", "La Amazonia", "El Chaco", "El Altiplano"],
    correctAnswer: "La Amazonia",
  },
  {
    type: "radio",
    question: "Cual es el lago mas grande de Bolivia?",
    choices: ["Lago Titicaca", "Lago Poopo", "Lago Coipasa", "Lago Uru Uru"],
    correctAnswer: "Lago Titicaca",
  },
  {
    question: "¿Quien fue el lider de la Revolucion Boliviana en 1952?",
    type: "radio",
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
    type: "radio",
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
    type: "radio",
    choices: [
      "La Revolcion de 1952",
      "La nacionalidad de los recursos naturales",
      "La eleccion de Evo Morales como Presidente",
      "La independencia de Bolivia",
    ],
    correctAnswer: "La independencia de Bolivia",
  },
  {
    question: "¿Que evento historico es como el dia de la Patria",
    type: "radio",
    choices: [
      "10 de marzo",
      "1 de abril",
      "21 de septiembre",
      "27 de mayo", 
    ],
    correctAnswer: "1 de abril",
  },
  {
    question: "Que año se fundo potosi",
    type: "text",
    correctAnswer: "1545"
  },
  {
    question: "Quien descrubrio america",
    type: "text",
    correctAnswer: "cristobal colon"
  },
  {
    question: "Quien descrubrio potosi",
    type: "text",
    correctAnswer: "diego huallpa"
  },
  {
    question: "quien peleo por el mar",
    type: "text",
    correctAnswer: "eduardo avaroa"
  }
];

const questionElement = document.getElementById('question');
const choicesForm = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const resultDatos = document.getElementById('datos');
let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionData = quizData[currentQuestion];
  questionElement.textContent = questionData.question;

  choicesForm.innerHTML = '';

  if (questionData.type === 'text') {
    const input = document.createElement('input');
    input.type = 'text';
    choicesForm.appendChild(input);
  } else if (questionData.type === 'radio') {
    questionData.choices.forEach(choice => {
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'choice';
      radio.value = choice;
      const label = document.createElement('label');
      label.textContent = choice;
      choicesForm.appendChild(radio);
      choicesForm.appendChild(label);
      choicesForm.appendChild(document.createElement('br'));
    });
  }
}

function checkAnswer() {
  const userAnswer = getUserAnswer();
  const questionData = quizData[currentQuestion];
  
  if (userAnswer === questionData.correctAnswer) {
    score++;
    resultElement.textContent = 'Correct!';
    resultElement.style.color = 'green';
  } else {
    resultElement.textContent = 'Incorrect!';
    resultElement.style.color = 'red';
  }
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function getUserAnswer() {
  const questionData = quizData[currentQuestion];
  if (questionData.type === 'text') {
    return choicesForm.querySelector('input[type="text"]').value;
  } else if (questionData.type === 'radio') {
    const selectedRadio = choicesForm.querySelector('input[type="radio"]:checked');
    return selectedRadio ? selectedRadio.value : null;
  }
}

function endQuiz() {
  questionElement.textContent = `You answered ${score} out of ${quizData.length} questions correctly.`;
  choicesForm.innerHTML = '';
  submitButton.style.display = 'none';
  resultElement.textContent = '';
}

submitButton.addEventListener('click', checkAnswer);

displayQuestion();


// const quizData = [

//   {
//     question: "Cual es el principal producto agricola de Bolivia",
//     choices: ["Trigo", "Soya", "Papas", "Coco"],
//     correctAnswer: "Papas",
//   },
//   {
//     question: "Cual es el principal producto minero de Bolivia",
//     choices: ["Estaño", "Zinc", "Plata", "Litio"],
//     correctAnswer: "Estaño",
//   },
//   {
//     question: "Cual es la Feria de  la luna de mayo",
//     choices: [
//       "Un festival religioso",
//       "Una feria comercial",
//       "Una celebracion Cultural",
//       "Una feria de agricultura",
//     ],
//     correctAnswer: "Una celebracion Cultural",
//   },
//   {
//     question: "Que es el carnaval de oruro",
//     choices: [
//       "Una celebracion religiosa",
//       "Una feria comercial",
//       "Una celebracion Cultural",
//       "Una feria de agricultura",
//     ],
//     correctAnswer: "Una celebracion Cultural",
//   },
//   {
//     question: "Cual es la capital de Bolivia",
//     choices: ["La Paz", "Cochabamba", "Santa Cruz", "Sucre"],
//     correctAnswer: "Sucre",
//   },
// ];

// const questionElement = document.getElementById('question');
// const choicesForm = document.getElementById('choices');
// const submitButton = document.getElementById('submit');
// const resultElement = document.getElementById('result');
// const quizContainer = document.querySelector('.quiz-container');

// let currentQuestion = 0;
// let score = 0;

// function displayQuestion() {
//   const question = quizData[currentQuestion];
//   questionElement.textContent = question.question;

//   choicesForm.innerHTML = '';

//   question.choices.forEach(choice => {
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.value = choice;
//     checkbox.name = 'choice';
//     choicesForm.appendChild(checkbox);

//     const label = document.createElement('label');
//     label.textContent = choice;
//     choicesForm.appendChild(label);
    
//     choicesForm.appendChild(document.createElement('br'));
//   });
// }
// let cont=0;
// function checkAnswer() {
//   const selectedChoices = Array.from(choicesForm.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
//   const question = quizData[currentQuestion];
//   cont++;
//   if (selectedChoices.join(', ') === question.correctAnswer) {
//     score++;
//     resultElement.textContent = `Pregunta ${cont} Verdadero`;
//     resultElement.style.color= 'green';
//     quizContainer.style.border = '8px solid green';
//   } else {
//     resultElement.textContent = `Pregunta ${cont} Falso`;
//     resultElement.style.color= 'red';
//     quizContainer.style.border = '8px solid red';
//   }
//   currentQuestion++;

//   if (currentQuestion < quizData.length) {
//     displayQuestion();
//   } else {
//     endQuiz();
//   }
// }

// function endQuiz() {
//   questionElement.textContent = `Tus Respuestas son ${score} de ${quizData.length} cuestonario correcto.`;
//   choicesForm.innerHTML = '';
//   submitButton.style.display = 'none';
//   resultElement.textContent = '';
// }

// submitButton.addEventListener('click', checkAnswer);

// displayQuestion();
