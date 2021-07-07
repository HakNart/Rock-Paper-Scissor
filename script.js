function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];

    let computerPick = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerPick);
    return computerPick;
}

