function calcular(){
    let result =0
    let p1=document.getElementsByName("p1")
    p1.forEach(element => {
        if(element.checked == true)
         result=result+ Number(element.value)
        
    });
    let p2=document.getElementById("p2").value
    if(p2=="diablo"){
        result=result+5;
    }
    let P3=document.getElementById("P3").value
    if(P3=="97"){
        result=result+5;
    }

    let p4=document.getElementById("p4").value
    if(p4=="opcion_correcta"){
        result=result+5;
    }

    let p5=document.getElementsByName("p5")
    p5.forEach(element => {
        if(element.checked == true)
         result=result+ Number(element.value)
        
    });

    let p6=document.getElementById("p6")
    if(p6=="08/03/2024"){
        result=result+5;
    }

    let p7=document.getElementsByName("p7")
    p7.forEach(element => {
        if(element.checked == true)
         result=result+ Number(element.value)
        
    });


    let p8=document.getElementsByName("p8")
    p8.forEach(element => {
        if(element.checked == true)
         result=result+ Number(element.value)
        
    });
    let p9=document.getElementsByName("p9")
    p9.forEach(element => {
        if(element.checked == true)
         result=result+ Number(element.value)
        
    });
    let p10=document.getElementsByName("p10")
    p10.forEach(element => {
        if(element.checked == true)
         result=result+ Number(element.value)
        
    });


    
    document.getElementById("result").innerHTML="puntaje.:"+result
    
}
//hacer un cuetionario de 10 preguntas que se utilice tosos los controles de formulario
