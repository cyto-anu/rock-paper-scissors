function getComputerChoice() {
    randomNumber=(Math.random())

    if (randomNumber < (1/3)) {
        return "rock"
    } else if (randomNumber >= (2/3)) {
        return "scissors"
    } else {
        return "paper"
    }
}

console.log(getComputerChoice())