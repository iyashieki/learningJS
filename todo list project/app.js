//! select all the elements

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

//console.log(firstCardBody)
let todos = [];

runEvents();

function runEvents(){
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click",allTodosEverywhere);
    filterInput.addEventListener("keyup",filter);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });    
}
function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoLists = document.querySelectorAll(".list-group-item");

    if(todoLists.length>0){
        todoLists.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                //
                todo.setAttribute("style","display:block"); //css
            }else{
                todo.setAttribute("style","display:none !important");   //if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!
            }
        })
    }else{
        showAlert("warning","You have to enter at least one to do in order to filter!")
    }
}

function allTodosEverywhere (){
    const todoLists = document.querySelectorAll(".list-group-item");
    if(todoLists.length>0){
        // removing ALL the todos from screen
        todoLists.forEach(function(todo){
            todo.remove();
        });
        //removing ALL todos from the storage
        todos=[];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "All successfully deleted.");
    }else {
        showAlert("warning", "You have to enter at least one todo.");
    }
    //console.log(todoLists);
}
function removeTodoToUI(e){
    //console.log(e.target);
    if(e.target.className === "fa fa-remove"){
        //remove from screen
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        //remove from the storage
        removeTodoToStorage(todo.textContent);
        showAlert("success","Todo has been removed successfully.");
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo === todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText==null || inputText==""){
            showAlert("warning","Please enter a value! ");
    }else{
    //add interface
    addTodoToUI(inputText);
    addTodoToStorage(inputText);
    showAlert("success","Todo added.");
    }
    //add storage
    console.log("Submit event working");
    e.preventDefault();
}

function addTodoToUI(newTodo){

    /*
                        <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
    */
   const li = document.createElement("li");
   li.className = "list-group-item d-flex justify-content-between";
   li.textContent = newTodo;

   const a = document.createElement("a");
   a.href="#";
   a.className="delete-item";

   const i =document.createElement("i");
   i.className="fa fa-remove";

   a.appendChild(i);
   li.appendChild(a);
   todoList.appendChild(li);

   addInput.value = "";
}

function addTodoToStorage(newTodo){
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    
}

function checkTodosFromStorage(){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

}

function showAlert(type, message){
    const div = document.createElement("div");
    //const .className = "alert alert -" +type;
    div.className = `alert alert-${type}`;

    div.textContent = message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2500);
}