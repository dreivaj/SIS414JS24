
 
  
function puntajeX() {
    

    let  p1=0;
    
    if (document.getElementById('correcta1').checked==true && document.getElementById('correcta2').checked==true) {p1=100}
    
    else if(document.getElementById('correcta1').checked==true && document.getElementById('correcta2').checked==false) {p1=50}
    
    else if (document.getElementById('correcta1').checked==false && document.getElementById('correcta2').checked==true) {p1=50}
    
    else {p1=0}
    
    
        
   // alert(" obtuviste " + p1 + " untos");
    document.getElementById("result").innerHTML="puntaje.:"+p1
    }
   // document.getElementById("puntajegeneral").onclick = function (){
    //    puntajeX();
   // }
    

