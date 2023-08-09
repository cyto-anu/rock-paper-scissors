function getComputerChoice() {

    randomNumber=(Math.random());

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
        const output = "Its a tie! you both choose rock";
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        const output = "You lose! paper beats rock";
        return -1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        const output = "You win! rock beats scissors";
        return 1;
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        const output = "You win! paper beats rock";
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        const output = "Its a tie! you both choose paper";
        return 0;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        const output = "You lose! scissors beats paper";
        return -1;
    }

    else if (playerSelection === "scissors" && computerSelection === "rock"){
        const output = "You lose! rock beats scissors";
        return -1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        const output = "You win! scissors beats paper";
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        const output = "Its a tie! you both choose scissors";
        return 0;
    }

}


function game() {

    //playerSelection = window.prompt("What ya choosing?");
    const roundOne = playRound (playerSelection, getComputerChoice()); 
    scoreOne = Number(roundOne);
    console.log(scoreOne);
    
    /*
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
    } */
}

//Here I add event selectors to each button:

/*
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
*/

const buttons = document.querySelectorAll(".button");
const choices = document.querySelector('.choices')
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');

let player_score = 0;
let computer_score = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection=button.id;
        if (playRound(playerSelection,comSel = getComputerChoice()) === 1) {
            player_score++;
            console.log("you: "+playerSelection+" bot: "+comSel);
            choices.textContent = "Nice! "+playerSelection+" beats "+comSel;

        } else if (playRound(playerSelection,comSel = getComputerChoice()) === -1) {
            computer_score++;
            console.log("you: "+playerSelection+" bot: "+comSel);
            choices.textContent = ":( "+playerSelection+" loses to "+comSel;

        } else if (playRound(playerSelection,comSel = getComputerChoice()) === 0) {
            computer_score;
            player_score;
            console.log("you: "+playerSelection+" bot: "+comSel);
            choices.textContent = "what a game, you both chose "+playerSelection;
        }
        playerScore.textContent = "player = " + player_score;
        computerScore.textContent = "computer = "+ computer_score;

        if (player_score >= 5) {
            playerScore.textContent = "You've Won! Quick, destory all the H100's you can find";
            computerScore.textContent = "";
            choices.textContent = "";
        }
        if (computer_score >= 5) {
            computerScore.textContent = "You've Lost! Now you must look into the orb";
            playerScore.textContent = "";
            choices.textContent = "";
        }
    });
    
});

