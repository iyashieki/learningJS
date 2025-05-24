
//?EXAMPLE1
/*
let number = prompt("Please enter a number between 5 and 1.");

switch(number){  //"1" "2" "3" "4" "5"

    case "1" :
        console.log("You entered the number 1.")
        break;
    case "2":
        console.log("You entered the number 2.")
        break;
    case "3":
        console.log("You entered the number 3.")
        break;
    case "4":
        console.log("You entered the number 4.")
        break;
    case "5":
        console.log("You entered the number 5.")
        break;

    default: 
        console.log("Entered number is not valid.")
        break;
}
 */

//? EXAMPLE2 (days of the week)

let text = alert( "1 - Monday\r\n"+
    "2 - Tuesday\r\n"+
    "3 - Wednesday\r\n"+
    "4 - Thursday\r\n" +
    "5 - Friday\r\n"+
    "6 - Saturday\r\n"+
    "7 - Sunday\r\n"+
    "Please select a day out of the week.(1,2,...,7)"

);
let selectedDay = prompt("Enter your choice : ");
switch(selectedDay){
    case "1" :
        alert("You've selcted Monday. ");
        break;
    case "2":
        alert("You've selcted Tuesday.");
        break;
    case "3":
        alert("You've selcted Wednesday.");
        break;
    case "4":
        alert("You've selcted Thursday.");
        break;
    case "5":
        alert("You've selcted Friday.");
        break;
    case "6":
        alert("You've selcted Saturday.");
        break;
    case "7":
        alert("You've selcted Sunday.");
        break;   
    default:
        alert("ENTER A VALID ANSWER.");  
        break;  
}


