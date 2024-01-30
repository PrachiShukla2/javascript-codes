// objects
// key value pairs objects are placed in curly braces
const myobj ={name:"prachi"};
console.log(myobj);
console.log(myobj.name);

const anotherObj ={
    rollno :47,
    class: "BSCS",
    hobies :["eat","sleep"],
     beverages:{
        morning :"milk",
        afternoon :"coffee"
     },
     action:function(){
        return "Hello World";
    }

};
console.log(anotherObj.hobies);
console.log(anotherObj.action());


const band={
    vocals :" robert plant",
    guitar :"jimmy page",
    bass :"john paul jones",
    drum :"john bonham"
};
// it passes all the keys
console.log(Object.keys(band));
// it passes all the objects value.
console.log(Object.values(band));

for(let job in band){
    console.log(`${job},${band[job]}`);
}

// destructing by providing values
const{ guitar : variable ,bass: variety} =band;
console.log(variable);
console.log(variety);