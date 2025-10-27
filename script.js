


function playRound(humanChoice, computerChoice ) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        document.getElementById("log-box").textContent = "You lose! Paper beats Rock";
        console.log("You lose! Paper beats Rock")
        return "computer"
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        document.getElementById("log-box").textContent = "You win! Rock beats Scissors";
        console.log("You win! Rock beats Scissors")
        return "human"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        document.getElementById("log-box").textContent = "You lose! Scissors beats Paper";
        console.log("You lose! Scissors beats Paper")
        return "computer"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        document.getElementById("log-box").textContent = "You win! Paper beats Rock";
        console.log("You win! Paper beats Rock")
        return "human"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        document.getElementById("log-box").textContent = "You win! Scissors beats Paper";
        console.log("You win! Scissors beats Paper")
        return "human"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        document.getElementById("log-box").textContent = "You lose! Rock beats Scissors";
        console.log("You lose! Rock beats Scissors")
        return "computer"
    } else {
        document.getElementById("log-box").textContent = "It's a tie! Try again if you dare!";
        console.log("It's a tie! Try again if you dare!")
        return "tie"
    }
    
}


function getComputerChoice() {
    // get random number 0-2
    let randomNumber = Math.floor(Math.random() * 3)

    // map numbers to choices
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }

}

function getHumanChoice() {
    let response = prompt("Please enter Rock, Paper, or Scissors: ")

    return response.toLowerCase()
}

/*

let humanCount = 0;
let computerCount = 0;
let gameCount = 0;
while (gameCount != 5) {
    const humanSelection =  getHumanChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);

    if (result === "human") {
        humanCount += 1;
    } else if (result == "computer") {
        computerCount += 1;
    } 

    gameCount += 1;



}

console.log(`Thank you for playing.\nTotal Human wins: ${humanCount}\nTotal Computer wins: ${computerCount}`)

*/

/*

let humanCount = 0;
let computerCount = 0;
let gameCount = 0;
while (gameCount != 5) {

    if (result === "human") {
        humanCount += 1;
    } else if (result == "computer") {
        computerCount += 1;
    } 

    gameCount += 1;



}

console.log(`Thank you for playing.\nTotal Human wins: ${humanCount}\nTotal Computer wins: ${computerCount}`)

*/