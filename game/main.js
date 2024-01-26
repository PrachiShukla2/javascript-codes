
let game = confirm("will u play");
if( game){
    let playerChoice = prompt("please enter \n rock, paper, scissor");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne ==="rock"||playerOne ==="paper"||playerOne ==="scissor")
        {
            let computerChoice = Math.floor(Math.random()*3 +1);
            let computer = computerChoice === 1
                     ?"rock"
                     :computerChoice === 2
                     ?"paper"
                     :"scisssor";
       
                     let result = 
                     playerOne === computer
                     ? "its a draw!"
                     :playerOne === "rock" && computer === "paper"
                     ?` playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins`
                     :playerOne==="paper" && computer==="scissor"
                     ?` playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins `
                     :playerOne === "scissor" && computer ==="rock"
                     ?` playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins`
                     : ` playerOne: ${playerOne}\nComputer: ${computer}\n playerOne wins`;
                     alert(result);
       
                    let playagain = confirm("play again?"); 
                    playagain ? location.reload(): alert("thankyou");
        }else{
        alert('invalid input please try again');

    }
}else{
    alert("you changed ur mind");

} } 
else{
    alert('maybe next tym');
}

    
  
             
               

    


