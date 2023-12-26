// User Input to play
// Create a random func for device to choose
// Compare two options between Player and device
// Decide who is the winner

console.log("Welcome Player!"); // Welcoming the player

const prompt = require("prompt-sync")();

// User choosing his choice
const userChoice = () => {
  while (true) {
    const choice = prompt("Enter your choice: ").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissor") {
      return choice;
    } else {
      console.log("Please choose a valid option between rock/paper/scissor");
    }
  }
};

// What the computer choose
const computerChoice = () => {
  let comRandom = Math.floor(Math.random() * 3);
  switch (comRandom) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissor";
  }
};

const userHasChose = userChoice();
//console.log(userHasChose);

const comHasChose = computerChoice();
//console.log(comHasChose);

// Lets play the game
// Compare between two option
const decideResult = () => {
  if (userHasChose === comHasChose) {
    return "It's a tie game!";
  }
  if (userHasChose === "rock") {
    if (comHasChose === "paper") {
      return "The Computer Won!";
    } else {
      return "You Won!!!";
    }
  }
  if (userHasChose === "paper") {
    if (comHasChose === "scissor") {
      return "The Computer Won!";
    } else {
      return "You Won!!!";
    }
  }
  if (userHasChose === "scissor") {
    if (comHasChose === "rock") {
      return "The Computer Won!";
    } else {
      return "You Won!!!";
    }
  }
};

const finalResult = decideResult();
console.log(finalResult);
//
