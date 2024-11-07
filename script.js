const choices = ["Rock", "Paper", "Scissors"];

let userSelection = +prompt("Select your weapon: Rock (1), Paper (2), or Scissors (3)") - 1;
let cpuSelection = Math.floor(Math.random()*3);

if (choices[userSelection] == choices[cpuSelection - 1]) {
    console.log(`You lose! Computer chose ${choices[cpuSelection]}. You chose ${choices[userSelection]}. ${choices[cpuSelection]} beats ${choices[userSelection]}.`);
} else if (choices[cpuSelection] == choices[userSelection - 1]) {
    console.log(`You win! You chose ${choices[userSelection]}. Computer chose ${choices[cpuSelection]}. ${choices[userSelection]} beats ${choices[cpuSelection]}.`);
} else {
    console.log(`It's a tie! You chose ${choices[userSelection]}. Computer chose ${choices[cpuSelection]}.`)
}