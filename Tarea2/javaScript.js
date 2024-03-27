function calificar(){
    let resultado = 0;
    document.getElementsByName("pregunta1").forEach(element => {
      element.checked == true?
      resultado += Number(element.value): false
    });
    resultado += Number(document.getElementsByName("pregunta2")[0].value)
    document.getElementById("pregunta3").value == "Titicaca"?
    resultado += 10: false
    document.getElementsByName("pregunta4").forEach(element =>{
      element.checked == true?
      resultado += Number(element.value): false
    });
    resultado += Number(document.getElementsByName("pregunta5")[0].value)
      document.querySelectorAll('input[name="pregunta6"]').forEach(element=>{
        element.checked == true?
        resultado += Number(element.value):false
      });
    (()=>{
      if((document.getElementById("pregunta7").value) === "2010-01-22")
        resultado += 10
    })();
    document.getElementsByName("pregunta8").forEach(element=>{
      element.checked == true?
      resultado += Number(element.value):false
    });
    document.getElementById("pregunta9").value == 36?
    resultado += 10: false
  
    let rojo = false, verde = false;
    (()=>{
      document.querySelectorAll('input[name="pregunta10"]').forEach(element =>{
        if (element.checked) {
          if (element.value === "Rojo")
            rojo = true;
          else if (element.value === "Verde") 
            verde = true;
        }
      });
      if(rojo && verde)
        resultado += 10;
    })();
    document.getElementById("puntaje").innerHTML = "Puntaje: " + resultado
}

function controlar() {
  document.querySelectorAll('input[name="pregunta6"]').forEach(checkbox => {
    checkbox.addEventListener("click", event => {
      let seleccionados = document.querySelectorAll('input[name="pregunta6"]:checked').length;
      if (seleccionados > 5) {
        event.preventDefault();
      }
    });
  });
}

function controlar2(){
  document.querySelectorAll('input[name="pregunta10"]').forEach(checkbox =>{
    checkbox.addEventListener("click", event =>{
      let seleccionados = document.querySelectorAll('input[name="pregunta10"]:checked').length
      if(seleccionados > 2)
        event.preventDefault();
    });
  });
}