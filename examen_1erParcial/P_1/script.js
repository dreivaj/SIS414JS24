const numeros = [1, 3, 2, 7, 8, 10, 8];
const encontrarMediana = (lista) => {
  const numerosOrdenados = lista.sort((a, b) => {return a - b;});
  console.log(numerosOrdenados);
  const longitud = lista.length;
  console.log(longitud);
  const indiceMedio = numerosOrdenados[(longitud - 1) / 2];
  const mitadDer = numerosOrdenados[longitud / 2];
  const mitadIzq = numerosOrdenados[longitud / 2 - 1];
  const respuesta =
  longitud % 2 !== 0 ? indiceMedio : (mitadDer + mitadIzq) / 2;
  return respuesta;
};
console.log("La mediana es: ", encontrarMediana(numeros));