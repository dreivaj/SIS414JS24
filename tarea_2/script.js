function Calcular() {
    let result = 0;
    let p1 = document.getElementsByName("p1");
    p1.forEach(element => {
        if (element.checked) {
            result += Number(element.value);
        }
    });

    let p2 = document.getElementById("p2").value;
    if (p2.toLowerCase() === "diablo") {
        result += 5;
    }

    let capital = document.getElementById("capital").value;
    if (capital === "Sucre") {
        result += 5;
    }

    let c1 = document.getElementById("c1").checked;
    let c2 = document.getElementById("c2").checked;
    let c3 = document.getElementById("c3").checked;
    let c4 = document.getElementById("c4").checked;

    if (c1) {
        result += 5;
    }

    let pacifico = document.getElementById("pacifico").checked;
    if (pacifico) {
        result += 5;
    }

    let planeta = document.getElementById("planeta").value;
    if (planeta === "Júpiter") {
        result += 5;
    }

    let p7 = document.getElementsByName("p7");
    p7.forEach(element => {
        if (element.checked) {
            result += Number(element.value);
        }
    });
    let p8 = document.getElementsByName("p8");
    p8.forEach(element => {
        if (element.checked) {
            result += Number(element.value);
        }
    });
    let p9 = document.getElementsByName("p9");
    p9.forEach(element => {
        if (element.checked) {
            result += Number(element.value);
        }
    });
    let p10 = document.getElementsByName("p10");
    p10.forEach(element => {
        if (element.checked) {
            result += Number(element.value);
        }
    });
    document.getElementById("result").innerHTML = "Puntaje: " + result;
}