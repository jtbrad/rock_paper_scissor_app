var choices = document.getElementsByClassName("choices");
var computerChoice;
var computerChoices = ["rock", "paper", "scissors"];
var loseCount = 0;
var roundCount = 0;
var roundResultDisplay = document.getElementById("round-result");
var tieCount = 0;
var userChoice;
var winCount = 0;

document.getElementById("new-game").addEventListener("click", startNewGame);

for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", startRound);
};

function startNewGame() {
  winCount = 0;
  tieCount = 0;
  loseCount = 0;
  roundCount = 0;
  displayStats();
  clearDisplay();
};

function startRound() {
  userChoice = this.id;
  computerChoice = getComputerChoice();
  displayUserChoice(userChoice);
  displayComputerChoice(computerChoice);
  displayRoundResult(getRoundResult());
  roundCount++;
  displayStats();
};

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function getRoundResult() {
  if (userChoice === "rock") {
    return rockResult(computerChoice)
  } else if (userChoice === "paper") {
    return paperResult(computerChoice)
  } else {
    return scissorsResult(computerChoice)
  }
};

function rockResult(opponentChoice) {
  if (opponentChoice === "scissors") {
    return winResult();
  } else if (opponentChoice === "rock") {
    return tieResult();
  } else {
    return loseResult();
  }
};

function paperResult(opponentChoice) {
  if (opponentChoice === "rock") {
    return winResult();
  } else if (opponentChoice === "paper") {
    return tieResult();
  } else {
    return loseResult();
  }
};

function scissorsResult(opponentChoice) {
  if (opponentChoice === "paper") {
    return winResult();
  } else if (opponentChoice === "scissors") {
    return tieResult();
  } else {
    return loseResult();
  }
};

function winResult() {
  winCount++;
  if (roundResultDisplay.classList.contains("lose")) {
    roundResultDisplay.classList.remove("lose");
  }
  roundResultDisplay.classList.add("win");
  return "You win!";
};

function tieResult() {
  tieCount++;
  if (roundResultDisplay.classList.contains("win")){
    roundResultDisplay.classList.remove("win");
  };
  if (roundResultDisplay.classList.contains("lose")){
    roundResultDisplay.classList.remove("lose");
  };
  return "Its a tie!";
};

function loseResult() {
  loseCount++;
  if (roundResultDisplay.classList.contains("win")) {
    roundResultDisplay.classList.remove("win");
  };
  roundResultDisplay.classList.add("lose");
  return "You lose!";
};

function displayUserChoice(choice) {
  document.getElementById("user-choice").innerHTML = "You chose " + choice + ".";
};

function displayComputerChoice(choice) {
  document.getElementById("computer-choice").innerHTML = "The computer chose " + choice + ".";
};

function displayRoundResult(result) {
  document.getElementById("round-result").innerHTML = result;
};

function displayStats() {
  document.getElementById("stats").innerHTML = "Stats: " + winStats() + " " + tieStats() + " " + loseStats() + " .";
}

function winStats() {
  return "Wins: " + winCount + " (" + statPercent(winCount).toFixed(2) + "%)" 
};

function tieStats() {
  return "Ties: " + tieCount + " (" + statPercent(tieCount).toFixed(2) + "%)" 
};

function loseStats() {
  return "Loses: " + loseCount + " (" + statPercent(loseCount).toFixed(2) + "%)" 
};

function statPercent(statCount) {

  if (roundCount > 0) {
    return statCount / roundCount * 100
  } else {
    return 0
  }

};

function clearDisplay() {
  document.getElementById("user-choice").innerHTML = "";
  document.getElementById("computer-choice").innerHTML = "";
  document.getElementById("round-result").innerHTML = "";
}