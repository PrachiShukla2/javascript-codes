// function tellTime(){
//     document.getElementById('demo').innerHTML = date();
// }

let dateObj = new Date();
 
let month = String(dateObj.getMonth() + 1)
    .padStart(2, '0');
     
let day = String(dateObj.getDate())
    .padStart(2, '0');
 
let year = dateObj.getFullYear();
let output = day + '/' + month + '/' + year;
 
console.log(output);

// let dated = new date().todatestring();
// console.log(dated);
let text = "abcdefghijklmnopqrstuvwxyz";
let length = text.length;
console.log(length);
let position = text.charAt(5);
console.log(position);

let code = text.charCodeAt(5);
console.log(code);

let place = text.at(5);
console.log(place);

// at() supports negative indexes while char At() doesnot 


