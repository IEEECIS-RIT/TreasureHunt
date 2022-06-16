function submitClue2(e) {
    e.preventDefault();
    a = document.getElementById("password").value;
    console.log(a);
    //  TODO : Change password to real password later on
    password = "insta"
    if (a.toLowerCase() == password) {
      document.getElementById("clue").innerHTML =
        `Your answer was correct!!
        Clue 3: Go to our official instagram page and search fo the next clue.
        Your famous F.R.I.E.N.D.S. character forgot my name at the altar. Find me and help me.`;
      document.getElementById("clue2").setAttribute("hidden", "true");
      document.getElementById("response").innerText = "";
    } else document.getElementById("response").innerText = "Try Again";
  }
  