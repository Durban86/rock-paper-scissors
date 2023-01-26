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

// let playerSelection;
// let computerSelection;

const container = document.querySelector('.container');
const buttonDiv = document.querySelector('.game-buttons')
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const playerSpan = document.querySelector('.player-score');
const computerSpan = document.querySelector('.computer-score')
const playAgainButton = document.createElement('button')


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
	if (playerSelection === computerSelection) {
		p.innerText = `It's a tie! You both selected ${playerSelection}`;
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		computerScore++;
		p.innerText = "You lose, Paper beats Rock!";
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		playerScore++;
		p.innerText = "You win, Rock beats Scissors!";
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		playerScore++
		p.innerText = "You win, Paper beats Rock!";
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		computerScore++
		p.innerText = "You lose, Scissors beats Paper!";
		outcomeDiv.appendChild(p); 
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		computerScore++
		p.innerText = "You lose, Rock beats Scissors!";
		outcomeDiv.appendChild(p);
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++
		p.innerText = "You win, Scissors beats Paper!";
		outcomeDiv.appendChild(p); 
	} else {
		return "There's something wrong";
	}
	console.log("player score: " + playerScore + " computer score: " + computerScore);

}

function currentScore(playerScore, computerScore) {
	playerSpan.innerText = `Player: ${playerScore}   `
	computerSpan.innerText = `Computer: ${computerScore}`
}

function endGame() {
	rockButton.disabled = true
	paperButton.disabled = true
	scissorsButton.disabled = true
	playAgainButton.innerHTML = 'Play again?'
	container.appendChild(playAgainButton)
}

function checkForWinner(playerScore, computerScore) {
	if (playerScore === 5) {
		h2.innerText = `Congrats, you beat the computer ${playerScore} to ${computerScore}!`;
		outcomeDiv.appendChild(h2)
		endGame()
	} else if (computerScore === 5) {
		h2.innerText = `Sorry, the computer beat you ${computerScore} to ${playerScore}!`
		outcomeDiv.appendChild(h2)
		endGame()
	}
}

rockButton.addEventListener('click', () => {
	const computerSelection = getComputerSelection()
	const playerSelection = 'rock'
	playRound(playerSelection, computerSelection)
	currentScore(playerScore, computerScore)
	checkForWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
	const computerSelection = getComputerSelection()
	const playerSelection = 'paper'
	playRound(playerSelection, computerSelection)
	currentScore(playerScore, computerScore)
	checkForWinner(playerScore, computerScore)
})
scissorsButton.addEventListener('click', () => {
	const computerSelection = getComputerSelection()
	const playerSelection = 'scissors'
	playRound(playerSelection, computerSelection)
	currentScore(playerScore, computerScore)
	checkForWinner(playerScore, computerScore)
})

playAgainButton.addEventListener('click', () => {
	playerScore = 0
	computerScore = 0
	currentScore(playerScore, computerScore)
	rockButton.disabled = false;
	paperButton.disabled = false;
	scissorsButton.disabled = false;
	container.removeChild(playAgainButton)
	outcomeDiv.removeChild(h2)
	outcomeDiv.removeChild(p)
})


// function game() {
// 	for (computerScore = 0, playerScore = 0; (computerScore < 5) && (playerScore < 5);) {
// 		if (computerScore < 5 || playerScore < 5) {
// 			let playerSelection = getPlayerSelection(); //prompt("Please type Rock, Paper, or Scissors").toLowerCase();
// 			console.log("Player: " + playerSelection);
// 			let computerSelection = getComputerSelection();
// 			console.log("CPU: " + computerSelection);
// 			console.log(playRound(playerSelection, computerSelection));
// 			console.log("Player Score: " + playerScore);
// 			console.log("CPU Score: " + computerScore);
// 		} 
// 	}
// 	if (playerScore > computerScore) {
// 		console.log("Congrats you win! Refresh browser to play again");
// 	} else {
// 		console.log("Sorry, the computer won! Refresh browser to player again");
// 	}
// }

// game();





