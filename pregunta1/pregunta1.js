function fun() {
    const v = document.getElementById('v').value.split(',').map(Number);
    const m = Math.floor(v.length / 2);
    const s = v.length % 2 === 0 ? v[m - 1] + v[m] : v[m];
    document.getElementById('r').innerHTML = 
        '<label for="s">El resultado es:</label><br>' +
        '<input type="number" id="s" value="' + s + '" disabled><br>' +
        '<button onclick="fun2()">Aceptar</button>';
}

function fun2() {
    const s = document.getElementById('s').value;
    document.getElementById('r').innerText = 'El resultado final es: ' + s;
}