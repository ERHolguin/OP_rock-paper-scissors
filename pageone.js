    // Create a funtion to generate computer choice.
    function getComputerChoice() { 
        let computerChoice = ["rock", "paper", "scissors"]; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }
        //console.log(getComputerChoice());

    // Request player input + make function's playerSelection parameter case-insensitive  
    const playerSelection = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();
    const computerSelection = getComputerChoice(); 

    //Write a function that plays a single round of Rock Paper Scissors with player + computer.
    function playRound(playerSelection, computerSelection) {
        return (playerSelection, computerSelection);
    }

    //Define game conditions.
                if (playerSelection === computerSelection) {
                    alert("It's a tie! Please try again");
            } else if(playerSelection === "rock" && computerSelection ==="scissors") {
                    alert("You win! Rock beats Scissors");
            } else if(playerSelection === "rock" && computerSelection ==="paper") {
                    alert("You lose! Paper beats Rock");
            } else if(playerSelection === "paper" && computerSelection ==="rock") { 
                    alert("You win! Paper beats Rock");
            } else if(playerSelection === "paper" && computerSelection ==="scissors") {
                    alert("You lose! Scissors beat Paper");
            } else if(playerSelection === "scissors" && computerSelection ==="paper") {
                    alert("You win! Scissors beat Paper");
            } else if(playerSelection === "scissors" && computerSelection ==="rock") {
                    alert("You lose! Rock beats Scissors");
            } else {
                    alert("Invalid Input");
            }

        //console.log (`${playerSelection}, ${computerSelection}`);

    
        // Create 5-round game.
  
    // Return result prompt to declare winner.
    // Games must keep score.
    // Must report a winner & loser at the end.




    
