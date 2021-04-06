var operator;
var numbersToWork = [];
var final = 0;
var firstNumber = [];

var allNumberButtons = document.querySelectorAll(".number")
var allOperatorButtons = document.querySelectorAll(".operator")

for (var key of allNumberButtons) {
  key.addEventListener("click", function(event) {
    firstNumber.push(this.innerHTML);
    document.querySelector(".current-text").innerHTML = parseInt(firstNumber.join(""))
  })
}
for (var key2 of allOperatorButtons) {
  key2.addEventListener("click", function(event) {
    if (operator && firstNumber && firstNumber2) {
      if (operator == "+") {
          final = parseInt(firstNumber.join("")) + firstNumber2;
          document.querySelector(".current-text").innerHTML = final;
          document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator + firstNumber + "=";
          firstNumber = [final];
      } else if (operator == "×") {
        final = firstNumber2 * parseInt(firstNumber.join(""));
        document.querySelector(".current-text").innerHTML = final;
        document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator + firstNumber + "=";
        firstNumber = [final];
      } else if(operator == "-") {
        final = firstNumber2 - parseInt(firstNumber.join(""))
        document.querySelector(".current-text").innerHTML = final;
        document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator + firstNumber + "=";
        firstNumber = [final];
      } else if(operator == "÷") {
        final = firstNumber2 / parseInt(firstNumber.join(""))
        document.querySelector(".current-text").innerHTML = final;
        document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator + firstNumber + " " + "=";
        firstNumber = [final];
      }
    }
    operator = this.innerHTML;
    firstNumber2 = parseInt(firstNumber.join(""))
    firstNumber = [];
    var previousText = console.log(firstNumber2 + " " + operator)
    document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator;
  })
}

document.querySelector(".equals").addEventListener("click", function(event) {
  if (operator == "+") {
      final = parseInt(firstNumber.join("")) + firstNumber2;
      document.querySelector(".current-text").innerHTML = final;
      document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator + firstNumber + "=";
      firstNumber = [final];
  } else if (operator == "×") {
    final = firstNumber2 * parseInt(firstNumber.join(""));
    document.querySelector(".current-text").innerHTML = final;
    document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator + firstNumber + "=";
    firstNumber = [final];
  } else if(operator == "-") {
    final = firstNumber2 - parseInt(firstNumber.join(""))
    document.querySelector(".current-text").innerHTML = final;
    document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator + firstNumber + "=";
    firstNumber = [final];
  } else if(operator == "÷") {
    final = firstNumber2 / parseInt(firstNumber.join(""))
    document.querySelector(".current-text").innerHTML = final;
    document.querySelector(".previous-text").innerHTML = firstNumber2 + " " + operator + firstNumber + " " + "=";
    firstNumber = [final];
  }
})

document.querySelector(".clear").addEventListener("click", function(event) {
  location.reload();
})
