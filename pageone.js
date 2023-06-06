// Pseudocode


    function getComputerChoice () { // create funtion for computer choice
        let computerChoice = ["Rock", "Paper", "Scissors"]; // declare computer choice selections
        return computerChoice[Math.floor(Math.random() * computerChoice.length)] // return results
    }
    
    console.log(getComputerChoice());

    let computerSelection = (getComputerChoice()); // declare computer selection
    let playerSelection= "ROCK" || "Rock" || "rock"
    || "PAPER" || "Paper" || "paper" || "SCISSORS" ||
    "Scissors" || "scissors"; // Declare player choice. Must be case insensitive.
    
    let game = prompt("Rock, Paper, Scissors, Shoot!"); //ask player for their guess.    


// Create round 1 to include player & computer.
// Return result prompt to declare winner.
     for (i=0; i<5;i++) { // Create 5-round game 
        if (playerSelection == "ROCK" || "Rock" || "rock") 
        & computerSelection =="Scissors"{

        }
     }           
// Games must keep score 
// Must report a winner & loser at the end. 
