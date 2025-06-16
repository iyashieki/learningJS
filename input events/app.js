// INPUT EVENTS

// focus: when the input gains focus
// blur: when the input loses focus
// copy: when text is copied from the input
// paste: when content is pasted into the input
// cut: when text is cut from the input
// select: when text is selected in the input

const todo = document.querySelector("#todoName");

todo.addEventListener("focus", run);
todo.addEventListener("blur", run);
todo.addEventListener("copy", run);
todo.addEventListener("paste", run);
todo.addEventListener("cut", run);
todo.addEventListener("select", run);

function run(e) {
    console.log(e.type); // logs the type of input event triggered
}
