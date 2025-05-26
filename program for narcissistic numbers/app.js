//? In number theory, a narcissistic number (also known as pluperfect digital invariant (PPDI), an Armstrong number or a plus perfect number) 
//? in a given number base b is a number that is sum of its own digits each raised to the power of the number digits.

// ex: 153, 370, 407 s.t.

let num = prompt("Please enter a number to find out if it's a Narcissistic Number :  ");
let sum =0;
for(let i=0 ; i < num.length ;i++){
    let digit = num.charAt(i); // The charAt() method returns the character at the specified index in a STRING. The index of the first character is 0, the second character is 1, and so on.
    sum += digit**num.length ;
}

if(num==sum){
    alert(num + " is a Narcissistic Number.");
}else {
    alert(num +" is not a Narcissistic Number. ");
}