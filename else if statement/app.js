// THE ELSE IF STATEMENT
//Use the else if statement to specify a new condition if the first condition is false.

let selectedRoad = prompt(
    "You stand at a crossroad with three roads:\n"+
    "1 - Take the mountain road\n"+
    "2 - Take the village road\n"+
    "3 - Take the forest road\n"+
    "Press Cancel or leave blank to stay where you are."
);

if(selectedRoad === null || selectedRoad === "" ) {
    alert("You chose to stay where you are.");
} else if (selectedRoad === "1") {
    alert("You arrive at the mountains.");
} else if (selectedRoad === "2"){
    alert("You discover a peaceful village.");
} else if (selectedRoad === "3") {
    alert ("You reach the edge of a mysterious forest.");
} else {
    alert("That's not a valid road. You stay where you are.");
}