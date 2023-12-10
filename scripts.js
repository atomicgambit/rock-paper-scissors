function getComputerChoice() {
  //Create a random number between 1 and 3 and store it in a variable
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // Return a string based on the random number, "Rock"(if int=1), "Paper"(if int=2), or "Scissors"(if int=3)
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Create a new function that takes two string parameters, computerSelection and playerSelection
//Convert playerSelection to lowercase and store it in a new variable called playerMove
//Check if player selection is a legal move by comparing it with the strings rock, paper or scissors.
//If not legal, print "That's not a legal move!"
//If the move is legal, compare it with computerChoice
//If playermove equals computerselection, return "It's a draw"!
//Write the conditions that cover all the possible combinations and return "You win/lose! X beats X"

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log(computerSelection);
