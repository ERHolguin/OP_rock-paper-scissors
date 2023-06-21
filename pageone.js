    // Create a funtion to generate computer choice.
    function getComputerChoice() { 
        let computerChoice = ['rock', 'paper', 'scissors']; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }
        //console.log(getComputerChoice());

    //Write a function that plays a single round of Rock Paper Scissors with player + computer.
    function playRound() {
        let userInput = prompt('Rock, Paper, Scissors, Shoot!'); // Request player input  
        const playerSelection = userInput?.toLowerCase(); // Make function's playerSelection parameter case-insensitive. Used chaining operator to throw off null errors.
        const computerSelection = getComputerChoice();
            //Define game conditions.                            
            if (playerSelection === computerSelection) {
            return "It's a tie! Please try again";
            } else if(playerSelection === "rock" && computerSelection ==="scissors") {
            return "You win! Rock beats Scissors";
            } else if(playerSelection === "rock" && computerSelection ==="paper") {
            return "You lose! Paper beats Rock";
            } else if(playerSelection === "paper" && computerSelection ==="rock") { 
            return "You win! Paper beats Rock";
            } else if(playerSelection === "paper" && computerSelection ==="scissors") {
            return "You lose! Scissors beat Paper";
            } else if(playerSelection === "scissors" && computerSelection ==="paper") {
            return "You win! Scissors beat Paper";
            } else if(playerSelection === "scissors" && computerSelection ==="rock") {
            return "You lose! Rock beats Scissors";
            } else {
                return "Invalid Input";
            }
    }     
        // Create a 5-round game                   
        function game() {
            for (let i = 0; i < 5; i++){
                console.log(playRound());
            }
        }

        game(); // Call the function to initiate the game. 
    
 

    
                


    // Games must keep score.
    // Must report a winner & loser at the end.




    
