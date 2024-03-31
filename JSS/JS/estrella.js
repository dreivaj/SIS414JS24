function calcular(){
    let result=0
    let p1 = document.getElementsByName("p1")
    p1.forEach(element => {
        if(element.checked==true){
            result=result+Number(element.value)
        }
    });
 
    let p5 = document.getElementsByName("p5")
    p5.forEach(element => {
        if(element.checked==true){
            result=result+Number(element.value)
        }
    });
    let p2=document.getElementById("p2").value
    if(p2=="diablo"){
        result=result+5
    }
    let p4 = document.getElementsByName("p4")
    p4.forEach(element => {
        if(element.checked==true){
            result=result+Number(element.value)
        }
    });
    let p3=document.getElementById("p3").value
    if(p3=="sucre"){
        result=result+5
    }
   
    let p6 = document.getElementsByName("p6")
    p6.forEach(element => {
        if(element.checked==true){
            result=result+Number(element.value)
        }
    });
    let p7 = document.getElementsByName("p7")
    p7.forEach(element => {
        if(element.checked==true){
            result=result+Number(element.value)
        }
    
        
    });
    let p8=document.getElementById("p8").value
    if(p8=="8"){
        result=result+5
    }
    let p9 = document.getElementsByName("p9")
    p9.forEach(element => {
        if(element.checked==true){
            result=result+Number(element.value)
        }
    });
    let p10 = document.getElementsByName("p10")
    p10.forEach(element => {
        if(element.checked==true){
            result=result+Number(element.value)
        }
    });

    document.getElementById("result").innerHTML="Puntaje.:"+result

    
}