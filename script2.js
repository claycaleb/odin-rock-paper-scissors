function getComputerChoice() {
    const computerChoice = Math.floor(Math.random()*3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else if (computerChoice == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Shoot! Type "rock", "paper", or "scissors" and click OK to play.');

    try {
        humanChoice = humanChoice.toLowerCase();
    } catch (TypeError) {
        console.log("Invalid input");
        return getHumanChoice();
    }

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    } else {
        console.log("Invalid input");
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
       
        if ((computerChoice == "rock" && humanChoice == "paper") || 
        (computerChoice == "paper" && humanChoice == "scissors") || 
        (computerChoice == "scissors" && humanChoice == "rock")) {
            humanScore++;
            console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You win the round!`);
            console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
            return;
        } else if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") || 
        (humanChoice == "scissors" && computerChoice == "rock")) {
            computerScore++;
            console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You lose the round!`);
            console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
            return;
        } else if (humanChoice == computerChoice) {
            console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. It's a tie.`)
            console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)
            return;
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore == computerScore) {
        console.log("You tied!");
    } else {
        console.log("You lose!")
    }
}

playGame();