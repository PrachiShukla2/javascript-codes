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

// to find min and max in array using sort 
const points = [40 ,200,28 ];
points.sort(function(a,b){return a-b});
document.getElementById("demo").innerHTML = points[0];
const numbers = [45,4,9,16,25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value,index,array){
    txt += value + "<br>";}
// foreach function takes 3 arguments = the item value, the item index ,the array itself
// five different ways of creating date objects 
new Date()
new Date( date string)
const d = new Date("October 13, 2014 11:13:00");
const d = new Date("2022-03-25");
new Date( year,month)
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// 6 numbers specify year ,month ,day,hour,minute,second
// 5 numbers specify year , month ,day , hour,minute
// 4 numbers specify year ,month ,day,hour
// 3 numbers specify year ,month ,day 
// 2 numbers specify year ,month 
// omiting month will be treated as milliseconds
// js stores dates as number of miliseconds ,zero time 24 hours is 86,400000 miliseconds

new Date(year ,month ,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(miliseconds)
// there are 3 types of dates input formats 
// 1. ISO         2024-03-25
// 2.short date   03/25/2024
// 3. long date   Mar 25 2024 or 25 Mar 2024

const date = new Date();
// it is used to display date directly 

// math objeccts 
// it allows u to perform mathematical tasks on numbers
// syntax of math property is Math.property
