// Dynamically Creating Elements

const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");

console.log(cardBody);


const link = document.createElement("a");
link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://www.udemy.com/user/enes-bayram-4/?srsltid=AfmBOoorJ09eD1AIuyNH6j_bBJDxEYjaJ1tktgBRZVqYmaSIm46yeujG";
link.target = "_blank";
link.innerHTML = "Go to My Personal Website";

cardBody.appendChild(link); // Add the link to the card body

/* 
equevilent HTML:
<li class="list-group-item d-flex justify-content-between">Todo 3
  <a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
  </a>
</li>
*/

// create a new todo item with delete icon
const todo = document.createElement("li");
const todoLink = document.createElement("a");
const icon = document.createElement("i");

todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.href = "#";
todoLink.className = "delete-item";

icon.className = "fa fa-remove";

todoLink.appendChild(icon);  // <a><i></i></a>
todo.appendChild(todoLink);  // <li>Todo 5 <a>...</a></li>

todoList.appendChild(todo);  // Add to the todo list

console.log(link);
