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

//Declare a new function called game without any parameters
//Create two global variables called playerWins and computerWins and set them both to zero.
//Prompt the user for either rock, paper or scissors, and store it inside the variable playerSelection
//Run the function getComputerChoice and store it inside a mutable variable called computerSelection
//Modify the function playRound:
//1: If player wins, add +1 to playerWins
//2: If computer wins, add +1 to computerWins
//3: If draw, add +1 to both.
//Run playRound and log the output to the console.
//Log the score with a template literal
//Convert the code inside the function  into a for loop, that runs 5 times.
