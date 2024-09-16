function calcular() {
    let result = 0;

    let p1 = document.querySelector("input[name='p1']:checked");
    if (p1) {
        result += Number(p1.value);
    }

    let p2 = document.querySelector("input[type='text']").value.trim().toLowerCase();
    if (p2 === "diablo") {
        result += 5;
    }

    let capital = document.getElementById("capital").value;
    result += Number(capital);

    let color1 = document.getElementById("color1").checked;
    let color2 = document.getElementById("color2").checked;
    let color3 = document.getElementById("color3").checked;
    let color4 = document.getElementById("color4").checked;

    if (!color2 && !color3 && color1 && color4) {
        result += 5;
    }

    let p5 = document.querySelector("input[name='p12']:checked");
    if (p5) {
        result += Number(p5.value);
    }
    
    let raiz = document.getElementById("respuesta").value.trim().toLowerCase();
    if (raiz === "4" || raiz === "cuatro") {
        result += 5;
    }
    
    let respuestas = document.getElementsByName("respuesta");
    respuestas.forEach(respuesta => {
        if (respuesta.checked && respuesta.value === "yuri gagarin") {
            result += 5;
        }
    });
    
    let p8 = document.querySelector("input[name='p8']:checked");
    if (p8) {
        result += Number(p8.value);
    }

    let p9 = document.querySelector("input[name='p9']:checked");
    if (p9) {
        result += Number(p9.value);
    }

    let p10 = document.querySelector("input[name='p10']:checked");
    if (p10) {
       result += Number(p10.value);
    }

    document.getElementById("result").innerHTML = "Puntaje: " + result;
}