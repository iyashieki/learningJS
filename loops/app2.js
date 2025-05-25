/* 
?The while loop loops through a block of code as long as a specified condition is true.


    while (condition) {
  ! code block to be executed
}
 */

let counter=1;

/*
while(counter<=10){
    console.log(counter);
    counter++;

}
    */
/*
while(counter<=10){
    if(counter%2==1){
        console.log(counter);

    }
    counter ++;
}
    */


while(true){
    console.log(counter);
    if(counter==7){
        break;
    }
    counter++;

}