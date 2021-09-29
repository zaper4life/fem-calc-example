let action = false;
let first = false;
let trigger = false;
let num1 = 0;
let cal;

const screen = document.querySelector(".screen-result");

function init() {
  document
    .querySelector(".buttons")
    .addEventListener("click", function (event) {
      const input = event.target.innerText;
      if(screen.innerText.length>11){
          alert("Number out of bonds")
          screen.innerText = screen.innerText.slice(0, -1);
      }else if (
        input === "+" ||
        input === "×" ||
        input === "÷" ||
        input === "-" ||
        input === "="
      ) {
        if (action) {
          if (trigger) {
            alert("please insert a number");
          } else {
            screen.innerText = calc(num1, parseInt(screen.innerText), cal);
            num1 = parseInt(screen.innerText);
            if (input !== "=") cal = event.target.innerText;
            first=true
            trigger=true
          }
        } else {
          num1 = parseInt(screen.innerText);
          cal = event.target.innerText;
          first = true;
          action = true;
          trigger=true
        }

      } else if (input === "C") {
        screen.innerText = 0;
        num1 = 0;
        action = false;
    
      } else if (input === "←") {
        if (screen.innerText === "0"){
            alert("You can't delete nothing");
        }else{
            screen.innerText = screen.innerText.slice(0, -1);
            if(screen.innerText==="")screen.innerText ="0"
        }

      } else {
        if (screen.innerText === "0" || first) {
          screen.innerText = "";
          first = false;
        }
        screen.innerText += event.target.innerText;
        trigger=false
      }
    });
}

function calc(num1, num2, action) {
  let answer;
  switch (action) {
    case "+":
      answer = num1 + num2;
      break;

    case "×":
      answer = num1 * num2;
      break;

    case "÷":
      answer = num1 / num2;
      break;

    case "-":
      answer = num1 - num2;
      break;
  }
  if(answer.toString().length>11){
        answer = answer.toString().substring(0,11)
  }
  return answer;
}

init();
