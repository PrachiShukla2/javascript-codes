// callbacks  are func that are passed to call other functiion
// promises are of 3 states : pending ,fulfilled,rejected

const promise = new Promise((resolve ,reject ) =>{
    const error = false;
    if(!error){
        resolve("Data Loaded");
    }else{
        reject("Error in loading data");
    }
});
console.log(promise);

// then is basically used to resolve the promise 
promise.then(value =>{
    console.log(value);
})