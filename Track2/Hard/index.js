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

function mySubmitFunction(e) {
  e.preventDefault();
  let data = document.getElementById("password").value;
  const mainDiv = document.querySelector(".clue");
  data = data.toUpperCase();
  if (data === "NOAH GLASS") {
    mainDiv.innerHTML = clue2;
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
