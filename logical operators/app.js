/*  
    while x=6 , y=3
    
    Operator	Description	    Example

    &&	            and	        (x < 10 && y > 1) is true	
    ||	            or	        (x == 5 || y == 5) is false	
    !	            not         !(x == y) is true

*/
let age = 20;
let wallet = 3500;
let health = false;
let retriesLeft =3;

//console.log(age>18 && wallet>3000 && health ==true); //console: false

//console.log(5>3 || 2<3);  // console: true 

//console.log(5<3 || 7<6);   // console: false

//console.log( !(5<3));   //console : true

console.log((wallet>3000 && retriesLeft>1) || (age>18 && health ==true));