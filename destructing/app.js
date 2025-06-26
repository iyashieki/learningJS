//Destructing Arrays or Objects

//let langs = ["C#", "C++", "JavaScript", "Python"]
// let lang1, lang2, lang3, lang4

//!the old way of assigning array items to a variable:
/*
lang1 = langs[0]
lang2 = langs[1]
lang3 = langs[2]
lang4 = langs[3]
*/

//[lang1,lang2,lang3,lang4] = langs;
//console.log(lang1, lang2 , lang3 , lang4)


 /*
 const calculate = (a,b)=>{
     const sum = a+b
     const subtract = a-b
     const multiply = a*b
     const divide = a/b

     const array = [sum,subtract,multiply,divide]
     return array
 }

    [x,y,z,w] = calculate(10,2)

    console.log(x,y,z,w);
  */


const person = {
    firstName : "John ",   //? key : value
    lastName : "Lennon",
    salary : 50000,
    age : 67
}

//let named,surname ,wage , years //! dont declare the same variable twice
//!old way
 /*
 named = person.firstName
 surname = person.lastName
 wage= person.salary
 years = person.age
 */

let {firstName:named,lastName:surname ,salary:wage , age:years} = person //!  
                                                                //? KEY : VALUE 

console.log(named,surname, wage, years);