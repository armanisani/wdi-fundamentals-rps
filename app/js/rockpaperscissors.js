////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var x = move;
    x = x || getInput();
    return x;
}

function getComputerMove(move) {
    var x = move;
    x = x || randomPlay();
    return x;
}

function getWinner(playerMove,computerMove) {
    var winner = 0;
    if (playerMove === 'rock') {
	if (computerMove === 'rock') {
	    winner = "tie";
	}
        else if (computerMove === 'scissors') {
	    winner = "player";
	}
	else if (computerMove === 'paper') {
	    winner = "computer";
	}
    }
    else if (playerMove === 'paper') {
	if (computerMove === 'rock') {
	    winner = "player";
	}
	else if (computerMove === 'paper') {
	    winner = "tie";
	}
	else {
	    winner = "computer";
	}
    }
    else if (playerMove === 'scissors') {
	if (computerMove === 'rock') {
	    winner = "computer"
	}
	else if (computerMove === 'paper') {
	    winner = "player"
	}
	else {
	    winner = "tie"
	}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while((playerWins <5) || (computerWins <5)) {
        if (getWinner() === "computer") {
	    computerWins += 1;
	    console.log("Computer won! Computer chose " + computerMove + "while Player chose " + playerMove + ".");
	}
	else if (getWinner() === "player") {
	    playerWins += 1;
	    console.log("Player won! Player chose " + playerMove + "while Computer chose " + computerMove + "." );
	}
	else {
	    console.log("That was a tie! Both chose " + playerMove + ".");
	}	
    }
    return [playerWins, computerWins];
}

