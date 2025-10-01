


function playRound(humanChoice, computerChoice ) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock")
        return "Computer"
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors")
        return "human"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper")
        return "computer"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock")
        return "human"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper")
        return "human"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors")
        return "computer"
    } else {
        console.log("It's a tie! Try again if you dare!")
        return "tie"
    }
    
}


function getCumpterChoice() {
    // get random number 0-2
    randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

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


let humanCount = 0;
let computerCount = 0;
let gameCount = 0;
while (gameCount != 5) {
    const humanSelection =  getHumanChoice();
    const computerSelection = getCumpterChoice();
    let result = playRound(humanSelection, computerSelection);

    if (result === "human") {
        humanCount += 1;
    } else if (result == "computer") {
        computerCount += 1;
    } 

    gameCount += 1;



}

console.log(`Thank you for playing.\nTotal Human wins ${humanCount}\nTotal Computer wins ${computerCount}`)