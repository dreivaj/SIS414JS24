document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los números ingresados por el usuario
    let inputNumeros = document.getElementById('numeros').value;
    // Convertir la cadena de números separados por comas en un array
    let numeros = inputNumeros.split(',').map(Number);
    
    // Ordenar los números
    numeros.sort(function(a, b) {
        return a - b;
    });

    // Calcular la mediana
    let mediana;
    if (numeros.length % 2 === 0) {
        // Si la cantidad de números es par
        let medio1 = numeros[numeros.length / 2 - 1];
        let medio2 = numeros[numeros.length / 2];
        mediana = (medio1 + medio2) / 2;
    } else {
        // Si la cantidad de números es impar
        mediana = numeros[Math.floor(numeros.length / 2)];
    }

    // Mostrar la mediana en el elemento con id "resultado"
    document.getElementById('resultado').innerText = "La mediana es: " + mediana;
});
