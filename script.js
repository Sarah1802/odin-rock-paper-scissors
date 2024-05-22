let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 10));

    if (randomNum >= 7) {
        return "scissors";
    } else if (randomNum <= 3) {
        return "rock";
    } else {
        return "paper";
    }
}

function cleanString(str) {
    str = str.replaceAll(" ", "");
    str = str.toLowerCase();
    return str;
}

function getHumanChoice() {
    let choice = prompt("Your Turn");

    let clean_choice = cleanString(choice);

    while (clean_choice != "scissors" && clean_choice != "rock" && clean_choice != "paper") {
        choice = prompt("Invalid Choice");
        clean_choice = cleanString(choice);
    }

    return clean_choice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log(`Tie`);
        return;
    }

    switch (humanChoice) {

        case "scissors" :
            if (computerChoice == "rock") {
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            } else {
                humanScore++;
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            }
            return;
        case "rock" :
            if (computerChoice == "paper") {
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            } else {
                humanScore++;
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            }
            return;
        case "paper" :
            if (computerChoice == "scissors") {
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            } else {
                humanScore++;
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            }
            return;
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        let c = getComputerChoice();
        let h = getHumanChoice();

        console.log(`Round: ${(i+1)} \n`);
        playRound(h, c);
    }

    if (humanScore > computerScore) {
        console.log("\n You win! \n\n");
    } else if (humanScore == computerScore) {
        console.log("\n Tied! \n\n");
    } else {
        console.log("\n You lose! \n\n");
    }

    console.log(`Your Score: ${humanScore} \n`);
    console.log(`Computer Score: ${computerScore}`);

    return;
}




