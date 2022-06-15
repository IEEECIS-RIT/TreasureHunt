import './style.css'

var counter = 0;
var db;
var name;

var input = document.getElementById("numInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("guessButton").click();
    }
});

function guessNum() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
    var numIn = 0;
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
}