// if you want to reassign the value of the varaiable then use the keyword  let 
// global scope  means it can be used across everywhere in the code.
// it doesnt matter whether we use the keyword let ,const ,var in global scope
var x = 1;
let y = 1;
const z =3;

// local scope locally it is defined in a particular block like here in this particular braces.
// if we want to print the value we have to write console statement within that loccal scope vaiable.
{
  let y =4;
  console.log(y);
}

// local scope for function 

function fun(){
    const z= 56;
}

console.log(y);

var a=78;
let b = 89;
const c  =90;
// if we want to print the value of the descriptin lyk here global then we will will use `${}`
console.log(`global: ${a}`);
console.log(`global :${b}`);
console.log(`global :${c}`);

function myfunc() {
    console.log(`function: ${a}`);
    console.log(`function: ${b}`);
    console.log(`function: ${c}`);
    {
        console.log(`block: ${a}`); 
        console.log(`block: ${b}`); 
        console.log(`block: ${c}`); 
    }
    // block is utilising the value of the parent function myfunc
//    global is not a function or block not desirable
// local in a function or block . not global
//  var instantiates function() scoped variables
//  let and const instantiate {block } scoped variable
//  var is avoided const i spreffered until we want to reassign values for reassigning we use let 

    
}
myfunc();