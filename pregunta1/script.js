const number = [1,3,2,4,7,8,10];
const Myfunction = (data) => {
  const sorted = data.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};
console.log("La mediana es:", Myfunction(number));