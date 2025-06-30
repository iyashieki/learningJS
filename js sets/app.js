//*JavaScript Set

const set = new Set ();

//! add method

set.add(true)
set.add(3.14)
set.add("Nihal")
//set.add("Nihal")   //?If you add equal elements, only the first will be saved.
//set.add("Nihal")
//set.add("Nihal")  //?The primary feature of Set objects is that they only store unique values.
//set.add("Nihal")  //?If an attempt is made to add an element that already exists in the set, the add() method will have no effect, and the set will remain unchanged.                 
set.add([1,2,3,4])
set.add(9) 


//!size property 

//console.log(set.size)

//!delete

/*
set.delete("Nihal")
set.delete(9)
console.log(set.size)
*/


//!has() method
//? returns true if a specified value exists in a set

/*
console.log(set.has(3.14))
console.log(set.has("Enes"))
*/

//!for of

/*
for(let value of set){
    console.log(value)
}
*/



/*
const values = Array.from(set);

values.forEach((value)=>{
    console.log(value)
})
    */

let array = [1,"Nihal",true,"Mustafa",15][1,2,3]

const newSet = new Set(array);
console.log(newSet)

