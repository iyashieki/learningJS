// Body Mass Index Calculator
/*
Major adult BMI classifications are 
underweight (under 18.5 kg/m2), 
normal weight (18.5 to 24.9), 
overweight (25 to 29.9), 
and obese (30 or more).
*/

let weight = Number(prompt("Enter your weight in kilograms:"));
let height = Number(prompt("Enter your height in meters:"));

if (weight > 0 && height > 0) {
    let bmi = weight / (height**2);
    let message;

    if (bmi < 18.5) {
        console.log("You are underweight. BMI = " + bmi);
    } else if (bmi >= 18.5 && bmi < 25) {
       console.log("You have a normal weight. BMI = "  + bmi);
    } else if (bmi >= 25 && bmi < 30) {
        console.log("You are overweight. BMI = " + bmi);
    } else if(bmi>=30 && bmi< 40) {
        console.log ("You are obese. BMI = " + bmi);
    }else if( bmi>=40){
        console.log("Morbid Obesity. BMI = " + bmi);
    } 
    
} else {
    alert("Please enter valid numbers for weight and height.");
    }
