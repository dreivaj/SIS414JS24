//pregunta 1
const lista = [];
let n = prompt("tamaño de lista");

for(let i=0; i<n; i++){
    lista.push(Number(prompt()));
}
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1; j++){
            if(lista[j]>lista[j+1]){
            let aux = lista[j];
            lista[j] = lista[j+1];
            lista[j + 1] = aux;
            }
    }
}

 ((lista) => {
    if(n % 2 == 0){
        console.log(Number(lista[(lista.length/2) - 1]+lista[(lista.length/2)]));
    }else{
        console.log (Number(lista[parseInt(lista.length/2)]));
    }
})(lista);
console.log(lista);





/////////////////////////////////////////////////////////////////////////
//pregunta3
let btn = document.getElementById("add");
let cont = 0;
btn.addEventListener("click", () =>{
    cont +=1;
    let table = document.getElementById("table");
    let fila = `<tr><td>${cont}</td><td>aaa</td><td>bbbb</td><td>cccc</td></tr>`;
    table.innerHTML += fila;
})


////////////////////////////////////////////////////////////////////////
//pregunta 2
function calificar(){
    let resultado = 0;
    document.getElementsByName("pregunta").forEach(element=>{
    if(element.checked){
        resultado += Number(element.value);
    }
});
if(resultado == -20){
    resultado = 0;
}
document.getElementById("resultado").innerHTML = "Resultado" + resultado;
}
controlar();
function controlar() {
    document.querySelectorAll('input[name="pregunta"]').forEach(checkbox => {
      checkbox.addEventListener("click", event => {
        let seleccionados = document.querySelectorAll('input[name="pregunta"]:checked').length;
        if (seleccionados > 2) {
          event.preventDefault();
        }
      });
    });
  }