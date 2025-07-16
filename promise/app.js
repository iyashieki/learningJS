//? ---------------------PROMISE-----------------------
//async -> sync
//alternative for callback

/*
let check = false;

const promise1 = new Promise((resolve, reject)=>{
    if(check){
        resolve("resolved");
    }else{
        reject("rejected");
    }
})

console.log(promise1);
*/

/*
let check = true;
function createPromise (){
    return new Promise((resolve, reject)=>{
        if(check){
            resolve("resolved response")
        }else{
            reject("error message")
        }
    })
}

createPromise()
.then((response)=>{     //Attaches callbacks for the resolution and/or rejection of the Promise.
    console.log(response);
})

.catch((error)=>{   //The callback to execute when the Promise is rejected.
    console.log(error);
})

.finally(()=>console.log("fullfilled or rejected"))            //Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected).
*/

//* PROMISE + XMLHttpRequest

// using Promise with XMLHttpRequest to fetch data asynchronously
function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // create a new XMLHttpRequest object

        try {
            // listen for state changes on the request
            xhr.addEventListener("readystatechange", () => {
                // check if the request is done (readyState === 4) and successful (status === 200)
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // resolve the Promise with the parsed JSON response
                    resolve(JSON.parse(xhr.responseText));
                }
            });
        } catch (error) {
            // if an error occurs, reject the Promise
            reject(error);
        }

        xhr.open("GET", url); // initialize the GET request
        xhr.send(); // send the request
    });
}

// call the function and handle the resolved or rejected Promise
//readStudents("students.json")
//  .then((data) => console.log(data))   // handle successful response
//  .catch((err) => console.log(err));   // handle errors

/*
// Function to fetch user data using XMLHttpRequest and return a Promise
function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

        // Listen for changes in request state
        xhr.addEventListener("readystatechange", () => {
            try {
                // When request is complete and successful
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Parse and resolve the JSON response
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                // If something goes wrong, reject the Promise
                reject(error);
            }
        });

        xhr.open("GET", url); // Initialize the GET request
        xhr.send();           // Send the request
    });
}

// calling the function with an API URL
getUsers("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
        // log the full data array
        console.log(data);

        // loop through the array and log each user's name
        data.forEach((user) => {
            console.log(user.name);
        });

        // final log after processing the data
        console.log("We can call different async loaders later.");
    })
    .catch((err) => console.log(err))   // handle any errors
    .finally(() => {
        // optional cleanup or final operation
        // You can write your cleanup or mail sending logic here.
    });
*/

