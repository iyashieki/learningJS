let product1 = {
    name : "Acer Swift",
    category : "Technology" ,
    price : 6.219 
}

let product2 = {
    name : "ACER Nitro 5",
    category : "Technology" ,
    price : 15.475
}

let product3 = {
    name : "LENOVE V15",
    category : "Technology" ,
    price :  10.999
}

let product4 = {
    name : "LENOVO V14",
    category : "Technology" ,
    price : 4.399 
}

let product5 = {
    name : "LENOVO Ideapad",
    category : "Technology" ,
    price :  4.510
}

let products= [product1 , product2 , product3 , product4 , product5];
let searchFilterProduct = [];
let productNameInput = prompt("Enter a product name : ");

fillSearchFilterProduct(products);
printSearchFilterProduct(searchFilterProduct);

function fillSearchFilterProduct(products){
    products.forEach(function (product) {
        if(product.name.toUpperCase().includes(productNameInput.toUpperCase(),0)) {
            searchFilterProduct.push(product);
        }
    })
}


function printSearchFilterProduct(products) {
    products.forEach(function (product) {
        console.log("------------------------------------------");
        console.log("|" + product.name + "|" + product.category);
        console.log("------------------------------------------");
    });
}
