
//game scores
let pScore = 0;
let cScore = 0;

// dom elements
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
const resultsMessage = document.querySelector(".results-message");
const choices = document.querySelectorAll(".choice");
const restartBtn = document.querySelector(".restart");
//moves avalible
const MOVES = ["rock", "paper", "scissors"];

//get computer choice
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return MOVES[randomNumber];
}

function initializeGame() {
    pScore = 0;
    cScore = 0;
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
    restartBtn.style.display = 'none';
    enableGame();
}

function play(e) {
    //players choices
    const computerChoice = computerPlay();
    const playerChoice = e.target.id;

    const winner = getWinner(playerChoice, computerChoice);

    if (winner == 'Draw') {
        resultsMessage.innerHTML = "It's a draw! No score.";
    } else if (winner == 'Player') {
        resultsMessage.innerHTML = `${winner} wins! ${playerChoice} 
        beats ${computerChoice}`;
        playerScore.innerHTML = ++pScore;
    } else {
        resultsMessage.innerHTML = `${winner} wins! ${computerChoice} 
        beats ${playerChoice}`;
        computerScore.innerHTML = ++cScore;
    }

    if (pScore == 5) {
        resultsMessage.innerHTML = `Player wins the game!`;
        restartBtn.style.display = 'inline-block';
        disableGame();
        restartBtn.addEventListener('click', () => initializeGame());
    }
    if (cScore == 5) {
        resultsMessage.innerHTML = `Computer wins the game! `;
        restartBtn.style.display = 'inline-block';
        disableGame();
        restartBtn.addEventListener('click', () => initializeGame());
    }
}


function getWinner(player, computer) {
    let winner = "";
    if (player == computer) {
        winner += "Draw";
    } else if (player == "rock" && computer == "scissors" ||
        player == "scissors" && computer == "paper" ||
        player == "paper" && computer == "rock") {
        winner += "Player";
    } else {
        winner += "Computer";
    }
    return winner;
}

function disableGame() {
    choices.forEach(choice => choice.removeEventListener('click', play));
}

//event listeners
function enableGame() {
    choices.forEach(choice => choice.addEventListener('click', play));
}

initializeGame();

