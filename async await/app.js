//? ASYNC AWAIT

/*

//*promise then chain

then(){
    then(){
        then(){
            console.log("avoid this")
        }
    }
}
 */

 /*
 async function hello(){   //makes the function return a promise
    return "Hello World";
}

//console.log(hello());
hello()
.then((res)=>console.log(res));
*/

/*
// using Promises with then chaining
document.querySelector("button").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1") // GET request for post 1
        .then((response) => response.json()) // convert the response to JSON
        .then((post) => {
            console.log(post); // log the post data
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`) // fetch comments for the post
                .then((response) => response.json()) //convert the comments response to JSON
                .then((comments) => console.log(comments)); // log the comments
        });
});
*/

// using async/await to achieve the same
document.querySelector("button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json(); // fetch post and convert to JSON
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json(); // fetch related comments
    console.log(post, comments); // log both post and comments
});
