function control(){
    const r1 = document.querySelectorAll('input[name="r1"]')
    r1.forEach(element => {
      element.addEventListener('click', event =>{
        const checked = document.querySelectorAll('input[name="r1"]:checked').length
        checked > 2 ? event.preventDefault() : false
      })
    });
  }
  control()
  function calcular() {
    
    let result = 0;
    const r1 = document.getElementsByName("r1");
    r1.forEach((element) => {
          element.checked === true ? (result += Number(element.value)) : false;
    });
    result < 0 ? result = 0: false 
    document.getElementById("result").innerHTML = "puntaje: " + result;
  }