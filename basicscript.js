let userAnswer = prompt("Rock, Paper, Scissors");
var userChoice = (0);

switch(userAnswer.toLowerCase()) {
	case "rock": var userChoice = 1;
	break;
	case "paper": var userChoice = 2;
	break;
	case "scissors": var userChoice = 3;
	break;
	default: console.log("Invalid Choice");
	break;
}

let computerChoice = Math.floor((Math.random() * 3) + 1);

if ((userChoice === 1) && (computerChoice === 2)) {
	console.log("You chose Rock, the Computer chose Paper. Computer Wins!");
} else if ((userChoice === 2) && (computerChoice === 3)) {
	console.log("You chose Paper, the Computer chose Scissors. Computer Wins!");
} else if ((userChoice === 3) && (computerChoice === 1)) {
	console.log("You chose Scissors, the Computer chose Rock. Computer Wins!");
} else if ((computerChoice === 1) && (userChoice === 2)) {
	console.log("You chose Paper, the Computer chose Rock. You Win!");
} else if ((computerChoice === 2) && (userChoice === 3)) {
	console.log("You chose Scissors, the Computer chose Paper. You Win!");
} else if ((computerChoice === 3) && (userChoice === 1)) {
	console.log("You chose Rock, the Computer chose Scissors. You Win!");
} else if ((computerChoice === 1) && (userChoice === 1)) {
	console.log("You chose Rock, the Computer chose Rock. Draw!");
} else if ((computerChoice === 2) && (userChoice === 2)) {
	console.log("You chose Paper, the Computer chose Paper. Draw!");
} else if ((computerChoice === 3) && (userChoice === 3)) {
	console.log("You chose Scissors, the Computer chose Scissors. Draw!");
}
