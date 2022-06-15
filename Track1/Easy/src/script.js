import "./style.css";

window.onbeforeunload = function () {
  return "All progress will be lost if you leave!";
};

window.onload = function () {
  document.onkeydown = function (e) {
    return (e.which || e.keyCode) != 116;
  };
};

let counter = 0;
let db;
let name;

var input = document.getElementById("numInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("guessButton").click();
  }
});

const getInput = () => {
  counter++;
  document.getElementById("counter").innerHTML = counter;
  let numIn = 0;
  numIn = document.getElementById("numInput").value;
  if (numIn > 786) {
    console.log("Lower");
  } else if (numIn < 786) {
    console.log("Higher");
  } else if (numIn == 786) {
    document.getElementById("theGuessing").style.display = "none";
    console.log("shorturl.at/kCDP3");
  }
  document.getElementById("numInput").value = "";
};

const inputBtn = document.querySelector("#guessButton");
inputBtn.addEventListener("click", getInput);
