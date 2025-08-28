let round = 1; // start at round 1

const scamImages = ["scamemail1.png", "scamemail22.png", "scamemail3.png", "scamemail4.png"];// basically go by round with their indeicies 
const realImages = ["realemail1.png", "realemail2.png", "realemail3.png", "realemail4.png"];

const leftImg = document.getElementById("left-img"); // should stay as scam
const rightImg = document.getElementById("right-img");// should stay as real 
const message = document.getElementById("wrongorrightmessage");

//hover animation stuff with scale and shadow  
leftImg.addEventListener('mouseover', () => {
   
    leftImg.style.cursor = 'pointer'; 

    leftImg.style.transform = 'scale(1.03)'; 
    leftImg.style.transition = 'transform 0.2s';

    leftImg.style.boxShadow = '0px 4px 15px rgba(0,0,0,0.5)';
});

leftImg.addEventListener('mouseout', () => { //mouse out is like a reset to all the effects 
  
    leftImg.style.transform = 'scale(1)';
    leftImg.style.boxShadow = '';

});

rightImg.addEventListener('mouseover', () => {
   
    rightImg.style.cursor = 'pointer'; 

    rightImg.style.transform = 'scale(1.03)'; 
    rightImg.style.transition = 'transform 0.2s';

    rightImg.style.boxShadow = '0px 4px 15px rgba(0,0,0,0.5)';
});

rightImg.addEventListener('mouseout', () => { //mouse out is like a reset to all the effects 
  
    rightImg.style.transform = 'scale(1)';
    rightImg.style.boxShadow = '';

});

// function to load images for the current round
function currentRound() {
  leftImg.src = scamImages[round - 1]; // minusses round if wrong, adds to round if right, makes sure it start at 0 index 
  rightImg.src = realImages[round - 1];
  message.textContent = `Round ${round}!!`;
}

// when user clicks scam image tbhey go to next round 
leftImg.addEventListener("click", () => {
  if (round < 4) {
    round++; //advance rounf numberr 
    currentRound();
  } else { //won the game 
    window.location.href = "screen_5.html"; 
  }
});

// when user clicks real its wrong so start back at 1
rightImg.addEventListener("click", () => {
    
    message.textContent = "Noooooo! That was the real email!!!"; //why isnt this showing when their wrong?
   
    
    round = 1;
    currentRound();

});



// //  first round at start again
// currentRound();
