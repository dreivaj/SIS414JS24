function suma(a, b){
    return a + b;
}

function tipoNumero(a){
    return (a % 2 == 0);
}

function mifuncion(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let resultado = suma(a, b);
    document.getElementById("suma").innerHTML = "Resultado: " + resultado;
    if(tipoNumero(resultado))
        document.getElementById("tipoNumero").innerHTML = ("La suma es par");
    else
    document.getElementById("tipoNumero").innerHTML = ("La suma es par");
}