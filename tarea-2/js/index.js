function calcular(){
    
    let result = 0  
    let var1 = document.getElementsByName("r1")
    var1.forEach(element => {
        element.checked == true ? result += Number(element.value): false  
    });
    
    let r2 = document.getElementById("r2").value
    r2 == "diablo"? result += 5 : false
 
    let r3 = document.getElementById("r3")
    let indice = r3.selectedIndex
    let valor = r3.options[indice].value
    valor == "5" ? result += 5 : false
    
    let r4 = document.getElementsByName("r4")
    r4.forEach(element => {
            element.checked === true ? result += Number(element.value) : false   
    });

    let r5 = Number(document.getElementById("r5").value)
    r5 === 1100 ? result += 5 : false

    let r6 = document.getElementsByName("color")
    r6.forEach(element => {
            element.checked === true ? result += Number(element.value) : false   
    });

    let r7 = document.getElementsByName("r7")
    r7.forEach(element => {
        element.checked == true ? result += Number(element.value): false  
    });

    let r8 = document.getElementsByName("r8")
    Number(r8[0].value) === 5 ?  result += 5: false

    let r9 = document.getElementsByName("r9")[0].value
    r9 === "11:00" ? result += 5: false

    let r10 = document.getElementsByName("r10")
    r10.forEach(element => {
        element.checked == true ? result += Number(element.value): false  
    });
    document.getElementById("result").innerHTML = "puntaje: " + result
}