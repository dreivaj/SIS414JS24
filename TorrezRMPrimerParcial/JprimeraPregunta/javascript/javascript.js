//hallar la media de una lista de numeros utilizando una funcion lambda ()=>

const calcularMedia = () => {
  const numeros = [4, 5, 1, 10];
  const suma = numeros.reduce((total, num) => total + num, 0);
  const media = Math.round(suma / numeros.length);

  document.getElementById('resultado').innerText = `La media es: ${media}`;
};

//// ya se reviso en el examen