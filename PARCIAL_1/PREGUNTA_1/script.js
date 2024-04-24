const numeros = [1, 3, 2, 1, 7, 8, 10];
const encontrarMediana = (lista) => {
    const numerosOrdenados = [...lista].sort((a, b) => a - b);
    const longitud = numerosOrdenados.length;
    return longitud % 2 !== 0
    ? numerosOrdenados[Math.floor(longitud / 2)] 
    : (numerosOrdenados[longitud / 2 - 1] + numerosOrdenados[longitud / 2]) / 2; 
};
console.log("La mediana es", encontrarMediana(numeros));
