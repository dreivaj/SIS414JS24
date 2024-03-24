function Calcular() {
    let result = 0;
    let p1 = document.getElementsByName("p1");
    p1.forEach(element => {
        if (element.checked) {
            result += Number(element.value);
        }
    });

    let p2 = document.getElementById("p2").value;
    if (p2.toLowerCase() === "diablo") {
        result += 5;
    }

    let capital = document.getElementById("capital").value;
    if (capital === "La Paz") {
        result += 5;
    }

    let c1 = document.getElementById("c1").checked;
    let c2 = document.getElementById("c2").checked;
    let c3 = document.getElementById("c3").checked;
    let c4 = document.getElementById("c4").checked;

    if (!c1 && !c2 && !c3 && c4) {
        result += 5;
    }

    document.getElementById("result").innerHTML = "Puntaje: " + result;
}


/*function tipoNumero(a){
    if( a % 2 == 0){
        document.writeln("Par")
        console.log("Par")
    }else{
        Document.writeln("Impar")
        console.log("impar")
    }
}
function mifuncion(){
    console.log(".....f3....")
    let varA = Number(document.getElementById("varA").value)
    let varB = Number(document.getElementById("varB").value)
    let varC = suma(varA, varB)
      let result =document.getElemtById("result")
      result.innerHTML= "<strong>El resultado es: </strong>" +varC
    document.writeln("Result gui", result)
    console.log("Result", varC)
    tipoNumero(varC)
}
/*function tipoNumero(a) {
    if (a % 2 == 0) {
        document.writeln("Par<br>");
        console.log("Par");
    } else {
        document.writeln("Impar<br>");
        console.log("Impar");
    }
}

function suma(a, b) {
    return a + b;
}

function mifuncion() {
    console.log(".....f3....");
    let varA = Number(document.getElementById("varA").value);
    let varB = Number(document.getElementById("varB").value);
    
    let varC = document.getElementById("result")
    varC.textContent = suma(varA,varB)
    
    /*let result = document.getElementById("reesult")
    console.log("La suma es: " + varC);
    tipoNumero(varC)
    /*document.writeln("La suma es: " + varC + "<br>");
    console.log("La suma es: " + varC);
    tipoNumero(varC);*/
                      