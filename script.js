const toggleFirst = document.getElementById("toggle_1");
const toggleSecond = document.getElementById("toggle_2");
const toggleThird = document.getElementById("toggle_1");

function handleFirst() {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";

  const allBtn = document.querySelectorAll(
    ".grid-layout, .grid-layout-2, .theme-toggle, .theme-toggle-btn"
  );
  allBtn.forEach((element) => {
    element.style.backgroundColor = "hsl(223, 31%, 20%)";
  });

  document.querySelector(".toggle-point").style.left = "0px";
  document.querySelector(".toggle-point").style.backgroundColor =
    "hsl(6, 63%, 50%)";

  document.querySelector(".result-layout").style.backgroundColor =
    "hsl(224, 36%, 15%)";
  document.querySelector(".result-layout").style.color = "hsl(0, 0%, 100%)";

  const delBtn = document.getElementById("del-btn");
  const resetBtn = document.getElementById("reset-btn");
  delBtn.style.backgroundColor = resetBtn.style.backgroundColor =
    "hsl(225, 21%, 49%)";
  resetBtn.style.boxShadow = delBtn.style.boxShadow =
    "0 4px hsl(224, 28%, 35%)";

  delBtn.onfocus = resetBtn.onfocus = function () {
    this.style.boxShadow =
      "0 3px hsl(222, 29%, 29%), 0px 0px 5px 4px hsl(221, 28%, 38%) inset";
    this.style.backgroundColor = "hsl(225, 21%, 45%)";
  };

  delBtn.onblur = resetBtn.onblur = function () {
    this.style.boxShadow = "0 4px hsl(224, 28%, 35%)";
    this.style.backgroundColor = "hsl(225, 21%, 49%)";
  };

  const resultBtn = document.getElementById("result-btn");
  resultBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  resultBtn.style.color = "hsl(0, 0%, 100%)";
  resultBtn.style.boxShadow = "0 4px hsl(6, 70%, 34%)";

  resultBtn.onmousedown = function () {
    this.style.backgroundColor = "hsl(6, 83%, 45%)";
  };
  resultBtn.onmouseup = function () {
    this.style.backgroundColor = "hsl(6, 63%, 50%)";
  };

  const mainKeys = document.querySelectorAll(".main-key");
  mainKeys.forEach((element) => {
    element.style.backgroundColor = "hsl(30, 25%, 89%)";
    element.style.boxShadow = "0 4px hsl(28, 16%, 65%)";
    element.style.color = "hsl(198, 20%, 13%)";

    element.onfocus = function () {
      this.style.boxShadow =
        "0 3px hsl(0, 0%, 40%), 0px 0px 5px 4px hsl(0, 2%, 66%) inset";
      this.style.backgroundColor = "hsl(30, 25%, 85%)";

      element.onblur = function () {
        this.style.boxShadow = "0 4px hsl(28, 16%, 65%)";
        this.style.backgroundColor = "hsl(30, 25%, 89%)";
      };
    };
  });
}

function handleSecond() {
  document.body.style.backgroundColor = "hsl(185, 42%, 37%)";

  const allBtn = document.querySelectorAll(
    ".grid-layout, .grid-layout-2, .theme-toggle, .theme-toggle-btn"
  );
  allBtn.forEach((element) => {
    element.style.backgroundColor = "hsl(0, 5%, 81%)";
  });

  document.querySelector(".toggle-point").style.left = "23px";
  document.querySelector(".toggle-point").style.backgroundColor =
    "hsl(25, 98%, 40%)";

  document.querySelector(".result-layout").style.backgroundColor =
    "hsl(0, 0%, 93%)";
  document.querySelector(".result-layout").style.color = "hsl(60, 10%, 19%)";

  const delBtn = document.getElementById("del-btn");
  const resetBtn = document.getElementById("reset-btn");
  delBtn.style.backgroundColor = resetBtn.style.backgroundColor =
    "hsl(185, 42%, 37%)";
  resetBtn.style.boxShadow = delBtn.style.boxShadow =
    "0 4px hsl(185, 58%, 25%)";

  delBtn.onfocus = resetBtn.onfocus = function () {
    this.style.boxShadow =
      "0 3px hsl(187, 59%, 19%), 0px 0px 5px 4px hsl(182, 58%, 22%) inset";
    this.style.backgroundColor = "hsl(185, 42%, 33%)";
  };

  delBtn.onblur = resetBtn.onblur = function () {
    this.style.boxShadow = "0 4px hsl(185, 58%, 25%)";
    this.style.backgroundColor = "hsl(185, 42%, 37%)";
  };

  const resultBtn = document.getElementById("result-btn");
  resultBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
  resultBtn.style.color = "hsl(0, 0%, 100%)";
  resultBtn.style.boxShadow = "0 4px hsl(25, 99%, 27%)";

  resultBtn.onmousedown = function () {
    this.style.backgroundColor = "hsl(25, 100%, 35%)";
  };
  resultBtn.onmouseup = function () {
    this.style.backgroundColor = "hsl(25, 98%, 40%)";
  };

  const mainKeys = document.querySelectorAll(".main-key");
  mainKeys.forEach((element) => {
    element.style.backgroundColor = "hsl(45, 7%, 89%)";
    element.style.boxShadow = "0 4px hsl(35, 11%, 61%)";
    element.style.color = "hsl(60, 10%, 19%)";

    element.onfocus = function () {
      this.style.boxShadow =
        "0 3px hsl(15, 7%, 50%), 0px 0px 5px 4px hsl(0, 2%, 76%) inset";
      this.style.backgroundColor = "hsl(40, 7%, 85%)";

      element.onblur = function () {
        this.style.boxShadow = "0 4px hsl(35, 11%, 61%)";
        this.style.backgroundColor = "hsl(45, 7%, 89%)";
      };
    };
  });
}

