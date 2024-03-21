function calc() {
  let firstNumber = parseInt(document.getElementById("firstNumber").value);
  let secondNumber = parseInt(document.getElementById("secondNumber").value);
  let operator = document.getElementById("operate").value;

  if (operator === "ADD") {
    document.getElementById("demo").innerHTML = firstNumber + secondNumber;
  }
  if (operator === "SUBTRACT") {
    document.getElementById("demo").innerHTML = firstNumber - secondNumber;
  }
  if (operator === "MULTIPLY") {
    document.getElementById("demo").innerHTML = firstNumber * secondNumber;
  }
  if (operator === "DIVIDE") {
    document.getElementById("demo").innerHTML = firstNumber / secondNumber;
  }
}
// function calcTotalResult(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// document.getElementById("button").addEventListener("click", (e) => {
//   let result = calcTotalResult(firstNumber, socondNumber);

//   document.getElementById("demo").innerHTML = result;
// });
// function calcSubtraction(test, exam) {
//   return test - exam;
// }
// document.getElementById("button1").addEventListener("click", (e) => {
//   let result = calcSubtraction(40, 50);

//   document.getElementById("demo").innerHTML = result;
// });
// function calcMultplication(test, exam) {
//   return test * exam;
// }
// document.getElementById("button2").addEventListener("click", (e) => {
//   let result = calcMultplication(40, 50);

//   document.getElementById("multply").innerHTML = result;
// });
// function calcDivision(test, exam) {
//   return test / exam;
// }
// document.getElementById("button3").addEventListener("click", (e) => {
//   let result = calcDivision(40, 50);

//   document.getElementById("divide").innerHTML = result;
// });
