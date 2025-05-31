// DATE

// let date = new Date(1999, 08, 07, 10, 40, 50); // Note: Months are 0-indexed (08 means September)
// console.log(typeof date); // Output the type of the date object

// let date = new Date(); // Current date and time
// console.log(date.toString()); // Full date and time as a string
// console.log(typeof date.toString()); // Type of the string output
// console.log(date); // Full Date object


// console.log(date.getFullYear());        // Year
// console.log(date.getDate());            // Day of the month
// console.log(date.getDay());             // Day of the week (0 = Sunday)
// console.log(date.getHours());           // Hours
// console.log(date.getMilliseconds());    // Milliseconds
// console.log(date.getMinutes());         // Minutes
// console.log(date.getMonth() + 1);       // Month (0 = January, so we add 1)
// console.log(date.getSeconds());         // Seconds
// console.log(date.toLocaleDateString()); // Date in local format
// console.log(date.toLocaleTimeString()); // Time in local format
// console.log(date.toLocaleString());     // Full date and time in local format

// SET METHODS
// console.log(date);               // Original date
// date.setHours(15);               // Set hours to 15
// date.setDate(24);                // Set day of the month to 24
// date.setMonth(11);               // Set month to December (11 because months are 0-indexed)
// date.setMinutes(50);             // Set minutes to 50

// date.setHours(date.getHours() + 2); // Add 2 hours to the current hour
// console.log(date);                  // Updated date
