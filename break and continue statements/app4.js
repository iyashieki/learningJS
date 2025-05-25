/* 
The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.

You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.

The break statement can also be used to jump out of a loop.

The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
*/

//? break;
/*
let meter=1;

while(meter<=10){
    console.log(meter);
    if(meter==8){
        break;
    }
    meter++;
}
    //12345678
    */

//? continue;
//1,2,3,4,5,6,7,9,10

let meter =0;
while(meter<=10){
    meter++;
    if(meter>10){
            break;
        }
    if(meter==8){
        continue;
    }
    console.log(meter);
}

