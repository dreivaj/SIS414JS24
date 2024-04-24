function calcular() {
  
    let result = 0;

    let ciudad1 = document.getElementById("ciudad1").checked;
    let ciudad2 = document.getElementById("ciudad2").checked;
    let ciudad3 = document.getElementById("ciudad3").checked;
    let ciudad4 = document.getElementById("ciudad4").checked;
    let ciudad5 = document.getElementById("ciudad5").checked;

    if (ciudad1) {
        result += 50;
    }
    if (ciudad4) {
        result += 50; 
    }
    if (ciudad2) {
        result -= 10;
    }
    if (ciudad3) {
        result -= 10;
    }
    if (ciudad5) {
        result -= 10;
    }
    if (!ciudad1 && !ciudad4 && (ciudad2 || ciudad3 || ciudad5)) {
        result = 0;
    }
    document.getElementById("result").innerHTML = "Puntaje: " + result;
}