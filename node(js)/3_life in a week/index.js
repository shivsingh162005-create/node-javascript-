// You have 12410 days, 1768 weeks, and 408 months to left.

function lifeweeks(age) {

/***********Don't change the code above***********/

//write your code here
let yearsRemaining = 90 - age; // Assuming average lifespan is 90 years
let daysRemaining = yearsRemaining * 365; // Calculate remaining days
let weeksRemaining = yearsRemaining * 52; // Calculate remaining weeks
let monthsRemaining = yearsRemaining * 12; // Calculate remaining months

console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left.");

/***********Don't change the code above***********/

}
lifeweeks(30); // Call the function with an example age of 30 years