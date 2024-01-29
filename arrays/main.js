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
