document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todoAddForm");
    const todoInput = document.getElementById("todoName");
    const todoList = document.querySelector(".list-group");
    const clearButton = document.getElementById("clearButton");

    // style property 
     const firstTodo = document.querySelectorAll(".list-group-item")[0];
    if (firstTodo) {
        firstTodo.style.color = "#fff";
        firstTodo.style.backgroundColor = "purple";
        firstTodo.style.fontWeight = "bold";
        firstTodo.style.paddingTop = "20px";
        firstTodo.style.paddingLeft = "70px";
    }

    todoList.style.marginTop = "60px";

    clearButton.style.backgroundColor = "red";
    clearButton.style.fontWeight = "bold";
    clearButton.style.padding = "10px";
    clearButton.style.borderRadius = "50px";

   //adding todo
    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            addTodoToUI(todoText);
            todoInput.value = "";
        }
    });

    // clearing all todos
    clearButton.addEventListener("click", function (e) {
        e.preventDefault();
        todoList.innerHTML = ""; // Clears all list items
    });

    
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
            li.remove(); // Remove this todo
        });

        li.appendChild(deleteLink);
        todoList.appendChild(li);
    }
});
