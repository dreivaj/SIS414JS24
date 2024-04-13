const numbersList = [20, 10, 3, 1, 1, 1]
function findMedian(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b)
    const length = sortedNumbers.length
    const middleIndex = Math.floor(length / 2)
    if (length % 2 === 0) {
      const median = (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
      return median;
    } else {
      return sortedNumbers[middleIndex]
    }
}
const numerosOrdenados = [...numbersList].sort((a, b) => a - b)
console.log("Lista ordenada:", numerosOrdenados)
const median = findMedian(numbersList)
console.log("El numero de la media es :", median)