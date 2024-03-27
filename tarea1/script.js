document.getElementById('calcularBtn').addEventListener('click', function() {
    sumar();
});

function sumar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = num1 + num2;
        document.getElementById('resultado').innerHTML = "La suma es: " + resultado;
    } else {
        alert("Por favor ingrese números válidos.");
    }
}
