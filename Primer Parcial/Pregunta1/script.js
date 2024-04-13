let mediana = lista => {
    // Se usa el metodo sort() para ordenar el array y se pasa otra funcion como argumento
    // Usando la funcion de comparacion a-b se logra que se ordenen bien los numeros, ya que habia un eror al ordenar el 10
    let ordenado = lista.sort((a, b) => a - b)
    let tam = lista.length
    if(tam % 2 != 0){
        console.log("La mediana de " + ordenado + " es: " + ordenado[(tam-1)/2])
    }
    else{
        med = (ordenado[(tam/2)] + ordenado[(tam/2)-1]) / 2
        console.log("La mediana de " + ordenado + " es: " + med)
    }
}
let numeros1 = [1,3,2,1,7,8,10]
let numeros2 = [1,3,2,1,7,10]
mediana(numeros1)
mediana(numeros2)