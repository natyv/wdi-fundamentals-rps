////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var input = prompt();
    return input;
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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     var playerMove = move || getInput();
     console.log('Player chose ' + playerMove);
    return playerMove; /* Your Expression */
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var computerMove = move || randomPlay();
    console.log('Computer chose ' + computerMove);
    return computerMove; /* Your Expression */
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
    playerMove = playerMove || getPlayerMove();
    computerMove = computerMove || getComputerMove();
    
    
    if (playerMove === computerMove){
        winner = 'tie';
        console.log('Winner is ' + winner);
        return winner;
    }
    
   switch(playerMove){
        case 'rock':
            winner = (computerMove === 'paper') ? 'computer':'player';
            break;
        case 'paper':
            winner = (computerMove === 'scissors') ? 'computer':'player';
            break;
        case 'scissors':
            winner = (computerMove === 'rock') ? 'computer':'player';
            break;
        default:
            break;
    }
    
    console.log('Winner is ' + winner);
    return winner;
    
}

function playToFive() {
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while((playerWins<5)||(computerWins<5)){
        var winner = getWinner();
        if (winner === 'player'){playerWins += 1;}
        if (winner === 'computer'){computerWins += 1;}
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        if (playerWins === 5){ return 'Player Wins!';}
        if (computerWins === 5){ return 'Computer Wins!';}
    }
    
}

function playTo(x) {
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won x times.
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while((playerWins<x)||(computerWins<x)){
        var winner = getWinner();
        if (winner === 'player'){playerWins += 1;}
        if (winner === 'computer'){computerWins += 1;}
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        if (playerWins === x){ return 'Player Wins!';}
        if (computerWins === x){ return 'Computer Wins!';}
    }
}


