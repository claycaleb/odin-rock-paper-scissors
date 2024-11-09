const choices = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let humanScore = 0;

function checkWin() {
    if (humanScore == 3) {
        alert("You won!");
        playAgain();
    }

    if (computerScore == 3) {
        alert("You lost!");
        playAgain();
    }
}

function checkIfInvalidInput(input) {
    if (input >= 1 && input <= 3) {
        return input;
    } else {
        input = prompt("Invalid input. Try again. Select your weapon: Rock (1), Paper (2), or Scissors (3)");
        return checkIfInvalidInput(input);
    }
}

function playRound() {
    let input = prompt("Shoot! Select your weapon: Rock (1), Paper (2), or Scissors (3)");

    input = checkIfInvalidInput(input);
    
    let humanSelection = +input - 1;
    let computerSelection = Math.floor(Math.random()*3);

    let humanChoice = choices[humanSelection];
    let computerChoice = choices[computerSelection];

    if (humanChoice == choices.at(computerSelection - 1)) {
        computerScore++;
        alert(`You lose the round! Computer chose ${computerChoice}. You chose ${humanChoice}. ${computerChoice} beats ${humanChoice}.\nYou: ${humanScore} | Computer: ${computerScore}`);
        checkWin();
        playRound();
    } else if (computerChoice == choices.at(humanSelection - 1)) {
        humanScore++
        alert(`You win the round! You chose ${humanChoice}. Computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}.\nYou: ${humanScore} | Computer: ${computerScore}`);
        checkWin();
        playRound();
    } else if (humanSelection == computerSelection) {
        alert(`It's a tie! You chose ${humanChoice}. Computer chose ${computerChoice}.\nYou: ${humanScore} | Computer: ${computerScore}`);
        playRound();
    } 
}

function playAgain() {
    text = "Press OK to play again."
    if (confirm(text) == true) {
        computerScore = 0;
        humanScore = 0;
        playRound();
    } else if (confirm(text) === null) {
        return;
    }
}

playRound();