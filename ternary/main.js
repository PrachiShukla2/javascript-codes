// syntax
// condition ?iftrue:iffalse;
let soup ="tomato soup";
let response = soup ?"yes,we have":"no we don't have";
console.log(response);

let playerone = "rock";
let playertwo = "scissors";
let result= playerone ===playertwo
?   "It's a tie!" 
:    playerone ==="rock"&& playertwo ==="paper"
?   "playertwo wins"
:    playerone==="paper" && playertwo==="scissors"
?   "player one wins"
:    playerone ==="scissors"&& playertwo==="rock"
?   "player two wins"
:"Invalid input!";
console.log(result);
