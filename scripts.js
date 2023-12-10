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
  let playerMove = playerSelection.toLowerCase();
  if (playerMove === computerSelection) {
    return "It's a draw!";
  } else if (
    (playerMove === "rock" && computerSelection === "scissors") ||
    (playerMove === "paper" && computerSelection === "rock") ||
    (playerMove === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerMove} beats ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerMove}`;
  }
}

let playerSelection = "pApEr";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log(computerSelection);
