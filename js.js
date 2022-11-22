//1.  Function which generates the random choice of computer...
function computerRandomChoice(x) {
    return Math.floor(Math.random() * x);
  }
  
  //console.log(computerRandomChoice(3));
  // expected output: 0, 1 or 2
  // works

  // 1. ...the numerical output 0,1,2.
  let computerWeaponAssignment = computerRandomChoice(3)
  // console.log(computerWeaponAssignment);
  //works


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
            console.log("TIE!");
        } else if (computer === "ROCK" && player === "PAPER") { 
            console.log("You won!");
        } else if (computer === "SCISSORS" && player === "ROCK") {
            console.log("You won!");
        } else if (computer === "SCISSORS" && player === "PAPER") {
            console.log("Computer won!");
        } else if (computer === "ROCK" && player === "SCISSORS") {
            console.log("Computer won!");
        } else if (computer === "PAPER" && player === "SCISSORS") {
            console.log("You won!");
        } else if (computer === "PAPER" && player === "ROCK") {
            console.log("Computer won!");
        } else {
            console.log("You won!");
        }
}

thePlay(computer, player);