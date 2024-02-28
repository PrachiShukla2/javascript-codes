var x =document.getElementById("myBtn");
x.addEventListener("mouseover",meraFunc);
x.addEventListener("click",meraDusraFunc);
x.addEventListener("mouseout",meraTisraFunc);
// x.addEventListener("mouseout",meraTisraFunc);


function meraFunc(){
    document.getElementById("demo").innerHTML +="pagal si h jab dekho piche padi rheti h  &#128527<br>";
}
function meraDusraFunc(){
    document.getElementById("demo").innerHTML +="ohh &#128540 phir?<br>";
}
function meraTisraFunc(){
    document.getElementById("demo").innerHTML +=" phir kya ...semester khatam hone ke baadd mam ko kidnap kr lenge? &#128526 <br>";
}