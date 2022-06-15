import "./style.css";

window.onbeforeunload = function () {
  return "All progress will be lost if you leave!";
};

window.onload = function () {
  document.onkeydown = function (e) {
    return (e.which || e.keyCode) != 116;
  };
};


const clue2 = `
<div class="clue">
        <center>
            <h3>
                Noah Glass, the guy who came up with one of the world's most famous company names, was ousted long ago.
            </h3>
            <form onsubmit="return myFinalFunction(event)">
            <label class="input-title">Identify the company:</label>
            <input
                class="input-field"
                type="text"
                name="company"
                id="company"
                autofocus
            />
            <input id="input2" class="input-button" type="submit" value="Check" />
        </form>
    </center>
</div>
`;

const clue3 = `
<div class="clue">
        <center>
        <img class="main-image" src="https://i.ibb.co/CMs4z7t/qrcode.png" />
    </center>
</div>
`;

let count1 = 0;
let count2 = false;

const clue1Submit = (e) => {
  e.preventDefault();
  console.log("1");
  count1++;
  const inputDiv = document.getElementById("password");
  let data = inputDiv.value;
  const mainDiv = document.querySelector(".clue");
  const hints = document.querySelector("#hints");
  data = data.toUpperCase();
  if (data === "NOAH GLASS") {
    count1 = 0;
    mainDiv.innerHTML = clue2;
    inp1.id = "input2";
    document.querySelector("#input2").addEventListener("click", clue2Submit);
  } else if (data === "ODEO") {
    count1 = 0;
    count2 = true;
    hints.innerHTML =
      "You are so close to the password! Maybe the internet has something for you...";
  } else {
    hints.innerHTML = "Try Again";
    inputDiv.value = "";
  }
  if (count1 >= 10 && !count2) {
    hints.innerHTML =
      "Windows Password Manager has a hint for you: SANRWICH COOKIE CONSISTING OF TWO WAFEDS WITH A SWEET CDEME FILLING";
  } else if (count1 >= 5 && !count2) {
    hints.innerHTML =
      "Lil Nas really doesnt want to lose his data! He has sent you an audio clip that should help you.";
    document.querySelector(".hint1").style.display = "block";
  }
};

const clue2Submit = (e) => {
  e.preventDefault();
  console.log("2");
  let data = document.getElementById("company").value;
  const mainDiv = document.querySelector(".clue");
  data = data.toUpperCase();
  if (data === "TWITTER") {
    mainDiv.innerHTML = clue3;
  }
};

const inp1 = document.querySelector("#input1");

inp1.addEventListener("click", clue1Submit);
