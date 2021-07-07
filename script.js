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
        return(`${message}\nIt's a draw.`);
    } else {
        if (playerSelection.toLowerCase() === 'rock') {
            if (computerSelection === 'paper') {
                return(losingMsg);
            } else {
                return(winningMsg);
            }
        } else if (playerSelection.toLowerCase() === 'paper') {
            if (computerSelection === 'rock') {
                return(winningMsg);
            } else {
                return(losingMsg);
            }
        } else if (playerSelection.toLowerCase() === 'scissor') {
            if (computerSelection === 'rock') {
                return(losingMsg);
            } else {
                return(winningMsg);
            }
        }
    }
}