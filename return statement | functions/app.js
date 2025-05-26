
// The return statement stops the execution of a function and returns a value.
//If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
//Functions often compute a return value. The return value is "returned" back to the "caller"

let x = cube(2);
//console.log(x);
//*square(x);          

function square(number){
    let result = number**2;
    //*console.log(result);
    return result;
}
function cube(number){
    let result = number**3;
    let squareResult =square(result);
    console.log(squareResult)
   
}