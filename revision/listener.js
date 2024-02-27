var x =document.getElementById("myBtn");
x.addEventListener("mouseover",meraFunc);
x.addEventListener("click",meraDusraFunc);
x.addEventListener("mouseout",meraTisraFunc);
// x.addEventListener("mouseout",meraTisraFunc);


function meraFunc(){
    document.getElementById("demo").innerHTML +="jaruri h kya? <br>";
}
function meraDusraFunc(){
    document.getElementById("demo").innerHTML +="abe padhai ki hoti toh pata hota *** <br>";
}
function meraTisraFunc(){
    document.getElementById("demo").innerHTML +="me allow krta hu tuhje bhut sare events ko same element me add krne ke liye bina overwriting ke ! smja ?<br>";
}
