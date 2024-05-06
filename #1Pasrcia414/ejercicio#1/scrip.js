//hallar la mediana de una lista de numeros utilizando funcion lamda
//const num = [1,2,3,4,5,6,7];
const numeros = [1, 2, 1, 4, 5];
numeros.sort((a, b) => a - b);
const longitud = numeros.length;
let mediana;
if (longitud % 2 === 0) {
  const medio1 = longitud / 2 - 1;
  const medio2 = longitud / 2;
  mediana = (numeros[medio1] + numeros[medio2]) / 2;
} else {
  const Medio = Math.floor(longitud / 2);
  mediana = numeros[Medio];
}
console.log("La mediana es:", mediana);

