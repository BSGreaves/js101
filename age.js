var userAgeStr = prompt("How old are you?");
userAge = parseInt(userAgeStr);

var secsInMinute = 60;
var minutesInHour = 60;
var hoursInDay = 24;
var daysInYear = 365;
var yearsInDecade = 10;

var hoursInYear = hoursInDay * daysInYear;
console.log("Hours in a year", hoursInYear);

var minsInDecade = minutesInHour * hoursInDay * daysInYear * yearsInDecade;
console.log("Minutes in a decade: ", minsInDecade);

var userAgeInSecs = userAge * hoursInYear * minutesInHour * secsInMinute;
console.log("User's age in seconds: ", userAgeInSecs)

if (userAge > 35) {
	console.log("You're old!");
} else {
	console.log("You're young!");
}
