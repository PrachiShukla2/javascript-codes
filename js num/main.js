const number = 67;
const another =98.00;
console.log(number=== another);
const mystring = 67;
console.log(mystring+3);
console.log(Number.isInteger(number));
console.log(Number.parseFloat(another));
console.log(Number.parseFloat(number));
// parseFloat method parses an argument and returns a floating point number. if a number cannot be parsed from the argument it rreturns NaN.
// tofixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(number.toFixed(2));
const variable =47.987;
// parseInt returns the integer value for the provided number
console.log(Number.parseInt(variable));
// toString method returns a string representing the number
console.log(number.toString());

// chaining = using several methods chained together
console.log(Number.parseFloat(another).toFixed(1));

// NaN
// Number.isNaN() METHOD DETERMINES WHETHER  the passes value is NaN AND ITS type is NaN.
// let helper = give;
const variabled ="maths";
console.log(variabled);
console.log(typeof(variabled));
console.log(Number.isNaN(variabled));
const view = 45;
console.log(Number.isNaN(view));
console.log(Number.isNaN(45));
console.log(isNaN(45));