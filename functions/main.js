// methods are know as the built in functions, 
// methods are lyk toLowerCase,charAt etc
// functions are those keywords that we made by ourselves.
// the function below is a reusable function
function sum(num1,num2){
    return num1 + num2;
}
console.log(sum(2,8));

function getusername(email){
    return email.slice(0 , email.indexOf("@"));

}
console.log(getusername("my@gmai.com"));

// if we dont provide name to the function then it is a anonyums function.

// arrow functions are those functions in which we apply => example is below

const myUserName = (email)=>{
    return email.slice(0 , email.indexOf("@"));

}
console.log(getusername("jhgy@gmai.com"));
