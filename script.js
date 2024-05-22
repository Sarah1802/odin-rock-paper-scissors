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

function getHumanChoice() {
    let choice = prompt("Your Turn");

    let clean_choice = cleanString(choice);

    while (clean_choice != "scissors" && clean_choice != "rock" && clean_choice != "rock") {
        choice = prompt("Invalid Choice");
        clean_choice = cleanString(choice);
    }

    return clean_choice;
}

function cleanString(str) {
    str = str.replaceAll(" ", "");
    str = str.toLowerCase();
    return str;
}