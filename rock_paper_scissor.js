const rps = ['rock','paper','scissor'];
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * rps.length);
    return rps[randomIndex];

}
// console.log(getComputerChoice());
const player = prompt('What is your name');

function getHumanChoice(i){
    let choosed = prompt(`Round${i} Write your choice!! current score is ${player}:${humanScore} computer's:${computerScore}`);
    if(choosed !== null){
        choosed = choosed.toLowerCase();
    }
    return choosed;
}

let rounds = Number(prompt('How many rounds you want to play??'));
console.log(typeof rounds);
if(typeof(rounds) !== "number"){
    alert('you entered a NaN lets assume you want to play just one round!')
    rounds =1;
}

for(i=1;i<rounds+1;i++){
    const humanSelection = getHumanChoice(i);
    const computerSelection = getComputerChoice();
    playround(humanSelection,computerSelection);
}

if(humanScore > computerScore){
    alert(`As score is ${player} : ${humanScore} computer's : ${computerScore}. \n Winner is ${player}`);
}else if(humanScore < computerScore){
    alert(`As score is ${player} : ${humanScore} computer's : ${computerScore}. \n Winner is computer`);
}else{
    alert('Its a Draw!!');
}




function playround(humanChoice,computerChoice){
    if(humanChoice==='rock' && computerChoice==='paper'){
        computerScore++;
        alert(`computer won this round!`);
    }else if (humanChoice==='paper' && computerChoice==='scissor'){
        computerScore++;
        alert(`computer won this round!`);
    }else if(humanChoice==='scissor' && computerChoice==='rock'){
        computerScore++;
        alert(`computer won this round!`);
    }else if(computerChoice==='rock' && humanChoice==='paper'){
        humanScore++;
        alert(`${player} won this round!`);
    }else if(computerChoice==='paper' && humanChoice==='scissor'){
        humanScore++;
        alert(`${player} won this round!`);
    }else if(computerChoice==='scissor' && humanChoice==='rock'){
        humanScore++;
        alert(`${player} won this round!`);
    }else{
        alert(`this round is draw`);
    }
   
}





