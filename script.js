console.log("Hello world!")

function getCumpterChoice() {
    // get random number 0-2
    randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    // map numbers to choices
    if (randomNumber === 0) {
        return "Rock"
    } else if (randomNumber === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }

}
console.log (getCumpterChoice())