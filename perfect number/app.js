// Perfect Number Application

// 6 -> 6 = 1 + 2 + 3
// 28 -> 28 = 1 + 2 + 4 + 7 + 14
// 6 = 1 + 2 + 3 = 6 -> 6 * 2 = 12
// 28 = 1 + 2 + 4 + 7 + 14 = 28 -> 28 * 2 = 56

isPerfectNumber(6);

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    sum += 1 + number;

    if (sum == number * 2) {
        console.log("It is a perfect number...");
    } else {
        console.log("It is not a perfect number...");
    }
}
