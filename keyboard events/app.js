// KEYBOARD EVENTS

// keypress: triggered by letters and numbers only
// keydown: triggered by all key presses
// keyup: triggered when the key is released

// Example of blocking the F5 key (page refresh)
// document.addEventListener("keydown", run);

// function run(e) {
//   console.log(e.keyCode);
//   if (e.keyCode == 116) {
//     alert("Page refresh has been blocked!");
//   }
//   e.preventDefault();
// }

const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup", run);

function run(e) {
  cardTitle.textContent = e.target.value;
}
