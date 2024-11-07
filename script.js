const choices = ["Rock", "Paper", "Scissors"];


function playGame() {
    let userSelection = +prompt("Shoot! Select your weapon: Rock (1), Paper (2), or Scissors (3)") - 1;
    let cpuSelection = Math.floor(Math.random()*3);

    if (choices[userSelection] == choices[cpuSelection - 1]) {
        console.log(`You lose! Computer chose ${choices[cpuSelection]}. You chose ${choices[userSelection]}. ${choices[cpuSelection]} beats ${choices[userSelection]}.`);
        playAgain();
    } else if (choices[cpuSelection] == choices[userSelection - 1]) {
        console.log(`You win! You chose ${choices[userSelection]}. Computer chose ${choices[cpuSelection]}. ${choices[userSelection]} beats ${choices[cpuSelection]}.`);
        playAgain();
    } else {
        console.log(`It's a tie! You chose ${choices[userSelection]}. Computer chose ${choices[cpuSelection]}.`)
        playAgain();
    }
}

function playAgain() {
    text = "Press OK to play again."
    if (confirm(text) == true) {
        playGame()
    }
}

playGame();