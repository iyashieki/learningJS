//END OF YEAR GRADAE CALCULATION

//? midterm1 %30, midterm2 %30, final %40

let midterm1 = Number(prompt("Your grade on the first midterm : "));
let midterm2 = Number(prompt("Your grade on the second midterm : "));
let final = Number(prompt("Your grade on the final: "));

let average = (midterm1*0.3) + (midterm2*0.3) + (final*0.4) ;

if(average >=60){
    alert("You've passed the course.");}
 else {
    alert("You shall not pass!");
}