function handleThird() {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";

  const allBtn = document.querySelectorAll(
    ".grid-layout-2, .grid-layout, .theme-toggle, .theme-toggle-btn"
  );
  allBtn.forEach((element) => {
    element.style.backgroundColor = "hsl(268, 71%, 12%)";
  });

  document.querySelector(".toggle-point").style.left = "45px";
  document.querySelector(".toggle-point").style.backgroundColor =
    "hsl(176, 100%, 44%)";

  document.querySelector(".result-layout").style.backgroundColor =
    "hsl(268, 71%, 12%)";
  document.querySelector(".result-layout").style.color = "hsl(52, 100%, 62%)";

  const delBtn = document.getElementById("del-btn");
  const resetBtn = document.getElementById("reset-btn");
  delBtn.style.backgroundColor = resetBtn.style.backgroundColor =
    "hsl(281, 89%, 26%)";
  resetBtn.style.boxShadow = delBtn.style.boxShadow =
    "0 4px hsl(290, 70%, 36%)";

  delBtn.onfocus = resetBtn.onfocus = function () {
    this.style.boxShadow =
      "0 3px hsl(288, 69%, 30%), 0px 0px 5px 4px hsl(278, 70%, 39%) inset";
    this.style.backgroundColor = "hsl(281, 89%, 22%)";
  };

  delBtn.onblur = resetBtn.onblur = function () {
    this.style.boxShadow = "0 4px hsl(290, 70%, 36%)";
    this.style.backgroundColor = "hsl(281, 89%, 26%)";
  };

  const resultBtn = document.getElementById("result-btn");
  resultBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
  resultBtn.style.color = " hsl(198, 20%, 13%)";
  resultBtn.style.boxShadow = "0 4px hsl(177, 92%, 70%)";

  resultBtn.onmousedown = function () {
    this.style.backgroundColor = "hsl(176, 100%, 37%)";
  };
  resultBtn.onmouseup = function () {
    this.style.backgroundColor = "hsl(176, 100%, 44%)";
  };

  const mainKeys = document.querySelectorAll(".main-key");
  mainKeys.forEach((element) => {
    element.style.backgroundColor = "hsl(268, 47%, 21%)";
    element.style.boxShadow = "0 4px hsl(290, 70%, 36%)";
    element.style.color = "hsl(52, 100%, 62%)";

    element.onfocus = function () {
      this.style.boxShadow =
        "0 3px hsl(268, 56%, 17%), 0px 0px 5px 4px hsl(262, 56%, 37%) inset";
      this.style.backgroundColor = "hsl(268, 47%, 17%)";

      element.onblur = function () {
        this.style.boxShadow = "0 4px hsl(290, 70%, 36%)";
        this.style.backgroundColor = "hsl(268, 47%, 21%)";
      };
    };
  });
}

function handleCalculatorBtn(obj) {
  var snd = new Audio("sounds/click-btn.mp3");
  snd.play();

  const resultDiv = document.querySelector(".result");
  let operand = resultDiv.textContent === "0" ? "" : resultDiv.textContent;

  switch (obj.value) {
    case "0":
      operand += obj.value;
      break;
    case "1":
      operand += obj.value;

      break;
    case "2":
      operand += obj.value;

      break;
    case "3":
      operand += obj.value;

      break;
    case "4":
      operand += obj.value;

      break;
    case "5":
      operand += obj.value;

      break;
    case "6":
      operand += obj.value;

      break;
    case "7":
      operand += obj.value;

      break;
    case "8":
      operand += obj.value;

      break;
    case "9":
      operand += obj.value;

      break;
    case "+":
      operand += " " + obj.value + " ";

      break;
    case "-":
      operand += " " + obj.value + " ";

      break;
    case ",":
      operand += obj.value;

      break;
    case "/":
      operand += " " + obj.value + " ";

      break;
    case "*":
      operand += " " + obj.value + " ";

      break;
    case "DEL":
      // TODO: delete last number
      console.log(operand);

      break;
    case "RESET":
      operand = 0;
      break;
    case "=":
      // TODO: eval function isn't safety. change it!
      console.log(operand);
      operand = operand.replace(/,/g, ".");
      operand = eval(operand);
      operand = operand.toString().replace(/\./g, ",");

      break;
    default:
      console.log(`Sorry, we are out of ${obj}.`);
  }

  resultDiv.textContent = operand;
}
