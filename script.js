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