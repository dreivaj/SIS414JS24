let contador = 0
function addRows(){
  const bodyTable = document.getElementById("bodyTable")
  contador++
  const newRow = `<tr>
                  <td>${contador}</td>
                  <td>fulanito</td>
                  <td>Alimaña</td>
                  <td>5145424</td>
                  </tr>`
  bodyTable.innerHTML += newRow
}