const calcularMediana = nums => {
    const sortedNums = nums.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedNums.length / 2);
    if (sortedNums.length % 2 === 0) {
        return (sortedNums[middle - 1] + sortedNums[middle]) / 2;
    } else {
        return sortedNums[middle];
    }
};
const solicitarNumeros = () => {
    const input = prompt("Ingrese los números separados por coma (,)");
    const numeros = input.split(",").map(num => parseFloat(num));
    return numeros;
};

const numeros = solicitarNumeros();


if (numeros.length > 0) {
    console.log("Los números ingresados son:", numeros);
    console.log("La mediana es:", calcularMediana(numeros));
} else {
    console.log("No se ingresaron números.");
}