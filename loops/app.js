/*
?  The for statement creates a loop with 3 optional expressions:

for (expression 1; expression 2; expression 3) {
  ! code block to be executed
}


Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.


*/

/*
for ( let i=1;  i<=10; i++){
    console.log(i);
}
*/

/*
for(let i=0;i<=10;i+=2){
    console.log(i);
}
*/

/*
for( let i=1; i<=10; i+=2){
    console.log(i);
}
*/

/*
for(let i=1 ; i<=10 ; i++){
    if(i%2==1){
        console.log("Hello");
    }else{
        console.log("Goodbye");
    }
}
*/

let sum =0;
for(let i=50 ;  i>=1 ; i--){
    sum+=i;
    console.log(i);
}
console.log("Sum of all : " + sum);