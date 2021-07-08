function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];

    let computerPick = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerPick);
    return computerPick;
}

function playRound(playerSelection, computerSelection) {
    let message = `You pick ${playerSelection}, and the computer picks ${computerSelection}`;
    let winningMsg = `${message}\nYou win! ${playerSelection} beats ${computerSelection}`;
    let losingMsg = `${message}\nYou lose! ${computerSelection} beats ${playerSelection}`;
    if (playerSelection.toLowerCase() === computerSelection) {
        return('draw');
    } else {
        if (playerSelection.toLowerCase() === 'rock') {
            if (computerSelection === 'paper') {
                return 'lose'
            } else {
                return 'win'
            }
        } else if (playerSelection.toLowerCase() === 'paper') {
            if (computerSelection === 'rock') {
                return 'win';
            } else {
                return 'lose'
            }
        } else if (playerSelection.toLowerCase() === 'scissor') {
            if (computerSelection === 'rock') {
                return 'lose'
            } else {
                return 'win'
            }
        }
    }
}

function displayMessage(playerSelection, computerSelection, result) {
    let message = `You pick ${playerSelection}, and the computer picks ${computerSelection}`;
    let winningMsg = `${message}\nYou win! ${playerSelection} beats ${computerSelection}`;
    let losingMsg = `${message}\nYou lose! ${computerSelection} beats ${playerSelection}`;
    let drawMsg = `${message}\nIt's a draw.`
    return (result === 'draw') ? drawMsg : (result === 'lose') ? losingMsg : winningMsg;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Please pick rock, paper, or scissor");
        let result = playRound(playerSelection, computerSelection);
        if (result === 'win') {
            playerScore++;
        } else if (result === 'lose') {
            computerScore++;
        }
        let message = displayMessage(playerSelection, computerSelection, result);
        console.log(message)
    }
}