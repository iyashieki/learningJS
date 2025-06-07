// Removing Elements

const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");
// const todo1 = document.querySelector(".list-group-item");

console.log(todos);

// Remove specific items
// todos[0].remove();       // remove the first todo
// todos[1].remove();       // remove the second todo
// todos[todos.length - 1].remove(); // remove the last todo
// todo1.remove();          // remove the first matched todo item

//--------------------------------------------------

// alternative method using removeChild (older but still valid)
todoList.removeChild(todos[todos.length - 1]); // remove last todo
todoList.removeChild(todos[0]);                // remove first todo
