// a callback function is passed as an argument to another function
//  this alllows function to call another function a callback functoion  can run after another function has finished
// js function are executed in the sequence the are callled not acc to they are defined 
function myCode(same){
    document.getElementById("demo").innerHTML= same;

}
function meraPhele(){
    myDisplayer("hello");
}

function meraDusra(){
    myDisplayer("hii");
}

// function to display the sum 
function showSum(){
    document.getElementById("demo").innerHTML = some ;

}

function myCalculator(num1,num2){
    let sum = num1 + num2;
    return sum;
}
let result = myCalculator(5,5);
showSum(result);

// callback function 
function myAdd(addition){
    document.getElementById("demo").innerHTML=addition;

}
function meAddi(num1, num2 , callback){
    let add = num1 + num2;
    callback(add);

}
meAddi(5,5,myAdd);
// myAdd her acts as call back function 
// it is passed to meAddi as an argument 

// removing negative numbers from the number list 
const numbers =[4,1,-39,-98,67,-8];
const poNum = removeNeg(numbers,(x)=>x>=0);
// displaying result 
document.getElementById("demo").innerHTML = poNum;
// keeping positive numbers 
function removeNeg(numbers,callback){
    const array = [];
    for(const x of numbers){
        if (callback(x)){
            array.push(x);

        }
    }
    return array;
}
