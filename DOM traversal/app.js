document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todoAddForm");
    const todoInput = document.getElementById("todoName");
    const todoList = document.querySelector(".list-group");
    const clearButton = document.getElementById("clearButton");
    const card = document.querySelector(".card");
    const row = document.querySelector(".row");
  
    // Add Todo
    todoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        addTodoToUI(todoText);
        todoInput.value = "";
      }
    });
  
    // Clear All Todos
    clearButton.addEventListener("click", function (e) {
      e.preventDefault();
      todoList.innerHTML = "";
    });
  
    // Add item to UI
    function addTodoToUI(todo) {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between";
      li.textContent = todo;
  
      const deleteLink = document.createElement("a");
      deleteLink.href = "#";
      deleteLink.className = "delete-item";
      deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
      deleteLink.addEventListener("click", function (e) {
        e.preventDefault();
        li.remove();
      });
  
      li.appendChild(deleteLink);
      todoList.appendChild(li);
    }
  
    // DOM traversal and styling examples
    const todo = document.querySelector(".list-group-item");
    const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
  
    let value;
  
    // Access children
    value = todoList.children[0];
    value = todoList.lastElementChild;
    todoList.children[0].textContent = "Updated Todo 1";
  
    // Access parents
    let ul = todo.parentElement;
    let cardBody = ul.parentElement;
    let cardElement = cardBody.parentElement;
    let container = row.parentElement;
  
    // Add more todos to demonstrate sibling access
    for (let i = 2; i <= 4; i++) {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between";
      li.textContent = `Todo ${i}`;
      todoList.appendChild(li);
    }
  
    // Modify 3rd todo item
    let todo3 = todoList.children[2];
    todo3.textContent = "Todo 3 Changed";
    todo3.style.backgroundColor = "lightgrey";
    todo3.style.color = "red";
  
    // Update section title
    const listTitle = card.querySelectorAll(".card-body .card-title")[1];
    listTitle.textContent = "Todo List Title Updated";
  });
  