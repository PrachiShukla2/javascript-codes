const array=[];
array[0]="prachi";
array[1]= 56;
array[2]="false";
console.log(array);
// array length
console.log(array.length);

// last element
console.log(array[array.length-1]);
// we can add additional item to  my array by writing push 
array.push("fish");
console.log(array);
// we can also remove last element by pop off method
array.pop();
console.log(array);
// we can also put elements in the beginning  by writing unshift
array.unshift(89);
console.log(array);
// removing from front use shift
array.shift();
console.log(array);
// can remove from middle or any ARRAY elemnt by writing delete
delete array[1];
console.log(array);
// want to rplace any elements by desired value we use splice method
array.splice(1,1,"cat","dog");
console.log(array);
// The first parameter (1): This specifies the index at which to start changing the array. In your example, it's 1. This means that the modification will begin at the second element of the array (JavaScript arrays are zero-indexed).

// The second parameter (1): This specifies the number of elements to remove. In your example, it's 1. This means that starting from the index specified in the first parameter (1), one element will be removed from the array.
array.splice(2,1,"cat","dog");
console.log(array);
// slice method to discard any array element
var newArray=array.slice(3,4)
console.log(newArray);
// reverse an array 
array.reverse();
console.log(array);

// can join elements to frorm any string
var str=array.join();
console.log(str);
// concate method joins to different array 
const aA =["p","q","r"];
const aB =["s","t","u"];
let ab =aA.concat(aB);
console.log(ab);

// getElementById is a method innerhtml is a property of html


