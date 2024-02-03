
const getComputerChoice = function(){
    const randNum = Math.floor(Math.random()*3);
    let computerChoice = "";
    
    if (randNum === 2){computerChoice = "rock"};
    if (randNum === 1){computerChoice = "paper"};
    if (randNum === 0){computerChoice = "scissors"};
    return computerChoice;
}


const playRound = function(rpsButton){
    const playerSelection = rpsButton
    const computerSelection = getComputerChoice()
    console.log("player:", playerSelection," vs ", "pc:", computerSelection);

    let winner ="";    
    //ties
    if(playerSelection === computerSelection){
        winner = "tie"
        return winner
    }

    //player win
    if(
        playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "paper"
        || playerSelection === "paper" && computerSelection === "rock"
    ){
        winner = "player";
        return winner
    }
    //rest of cases, computer wins
    else{
        winner = "computer";
        return winner
    }
}


const playGame = function(){
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

//Event listeners for 3 buttons, pass respective class to playRound()
const buttons = document.querySelectorAll("button")
buttons.forEach((button)=> 
  button.addEventListener("click", (e)=>{
    const rpsButton = e.target.className
    const winner = playRound(rpsButton)
    console.log(`Round(${round})`);
    //Increase score
    if(winner === "player"){playerScore++}
    else if(winner === "computer") {computerScore++};
    round++;
    
    updateDisplay(playerScore, computerScore, round)
  })  
)

//Display score
//Display choices
//Display results
const updateDisplay = function(playerScore, computerScore, round, ){
    const score = document.querySelector(".score");
    const choice = document.querySelector(".choice");
    const result = document.querySelector(".result");

    score.textContent = `Round ${round} - Player: ${playerScore}, Computer: ${computerScore}`
}
        
}

playGame()
