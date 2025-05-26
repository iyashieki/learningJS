/* In mathematics, the factorial of a non-negative integer n,
denoted by n! , s the product of all positive integers less than or equal to n. 
The factorial of n also equals the product of n with the next smaller factorial
*/

let num = Number(prompt("Enter a positive integer : "));
if(num<0 || !Number.isInteger(num)){
    alert("Please enter a positive integer!");
}else
    {
let factorial = 1;

for ( let i=1 ; i<=num ; i++){
    factorial = factorial*i;
    }
    
    alert( num + "! equals " + factorial + " .");
}