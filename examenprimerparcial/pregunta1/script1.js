// Función para calcular la mediana de una lista de números
const calcularMediana = lista => {
    // Ordenar la lista de números
    lista.sort((a, b) => a - b);

    // Obtener la longitud de la lista
    const longitud = lista.length;

    // Verificar si la longitud de la lista es impar
    if (longitud % 2 !== 0) {
        // Si es impar, devolver el número en el medio
        return lista[Math.floor(longitud / 2)];
    } else {
        // Si es par, calcular la mediana promediando los dos números en el medio
        const medio1 = lista[longitud / 2 - 1];
        const medio2 = lista[longitud / 2];
        return (medio1 + medio2) / 2;
    }
};

// Lista de números
const numeros = [5, 2, 9, 1, 7, 3, 6, 8, 4];

// Mostrar la lista desordenada
console.log("Lista desordenada:", numeros);

// Ordenar la lista
const numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log("Lista ordenada:", numerosOrdenados);

// Calcular y mostrar la mediana
console.log("La mediana es:", calcularMediana(numeros));

