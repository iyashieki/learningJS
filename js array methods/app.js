/*
push : Adds a new element to an array. returns the new array length
unshift: Adds a new element at the beginning of an array. and "unshifts" older elements

pop: Removes the last element from an array. ethod returns the value that was "popped out".
shift: Removes the first array element

splice(index,index): Adds new items to an array

toString: Converts an array to a comma separated string of values
join:Joins all array elements into a string

concat: Creates a new array by merging existing arrays
slice: Slices out a part of an array. returns the extracted part in a new string.does not change the original string.
length: Returns the length (size) of an array
reverse: reverses the order of the elements in an array and overwrites the original array.
split: method splits a string into an array of substrings.returns the new array.does not change the original string.
indexOf: Returns the first position of an element value
includes: Returns true if an element value is present in an array
*/

let cars1 = ["mater", "guido", "luigi", "mack","doc hudson"];
let cars2 = ["Francesco Bernoulli", "Finn McMissile"];

//! .push()

/*
console.log(cars1.length);
cars1.push("Strip The King Weathers");
console.log(cars1);
*/

//! .unshift()

/*
cars1.unshift("Lightning McQueen");
console.log(cars1);
*/

//! .pop()

/*
let removedElement = cars1.pop();
console.log(cars1);
console.log(removedElement);
*/

//! .shift()

/*
let removedElement = cars1.shift();
console.log(cars1);
console.log(removedElement);
*/

//! .splice()

/*
console.log(cars1);
cars1.splice(3,0,"Lightning McQueen");
console.log(cars1);

cars1.splice(1,2);
console.log(cars1);

cars1.splice(2,2,"Lightning McQueen");
console.log(cars1);
*/

//! .toString()

/*
console.log(typeof cars1);
let stringCars1 = cars1.toString();
console.log(typeof stringCars1);
console.log(stringCars1);
*/

//! .join()

/*
let stringCars = cars1.join("?");
console.log(stringCars1);
*/

//! concat()

/*
let mergeArray = cars1.concat(cars2);
console.log(mergeArray);
*/

//! slice()

/*
console.log(cars1);
let separatArray = cars1.slice(2);
console.log(separatArray);
*/

//! .length 

//console.log(cars1.length);

//! .reverse()

/*
console.log(cars1);
cars1.reverse();
console.log(cars1);
*/

//! .indexOf()

/*
let index = cars1.indexOf("mater");
if(index==0){
    console.log("the element exists");
}else{
    console.log("the element dosent exists");
}
*/

//! .includes()

/*
let resultant = cars1.includes("Vladimir Trunkov");
if(resultant){
    console.log("the element exists ")
}else{
    console.log("the element doesnt exist");
}
*/



