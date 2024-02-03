
const getComputerChoice = function(){
    const randNum = Math.floor(Math.random()*3);
    let computerChoice = "";
    
    if (randNum === 2){computerChoice = "rock"};
    if (randNum === 1){computerChoice = "paper"};
    if (randNum === 0){computerChoice = "scissors"};
    return computerChoice;
}


const playRound = function(){
    const playerSelection = prompt("type your choice:").toLowerCase()
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

    for(let i = 0; i < 5; i++){
        console.log(`Round(${round})`);
        //Increase score
        if(playRound() === "player"){playerScore++}
        else if(playRound() === "computer") {computerScore++};
        
        round++;
        console.log(`Result - Player:${playerScore} Computer:${computerScore}`);
    }

}

playGame()