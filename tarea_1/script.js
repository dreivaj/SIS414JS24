function suma(a, b) {
    return a + b;
}
function TipoNumero(a) {
    if (a % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }}
function mifuncion() {
    let varA = Number(document.getElementById("varA").value);
    let varB = Number(document.getElementById("varB").value);
    let varC = suma(varA, varB);
    document.getElementById("resultado").innerHTML = "Resultado: " + varC + "<br>Tipo: " + TipoNumero(varC);
}