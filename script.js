//Rock Paper Scissor

const ROCK = document.querySelector("#rock");
const PAPER = document.querySelector("#paper");
const SCISSOR = document.querySelector("#scissor");
const RESET = document.querySelector("#reset");
let player_input = null;
let computer_input = null;
let winner = 0; //1 is player wins
let player_score = 0;
let Computer_score = 0;


ROCK.onclick = () =>{
    player_input = 'rock';
    computer_input = Computer_input();
    Evaluate(player_input,computer_input);
    Update();
}
PAPER.onclick = () =>{
    player_input = 'paper';
    computer_input = Computer_input();
    Evaluate(player_input,computer_input);
    Update();
}
SCISSOR.onclick = () =>{
    player_input = 'scissor';
    computer_input = Computer_input();
    Evaluate(player_input,computer_input);
    Update();
}
RESET.onclick = ()=>{
    document.querySelector(".player_score").textContent = `Player Score : 0`;
    document.querySelector(".Computer_score").textContent = `Computer Score : 0`;
    document.querySelector(".vs").firstElementChild.textContent = `Player : null`;
    document.querySelector(".vs").lastElementChild.textContent = `Computer : null`;
    document.querySelector(".result").style.visibility = "hidden";
    document.querySelector(".Scores").style.visibility = "hidden";

}

function Update() {
    //making visible
    document.querySelector(".result").style.removeProperty("visibility");
    document.querySelector(".Scores").style.removeProperty("visibility");

    //inputs
    document.querySelector(".vs").firstElementChild.textContent = `Player : ${player_input}`;
    document.querySelector(".vs").lastElementChild.textContent = `Computer : ${computer_input}`;

    //results
    if(winner==1){
        document.querySelector(".result").textContent = "Player Wins!";
        player_score += 1;
    }
    else if(winner==0){
        document.querySelector(".result").textContent = "Computer Wins!";
        Computer_score += 1;
    }
    else{
        document.querySelector(".result").textContent = "Its a Tie!";
    }

    //Scores
    document.querySelector(".player_score").textContent = `Player Score : ${player_score}`;
    document.querySelector(".Computer_score").textContent = `Computer Score : ${Computer_score}`;

}

function Evaluate(player_input , Computer_input) {
    console.log(player_input,Computer_input);
    if(player_input=='rock' && Computer_input=='paper'){
        winner = 0;
    }
    else if(player_input=='paper' && Computer_input=='rock'){
        winner= 1;
    }
    else if(player_input=='paper' && Computer_input=='scissor'){
        winner= 0;
    }
    else if(player_input=='scissor' && Computer_input=='paper'){
        winner= 1;
    }
    else if(player_input=='rock' && Computer_input=='scissor'){
        winner=1;
    }
    else if(player_input=='scissor' && Computer_input=='rock'){
        winner= 0;
    }
    else{
        winner=null;
    }
}

function Computer_input() {
    let n = Math.floor(Math.random()*3);
    const choices = ['rock','paper','scissor'];
    return choices[n];
}
