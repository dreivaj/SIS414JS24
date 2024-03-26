function suma(a, b) {
    return a + b;
}

function tipoNumero(a) {
    if (a % 2 == 0) {
        console.log("par");
        document.getElementById('resultado').innerHTML   =  "el resultado es: " + a +  "<br> Par";
    } else {
        console.log("impar");
        document.getElementById('resultado').innerHTML   =  "el resultado es: " + a +  "<br> Impar";
    }
}

function mifuncion() {
    let varA = Number(document.getElementById("varA").value);
    let varB = Number(document.getElementById("varB").value);
    let varC = suma(varA, varB);
    console.log("Resultado: ", varC);
    tipoNumero(varC);    
}