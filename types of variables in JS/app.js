//? var let const
//? var/let/const variableName = variableValue;

/* function genericGreet (){
    var greet = "'Sup?"; // func scope
    if(true){
        var b =10;
    }
    console.log(b);
    console.log(greet);
 }

 genericGreet(); 
 */

 //! var is a function scope

 //! let and const --> block scope

/*  
    var a =5;
    var a =10;
    console.log(a);
/*

    /*if(true){ let a =5;
    let b = 10;
    console.log(b);
   }

*/

//? difference between let&const
//? const is a constance 

//   const a =10;
//    a=15;
//    console.log(a);

//    let b=5;
//    b=7;
//    b=12;
//    console.log(b);

    const user = {
        username : "Gülnihal" ,
        password: "123"
    }
    
    user.username = "nihal";


    console.log(user);