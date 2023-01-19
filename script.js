//Pseudocode:
// Ask Player to choose either Rock, Paper, or Scissors
// Make sure Users choice isn't case sensitive
// Ask Computer to randomly choose a number
// Based on the number chosen, assign that number to Rock, Paper, or Scissors
// Compare Player choice to Computer choice and determine winner
// If Player and Computer both choose the same thing, it's a tie
// If Player chooses Rock and Computer chooses Paper, Computer wins
// If Player chooses Paper and Computer chooses Scissors, Computer wins
// If Player chooses Scissors and Computer chooses, Rock, Computer wins
// If Player chooses Rock and Computer chooses Scissors, Player wins
// If Player chooses Scissors and Computer chooses Paper, Player wins
// If Player chooses Paper and Computer chooses Rock, Player wins
// Create a running tally of wins for both Player and Computer, the first to 5 wins

let playerSelection;
let computerSelection;

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



let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "It's a tie!";
	} else if (playerSelection == "rock" && computerSelection == "paper") {
		computerScore++; 
		return "You lose, Paper beats Rock!";
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		playerScore++;
		return "You win, Rock beats Scissors!";
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		playerScore++
		return "You win, Paper beats Rock!"; 
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		computerScore++
		return "You lose, Scissors beats Paper!"; 
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		computerScore++
		return "You lose, Rock beats Scissors!";
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		playerScore++
		return "You win, Scissors beats Paper!"; 
	} else {
		return "There's something wrong";
	}

}


function game() {
	for (computerScore = 0, playerScore = 0; (computerScore < 5) && (playerScore < 5);) {
		if (computerScore < 5 || playerScore < 5) {
			let playerSelection = prompt("Please type Rock, Paper, or Scissors").toLowerCase();
			console.log("Player: " + playerSelection);
			let computerSelection = getComputerSelection();
			console.log("CPU: " + computerSelection);
			console.log(playRound(playerSelection, computerSelection));
			console.log("Player Score: " + playerScore);
			console.log("CPU Score: " + computerScore);
		} 
	}
	if (playerScore > computerScore) {
		console.log("Congrats you win! Refresh browser to play again");
	} else {
		console.log("Sorry, the computer won! Refresh browser to player again");
	}
}

game();




