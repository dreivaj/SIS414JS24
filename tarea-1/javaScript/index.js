function suma(a, b){
    return a + b
}
function tipoNumero(a){
    let tipo = a % 2 == 0 ? document.getElementById("result").innerHTML = "resultado: "+ a + "<br> numero par" : document.getElementById("result").innerHTML = "resultado: "+ a + "<br> numero impar";
    return tipo;
}
function miFuncion(){
    let varA = Number(document.getElementById("varA").value)
    let varB = Number(document.getElementById("varB").value)
    let varC = suma(varA, varB)
    tipoNumero(varC)
}
