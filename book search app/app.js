let book1 = { title: "Little Women", author: "Louisa May Alcott", price: 25 ,shelf:"1.5.SHELF"}
let book2 = { title: "Madoona in a Fur Coat", author: "Sabahattin Ali", price: 56,shelf:"2.3.SHELF" }
let book3 = {title:"One Hundred Years of Solitude" , author: "Gabrial Garcia Marquez", price: 34 ,shelf:"3.4.shelf"}
let book4 = { title: "All Quite On the Western Front", author: "Erich Maria Remarque", price: 45,shelf:"4.1.SHELF" }
let book5 = { title: "Math Without Numbers", author: "Milo Beckman", price: 22,shelf:"5.3.SHELF"}

let books = [book1, book2, book3, book4, book5];


let SHELF11 = { code: "1.1.SHELF", show: false }
let SHELF12 = { code: "1.2.SHELF", show: false }
let SHELF13 = { code: "1.3.SHELF", show: false }
let SHELF14 = { code: "1.4.SHELF", show: false }
let SHELF15 = { code: "1.5.SHELF", show: false }


let SHELF21 = { code: "2.1.SHELF", show: false }
let SHELF22 = { code: "2.2.SHELF", show: false }
let SHELF23 = { code: "2.3.SHELF", show: false }
let SHELF24 = { code: "2.4.SHELF", show: false }
let SHELF25 = { code: "2.5.SHELF", show: false }

let SHELF31 = { code: "3.1.SHELF", show: false }
let SHELF32 = { code: "3.2.SHELF", show: false }
let SHELF33 = { code: "3.3.SHELF", show: false }
let SHELF34 = { code: "3.4.SHELF", show: false }
let SHELF35 = { code: "3.5.SHELF", show: false }

let SHELF41 = { code: "4.1.SHELF", show: false }
let SHELF42 = { code: "4.2.SHELF", show: false }
let SHELF43 = { code: "4.3.SHELF", show: false }
let SHELF44 = { code: "4.4.SHELF", show: false }
let SHELF45 = { code: "4.5.SHELF", show: false }

let SHELF51 = { code: "5.1.SHELF", show: false }
let SHELF52 = { code: "5.2.SHELF", show: false }
let SHELF53 = { code: "5.3.SHELF", show: false }
let SHELF54 = { code: "5.4.SHELF", show: false }
let SHELF55 = { code: "5.5.SHELF", show: false }


let shelfs = [
    [SHELF51,SHELF52,SHELF53,SHELF54,SHELF55],
    [SHELF41,SHELF42,SHELF43,SHELF44,SHELF45],
    [SHELF31,SHELF32,SHELF33,SHELF34,SHELF35],
    [SHELF21,SHELF22,SHELF23,SHELF24,SHELF25],
    [SHELF11,SHELF12,SHELF13,SHELF14,SHELF15]];


    function createShelf(){
        console.clear();
        let line="";
        for(let i =0  ; i<shelfs.length ; i++){
            for(let j=0 ; j<5 ; j++){
                line+="|"+ (shelfs[i][j].show ? shelfs[i][j].code : "---")+"";
              
            }
            console.log(line);
            console.log("--------------------");
            line="";
        }
        
    }

    function findCode(bookTitle){
        let shelfCode=null;
        books.forEach(function(book){
            if(book.title.toUpperCase().includes(bookTitle.toUpperCase(),0)){
                shelfCode=book.shelf;
            }
        });
        return shelfCode;
    }

    function showShelf(shelfCode){
        for(let i =0 ; i<shelfs.length; i++){
            for(let j=0 ; j<5 ; j++){
                if(shelfs[i][j].code==shelfCode){
                    shelfs[i][j].show=true;
                    break;
                }
            }
        }
    }

    createShelf();

    let bookTitle = prompt("Please enter a book title.");
    let shelfCode = findCode(bookTitle);
   
    if(shelfCode!=null){
        showShelf(shelfCode);
        createShelf();
    }else{
        alert("The book you entered is not available in our library.");
    }
    



 



