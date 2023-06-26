    // Create a funtion to generate computer choice.
    function getComputerChoice() { 
        let computerChoice = ['rock', 'paper', 'scissors']; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }
        // console.log(getComputerChoice());

        // Game must keep score.
        let playerScore = 0;
        let computerScore = 0;
    
        function updateScore() {
            playerScore += 0;
            console.log("Player Score:", playerScore);
            computerScore += 0;
            console.log("Computer Score:", computerScore);     
            }

    //Write a function that plays a single round of Rock Paper Scissors with player + computer.
    function playRound() {
        let userInput = prompt('Rock, Paper, Scissors, Shoot!'); // Request player input  
        const playerSelection = userInput?.toLowerCase(); // Make function's playerSelection parameter case-insensitive. Used chaining operator to throw off null errors.
        const computerSelection = getComputerChoice();
            //Define game conditions.                            
            if (playerSelection === computerSelection) {
                updateScore();
                return "It's a tie! Please try again";
            } else if(playerSelection === "rock" && computerSelection ==="scissors") {
                playerScore += 1;
                computerScore += 0;
                return "You win! Rock beats Scissors";
            } else if(playerSelection === "rock" && computerSelection ==="paper") {      
                playerScore += 0;
                computerScore += 1;
                return "You lose! Paper beats Rock";
            } else if(playerSelection === "paper" && computerSelection ==="rock") { 
                playerScore += 1;
                computerScore += 0;
                return "You win! Paper beats Rock";
            } else if(playerSelection === "paper" && computerSelection ==="scissors") {
                playerScore += 0;
                computerScore += 1;
                return "You lose! Scissors beat Paper";
            } else if(playerSelection === "scissors" && computerSelection ==="paper") {
                playerScore += 1;
                computerScore += 0;
                return "You win! Scissors beat Paper";
            } else if(playerSelection === "scissors" && computerSelection ==="rock") {
                playerScore += 0;
                computerScore += 1;
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
        updateScore();
        if (playerScore === 3) {
            console.log("You win! Human beats Robot!");
            } else if(playerScore === 2 && computerScore === 2) {
            console.log("It's a tie! Would you like to try again?");
            } else {
            console.log("You lose! Robot beats Human");
        } 
          




    
