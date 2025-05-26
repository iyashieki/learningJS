
//* Function WITHOUT PARAMETERS

// A JavaScript function is a block of code designed to perform a particular task.
/*
function print(){
    console.log("Print");
}

print();  // A JavaScript function is executed when "something" invokes it (calls it).
*/



//*Function WITH PARAMETERS
/*
function print(name, surname){
    debugger;
    console.log(name+ " " + surname);
}
debugger;
print("Gülnihal" ,"Temel");
print("Sylvia", "Plath");

*/

/*
function cube (number){
    console.log(number**3);
}

cube(5);
cube(6);
*/

let grade = Number(prompt("Enter your grade : "));

check(grade); // you have to call the function
function check(grade){

    if(grade>=55){
        console.log("You've passed the class.");
    }else{
        console.log("You shall not pass!");
    }
}


