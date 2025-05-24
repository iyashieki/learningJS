//fuel prices 
// ₺ --> Turkish Cuurency
const fuelPrices = {
    gasoline: 22.25,
    diesel: 24.53,
    lpg: 11.1
};


let fuelType = prompt("Enter fuel type (gasoline, diesel, lpg):");
let liters = Number(prompt("How many liters of fuel did you buy?"));
let balance = Number(prompt("Enter your current balance (₺):"));


if (
    fuelType === null || fuelType === "" ||
    liters <= 0 || balance < 0
) {
    alert("Invalid input. Please enter valid fuel type, positive liters, and a valid balance.");
} else {
    let pricePerLiter;

    if (fuelType === "gasoline") {
        pricePerLiter = fuelPrices.gasoline;
    } else if (fuelType === "diesel") {
        pricePerLiter = fuelPrices.diesel;
    } else if (fuelType === "lpg") {
        pricePerLiter = fuelPrices.lpg;
    } else {
        alert("Invalid fuel type entered.");
        pricePerLiter = null;
    }

    if (pricePerLiter !== null) {
        let totalCost = liters * pricePerLiter;
        alert("Total fuel cost: " + totalCost + "₺");

        if (balance < totalCost) {
            alert("Your balance is insufficient. You need " + (totalCost - balance) + "₺ more.");
        } else if (balance === totalCost) {
            alert("Your balance is exactly enough to pay for the fuel.");
        } else {
            alert("Payment successful. Remaining balance: " + (balance - totalCost) + "₺");
        }
    }
}