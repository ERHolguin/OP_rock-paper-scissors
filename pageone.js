    function getComputerChoice() { 
        let computerChoice = ['rock', 'paper', 'scissors']; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }

    let playerButtons = ['rock', 'paper', 'scissors'];
       for(let i =0; i < playerButtons.length; i++) {
        document.getElementById(playerButtons[i]).addEventListener('click', playRound);
       }
       for(let i =0; i < playerButtons.length; i++) {
        document.getElementById(playerButtons[i]).addEventListener('click', declareWinnerAndLoser);
       }
        
    let playerScore = 0;
    let computerScore = 0;

    function declareWinnerAndLoser() {
    let playerScorePara = document.getElementById('playerScorePara').innerText = playerScore;
    let computerScorePara = document.getElementById('computerScorePara').innerText = computerScore;
    let resultMessage = document.getElementById('resultMessage');
        playerScore += 0;
        computerScore += 0;
            if (playerScore === 5) {
                for(let i =0; i < playerButtons.length; i++) {
                    document.getElementById(playerButtons[i]).disabled = true }
                for(let i =0; i < playerButtons.length; i++) {
                    document.getElementById(playerButtons[i]).addEventListener('click', playRound);
                   }
                for(let i =0; i < playerButtons.length; i++) {
                    document.getElementById(playerButtons[i]).addEventListener('click', declareWinnerAndLoser);
                   }
                resultMessage.innerText = 'You win! Human beats Robot!';
            } else if (computerScore === 5) {
                for(let i =0; i < playerButtons.length; i++) {
                    document.getElementById(playerButtons[i]).disabled = true }
                for(let i =0; i < playerButtons.length; i++) {
                    document.getElementById(playerButtons[i]).addEventListener('click', playRound);
                   }
                   for(let i =0; i < playerButtons.length; i++) {
                    document.getElementById(playerButtons[i]).addEventListener('click', declareWinnerAndLoser);
                   }
                resultMessage.innerText ='You lose! Robot beats Human.';
            } 
        }

    function playRound(e) {
        const computerSelection = getComputerChoice();
        const playerSelection = e.target.id
        let playRoundMessage = document.getElementById('playRoundMessage');
            if (playerSelection === computerSelection) {
                playerScore += 0;
                computerScore += 0;
                playRoundMessage.innerText = 'It\'s a tie! Please try again.';
            } else if(playerSelection === 'rock' && computerSelection ==='scissors') {
                playerScore += 1;
                computerScore += 0;
                playRoundMessage.innerText = 'You win! Rock beats Scissors.';
            } else if(playerSelection === 'rock' && computerSelection ==='paper') {      
                playerScore += 0;
                computerScore += 1;
                playRoundMessage.innerText = 'You lose! Paper beats Rock.';
            } else if(playerSelection === 'paper' && computerSelection ==='rock') { 
                playerScore += 1;
                computerScore += 0;
                playRoundMessage.innerText = 'You win! Paper beats Rock.';
            } else if(playerSelection === 'paper' && computerSelection ==='scissors') {
                playerScore += 0;
                computerScore += 1;
                playRoundMessage.innerText = 'You lose! Scissors beat Paper.';
            } else if(playerSelection === 'scissors' && computerSelection ==='paper') {
                playerScore += 1;
                computerScore += 0;
                playRoundMessage.innerText = 'You win! Scissors beat Paper.';
            } else if(playerSelection === 'scissors' && computerSelection ==='rock') {
                playerScore += 0;
                computerScore += 1;
                playRoundMessage.innerText = 'You lose! Rock beats Scissors.';
            }
            
    }

    function resetScore() {
        playerScore = 0;
        computerScore = 0;
        let playerScorePara = document.getElementById('playerScorePara').innerText = playerScore;
        let computerScorePara = document.getElementById('computerScorePara').innerText = computerScore;
    }

    function resetGame() {
        for(let i =0; i < playerButtons.length; i++) {
            document.getElementById(playerButtons[i]).disabled = false }
        for(let i =0; i < playerButtons.length; i++) {
        document.getElementById(playerButtons[i]).addEventListener('click', playRound);
        }
        for(let i =0; i < playerButtons.length; i++) {
        document.getElementById(playerButtons[i]).addEventListener('click', declareWinnerAndLoser);
        }  
        playerScore += 0;
        computerScore += 0;   
        }

    let gameResetButton = document.getElementById('playAgain');
    gameResetButton.addEventListener('click', resetScore);
    gameResetButton.addEventListener('click', resetGame);

          

    
