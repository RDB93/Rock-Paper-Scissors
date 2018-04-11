function computerPlay() {
  var computerChoice = Math.floor((Math.random() * 3) + 1);
	switch(computerChoice) {
	case 1: return "rock";
	break;
	case 2: return "paper";
	break;
	case 3: return "scissors";
	break;
	default: console.log("Invalid Choice");
	break;
	}
}

function playRound(playerSelection, computerSelection) {
	if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper")) {
		computerScore++;
		return("You chose Rock, the Computer chose Paper. Computer Wins!");
	} else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors")) {
		computerScore++;
		return("You chose Paper, the Computer chose Scissors. Computer Wins!");
	} else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock")) {
		computerScore++;
		return("You chose Scissors, the Computer chose Rock. Computer Wins!");
	} else if ((computerSelection === "rock") && (playerSelection.toLowerCase() === "paper")) {
		playerScore++;
		return("You chose Paper, the Computer chose Rock. You Win!");
	} else if ((computerSelection === "paper") && (playerSelection.toLowerCase() === "scissors")) {
		playerScore++;
		return("You chose Scissors, the Computer chose Paper. You Win!");
	} else if ((computerSelection === "scissors") && (playerSelection.toLowerCase() === "rock")) {
		playerScore++;
		return("You chose Rock, the Computer chose Scissors. You Win!");
	} else if ((computerSelection === "rock") && (playerSelection.toLowerCase() === "rock")) {
		return("You chose Rock, the Computer chose Rock. Draw!");
	} else if ((computerSelection === "paper") && (playerSelection.toLowerCase() === "paper")) {
		return("You chose Paper, the Computer chose Paper. Draw!");
	} else if ((computerSelection === "scissors") && (playerSelection.toLowerCase() === "scissors")) {
		return("You chose Scissors, the Computer chose Scissors. Draw!");
	}
}

function game() {
	const playerSelection = prompt("Rock, Paper, Scissors?");
	const computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
}

var computerScore = 0;
var playerScore = 0;
game();
game();
game();
game();
game();
console.log("Computer Score:" + " " + computerScore, "Player Score:" + " " + playerScore);

