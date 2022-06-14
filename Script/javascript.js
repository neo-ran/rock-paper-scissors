function playRound(playerSelection, computerSelection) {  
    if (playerSelection == 'rock') {
      if (computerSelection == 'scissors') {
        return 'wins';
      } else if (computerSelection == 'paper') {
        return 'loses';
      } else {
        return 'ties';
      } 
    }
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        return 'wins';
      } else if (computerSelection == 'scissors') {
        return 'loses';
      } else {
        return 'ties';
      } 
    }
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        return 'loses';
      } else if (computerSelection == 'paper') {
        return 'wins';
      } else {
        return 'ties';
      } 
    }
  }

function game(){
    const games = 5;
    let playerPoints = 0;
    let computerPoints = 0;
  
    for(let i = 0; i < games; i++) {
      let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  
      function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
      let computerSelection = computerPlay();
  
      let round = playRound(playerSelection, computerSelection);
      if(round === "wins"){
        playerPoints++;
        console.log("You Win!");
      } else if(round === "loses"){
        computerPoints++;
        console.log("You Lose!");
      } else if(round === "ties") {
        console.log("It's a tie!");
      } 
    }
  
    if(playerPoints > computerPoints){
      console.log('');
      console.log("You win! " + playerPoints + " beats " + computerPoints);
    } else {
      console.log("You lose! " + computerPoints + " beats " + playerPoints);
    }
}