// MOUSE EVENTS

// DOMContentLoaded
// load
// click
// dblclick
// mouseover
// mouseout
// mouseenter
// mouseleave

// Example: run when the window fully loads
// window.addEventListener("load", run);

// function run() {
//     console.log("Page Loaded");
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// example: mouse enters and leaves the card body
// cardBody.addEventListener("mouseover", run);
// cardBody.addEventListener("mouseout", run);

cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);

function run(e) {
   console.log(e.type); // Logs the type of mouse event
}
