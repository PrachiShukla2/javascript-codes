function myForm(){
let x = document.getElementById("num").value;
let text;
if(isNaN(x)){
    text = "input not valid";

}
else{
    text ="input ok";
}
document.getElementById("demo").innerHTML =text;
}


