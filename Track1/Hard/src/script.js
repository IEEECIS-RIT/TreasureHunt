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
<center>
    <h2 class="clue1-title">
        Your answer was correct!!
        Clue 2: Go to our official instagram page and search fo the next clue.
        Your famous F.R.I.E.N.D.S. character forgot my name at the altar. 
        Find me and help me.
          <br />
         Fine the account and get your next clue!!
    </h1>
</center>
`;

const clue1_submit = document.querySelector("#clue1-submit");
let count = 0;

clue1_submit.addEventListener("click", (event) => {
  event.preventDefault();
  const ans = document.querySelector("#ans1").value;
  const hint1 = document.querySelector("#hint1");
  if (ans.toUpperCase() === "INSTAGRAM") {
    document.querySelector(".clue").innerHTML = clue2;
  } else {
    count++;
    hint1.innerHTML = `Try again...`;
  }

  if (count >= 8) {
    hint1.innerHTML = `Maybe look inside the page source for a clue &#128064`;
  }
  document.querySelector("#ans1").value = "";
});
