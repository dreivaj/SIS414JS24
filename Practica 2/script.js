function calcular(){
    let result = 0

    let p1 = document.getElementsByName("p1")
    p1.forEach(element => {
        if(element.checked == true){
            result = result + Number(element.value)
        }
    })

    let p2 = document.getElementById("p2").value
    if(p2 == "diablo"){
        result = result + 5
    }

    let seleccion3 = document.getElementById("p3")
    let p3 = seleccion3.value
    if(p3 == "Sucre"){
        result = result + 5
    }
    
    let p41 = document.getElementById("p41").checked
    let p42 = document.getElementById("p42").checked
    let p43 = document.getElementById("p43").checked
    let p44 = document.getElementById("p44").checked
    if(p41 == true & p42 == false & p43 == false & p44 ==true){
        result = result + 5
    }

    let p5 = document.getElementsByName("p5")
    p5.forEach(element => {
        if(element.checked == true){
            result = result + Number(element.value)
        }
    })

    let seleccion6 = document.getElementById("p6")
    let p6 = seleccion6.value
    if(p6 == "1945"){
        result = result + 5
    }

    let p71 = document.getElementById("p71").checked
    let p72 = document.getElementById("p72").checked
    let p73 = document.getElementById("p73").checked
    let p74 = document.getElementById("p74").checked
    if(p71 == true & p72 == true & p73 == false & p74 ==false){
        result = result + 5
    }

    let p8 = document.getElementById("p8").value
    if(p8 == "azul"){
        result = result + 5
    }

    let p9 = document.getElementsByName("p9")
    p9.forEach(element => {
        if(element.checked == true){
            result = result + Number(element.value)
        }
    })

    let seleccion10 = document.getElementById("p10")
    let p10 = seleccion10.value
    console.log(p10)
    if(p10 == "Mercurio"){
        result = result + 5
    }

    document.getElementById("result").innerHTML = "Puntaje: " + result
}