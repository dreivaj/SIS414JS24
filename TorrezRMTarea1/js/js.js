function suma(a, b){
    return a + b
}
 function tiponumero(a){
    if(a % 2 == 0) {
       // document.writeln("Par")
        console.log("Par")
    }
    else{
           // document.writeln("Impar")
            console.log("Impar")
    }
}
function mifuncion(){
    console.log("..f3..")
    let varA = Number(document.getElementById("varA").value)
    let varB = Number(document.getElementById("varB").value)
    let varC = suma(varA , varB)

    let result = document.getElementById("result")
    result.innerHTML = "<strong> El resultado es: </strong>" + varC

   // document.ge("Result ", varC, "<br/>")
    console.log( "Result GUI ", result )
    console.log("Result ", varC)
    tiponumero(varC)
    
}

