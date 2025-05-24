//? ATM Transaction
// ₺ = Turkish Currency

let balance = 1000; // Starting balance

let choice = prompt(
    "Welcome to the ATM.\n" +
    "1 - View Balance\n" +
    "2 - Deposit Money\n" +
    "3 - Withdraw Money\n" +
    "4 - Exit\n\n" +
    "Please enter your choice:"
);

switch (choice) {
    case "1":
        alert("Your current balance is: " + balance + "₺");
        break;

    case "2":
        let depositAmount = Number(prompt("Enter the amount to deposit:"));
        if (depositAmount > 0) {
            balance += depositAmount;
            alert("Deposit successful. New balance: " + balance + "₺");
        } else {
            alert("Invalid amount. Deposit failed.");
        }
        break;

    case "3":
        let withdrawAmount = Number(prompt("Enter the amount to withdraw:"));
        if (withdrawAmount > 0 && withdrawAmount <= balance) {
            balance -= withdrawAmount;
            alert("Withdrawal successful. New balance: " + balance + "₺");
        } else {
            alert("Invalid or insufficient amount. Withdrawal failed.");
        }
        break;

    case "4":
        alert("Thank you for using our ATM.");
        break;

    default:
        alert("Invalid selection. Please try again.");
        break;
}
