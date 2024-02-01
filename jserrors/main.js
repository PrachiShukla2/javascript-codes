// handle errors
// error handling
// reference errors if we dont define the type of the variable then it will give the reference error
// strict mode is used to catch errors and bugs
// syntax errors if we don't define the type of the variable or use incorrect syntax 
//  type error if we don't define the type of the variable correctly.
// type and catch are usually used to find the correct type of the variable and catch them if we don't define  the type  


"use strict";
const makeError =()=>{
    try{
        const name ="Prachi";
        name= "ram";
    }
    catch(err){
        console.log(err);
        // can use console.err to get output in err form
        // console.table = table form
        // console.warn = warning form

    }
    // finally statement defines a code block to run regardless of the result 
    // The try...catch...finally statements combo handles errors without stopping JavaScript.

// The try statement defines the code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.
finally{
    console.log("This is Finally Block");
}

}
makeError();