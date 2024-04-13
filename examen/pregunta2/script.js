document.querySelectorAll('.quizForm').forEach((form, index) => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      var selectedValues = Array.from(form.querySelectorAll('input[name="answer"]:checked')).map(checkbox => parseInt(checkbox.value));
      var sum = selectedValues.reduce((acc, val) => acc + val, 0);
      
      if (sum === 4) {
        document.getElementById(`result${index + 1}`).textContent = `¡La suma es igual a ${4}!)`;
      } else {
        document.getElementById(`result${index + 1}`).textContent = `La suma no es igual a ${4}. Intenta de nuevo.)`;
      }
    });
  });