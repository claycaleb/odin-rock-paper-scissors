const game = {
    gestures: ["Rock", "Paper", "Scissors", "Spock", "Lizard"],
    descriptions: [
        ["Rock crushes Lizard.", "Rock crushes Scissors."],
        ["Paper covers Rock.", "Paper disproves Spock."],
        ["Scissors cuts Paper.", "Scissors decapitates Lizard."],
        ["Spock smashes Scissors.", "Spock vaporizes Rock."],
        ["Lizard poisons Spock.", "Lizard eats Paper."]
    ],
    winner: null,
    firstTo: 5
};

const humanPlayer = {
    index: null,
    gesture: "",
    isWinner: false,
    score: 0,
    scoreText: document.querySelector("#user-score"),
    winDescription: "",
    winsRound() {
        this.score++;
        console.log(`You picked ${this.gesture}. Computer picked ${computerPlayer.gesture}. ${this.winDescription} You win the round!`);
        updateScore(this);
    }
};

const computerPlayer = {
    index: null,
    gesture: "",
    isWinner: false,
    score: 0,
    scoreText: document.querySelector("#cpu-score"),
    winDescription: "",
    winsRound() {
        this.score++;
        console.log(`You picked ${humanPlayer.gesture}. Computer picked ${this.gesture}. ${this.winDescription} You lose the round!`);
        updateScore(this);
    }
};

function updateScore(player) {
    const { score, scoreText } = player;
    scoreText.textContent = score.toString();
};
 
function updateComputerChoice() {
    computerPlayer.index = Math.floor(Math.random()*5);
    computerPlayer.gesture = game.gestures[computerPlayer.index];
};

function checkWin() {
    if (humanPlayer.score === game.firstTo) {
        humanPlayer.isWinner = true;
        game.winner = humanPlayer;
    };

    if (computerPlayer.score === game.firstTo) {
        computerPlayer.isWinner = true;
        game.winner = computerPlayer;
    };

    if (game.winner) {
        gameOver();
    };
};

function toggleButtons() {
    const playerButtonsDiv = document.querySelector(".player-buttons");
    playerButtonsDiv.classList.toggle("hide");
};

function gameOver() {
    if (game.winner == humanPlayer) {
        console.log("You win!");
    } else if (game.winner == computerPlayer) {
        console.log("You lose!");
    }
    playAgain();
};

function resetGame() {
    humanPlayer.score = 0;
    computerPlayer.score = 0;
    updateScore(humanPlayer);
    updateScore(computerPlayer);
    game.winner.isWinner = false;
    game.winner = null;
}

function playAgain() {
    toggleButtons();
    const playAgainDiv = document.querySelector("#play-again");
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play again?";
    playAgainDiv.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", () => {
        resetGame();
        playAgainButton.classList.toggle("hide");
        toggleButtons();
    });
}

function playRound() {
    
    updateComputerChoice();

    if ((computerPlayer.index + 1) % 5 === humanPlayer.index) {
        humanPlayer.winDescription = game.descriptions[humanPlayer.index][0];
        humanPlayer.winsRound();
    } else if ((humanPlayer.index + 2) % 5 === computerPlayer.index) {
        humanPlayer.winDescription = game.descriptions[humanPlayer.index][1];
        humanPlayer.winsRound();
    } else if ((humanPlayer.index + 1) % 5 === computerPlayer.index) {
        computerPlayer.winDescription = game.descriptions[computerPlayer.index][0]
        computerPlayer.winsRound();
    } else if ((computerPlayer.index + 2) % 5 === humanPlayer.index) {
        computerPlayer.winDescription = game.descriptions[computerPlayer.index][1]
        computerPlayer.winsRound();
    } else if (humanPlayer.index === computerPlayer.index) {
        console.log(`You picked ${humanPlayer.gesture}. Computer picked ${computerPlayer.gesture}. It's a tie!`);
        console.log(`Your score: ${humanPlayer.score} | Computer score: ${computerPlayer.score}`)
    };

    checkWin();
};

const selectionButtons = document.querySelectorAll(".choice > button");

selectionButtons.forEach(button => {
    button.addEventListener("click", () => {
        humanPlayer.gesture = button.id;
        humanPlayer.index = game.gestures.indexOf(button.id);
        playRound();
   });
});
