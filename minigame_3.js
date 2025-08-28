// Data Privacy Quiz Game with Lives System

let questions = [
  {
    question: "What is a strong password?",
    options: ["123456", "Password123", "Xy$9!qT@5"],
    answer: 2
  },
  {
    question: "What should you do if you get a suspicious email link?",
    options: ["Click it to check", "Ignore or report it", "Reply asking if it's safe"],
    answer: 1
  },
  {
    question: "What does 2FA (Two-Factor Authentication) do?",
    options: ["Adds a second password", "Adds an extra layer of security", "Sends random ads"],
    answer: 1
  },
  {
    question: "Which of these is safe public Wi-Fi practice?",
    options: ["Logging into bank accounts", "Using a VPN", "Sharing files with strangers"],
    answer: 1
  },
  {
    question: "What’s the safest way to share personal info online?",
    options: ["On public social media", "Only on trusted secure websites", "With anyone who asks"],
    answer: 1
  },
  {
    question: "What does a padlock icon in the browser mean?",
    options: ["The site is secure (HTTPS)", "The site has no ads", "The site is free"],
    answer: 0
  },
  {
    question: "Why should software updates be installed?",
    options: ["They add new wallpapers", "They fix bugs and security issues", "They make the computer slower"],
    answer: 1
  },
  {
    question: "Which of these is an example of phishing?",
    options: ["A fake email asking for your password", "A strong password manager", "An antivirus software"],
    answer: 0
  }
];

let currentQuestion = 0; 
let lives = 3;

function loadQuestion() {
  let q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").textContent = `❤️ Lives left: ${lives}`;
}

function checkAnswer(choice) {
  if (choice === questions[currentQuestion].answer) {
    document.getElementById("result").textContent = "Correct!";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      document.getElementById("quiz-box").innerHTML = `
        <h2>🎉 You finished the quiz! Great job protecting your data!</h2>
        <a href="screen_7.html">Continue</a>
      `;
    }
  } else {
    lives--;
    if (lives > 0) {
      document.getElementById("result").textContent = `Wrong! You lost a life. ❤️ Lives left: ${lives}`;
      setTimeout(loadQuestion, 1000);
    } else {
      document.getElementById("quiz-box").innerHTML = `
        <h2>💀 Game Over! You ran out of lives.</h2>
        <a href="index.html">Restart</a>
      `;
    }
  }
}

// Start quiz
loadQuestion();