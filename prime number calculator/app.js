// ?
// Prime Number
//Enter a number and the Prime Number Calculator will instantly tell you if it is a prime number or not.
//Prime numbers are positive, non-zero numbers that have exactly two factors -- no more, no less.

//The Math.floor() method rounds a number DOWN to the nearest integer.

/*
let a = Math.floor(7,9); //7
console.log(a);
*/
 
let num = Number(prompt("Please enter a number : "));

if(!Number.isInteger(num) || num<2){        // this if else statement is crucial for the values 1 , 0 and decimals.
    alert("Please enter an integer greater than 1.")

}else{
let result = true;
for(let i=2 ; i<= Math.floor(num/2); i++){
    if(num%i==0){
        result = false;
        break;
    }
}
    if(result){
        alert(num + " is a prime number.");
    }else{
        alert(num + "is not a prime number!");
    }
}