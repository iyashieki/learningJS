/*
?Asynchronous: Tasks can run simultaneously.
?Synchronous: Each task requires an answer before moving on to the next iteration.
*/



/*
?Although it's synchronous by nature, JavaScript benefits from an asynchronous process. 
?Long-running JavaScript functions can make the user interface (UI) or server unresponsive until the function has returned, 
?resulting in a less-than-stellar user experience.
*/ 

// Timing, Event, Http requests

//async
//setTimeout(() => {
    
//}, timeout);

console.log("Gül");

setTimeout(() => {
    console.log("Times up!")
}, 1000);

setTimeout(() => {
    console.log("1/2")
}, 500);

console.log("nihal")