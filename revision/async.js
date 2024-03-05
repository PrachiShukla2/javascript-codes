// i will finish later 
// functions running in parallel with other functions are called asynchronous functions 
//  asynchronous programming is difficult to debug 
// modern programming methods dont use callbacks instead asyc programs are resolved using promises 

// syntax of promise 
let myPromise = new Promise(function(myResolve,myReject){
    myResolve();
    myReject();
});
myPromise.then(
    function(value){},
    function(error) {}
);
// success = myresolve = result value
// error = myReject = error object 

function myDisplay(some){
    document.getElementById("demo").innerHTML = some;

}
let myPro = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPro.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


  // asyc makes a function return a promise 
  // await makes a function wait for a promise

  // keyword asnyc before a function makes the function return a promise 
  async function getData() {
    return "hello";
  }
  // return is her acting as a promise 
  
