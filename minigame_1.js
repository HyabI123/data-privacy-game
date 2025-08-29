const rows = [
  "#####################",
  "#####################",
  "#####################",
  "#####################",
  "#########S##P########",
  "#####HACKED#A########",
  "#########C##S#S######",
  "#########U##S#C######",
  "#########R##W#A######",
  "#PERSONALINFORMATION#",
  "#R#######T##R###W####",
  "#I#######Y##D###O####",
  "#VPN#####I######F####",
  "#A#######S######A####",
  "#C#######S######C####",
  "#Y####SECURE####T####",
  "#########E######O####",
  "######PHISHING##R####",
  "#####################",
  "#####################",
  "#####################",
  "#####################",
  "#####################",
  "#####################",
  "#####################"
];

const g = document.getElementById("grid");
const cells = [];

rows.forEach(r => {
  [...r].forEach(ch => {
    if (ch === "#") {
      const d = document.createElement("div");
      d.className = "cell blk";
      g.appendChild(d);
      cells.push(null);
    } else {
      const i = document.createElement("input");
      i.maxLength = 1;
      i.dataset.ans = ch;
      i.addEventListener("input", e => {
        e.target.value = e.target.value.toUpperCase();
      });
      g.appendChild(i);
      cells.push(i);
    }
  });
});

// Create Continue button (hidden at start)
const continueBtn = document.createElement("button");
continueBtn.textContent = "Continue";
continueBtn.style.display = "none";
continueBtn.onclick = () => {
  window.location.href = "screen_3.html";
};
document.getElementById("crosswordContainer").appendChild(continueBtn);

// Check button logic
document.getElementById("check").onclick = () => {
  let ok = 0, tot = 0;
  cells.forEach(i => {
    if (!i) return;
    tot++;
    const right = i.value.toUpperCase() === i.dataset.ans;
    i.style.background = right ? "#c8f7c5" : "#ffd8d8";
    if (right) ok++;
  });

  if (ok === tot) {
    continueBtn.style.display = "inline-block";
  } else {
    continueBtn.style.display = "none";
    alert(`Correct letters: ${ok}/${tot}`);
  }
};
