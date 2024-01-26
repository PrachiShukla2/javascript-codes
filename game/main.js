
let game = confirm("will u play");
if( game){
    let choice = prompt("please enter \n stone, paper, scissor");
    if(choice ==="rock"||choice ===" paper"||choice ==="scissor")
    {
     let computerChoice =Math.floor(Math.random()*3 +1);
     let computer = computerChoice === 1
              ?"rock"
              :computerChoice === 2
              ?"paper"
              :"scisssor";

              let result = 
              playerOne === computer
              ? " playerOne: ${playerOne}\nComputer: ${computer}it's a draw!"
              :playerOne === "rock" && computer === "paper"
              ?"computer wins"
              :playerOne==="paper" && computer==="scissor"
              ?"computer wins "
              :playerOne === "scissor" && computer ==="rock"
              ?"computer wins"
              : " playerOne win!";
              alert(result);

             let playagain = confirm("play again?"); 
             
               

    }


}