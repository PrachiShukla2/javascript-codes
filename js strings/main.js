// strings
const variable ="maths";
// length property
// console.log(variable.length); it represents the length of the variable
// strings methods 
console.log(variable.charAt(4));
// it reprent the character at that position
console.log(variable.indexOf("t"));
// returns the first index of a specified string, or -1 if not found
console.log(variable.indexOf("hs"));

const word ="statistics";
console.log(word.lastIndexOf("ti"));
// returns the last index
console.log(word.slice(4));
// slice method is used to get part of a string from a certain index till another index
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.includes("div"))
// it provides boolean data whether the provided string is presnt in the given variable or not
console.log(word.split("i"));
// split() splits a string into an array of substrings based on the specified separator

