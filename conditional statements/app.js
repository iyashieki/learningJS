/* CONDITIONAL STATEMENTS PRE-PRACTICE*/

let grade = 65;

/*if (grade>50){
        console.log("You've passed the exam. your grade is " + grade);
}
else{ 
    console.log("You've failed the class, your grade is " + grade);
}
*/

let age = Number(prompt ("Your age: "));
console.log(typeof age);
let wallet = Number(prompt ("Your budget: "));

if(age>=18 && wallet>=3000){
    alert ("Congrats. You have been accepted to take examination for your driving license." ); }
else {
    alert("We are sad to announce you fail to meet our requirements for entering the driver examination. ");
}