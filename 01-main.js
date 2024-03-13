function calcTotalResult(test, exam) {
  return test + exam;
}

document.getElementById("button").addEventListener("click", (e) => {
  let result = calcTotalResult(40, 50);

  document.getElementById("demo").innerHTML = result;
});
function calcSubtraction(test, exam) {
  return test - exam;
}
document.getElementById("button1").addEventListener("click", (e) => {
  let result = calcSubtraction(40, 50);

  document.getElementById("subtraction").innerHTML = result;
});
function calcMultplication(test, exam) {
  return test * exam;
}
document.getElementById("button2").addEventListener("click", (e) => {
  let result = calcMultplication(40, 50);

  document.getElementById("multply").innerHTML = result;
});
function calcDivision(test, exam) {
  return test / exam;
}
document.getElementById("button3").addEventListener("click", (e) => {
  let result = calcDivision(40, 50);

  document.getElementById("divide").innerHTML = result;
});
