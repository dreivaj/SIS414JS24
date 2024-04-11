function suma(a, b){
    return a + b
}

function tipoNumero(a){
    if(a % 2 == 0){
        return "Par"
        console.log("Par")
    }
    else{
        return "Impar"
        console.log("Impar")
    }
}

function miFuncion(){
    let varA = Number(document.getElementById("varA").value)
    let varB = Number(document.getElementById("varB").value)
    let varC = suma(varA, varB)

    document.getElementById("result").innerHTML = "El resultado es: " + varC + " y es " + tipoNumero(varC)

    console.log("Result ", varC)
    console.log("Y es:", tipoNumero(varC))
}