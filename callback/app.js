//callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action. 

//async -> sync

/*
function getName(callback){
    setTimeout(() => {
        //server response
        let name = "Gülnihal";
        callback(name);
    }, 1000);
}

function getSurname(name){
    setTimeout(() => {
        let surname = "Temel";
        console.log(name, surname);
    }, 500);
}

getName(getSurname)         // Gülnihal Temel
*/

//getName();
//getSurname();

            //*   OR


function getName(callback){
    setTimeout(() => {
        //server response
        let name = "Gülnihal";
        callback(name);
    }, 1000);
}

function getSurname(name, callback){
    setTimeout(() => {
        let surname = "Temel";
        callback(surname)
    }, 500);
}


/*getName((name)=>{
    getSurname(name, (surname)=>{
    console.log(name, surname)    
    })
})
    */


function getAge(name, surname, callback){
    setTimeout(() => {
        let age = 20;   //
        callback(age);
    }, 300);
}

getName((name)=>{
getSurname(name, (surname)=> {
    getAge(name, surname, (age)=> {
        console.log(name, surname, age)
    })
})
})

// "callback hell" 
// Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively.
//  A lot of code ends up looking like a pyramid shaepe.
