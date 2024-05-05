function Suma(A,B){
    return A+B
}
function tiponumero(A){
    if (A % 2 == 0) {
        console.log("par");
        document.getElementById('result').innerHTML   =  "<br> " + A +  "<br> Par";
    } else {
        console.log("impar");
        document.getElementById('result').innerHTML   =  " <br> " + A +  "<br> Impar";
    } 
}
function mifuncion(){
    let varA = Number(document.getElementById("varA").value);
    let varB = Number(document.getElementById("varB").value);
    let varC = Suma(varA, varB);
    console.log("result: ", varC);
    tiponumero(varC);    
}