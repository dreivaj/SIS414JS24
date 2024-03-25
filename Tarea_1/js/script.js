function tipoNumero(A,B) {
    return A+B
}
function tipoNumero(A){
    if (a % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}
function mifuncion(a,b){
    return a+b;
}
function mifuncion(){
    console.log(".....f3....");
    let varA=Number(document.getElementById("varA").value);
    let varB=Number(document.getElementById("varB").value);
    let varC=suma(varA,varB)   
     document.getElementById("resultado").innerHTML = "Resultado: " + varC + "<br>Tipo: " + TipoNumero(varC);
     
}