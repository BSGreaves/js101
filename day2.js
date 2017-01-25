//Switch Statements

var day = "Friday";

switch (day) {
	case "Monday":
		console.log("This blows");
		break;
	case "Friday":
		console.log("Let's party");
		break;
	default:
		console.log("The end of the world is nigh");
}

//Arrays and array methods

var catColors = "green,red,yellow,black";
var catColorsArray = catColors.split(",");
console.log("catColorsArray", catColorsArray);

var fruit = ["apples", "oranges"];

var reverseFruit = fruit.reverse();
console.log("reverseFruit", reverseFruit);

var alphaFruit = fruit.sort();
console.log("alphaFruit", alphaFruit);

var nums = [9, 6, 41, 83, 29, 1, 0]
var numSort = nums.sort (function(a,b) {return a-b});
console.log("numSort", numSort);

var animals = ["lions", "tigers", "bears", "velociraptors", "penguins"];
console.log("bears position:", animals.indexOf("bears"));

//Slice takes a SLICE of the array, which you designate with 2 inputs
//Inputs: it INCLUDES the first index position, but not the last one you mention.
//So this will return lions and tigers
//Also, it makes a COPY of the array, it doesn't modify the original
var animals2 = animals.slice(0, 2);
console.log("A slice of animals:", animals2);

//DELETES items from an array including the first item AND including the last one used
animals.splice(1, 2);
console.log("Animals Spliced:", animals);

//sort, reverse, make a strng
var animalsModded = animals.sort().reverse().join(" cat ");
console.log("sort reverse string:", animalsModded);



