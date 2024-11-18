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
    winDescription: "",
    winsRound() {
        this.score++;
        console.log(`You picked ${this.gesture}. Computer picked ${computerPlayer.gesture}. ${this.winDescription} You win the round!`);
        console.log(`Your score: ${this.score} | Computer score: ${computerPlayer.score}`);
    }
};

const computerPlayer = {
    index: null,
    gesture: "",
    isWinner: false,
    score: 0,
    winDescription: "",
    winsRound() {
        this.score++;
        console.log(`You picked ${humanPlayer.gesture}. Computer picked ${this.gesture}. ${this.winDescription} You lose the round!`);
        console.log(`Your score: ${humanPlayer.score} | Computer score: ${this.score}`);
    }
};
 
function updateComputerChoice() {
    computerPlayer.index = Math.floor(Math.random()*5);
    computerPlayer.gesture = game.gestures[computerPlayer.index];
};

function gameOver() {
    playerButtonsDiv = document.querySelector("#playerButtons");
    playerButtonsDiv.style.display = "none";
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

selectionButtons = document.querySelectorAll("#playerButtons > button");

selectionButtons.forEach(button => {
    button.addEventListener("click", () => {
        humanPlayer.gesture = button.id;
        humanPlayer.index = game.gestures.indexOf(button.id);
        playRound();
   });
});
