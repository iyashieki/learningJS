//*Spread Operator

/*
let numbers = [10,20,30,40]
function add (a,b,c,d) {
    console.log(a+b+c+d)

}
    */

//!old way 

//add(numbers[0],numbers[1],numbers[2],numbers[3])

//!after ES6

//add(...numbers)

/*
const langs1 = ["Java","C#"]
// const langs2 = ["Php","Python", langs1[0], langs1[1]] //old way

const langs2 = ["Php","Python", ...langs1] // new way (after ES6)
console.log(langs2)
*/

//? assign the first and second items from numbers to variables and put the rest in an array

/*
const numbers =[1,2,3,4,5,6,7,8,9]  
let [a,b,...restOfTheNumbers] = numbers

console.log(a,b,restOfTheNumbers)
*/

/*
const array1 = ["euphoria","luther","tv off","like that"]
let array2 = []

//!old way
//array2[0] = array1[0]
//array2[1] = array1[1]
//array2[2] = array1[2]
//array2[3] = array1[3]

//!after ES6
array2 = [...array1] //* or delete the let array2 =[] part and just declare array2 a const

console.log(array2)
*/

const usr1 = {
    name: 'Jen',
    age: 22,
};

const usr2 = {
    name: "Andrew",
    location: "Philadelphia"
};

const mergedUsers = { ...usr1, ...usr2 };
console.log(mergedUsers);

//*When two objects have the same key (in this case, name, the later one wins. So Andrew overwrites Jen.