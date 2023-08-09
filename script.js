function getComputerChoice() {

    randomNumber=(Math.random())

    if (randomNumber < (1/3)) {
        return "rock";
    } else if (randomNumber >= (2/3)) {
        return "scissors";
    } else {
        return "paper";
    }


}

const computerSelection = getComputerChoice()

function playRound (playerSelection, computerSelection) {


    if (playerSelection === "rock" && computerSelection === "rock"){
        console.log("Its a tie! you both choose rock");
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! paper beats rock");
        return -1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! rock beats scissors");
        return 1;
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win! paper beats rock");
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("Its a tie! you both choose paper");
        return 0;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! scissors beats paper");
        return -1;
    }

    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! rock beats scissors");
        return -1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! scissors beats paper");
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("Its a tie! you both choose scissors");
        return 0;
    }

}


function game() {

    //playerSelection = window.prompt("What ya choosing?");
    const roundOne = playRound (playerSelection, getComputerChoice()); 
    scoreOne = Number(roundOne);
    console.log(scoreOne);
    
    //playerSelection = window.prompt("What ya choosing?");
    const roundTwo = playRound (playerSelection, getComputerChoice());
    scoreTwo = scoreOne + Number(roundTwo);
    console.log(scoreTwo);

    //playerSelection = window.prompt("What ya choosing?");
    const roundThree = playRound (playerSelection, getComputerChoice());
    scoreThree = scoreTwo + Number(roundThree);
    console.log(scoreThree);

    //playerSelection = window.prompt("What ya choosing?");
    const roundFour = playRound (playerSelection, getComputerChoice());
    scoreFour = scoreThree + Number(roundFour);
    console.log(scoreFour);

    //playerSelection = window.prompt("What ya choosing?");
    const roundFive = playRound (playerSelection, getComputerChoice());
    scoreFive = scoreFour + Number(roundFive);
    console.log(scoreFive);
    

    if (scoreFive > 0) {
        console.log("You won the 5 rounds!!")
    } else if (scoreFive < 0) {
        console.log("You lost the 5 rounds :(")
    } else if (scoreFive == 0) {
        console.log("youve tied!!!!!!!")
    }
}

//Here I add event selectors to each button:

const rockPress = document.querySelector(".rockBtn");
const paperPress = document.querySelector(".paperBtn");
const scissorsPress = document.querySelector(".scissorsBtn");

rockPress.addEventListener('click',() => {
    playerSelection="rock";
    console.log(playerSelection);
});
paperPress.addEventListener('click',() => {
    playerSelection="paper";
    console.log(playerSelection);
});
scissorsPress.addEventListener('click',() => {
    playerSelection="scissors";
    console.log(playerSelection);
});