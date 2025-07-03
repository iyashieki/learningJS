//TEMPLATE LITERALS

//before

/*function write(firstName, lastName){
    console.log("Name: " + firstName + " " + "Surname: " + lastName)

}

write("Aoi", "Teshima")
*/

//after 

/*
function write(firstName, lastName){
    console.log(`Name: ${firstName} Surname: ${lastName}`)
}

write("Aoi", "Teshima")
*/

//? Template Strings allow multiline strings.

/*
function write(firstName, lastName){
    console.log(`
        Name: ${firstName} 
        Surname: ${lastName}
`)
}

write("Aoi", "Teshima")
*/

function getUserById(userId){
    console.log(`http://localhost:8000/users/${userId}`)
}

getUserById(9)