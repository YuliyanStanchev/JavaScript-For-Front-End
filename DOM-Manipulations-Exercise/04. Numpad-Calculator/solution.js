function solve() {

  let buttons = document.querySelectorAll("div.keys > button")
  let expressionElement = document.querySelector("div.top > #expressionOutput")
  let resultElement = document.querySelector("div.top > #resultOutput")
  let clearBtn = document.querySelector("div.top > button")
  let isTrue = false


  Array.from(buttons).forEach(btn => {
      btn.addEventListener("click", () => {
          if (btn.textContent == "x" || btn.textContent == "/" || btn.textContent == "-" || btn.textContent == "+" || btn.textContent == ".") {

              expressionElement.textContent += " " + btn.textContent + " "
          } else if (btn.textContent !== "=") {
              expressionElement.textContent += btn.textContent
          }

          let pattern = /[0-9]+\s\D\s[0-9]+/g

          if (expressionElement.textContent.match(pattern)) {
              isTrue = true
          } else {
              isTrue = false
          }

          if (btn.textContent === "=") {
              if (isTrue) {

                  let splitted = expressionElement.textContent.split(" ")
                  let a = +splitted[0]
                  let operator = splitted[1]
                  let b = +splitted[2]
                  let result;

                  switch (operator) {
                      case "x":
                          result = a * b
                          break;
                      case "/":
                          result = a / b
                          break;
                      case "+":
                          result = a + b
                          break;
                      case "-":
                          result = a - b
                          break;
                      case ".":
                          result = `${a}.${b}`
                          break;

                      default:
                          break;
                  }
                  resultElement.textContent = result
                  // expressionElement.textContent = ""

              }else{
                  resultElement.textContent = NaN
              }
          }

      })
  })

  clearBtn.addEventListener("click", () => {
      expressionElement.textContent = ""
      resultElement.textContent = ""
  })
}