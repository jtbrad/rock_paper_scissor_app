var choices = document.getElementsByClassName("choices");
var computerChoice;
var computerChoices = ["rock", "paper", "scissors"];
var loseCount = 0;
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
  displayStats();
  clearDisplay();
};

function startRound() {
  userChoice = this.id;
  computerChoice = getComputerChoice();
  displayUserChoice(userChoice);
  displayComputerChoice(computerChoice);
  displayRoundResult(getRoundResult());
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
  return "You win!";
};

function tieResult() {
  tieCount++;
  return "Its a tie!";
};

function loseResult() {
  loseCount++;
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
  document.getElementById("stats").innerHTML = "Stats: " + winCount + " wins " + tieCount + " ties " + loseCount + " loses.";
}

function clearDisplay() {
  document.getElementById("user-choice").innerHTML = "";
  document.getElementById("computer-choice").innerHTML = "";
  document.getElementById("round-result").innerHTML = "";
}