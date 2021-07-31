function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    let computerPick = choices[Math.floor(Math.random()*choices.length)];
    return computerPick;
}

function playRound(playerSelection, computerSelection) {
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

function gameReset() {
    pScore = 0;
    cScore = 0;
}

function game() {
    if (pScore === 5 || cScore === 5) { return; }
    let computerSelection = computerPlay();
    let playerSelection = this.getAttribute('data-key');

    let result = playRound(playerSelection, computerSelection);
    if (result === 'win') {
        pScore++;
        message.innerText = winMsg;
    } else if (result === 'lose') {
        cScore++;
        message.innerText = lossMsg;
    } else {
        message.innerText = drawMsg;
    }

    cPick.innerText = computerSelection;
    pPick.innerText = playerSelection;
    playerScore.innerText = pScore;
    computerScore.innerText = cScore;

    let messageConsole = displayMessage(playerSelection, computerSelection, result);
    console.log(messageConsole);
}

// Assign inital score for player and computer
let pScore = 0;
let cScore = 0;

// Select elements to display player and computer scores
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

// Select elements to display player and computer picks
const pPick = document.querySelector(".player-pick");
const cPick = document.querySelector(".computer-pick");

// Select element that displays the game status
const message = document.querySelector("#message-board");

// Select reset button and have the game score reset once clicked
const reset = document.querySelector("#reset");
reset.addEventListener('click', gameReset);

// Display messages
let winMsg = "You win!";
let lossMsg = 'You lose!';
let drawMsg = "It's a draw"

const choices = document.querySelectorAll('#choices button');
choices.forEach(choice => {
    choice.addEventListener('click', game);
});

