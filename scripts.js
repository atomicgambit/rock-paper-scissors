function getComputerChoice() {
  //Create a random number between 1 and 3 and store it in a variable
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // Return a string based on the random number, "Rock"(if int=1), "Paper"(if int=2), or "Scissors"(if int=3)
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Test above code
console.log(getComputerChoice());
