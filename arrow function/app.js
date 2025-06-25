/* 
!befode ES6
function print (){
    console.log("Hello!")
}

print()
*/

/*
const print = ()=>{     // => looks like an arrow
    console.log("Hello!")
}

print()
*/

/*
const print  = (firstName, lastName)=>{           //!If you have parameters, you pass them inside the parentheses:

    console.log("Hello", firstName, lastName)
}

print("Gülnihal","Temel")
*/

//! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

/*
const print = (firstName,lastName)=> console.log("Hello", firstName, lastName)


print("Gülnihal","Temel")
*/

/*
const print = firstName=> console.log("Hello",firstName) //! if you have only one parameter, you can skip the parentheses as well

print("Gülnihal")
*/

/*
const cube = x=>  x*x*x 
const square = x=> x*x
//document.addEventListener("click", ()=>{

//})

console.log("Value", cube(3))
console.log("Value", square(3))
*/