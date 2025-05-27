// Binary to Decimal Conversion

let binary = "10110010101";

function convertBinaryToDecimal(binary) {
    let total = 0;
    let power = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        if (Number(binary.charAt(i)) != 0) {
            total += Number(binary.charAt(i)) * Math.pow(2, power);
        }
        power++;
    }

    console.log("Result: " + total);
}

convertBinaryToDecimal(binary);
