function Calcular(){
    let result = 0
    let p1 = document.getElementsByName("p1")
    p1.forEach(element =>{
        if(element.ariaChecked == true){
            result = result + Number(element.value)
        }
    });
    let p2 = document.getElementById("p2").value
    if (p2 == "mata") {
        result = result + 10
    }
    let p4 = document.getElementById("p4").value
    if (p4 == 1939) {
        result = result + 10
    }
    let p6 = document.getElementById("p6").value
    if (p6 == 1939) {
        result = result + 10
    }
    
    let p7 = document.getElementsByName("p7")
    p7.forEach(element =>{
        if(element.ariaChecked == true){
            result = result + Number(element.value)
        }
    })
    let p9 = document.getElementsByName("p9")
    p7.forEach(element =>{
        if(element.ariaChecked == true){
            result = result + Number(element.value)
        }
    })
    document.getElementById("result").innerHTML = "Puntaje:" + result
}