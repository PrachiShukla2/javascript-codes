// js was invented by brendan eich in 1995 and ecma is ist real standard name 
// ES is fully suported in all modern browsers
// ES5  uses use strict directive it defines the code in the strict mode 
// use strict is just a string expression .
// ecmascript 2015 was the secomd major revisiomn to js 
// html is to define the comtent of web pages
//  css to specify the layout odf the web page
// js to program the behavior of web pages 
//  parseInt parses a string ansd returns a whole number. spaces are allowed and only first number is returned 
// if a number cannot be converted nan is returned 
// parsefloat returns a float as lyk parseint returns a int 
// they both are global methods 
// negative indexing cannot be used in arrays 
// if u want to concat more then one array follow the following steps 
const array1 = ["ram","rami"];
const array2 = ["mom","momi"];
const array3 = ["pop","popi"];
const newArray = array1.concat(array2,array3);
document.getElementById("demo").innerHTML = newArray;
// flatteningan array is the process of reducing the dimensionality of an array 
// it is useful when u want to convert a multidimentional array into one dimensional arrray  