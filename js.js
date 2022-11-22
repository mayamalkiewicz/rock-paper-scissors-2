//1.  Function which generates the random choice of computer...
function computerRandomChoice(x) {
    return Math.floor(Math.random() * x);
  }
  
//console.log(computerRandomChoice(3));
// expected output: 0, 1 or 2

// 1. ...the numerical output 0,1,2.
let computerWeaponAssignment = computerRandomChoice(3)
// console.log(computerWeaponAssignment);


//2. Assigning to the variable the output of computer choice to the tree particular types of weapon: rock, paper or scissors.
function assignment() {
    switch (computerWeaponAssignment) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
        default:
            console.log("There is some problem.");
    }
}

let computer = assignment();
   
//3. Function which takes the input from player.
  function playerChoice(weapon) {
    return weapon.toUpperCase();
  }
   

let playerWeaponChoice = playerChoice("rock"); // <--write your choice in place "weapon" (paper, scissors or rock)

let player = playerWeaponChoice;
  
//4. Function checks cases if the player is the winner or the computer is the winner or if it is the tie.
function thePlay(computer, player) {
    console.log(`The computer choice is: ${assignment()}`);
    console.log(`You have chosen ${player}`);


        if (computer === player) {
            return "TIE!";
        } else if (computer === "ROCK" && player === "PAPER") { 
            return "You won!";
        } else if (computer === "SCISSORS" && player === "ROCK") {
            return "You won!";
        } else if (computer === "SCISSORS" && player === "PAPER") {
            return "Computer won!";
        } else if (computer === "ROCK" && player === "SCISSORS") {
            return "Computer won!";
        } else if (computer === "PAPER" && player === "SCISSORS") {
            return "You won!";
        } else if (computer === "PAPER" && player === "ROCK") {
            return "Computer won!";
        } else {
            return "You won!";
        }
}

console.log(thePlay(computer, player));