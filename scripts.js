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
function playRound(playerSelection, computerSelection) {
  //Convert playerSelection to lowercase and store it in a new variable called playerMove
  let playerMove = playerSelection.toLowerCase();
  //If playermove equals computerselection, return "It's a draw"!
  if (playerMove === computerSelection) {
    return "It's a draw!";
    //If playerMove beats computermove, return "You win"
  } else if (
    (playerMove === "rock" && computerSelection === "scissors") ||
    (playerMove === "paper" && computerSelection === "rock") ||
    (playerMove === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerMove} beats ${computerSelection}!`;
    //Or else, return you lose.
  } else {
    return `You lose! ${computerSelection} beats ${playerMove}`;
  }
}

let playerSelection = "pApEr";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log(computerSelection);
