    function getComputerChoice() { 
        let computerChoice = ['rock', 'paper', 'scissors']; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }

    const playerButtons = document.querySelectorAll("button");
        playerButtons.forEach((button) => {
        button.addEventListener("click", playRound)
        });


    let playerScore = 0;
    let computerScore = 0;
        
        function updateScore() {
            playerScore += 0;
            console.log("Player Score:", playerScore);
            computerScore += 0;
            console.log("Computer Score:", computerScore);     
        }              
    
    function playRound(e) {
        const computerSelection = getComputerChoice();

            if (e.target.id === computerSelection) {
                updateScore();
                return "It's a tie! Please try again.";
            } else if(e.target.id === "rock" && computerSelection ==="scissors") {
                playerScore += 1;
                computerScore += 0;
                return "You win! Rock beats Scissors.";
            } else if(e.target.id === "rock" && computerSelection ==="paper") {      
                playerScore += 0;
                computerScore += 1;
                return "You lose! Paper beats Rock.";
            } else if(e.target.id === "paper" && computerSelection ==="rock") { 
                playerScore += 1;
                computerScore += 0;
                return "You win! Paper beats Rock.";
            } else if(e.target.id === "paper" && computerSelection ==="scissors") {
                playerScore += 0;
                computerScore += 1;
                return "You lose! Scissors beat Paper.";
            } else if(e.target.id === "scissors" && computerSelection ==="paper") {
                playerScore += 1;
                computerScore += 0;
                return "You win! Scissors beat Paper.";
            } else if(e.target.id === "scissors" && computerSelection ==="rock") {
                playerScore += 0;
                computerScore += 1;9
                return "You lose! Rock beats Scissors.";
            } else {
                return "Invalid Input";
            }
    }     
    

    /*
        // Create a 5-round game                   
        function game() {
            for (let i = 0; i < 5; i++){
                console.log(playRound());
            }

        } 

        game(); // Call the function to initiate the game.
        updateScore();
        if (playerScore >= 3) {
            console.log("You win! Human beats Robot!");
            } else if(playerScore === 2 && computerScore === 2) {
            console.log("It's a tie! Would you like to try again?");
            } else {
            console.log("You lose! Robot beats Human.");
        } 
          
*/

    
