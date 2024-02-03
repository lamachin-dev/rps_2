
const getComputerChoice = function(){
    const randNum = Math.floor(Math.random()*3);
    let computerChoice = "";
    
    if (randNum === 2){computerChoice = "rock"};
    if (randNum === 1){computerChoice = "paper"};
    if (randNum === 0){computerChoice = "scissors"};
    return computerChoice;
}

const updateUIScore = function(playerScore, computerScore, round, computerChoice, playerChoice  ){
    const score = document.querySelector(".score");
    score.textContent = `Round ${round} - Player: ${playerScore}, Computer: ${computerScore}`
}

const updateUIChoices = function(computerChoice, playerChoice){
    const choice = document.querySelector(".choice");
    choice.textContent = `Computer choice ${computerChoice}, Player choice ${playerChoice}`
}


const playRound = function(rpsButton){
    const playerSelection = rpsButton
    const computerSelection = getComputerChoice()
    // console.log("player:", playerSelection," vs ", "pc:", computerSelection);
    // updateDisplay(undefined,undefined,undefined,computerSelection,playerSelection)   
    updateUIChoices(computerSelection, playerSelection)
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

    buttons.forEach((button)=> 
  button.addEventListener("click", (e)=>{
if(round === 6) {return};

    const rpsButton = e.target.className
    const winner = playRound(rpsButton)
    console.log(`Round(${round})`);
    //Increase score
    if(winner === "player"){playerScore++}
    else if(winner === "computer") {computerScore++};
    
    updateUIScore(playerScore, computerScore, round)
    round++;
  })

  //TODO: End game at round 5
)


        
}

playGame()
