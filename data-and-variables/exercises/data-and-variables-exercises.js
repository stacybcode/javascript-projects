// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleMPH = 17500;
let marsDistance = 225000000;
let moonDistance = 384400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleMPH);
console.log(typeof marsDistance);
console.log(typeof moonDistance);
console.log(typeof milesPerKm);

// Calculate a space mission below
let milesToMars = marsDistance * milesPerKm;
let hoursToMars = milesToMars / shuttleMPH;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = moonDistance * milesPerKm;
let hoursToMoon = milesToMoon / shuttleMPH;
let daysToMoon = hoursToMoon / 24;


// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
