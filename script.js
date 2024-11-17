const game = {
    gestures: ["rock", "paper", "scissors", "Spock", "lizard"],
    descriptions: [
        ["Rock crushes Lizard.", "Rock crushes Scissors."],
        ["Paper covers Rock.", "Paper disproves Spock."],
        ["Scissors cuts Paper.", "Scissors decapitates Lizard."],
        ["Spock smashes Scissors.", "Spock vaporizes Rock."],
        ["Lizard poisons Spock.", "Lizard eats Paper."]
    ],
    winner: null,
    rounds: 5
};

const humanPlayer = {
    index: null,
    gesture: "",
    isWinner: false,
    score: 0,
    winsRound() {
        this.score++;
        if ((computerPlayer.index + 1) % 5 === this.index) {
            winDescription = game.descriptions[this.index][0];
        } else if ((this.index + 2) % 5 === computerPlayer.index) {
            winDescription = game.descriptions[this.index][1];
        }
        console.log(`You picked ${this.gesture}. Computer picked ${computerPlayer.gesture}. ${winDescription} You win the round!`);
        console.log(`Your score: ${this.score} | Computer score: ${computerPlayer.score}`);
    }
};

const computerPlayer = {
    index: null,
    gesture: "",
    isWinner: false,
    score: 0,
    winsRound() {
        this.score++;
        console.log(`You picked ${this.gesture}. Computer picked ${computerPlayer.gesture}. You lose the round!`);
        console.log(`Your score: ${this.score} | Computer score: ${computerPlayer.score}`);
    }
};
 
function updateComputerChoice() {
    computerPlayer.index = Math.floor(Math.random()*5);
    computerPlayer.gesture = game.gestures[computerPlayer.index];
};

function playRound() {
    updateComputerChoice();
    if (
        computerPlayer.gesture === game.gestures.at(humanPlayer.index - 1) ||
        computerPlayer.gesture === game.gestures.at(humanPlayer.index - 3) 
    ) {
        humanPlayer.winsRound();
        return;
    } else if (
        humanPlayer.gesture === game.gestures.at(computerPlayer.index - 1) ||
        humanPlayer.gesture === game.gestures.at(computerPlayer.index - 3)
    ) {
        computerPlayer.winsRound();
        return;
    } else if (
        humanPlayer.index === computerPlayer.index
    ) {
        console.log(`You picked ${humanPlayer.gesture}. Computer picked ${computerPlayer.gesture}. It's a tie!`);
        console.log(`Your score: ${humanPlayer.score} | Computer score: ${computerPlayer.score}`);
        return;
    } else {
        console.log(`You picked ${humanPlayer.gesture}. Computer picked ${computerPlayer.gesture}. No winner!`);
        return;
    };
};

selectionButtons = document.querySelectorAll("#playerButtons > button");

selectionButtons.forEach(button => {
    button.addEventListener("click", () => {
        humanPlayer.gesture = button.id;
        humanPlayer.index = game.gestures.indexOf(button.id);
        playRound();
   });
});
