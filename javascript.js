let display1 = document.querySelector(".display");
let buttons = document.getElementsByClassName("number");
let operations = document.getElementsByClassName("operation");
let currentButton, nextButton;
let firstPoint, nextPoint;
let nextNumberAfterResutl
//numbers
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", function (number) {
    if (nextNumberAfterResutl === true) {
      display1.innerHTML = number.target.innerHTML;
     nextNumberAfterResutl = false;
      return;
    }
    display1.innerHTML = display1.innerHTML + number.target.innerHTML;
    nextButton = false;
  });
});
//operations
Array.from(operations).forEach((element) => {
  element.addEventListener("click", function (event) {
    nextNumberAfterResutl = false;
    nextPoint = false;
    currentButton = event.target.innerText;
    if (currentButton === "+" && nextButton) {
      return;
    } else if (currentButton === "*" && nextButton) {
      return;
    } else if (currentButton === "/" && nextButton) {
      return;
    } else if (currentButton === "-" && nextButton) {
      return;
    }
    if (currentButton === "+") {
      nextButton = true;
    } else if (currentButton === "*") {
      nextButton = true;
    } else if (currentButton === "/") {
      nextButton = true;
    } else if (currentButton === "-") {
      nextButton = true;
    }
    display1.innerHTML = display1.innerHTML + event.target.innerHTML;
  });
});
//decimalPointCondition
document.querySelector(".decimalPoint") .addEventListener("click", function (_dot) {
    firstPoint = _dot.target.innerText;
    if (firstPoint === "." && nextPoint) {
      return;
    }
    if (firstPoint === ".") {
      nextPoint = true;
    }
    display1.innerHTML = display1.innerHTML + _dot.target.innerHTML;
  });
//equalsymbol
document.querySelector(".equality").addEventListener("click", function (_event) {
    display1.innerHTML = eval(display1.innerText);
    nextNumberAfterResutl = true;
    nextPoint = false;
  });

//clear
document.querySelector(".clear").addEventListener("click", function (_event) {
    let x=_event.target.innerText;
  if (x==="c"){display1.innerHTML = " ";}else{return;}
  nextPoint=false;
  });

