// Selectors and Style Properties

// Methods:
// getElementById        → selects an element by its ID
// getElementsByClassName → selects elements by their class name
// getElementsByTagName  → selects elements by their tag name

// Example: Selecting a button by ID
const button = document.getElementById("todoAddButton");

console.log(button);                     // Logs the entire button element
console.log(button.id);                 // Logs the ID of the button
console.log(button.getAttribute("id")); // Also gets the ID via attribute

console.log(button.className);                 // gets the class names as a string
console.log(button.getAttribute("class"));     // same using getAttribute

// get all class names of the button as a list
const classList = button.classList;
classList.forEach(function(className){
    console.log(className);             // log each class name
});

// get the text of the button
let buttonText = button.textContent;  
let buttonText2 = button.innerHTML;  

console.log(buttonText);
console.log(buttonText2);

// modify button text with bold styling
button.innerHTML = "<b>Add Todo</b>";

// get elements by class name and log their text
const todoListItems = Array.from(document.getElementsByClassName("list-group-item"));
todoListItems.forEach(function(todo){
    console.log(todo.textContent);
});

// get all forms by tag name
const forms = Array.from(document.getElementsByTagName("form"));
forms.forEach(function(form){
    console.log(form);  // logs each form element
});
console.log(forms[1]);  


const todoListByTag = document.getElementsByTagName("li");
console.log(todoListByTag);

// using querySelector and querySelectorAll
// select by ID using querySelector
const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);


const todoListContainer = document.querySelector(".list-group");
console.log(todoListContainer);


const oddTodoItems = Array.from(document.querySelectorAll("li:nth-child(odd)"));
oddTodoItems.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";  
});

console.log(oddTodoItems);
