// VALUE AND REFERENCE TYPES


//? value types: When you assign one variable to another, the actual value is copied.

//? reference type: When you assign one variable to another, the reference (memory address) is copied, not the value itself.


// let a = 7;
// let b = a;

// console.log("a: " + a);
// console.log("b: " + b);

// console.log("----------------------------");

// b = 10;
// console.log("a: " + a); // a remains 7
// console.log("b: " + b); // b becomes 10

// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];
// let array2 = array1;

// if (array1 == array2) {
//     console.log("They are equal");
// } else {
//     console.log("They are not equal");
// }

// console.log(array1);
// console.log(array2);

let array1 = [1, 2, 3];
let array2 = array1;
let array3 = array2;
