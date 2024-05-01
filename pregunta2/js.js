function calcular(){
    let result=0
    let p1 = document.getElementsByName("p1")
    p1.forEach(element => {
        if(element.checked==true){
            result=result+Number(element.value)
            
            
        }else{
            result +=0
        }
    });
    
    document.getElementById("result").innerHTML="Puntaje.:"+result


    }