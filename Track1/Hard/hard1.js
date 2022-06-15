localStorage.setItem("I have something for you","xbvms")
function submitClue1(e) {
  e.preventDefault();
  a = document.getElementById("ans1").value;
  console.log(a);
  if (a.toLowerCase() == "stain") {
    document.getElementById("response").innerText = "";
    document.getElementById("clue").innerHTML =
      "Your answer was correct!!<br><br>Clue 2: Unscramble STAIN to find X. X has its birthday on 6th October.";
    document.getElementById("hint").innerText = "";
    document.getElementById("clue1").setAttribute("hidden", "true");
    document.getElementById("clue2").removeAttribute("hidden");
  } else if (a.length != 5)
    document.getElementById("response").innerText = "It is a 5 letter word!!";
  else document.getElementById("response").innerText = "Try Again";
}
function submitClue2(e) {
  e.preventDefault();
  a = document.getElementById("ans2").value;
  console.log(a);
  if (a.toLowerCase() == "insta") {
    document.getElementById("clue").innerHTML =
      `Your answer was correct!!
      Clue 3: Go to our official instagram page and search fo the next clue.
      Your famous F.R.I.E.N.D.S. character forgot my name at the altar. Find me and help me.`;
    document.getElementById("clue2").setAttribute("hidden", "true");
    document.getElementById("response").innerText = "";
  } else document.getElementById("response").innerText = "Try Again";
}
