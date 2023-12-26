const toggleFirst = document.getElementById("toggle_1");
const toggleSecond = document.getElementById("toggle_2");
const toggleThird = document.getElementById("toggle_1");

function handleFirst() {
  console.log("test1");
  document.querySelector(".toggle-point").style.left = "0px";
  document.querySelector(".toggle-point").style.backgroundColor =
    "hsl(6, 63%, 50%)";
}

function handleSecond() {
  console.log("test2");
  document.querySelector(".toggle-point").style.left = "23px";
  document.querySelector(".toggle-point").style.backgroundColor =
    "hsl(25, 98%, 40%)";
}

function handleThird() {
  console.log("test3");
  document.querySelector(".toggle-point").style.left = "45px";
  document.querySelector(".toggle-point").style.backgroundColor =
    "hsl(176, 100%, 44%)";
}

// TODO:
function handleCalculatorBtn(obj) {
  var snd = new Audio("sounds/click-btn.mp3");
  snd.play();

  const resultDiv = document.querySelector(".result");
  let result = resultDiv.textContent === "0" ? "" : resultDiv.textContent;
  console.log(result, "result");

  switch (obj.value) {
    case "0":
      console.log("test", obj.value);
      result += obj.value;

      break;
    case "1":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "2":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "3":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "4":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "5":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "6":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "7":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "8":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "9":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "+":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "-":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case ".":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "/":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "*":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "DEL":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "RESET":
      console.log("test", obj.value);
      result += obj.value;
      break;
    case "=":
      console.log("test", obj.value);
      result += obj.value;
      break;
    default:
      console.log(`Sorry, we are out of ${obj}.`);
  }

  resultDiv.textContent = result;
}

// poista loput!!!!
const test = `
    <div  class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Your Name Here</a>.
    </div>`;

document.getElementById("start").innerHTML = test;
