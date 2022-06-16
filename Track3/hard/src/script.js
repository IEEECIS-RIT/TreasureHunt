import "./style.css";

window.onbeforeunload = function() {
    return "All progress will be lost if you leave!";
};

window.onload = function() {
    document.onkeydown = function(e) {
        return (e.which || e.keyCode) != 116;
    };
};

const clue2 = `
<div id = "clue2">
        <img src = "https://i.ibb.co/yR5KbwP/1.jpg">
        <p>Sanjay Singhania recently joined Stack Overflow. Your next clue is hidden in his Stack Overflow profile. But because of his short term memory loss problem, he has forgotten his Stack Overflow Display Name. All he remembers is seeing these three people and there's something common in all three of them.-</p>
        <div id = "container">
        <img src = "https://i.ibb.co/4gkYCg1/2.jpg"width = "20%">
        <img src = "https://i.ibb.co/mJMZ4yy/image.png"width = "20%">
        <img src = "https://i.ibb.co/vHxwRqR/4.jpg"width = "20%">
        </div>
        <p>Connect the dots. </p>
    <form id="clue2-form">
      <input type="text" id="ans2" />
      <input type="submit" value="Check" id="input2" />
    </form>
  
</div>
`;
const clue4 = "Your answer was correct!!<br><br>Clue 3: Go to Sanjay Singhania's Stack Overflow Profile and search fo the next clue. <h6>Don't bully him guys, he's new there.</h6>";

const submitClue1 = (e) => {
    e.preventDefault();
    let a = document.getElementById("ans1").value;
    console.log(a);
    if (a.toLowerCase() == "stack overflow" || a.toLowerCase == "stackoverflow") {
        document.getElementById("response").innerText = "";
        document.getElementById("clue").innerHTML =
            "Your answer was correct!!<br><br>Here's your next clue.";
        //document.getElementById("hint").innerText = "";
        document.getElementById("hint").innerHTML = clue2;
        document.getElementById("input2").addEventListener("click", submitClue2);
    } else {
        document.getElementById("response").innerText = "Try Again";
    }
};

const submitClue2 = (e) => {
    e.preventDefault();
    let a = document.getElementById("ans2").value;
    console.log(a);
    if (a.toLowerCase() == "engineer" || a.toLowerCase() == "engineers") {
        document.getElementById("clue").innerHTML = clue4;
        document.getElementById("clue2").setAttribute("hidden", "true");
        document.getElementById("response").innerText = "";
    } else if (a.toLowerCase() == "engineering") {
        document.getElementById("response").innerText = "YOU are very close.";
    } else document.getElementById("response").innerText = "Try Again";
};

document.getElementById("input1").addEventListener("click", submitClue1);