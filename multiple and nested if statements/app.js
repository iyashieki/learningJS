//* NESTED IF STATEMENT 
// ex.
    /*
    Name : the name cannot be left blank
    SSN: no. of digits, 9.
    */
   
//let name = prompt ("Enter you name : ");
//console.log(name);


let name = prompt("Please enter your name : ");

let ssn = prompt("Enter your SSN : ");

/*
function check(name , ssn){

    if(name!=""){
        if(ssn.length == 9){
            console.log("Name and SSN were entered successfully.");
        }else{
            console.log("Please enter your SSN with the correct number of digits.");
        }
    }else{
        console.log("Please do not leave your name empty!!");
    }
}
check(name, ssn); // function call
*/

//* MULTIPLE IF STATEMENTS
//ex.

function check2(name, ssn){
    if(name==""){
        console.log("Please do not leave your name empty!!");
        return;
    }
    if(ssn.length != 9){
        console.log("Please enter your SSN with the correct number of digits.");
        return;
    }
    console.log("Name and SSN were entered successfully.")
}
check2(name, ssn);