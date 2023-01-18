console.log("Hello World!");

// Ask User to choose either Rock, Paper, or Scissors
// Make sure Users choice is converted into lowercase
// Ask Computer to randomly choose a number
// Based on the number chosen, assign that number to Rock, Paper, or Scissors
// Compare User choice to Computer choise and determine winner
// If User chooses Rock and Computer chooses Paper, Computer wins
// If User chooses Paper and Computer chooses Scissors, Computer wins
// If User chooses Scissors and Computer chooses, Rock, Computer wins
// If User chooses Rock and Computer chooses Scissors, User wins
// If User chooses Scissors and Computer chooses Paper, User wins
// If User chooses Paper and Computer chooses Rock, User wins
// Create a running tally of wins for both User and Computer, the first to 5 wins

let playerSelection = prompt("Please type Rock, Paper, or Scissors").toLowerCase();

console.log("Player: " + playerSelection);

let computerSelection = getComputerSelection();

function getComputerSelection() {
	let computerSelection = Math.floor(Math.random() * 3) + 1
	// console.log(computerSelection);
	if (computerSelection == 1) {
		return "rock";
	} else if (computerSelection == 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

console.log("CPU: " + computerSelection);

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		console.log("It's a tie!");
	} else if (playerSelection == "rock" && computerSelection == "paper") {
		console.log("You lose, Paper beats Rock!"); 
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		console.log("You win, Rock beats Scissors!");
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		console.log("You win, Paper beats Rock!"); 
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		console.log("You lose, Scissors beats Paper!"); 
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		console.log("You lose, Rock beats Scissors!");
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		console.log("You win, Scissors beats Paper!"); 
	} else {
		console.log("There's something wrong");
	}
}

console.log(playRound(playerSelection, computerSelection));
