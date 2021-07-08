function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];

    let computerPick = choices[Math.floor(Math.random()*choices.length)];
    // console.log(computerPick);
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
    let message = `You pick ${playerSelection.toLowerCase()}, and the computer picks ${computerSelection}`;
    let winningMsg = `${message}\nYou win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    let losingMsg = `${message}\nYou lose! ${computerSelection.toLowerCase()} beats ${playerSelection}`;
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
        console.log(`Score: ${playerScore} - ${computerScore}`);
    }

    console.log("Game End!!!")
    switch(true) {
        case playerScore === computerScore:
            console.log(`It is a tie.`);
            break;
        case playerScore > computerScore:
            console.log(`You are the winner.`);
            break;
        default:
            console.log(`You lost.`)
    }
    console.log(`The final score is ${playerScore} to ${computerScore}`);
}