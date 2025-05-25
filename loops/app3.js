/*
The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.

The do...while is used when you want to run a code block at least one time.
*/
/*
do {
  code block to be executed
}
while (condition);
*/

/*
let counter = 1;
do{
    console.log(counter);
    counter++;
}while(counter<=10);
*/

/*
let age =18;
do{
    console.log("At your age, you're allowed to drive the vehicle you're licensed for without a parent present.")
    age--;
}while(age>=18);
*/

let counter = 1;
let sum = 0;

do{
if(counter%2==1){
    sum+=counter;
}
counter++;
}while(counter<=20);
console.log("Sum of all : " + sum);

//1+3+5+7+9+11+13+15+17+19=100