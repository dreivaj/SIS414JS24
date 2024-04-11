const submit = document.getElementById('submit')
let fieldAns = ["06/08/1825", "ESTADO PLURINACIONAL DE BOLIVIA", "SAJAMA", "5", "LIDIA GUEILER TEJEDA", "VICTOR PAZ ESTENSORO"]
let total = 0

function ans1() {
    const q1 = document.getElementsByName('q1')
    if (q1[0].checked == true) {
        total += 10;
    }
}
function ans2() {
    const q2 = document.getElementById('q2').value
    if (q2 === fieldAns[0]) {
        total += 10;
    }
}
function ans3() {
    let q3 = document.getElementById('q3').value.toUpperCase()
    if (q3 == fieldAns[1]) {
        total += 10;
    }
}
function ans4() {
    let q4 = document.getElementsByName('q4')
    if (q4[1].checked == true) {
        total += 10;
    }
}
function ans5() {
    let q5 = document.getElementsByName('q5')
    if (q5[1].checked == true && q5[2].checked == true) {
        total += 10;
    }
}
function ans6() {
    let q6 = document.getElementById('q6').value.toUpperCase()
    if (q6 == fieldAns[2]) {
        total += 10;
    }
}
function ans7() {
    let q7 = document.getElementById('q7').value
    if (q7 == fieldAns[3]) {
        total += 10;
    }
}
function ans8() {
    const q8 = document.getElementsByName('q8')
    if (q8[2].checked == true) {
        total += 10;
    }
}
function ans9() {
    let q9 = document.getElementById('q9').value.toUpperCase()
    if (q9 == fieldAns[4]) {
        total += 10;
    }
}
function ans10() {
    let q10 = document.getElementById('q10').value.toUpperCase()
    if (q10 == fieldAns[5]) {
        total += 10;
    }
}

submit.addEventListener('click', () => {
    const names = document.getElementById('name-field').value
    ans1()
    ans2()
    ans3()
    ans4()
    ans5()
    ans6()
    ans7()
    ans8()
    ans9()
    ans10()
    alert(`Hola ${names}, tu puntuación es:\n${total} / 100`)
});