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

function gameReset() {
    pScore = 0;
    cScore = 0;
    pPick.style['background-image'] = "none";
    cPick.style['background-image'] = "none";
    displayScore();
}

function displayScore() {
    playerScore.innerText = pScore;
    computerScore.innerText = cScore;
}

function checkWinner() {
    return result = (pScore == 5) ? 'win' : 'lose'; 
}

function displayPick(player, selection) {
    let source = "";
    switch (selection) {
        case 'rock':
            source = 'url(./assets/rock.png)';
            break;
        case 'paper':
            source = 'url(./assets/paper.png)';
            break;
        case 'scissor':
            source = 'url(./assets/paper.png)';
            break;
    }    
    player.style['background-image'] = source;
}

function game() {
    if (pScore < 5 && cScore <5) {
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
        // Update corresponding image of the choices
        displayPick(pPick, playerSelection);
        displayPick(cPick, computerSelection);
        displayScore();
    }
    else { 
        message.innerText = `You ${checkWinner()} the game.\nReset to play again`;    
        return; 
    }
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
let winMsg = "You win the round!";
let lossMsg = 'You lose the round!';
let drawMsg = "It's a draw"

const choices = document.querySelectorAll('#choices button');
choices.forEach(choice => {
    choice.addEventListener('click', game);
});

