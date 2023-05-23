console.clear()

let num1 = document.getElementById("firstNum")
let num2 = document.getElementById("secondNum")
let resultEl = document.getElementById("result")



function add(){
    let total = parseInt(num1.value) + parseInt(num2.value)
resultEl.textContent =  "Result :" + total
  num1.value= ""
  num2.value= ""

}

function sub(){
    let total = parseInt(num1.value) - parseInt(num2.value)
    resultEl.textContent = "Result :" + total
    num1.value= ""
    num2.value= ""
    }

function mul(){
    let total = parseInt(num1.value) * parseInt(num2.value)
    resultEl.textContent = "Result :" + total
    num1.value= ""
    num2.value= ""
        }


function div(){
    let total = parseInt(num1.value) / parseInt(num2.value)
    resultEl.textContent = "Result :" + total
    num1.value= ""
    num2.value= ""
            }
