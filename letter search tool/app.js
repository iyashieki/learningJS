let text = "Pourquoi je vis, pourquoi je meurs ? Pourquoi je ris, pourquoi je pleure ?";

let letter = prompt("Enter a letter: ")

let result = find(letter);

alert(letter + " count : " + result);

function find(letter){
    let sum=0;
    for(let i =0; i<text.length ; i++){
        if(text.charAt(i).toLowerCase()===letter){  //.toLowerCase == it reads upper case letters as lower case. 
            sum+=1;
        }
    }
    return sum;
}