// Create funtion for computer choice; declare computer choice selections; return results.
    function getComputerChoice() { 
        let computerChoice = ["Rock", "Paper", "Scissors"]; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }
   //console.log(getComputerChoice());

// Write a function that plays a single round of Rock Paper Scissors. 
    function playRound(playerSelection, computerSelection) {
        return (playerSelection, computerSelection);

    }
    
        const playerSelection = "rock" || "paper" || "scissors";
        const computerSelection = getComputerChoice();
    //console.log(playRound(playerSelection, computerSelection));

   
//Make function's playerSelection parameter case-insensitive
