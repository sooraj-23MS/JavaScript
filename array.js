// An array in JavaScript is a data structure used to 
// store multiple values in a single variable.
const arr = [1,2,3,4,5];
console.log(arr);

// Main Point :  It can hold various data types.
// Number - String - Boolean - undefined - null - BigInt.
const diffValues =[1,"abc",true, ,null,1122333664]
console.log(diffValues)

// Accessing Elements.
console.log(arr[1]);

// Length of an Array
console.log("Length is : "+arr.length)

// Modifying Elements.
arr[3]="x";
console.log(arr);

// ------------Array Methods.-------------

// push(): Adds one or more elements to the end of an array.
arr.push(6,7);
console.log(arr);

// unshift(): Adds one or more elements to the beginning of an array.
arr.unshift("x",0)
console.log(arr);

// pop(): Removes the last element from an array and returns it.
arr.pop();
console.log(arr);

// shift(): Removes the first element from an array and returns it.
arr.shift();
console.log(arr);

// The delete keyword can be used to remove an element at a specific index.
// Use delete to remove an element, but be cautious as it leaves a hole in the array.
delete arr[3];
console.log(arr)

console.log(arr.indexOf(3));

// The splice() method can be used to remove elements from an array at a specific index.
arr.splice(3,1);
// The second parameter of splice is the number of elements to remove.
console.log(arr)

// slice():returns a partial copy of an array,
//otherwise known as a shallow copy, without altering the original array.
const sliceArr = arr.slice(1,5)
console.log(sliceArr)

// join() method is used to concatenate all the elements of an array into a single string. 
// You can specify a separator to use between the elements
let newArr = arr.join(" | ")
console.log(newArr)