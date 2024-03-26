function custom(suma, Andiv){
    return suma/ndiv
}
function suma(a, b){
    return a+b
}
let f = function (a, b){return a+b} 
let f1 =(a+b)  => {return a+b}

let result=  custom(f1(7,9),2)
let result = custom(f1, 2)
console.log("Result f: ", f(7, 9))
console.log("Result f1: ", f1(7, 9))
console.log("Result: ", result)
let array =  [8, 9, 4, 5, 6, 1]
array.forEach(item => {
    console.log(item)
})
// let btn = document.getElementById("btn")
let = document.querySelectorAll(".btn")
btns.forEach(btn =>{
    btn.addbtnEventListener("click", ()=>{
        let varA = Number(document.getElementById("a").value)
        let varB = Number(document.getElementById("b").value)
        let result  = varA + varB
        alert("Result "+ result)
    })
}) 
let  persona = [
    {
        nombre: "Lis",
        apellido: "Cuenca",
        edad: "20",
        nombreCompleto: function (){
            return this.nombre + " "+ this.apellido
        }
    },
    {
        nombre: "Ales",
        apellido: "Michel",
        edad: "21",
        nombreCompleto: function (){
            return this.nombre + " "+ this.apellido
        }
    }
]
//console.log(persona.nombreCompleto)
personas.forEach(persona =>
    console.log(personas))
    }
}