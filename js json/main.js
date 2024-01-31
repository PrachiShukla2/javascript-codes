// json stands for javascript object notation
// json is used to send and receive data
// json is a text format  that is completely language independent
// json donot send  function only takes key value pairs

const obj={
    name:"John",
    age:30,
    hello :function(){
        console.log("Hello World");

    }
}
console.log(obj);
console.log(obj.name);
console.log(typeof obj);
obj.hello();

const json = JSON.stringify(obj);
console.log(json);
console.log(typeof json);
