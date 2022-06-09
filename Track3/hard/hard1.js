const clue2 = `
<div id = "clue2">
        <img src = "./Images/1.jpg">
        <p>Sanjay Singhania recently joined Stack Overflow. Your next clue is hidden in his Stack Overflow profile. But because of his short term memory loss problem, he has forgotten his Stack Overflow Display Name. All he remembers is this meme template below -</p>
        <img src = "./Images/2.jpg">
        <p>Can YOU help him remember his username???</p>
    <form id="clue2-form" onsubmit="submitClue2(event)">
      <input type="text" id="ans2" />
      <input type="submit" value="Check" />
    </form>
  
</div>
`;

function submitClue1(e) {
    e.preventDefault();
    a = document.getElementById("ans1").value;
    console.log(a);
    if (a.toLowerCase() == "stack overflow" || a.toLowerCase == "stackoverflow") {
      document.getElementById("response").innerText = "";
      document.getElementById("clue").innerHTML =
        "Your answer was correct!!<br><br>Here's your next clue.";
      //document.getElementById("hint").innerText = "";
      document.getElementById("hint").innerHTML = clue2;
    } 
    else document.getElementById("response").innerText = "Try Again";
  }
  function submitClue2(e) {
    e.preventDefault();
    a = document.getElementById("ans2").value;
    console.log(a);
    if (a.toLowerCase() == "engineer") {
      document.getElementById("clue").innerHTML =
        "Your answer was correct!!<br><br>Clue 3: Go to our Sanjay Singhania's Stack Overflow Profile and search fo the next clue.";
      document.getElementById("clue2").setAttribute("hidden", "true");
      document.getElementById("response").innerText = "";
    } else document.getElementById("response").innerText = "Try Again";
  }