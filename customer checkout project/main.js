alert("Welcome to Target!");
let message = 
`Do you have a Target Circle Card?
If yes, please choose OK. 
`;


const items = [ {
        itemName : "Milk",
        price : 4
    }
    ,
    {
            itemName : "Eggs",
            price : 11
    },
    {
            itemName: "Olive oil",
            price : 18
    }
    ];

let result = confirm(message);
let payment;

if(result){
    //has a target circle card
    let name = prompt("Enter Firstname: ");
    let surname = prompt("Enter Surname: ");
    const customer = new Customer(name, surname, result, items);
    payment = customer.calculate();

    alert(`Customer Information : ${name} ${surname}
Payment : ${payment} $
            `);
}else{
    
    const customer = new Customer(null, null, result, items);
    payment = customer.calculate();
    alert(`Total Payment : ${payment} $
        
If you wish you can open a Target Circle Card on our website and save an extra %5 your way, every day!
`)
}

