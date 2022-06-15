function checkOutout(e) {
  e.preventDefault();
  a = document.getElementById("ans1").value;
  console.log(a);
  a = a.replaceAll(".", "");
  if (a.toLowerCase() == "github") {
    document.getElementById("clue").innerHTML =
      // Clue : https://github.com/divyamJi06/find-question`;
      `Congratulations MR Sherlock. Lets See how you handle the next part. 
        char(104)char(116)char(116)char(112)char(115)char(103)char(105)char(116)char(104)char(117)char(98)char(99)char(111)char(109)char(100)char(105)char(118)char(121)char(97)char(109)char(74)char(105)06/char(102)char(105)char(110)char(100)char(113)char(117)char(101)char(115)char(116)char(105)char(111)char(110)`;
    document.getElementById("clue1").setAttribute("hidden", "true");
    document.getElementById("response").innerText = "";
  } else document.getElementById("response").innerText = "Try Again";
}
