const listaNumeros = [5, 2, 8, 3, 1, 9, 4, 6, 7];

const calcularMediana = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const length = sortedNums.length;

  if (length % 2 === 0) {
    const middleIndex = length / 2;
    return (sortedNums[middleIndex - 1] + sortedNums[middleIndex]) / 2;
  } else {
    const middleIndex = Math.floor(length / 2);
    return sortedNums[middleIndex];
  }
};

const mediana = calcularMediana(listaNumeros);
console.log('La mediana de la lista es:', mediana);
