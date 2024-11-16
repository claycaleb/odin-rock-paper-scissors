function getComputerChoice() {
    const computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function checkScore() {
    if (!(humanScore === 5) || !(computerScore === 5)   ) {
        return;
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore == computerScore) {
        console.log("You tied!");
    } else {
        console.log("You lose!")
    };
};

function playRound(humanChoice, computerChoice) {
    
    if ((computerChoice == "rock" && humanChoice == "paper") || 
    (computerChoice == "paper" && humanChoice == "scissors") || 
    (computerChoice == "scissors" && humanChoice == "rock")) {
        humanScore++;
        console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You win the round!`);
        console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
        checkScore();
        return;
    } else if ((humanChoice == "rock" && computerChoice == "paper") || 
    (humanChoice == "paper" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
        console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You lose the round!`);
        console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
        checkScore();
        return;
    } else if (humanChoice == computerChoice) {
        console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. It's a tie.`)
        console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
        checkScore();
        return;
    }
};

selectionButtons = document.querySelectorAll("#playerButtons > button");

selectionButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
   });
});

