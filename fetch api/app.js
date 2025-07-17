//? --------------------FETCH API--------------------

//*callback -promise
//*ajax(xmlhttprequest) replaced with modern fetch api

//console.log(this) 

/*
function getStudents(url){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>console.log(data))
    .catch((err)=> console.log(err))

}
getStudents("students.json");
*/

function getData(url){ //returns a fetch promise
    return fetch(url);
    //.then((response)=> response.json())
    //.then((data)=> console.log(data))
    //.catch((err)=> console.log(err))
}

getData("https://jsonplaceholder.typicode.com/albums")
//handling the Promise outside the function 
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))
