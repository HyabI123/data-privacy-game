const rows = [

    "#####################",
    "#####################",
    "#####################",
    "#####################",
    "#####################",
    "#####################",
    "###########S#########",
    "###########E#########",
    "#######P##ACKED######",
    "#PERSONALINFORMATION#",
    "#R#####S#S#R#########",
    "#I###SUSPICIOUSEMAIL#",
    "#V###E#W#I#TWOFACTOR#",
    "#A###C#O#N#Y#########",
    "#C###U#R#G#I#########",
    "#Y###R#D###S#########",
    "#####E#####S#########",
    "###########U#########",
    "###########E#########",
    "###########S#########",
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
  
  document.getElementById("check").onclick = () => {
    let ok = 0, tot = 0;
    cells.forEach(i => {
      if (!i) return;
      tot++;
      const right = i.value.toUpperCase() === i.dataset.ans;
      i.style.background = right ? "#c8f7c5" : "#ffd8d8";
      if (right) ok++;
    });
    alert(`Correct letters: ${ok}/${tot}`);
  };
  