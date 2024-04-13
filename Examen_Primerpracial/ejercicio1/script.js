const listaNumeros = [1, 3, 2, 1, 7, 8, 10];

const calcularMediana = lista => {
    const sorted = lista.sort((a, b) => a - b);
    const length = sorted.length;
    const middle = Math.floor(length / 2);

    return length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
};

const mediana = calcularMediana(listaNumeros);
console.log("La mediana de la lista de números es: " + mediana);

