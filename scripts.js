// GAME

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

//Function that gets random computer choice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

//Function that evaluates winner and plays the round

function playRound(playerSelection, computerSelection) {
  if (playerScore === computerSelection) {
    roundWinner = "tie";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

//UI

const buttons = document.querySelectorAll(".playerMove");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Hello World");
  });
});

// //Create a new function that takes two string parameters, computerSelection and playerSelection
// function playRound(playerSelection, computerSelection) {
//   //Convert playerSelection to lowercase and store it in a new variable called playerMove
//   let playerMove = playerSelection.toLowerCase();
//   //If playermove equals computerselection, return "It's a draw"!
//   //: If draw, add +1 to both playerWins and computerWins.
//   if (playerMove === computerSelection) {
//     playerWins += 1;
//     computerWins += 1;
//     return `It's a draw! Player: ${playerWins} Computer: ${computerWins}`;
//     //If playerMove beats computermove, return "You win"
//     // If player wins, add +1 to playerWins
//   } else if (
//     (playerMove === "rock" && computerSelection === "scissors") ||
//     (playerMove === "paper" && computerSelection === "rock") ||
//     (playerMove === "scissors" && computerSelection === "paper")
//   ) {
//     playerWins += 1;
//     return `You win! ${playerMove} beats ${computerSelection}! Player: ${playerWins} Computer: ${computerWins}`;
//     //Or else, return you lose.
//     //If computer wins, add +1 to computerWins
//   } else {
//     computerWins += 1;
//     return `You lose! ${computerSelection} beats ${playerMove}! Player: ${playerWins} Computer: ${computerWins}`;
//   }
// }

// //Create two global variables called playerWins and computerWins and set them both to zero.
// let playerWins = 0;
// let computerWins = 0;
// //Declare a new function called game without any parameters
// function game() {
//   //Convert the code inside the function  into a for loop, that runs 5 times.
//   for (let i = 0; i < 5; i++) {
//     //Prompt the user for either rock, paper or scissors, and store it inside the variable playerSelection
//     let playerSelection = prompt("Rock, paper or scissors?");
//     //Run the function getComputerChoice and store it inside a mutable variable called computerSelection
//     let computerSelection = getComputerChoice();
//     //Run playRound and log the output to the console.
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }

// game();

// //If playerwins > computerWins return win message and score
// //If computerWins > playerWins, return lose message and score
// //If computerWins == playerWins, return draw message and score
// if (playerWins > computerWins) {
//   console.log(
//     `Congratulations! You win! Player: ${playerWins} Computer: ${computerWins}`
//   );
// } else if (computerWins > playerWins) {
//   console.log(
//     `Fucked up bro! You lose! Player: ${playerWins} Computer: ${computerWins}`
//   );
// } else {
//   console.log(`It's a draw! Player: ${playerWins} Computer: ${computerWins}`);
// }
