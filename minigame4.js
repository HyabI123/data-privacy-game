// JavaScript code for minigame4
let roundNumber = 0;

function safeLink(roundNumber) {
  document.getElementById("textStatus").innerHTML = "Great job!";
  document.getElementById("round1").style.display = "none";
  document.getElementById("round2").style.display = "none";
  document.getElementById("round3").style.display = "none";

  if (roundNumber) {
    //if the user answers correctly, the next round displays
    document.getElementById("round" + roundNumber).style.display = "block";
  } else {
    //no more rounds
    document.getElementById("finalBoss").style.display = "block";
    document.getElementById("textStatus").style.display = "none";
    document.getElementById("objective").style.display = "none";
  } 
}

function badLink() {
  document.getElementById("textStatus").innerHTML = "Try again...";
}