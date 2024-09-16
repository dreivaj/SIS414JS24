//function calcular(){
    //let result = 0 
    //let p1 = dpcument.getElementoByName("p1")
    //p1.froEach(element =>{
      //  if(element.checked == true){
        //  result = result + Number(element.value)  
       // }
   // });//
    
//}
function calcularPregunta1() {
    let result = 0;
    let p1 = document.getElementsByName("p1");

    p1.forEach(element => {
        if (element.checked) {
            result += Number(element.value);
        }
    });

    document.getElementById("result1").innerHTML = "Puntuación: " + result;
}

function calcularPregunta2() {
    let result = 0;
    let selectedOption = document.querySelector("select[name='p2']").value;

    if (selectedOption === "La Paz") {
        result = 5;
    }

    document.getElementById("result2").innerHTML = "Puntuación: " + result;
}

function calcularPregunta3() {
    let result = 0;
    let selectedOption = document.querySelector("select[name='p3']").value;

    if (selectedOption === "Diablada") {
        result = 5;
    }

    document.getElementById("result3").innerText = "Puntuación: " + result;
}

function calcularPregunta4() {
    let result = 0;
    let p4 = document.getElementsByName("p4");

    p4.forEach(element => {
        if (element.checked) {
            result += Number(element.value);
        }
    });

    document.getElementById("result4").innerText = "Puntuación: " + result;
}