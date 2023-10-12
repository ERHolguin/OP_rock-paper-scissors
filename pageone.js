    function getComputerChoice() { 
        let computerChoice = ['rock', 'paper', 'scissors']; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }

    let clickCount = 0;
    let clickCountDisplay = document.getElementById('clickCount');
    const playerButtons = document.querySelectorAll('button');
        playerButtons.forEach((button) => {
            button.addEventListener('click', playRound)
            });
        playerButtons.forEach((button) => {
            button.addEventListener('click', updateScore)
            });


        /*playerButtons.forEach((button) => {
            button.removeEventListener('click', playRound)
            });
        playerButtons.forEach((button) => {
            button.removeEventListener('click', updateScore)
            });*/
        
    let playerScore = 0;
    let computerScore = 0;

   function updateScore() {
        playerScore += 0;
            //console.log('Player Score: ', playerScore);
        computerScore += 0;
            //console.log('Computer Score: ', computerScore);
    }

    function playRound(e) {
        const computerSelection = getComputerChoice();
        const playerSelection = e.target.id
        const playerScorePara = document.getElementById('playerScorePara').innerText = playerScore;
        const computerScorePara = document.getElementById('computerScorePara').innerText = computerScore;
        clickCount++;
        clickCountDisplay.innerText = clickCount;

            if (playerSelection === computerSelection) {
                updateScore();
                return 'It/s a tie! Please try again.';
            } else if(playerSelection === 'rock' && computerSelection ==='scissors') {
                playerScore += 1;
                computerScore += 0;
                return 'You win! Rock beats Scissors.';
            } else if(playerSelection === 'rock' && computerSelection ==='paper') {      
                playerScore += 0;
                computerScore += 1;
                return 'You lose! Paper beats Rock.';
            } else if(playerSelection === 'paper' && computerSelection ==='rock') { 
                playerScore += 1;
                computerScore += 0;
                return 'You win! Paper beats Rock.';
            } else if(playerSelection === 'paper' && computerSelection ==='scissors') {
                playerScore += 0;
                computerScore += 1;
                return 'You lose! Scissors beat Paper.';
            } else if(playerSelection === 'scissors' && computerSelection ==='paper') {
                playerScore += 1;
                computerScore += 0;
                return 'You win! Scissors beat Paper.';
            } else if(playerSelection === 'scissors' && computerSelection ==='rock') {
                playerScore += 0;
                computerScore += 1;
                return 'You lose! Rock beats Scissors.';
            } else {
                return 'Invalid Input';
            }
            
    }
    /*
    function endGame(e) {
        if (clickCount === clicks) {
            playerButtons.forEach((button) => {
            button.removeEventListener('click', playRound)
            });
        playerButtons.forEach((button) => {
            button.removeEventListener('click', updateScore)
            });
        }
    }

    removeEventListenerAfterClicks(button, 'click', endGame, 5);


        // give results
                if (playerScore >= 3) {
            console.log('You win! Human beats Robot!');
            } else if(playerScore === 2 && computerScore === 2) {
            console.log('It/s a tie! Would you like to try again?');
            } else if (computerScore === 3) {
            console.log('You lose! Robot beats Human.');
        // then give player option to retsart the game
        // reset score updater to zero 

        } 
    }


        // Create a 5-round game                   
        function game() {
            for (let i = 0; i < 5; i++){
                console.log(playRound());
            }

        } 

        game(); */


          

    
