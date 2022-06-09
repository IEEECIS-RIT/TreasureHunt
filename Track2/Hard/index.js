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
            <input class="input-button" type="submit" value="Check" />
        </form>
    </center>
</div>
`;

let count1 = 0
let count2 = false

function mySubmitFunction(e) {
  e.preventDefault();
  count1++;
  const inputDiv = document.getElementById("password")
  let data = inputDiv.value;
  const mainDiv = document.querySelector(".clue");
  const hints = document.querySelector("#hints")
  data = data.toUpperCase();
  if (data === "NOAH GLASS") {
    count1 = 0;
    mainDiv.innerHTML = clue2;
  }
  else if (data === 'ODEO'){
    count1 = 0;
    count2 = true
    hints.innerHTML = "You are so close to the password! Maybe the internet has something for you..."
  }else{
    hints.innerHTML = "Try Again"
    inputDiv.value = ""
  }
  if(count1 === 10 && !count2){
    hints.innerHTML = "Windows Password Manager has a hint for you: SANRWICH COOKIE CONSISTING OF TWO WAFEDS WITH A SWEET CDEME FILLING"
  }

}

function myFinalFunction(e) {
  e.preventDefault();
  let data = document.getElementById("company").value;
  const mainDiv = document.querySelector(".clue");
  data = data.toUpperCase();
  if (data === "TWITTER") {
    mainDiv.innerHTML = `<h1>Head over to our official twitter account for your next clue!</h1>`;
  }
}
