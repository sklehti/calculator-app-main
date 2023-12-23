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
