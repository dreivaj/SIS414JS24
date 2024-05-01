function checkAnswers() {
    var options = document.getElementsByName('option');
    var correctAnswers = ["helio", "neon", "argon", "xenon"];
    var score = 0;
  
    var selectedCorrectCount = 0;
    var selectedIncorrectCount = 0;
  
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        if (correctAnswers.includes(options[i].value)) {
          selectedCorrectCount++;
        } else {
          selectedIncorrectCount++;
        }
      }
    }
  
    if (selectedCorrectCount === 2) {
      score = 100;
    } else if (selectedCorrectCount === 1) {
      score = 50;
    } else if (selectedCorrectCount === 1 && selectedIncorrectCount === 1) {
      score = 10;
    }
  
    alert("Tu puntuación es: " + score);
  }