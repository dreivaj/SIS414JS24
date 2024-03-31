document.getElementById('sumarBtn').addEventListener('click', function() {
    var reTexto;
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = sumarNumeros(num1, num2);
    if(resultado%2==0){
        reTexto="par"
    }else{
        reTexto="impar"
    }
    document.getElementById('resultado').innerText = "La suma de " + num1 + " y " + num2 + " es: " + resultado;
    document.getElementById('reTexto').innerText = "El numero es: "+reTexto;

});

function sumarNumeros(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 + num2;
    } else {
        return "Por favor, ingrese números válidos.";
    }
}