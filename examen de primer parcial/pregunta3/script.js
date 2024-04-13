let n = 1
const agregarFila = () => {
    document.getElementById('tablaprueba').insertRow(-1).innerHTML = `<td>${n}</td><td></td><td></td><td></td><td></td>`
    n++
}