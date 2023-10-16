    function getComputerChoice() { 
        let computerChoice = ['rock', 'paper', 'scissors']; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }

    const playerButtons = document.querySelectorAll('button');
        playerButtons.forEach((button) => {
            button.addEventListener('click', playRound)
            });
        playerButtons.forEach((button) => {
            button.addEventListener('click', updateScore)
            });
        
    let playerScore = 0;
    let computerScore = 0;

   function updateScore() {
    let resultMessage = document.getElementById('resultMessage');
    const playerScorePara = document.getElementById('playerScorePara').innerText = playerScore;
    const computerScorePara = document.getElementById('computerScorePara').innerText = computerScore;
        playerScore += 0;
        computerScore += 0;
            if (playerScore === 5) {
                playerButtons.forEach((button) => {
                    button.disabled = true });
                playerButtons.forEach((button) => {
                    button.removeEventListener('click', playRound)
                    });
                playerButtons.forEach((button) => {
                    button.removeEventListener('click', updateScore)
                    });
                resultMessage.innerText = 'You win! Human beats Robot!';
            } else if (computerScore === 5) {
                playerButtons.forEach((button) => {
                    button.disabled = true });
                playerButtons.forEach((button) => {
                    button.removeEventListener('click', playRound)
                    });
                playerButtons.forEach((button) => {
                    button.removeEventListener('click', updateScore)
                    });
                resultMessage.innerText ='You lose! Robot beats Human.';
            } 
        }

    function playRound(e) {
        const computerSelection = getComputerChoice();
        const playerSelection = e.target.id

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

   what needs to happen next?
// give final results & announce a winner
// then disbale player buttons 
// then give player option to restart the game
// reset score updater to zero

*/


          

    
