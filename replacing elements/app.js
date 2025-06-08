// Replacing Elements

const cardBody = document.querySelectorAll(".card-body")[1];

// <h5 class="card-title">Todo List</h5>

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo List - Updated";

// replace the existing title with the new title
cardBody.replaceChild(newTitle, cardBody.childNodes[1]);
