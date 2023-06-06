// Create funtion for computer choice.
// Declare computer choice selections.
// Return results.
    function getComputerChoice () { 
        let computerChoice = ["Rock", "Paper", "Scissors"]; 
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] 
    }
    
//console.log(getComputerChoice()); check point

// Declare computer selection.
// Declare player choice. Must be case insensitive.
    let computerSelection = (getComputerChoice()); 

// console.log(computerSelection); check point

    let playerSelection = ["ROCK", "Rock", "rock", "PAPER", "Paper", "paper", "SCISSORS", "Scissors", "scissors"];    
    
//Ask player for their guess.   
    let game = prompt("Rock, Paper, Scissors, Shoot!");     

// Create round 1 to include player & computer.
// Create 5-round game. 
     for(i=0; i<5;i++) { 
        if(playerSelection == "ROCK" || "Rock" || "rock" && computerSelection =="Scissors"){
            alert("You win! Rock beats Scissors");
        }else if
            (playerSelection == "ROCK" || "Rock" || "rock" && computerSelection =="Paper"){
            alert("You lose! Paper beats Rock");
        }else if
            (playerSelection == "PAPER" || "Paper" || "paper" && computerSelection =="Rock"){
            alert("You win! Paper beats Rock");
        }else if
            (playerSelection == "PAPER" || "Paper" || "paper" && computerSelection =="Scissors"){
            alert("You lose! Scissors beats Paper");
        }else if
        (playerSelection == "SCISSORS"|| "Scissors"|| "scissors" && computerSelection =="paper"){
            alert("You win! Scissors beats Paper");
        }else if
        (playerSelection == "SCISSORS"|| "Scissors"|| "scissors" && computerSelection =="rock"){
            alert("You lose! Rock beats Scissors");
        }else 
            alert("It's a tie! Please try again.");
        }           
//console.log(i); check point
// Return result prompt to declare winner.
// Games must keep score. 
// Must report a winner & loser at the end. 
