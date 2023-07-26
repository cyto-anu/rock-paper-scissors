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



function playRound (playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "rock"){
        return "Its a tie! you both choose rock";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! paper beats rock";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! rock beats scissors";
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! paper beats rock";
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        return "Its a tie! you both choose paper";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! scissors beats paper";
    }

    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! rock beats scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! scissors beats paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "Its a tie! you both choose scissors";
    }

}

function game() {
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
}
