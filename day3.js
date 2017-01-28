// //OBJECTS

// var myCat = {
// 	tail: "long",
// 	age: 29,
// 	color: "blue",
// 	friends: ["Ben", "Zoe", "Bobby"]
// }

// console.log("Age of cat: ", myCat.age);
// console.log("Color of cat: ", myCat["color"]);

// for(var myKey in myCat) {
// 	console.log("myKey", myKey);
// 	console.log("values", myCat[myKey]);
// }

// //FUNCTIONS

// var test;

// function nuggetMaker(animal) {
// 	var myNuggets = animal * 6;
// 	return myNuggets = test;
// }

// //ALWAYS returns just one value
// //Then you need  variable to hold whatever you returned

// var chickenNuggets = nuggetMaker(10);
// console.log(chickenNuggets);

// function myLooper(myArray) {
// 	for (var i =  0; i < myArray.length; i++) {
// 		console.log(myArray[i])
// 	}
// }
// var nuggetDiv = document.getElementById("nuggetShack");

// nuggetDiv.innerHTML = chickenNuggets
// nuggetDiv.innerHTML += turkeyNuggets
// nuggetDiv.innerHTML += bananaNuggets

// function addTextToDiv(nuggetInput) {
// 	nuggetDiv.innerHTML += nuggetInput
// }


function multiplyBy10(multiUserInput) {
	var output = multiUserInput * 10;
	return output;
}

function divideBy2(divideUserInput) {
	var output = divideUserInput / 2;
	return output;
}

function combine(multiInput, divInput) {
	var result = multiplyBy10(multiInput) + divideBy2(divInput);
	return result;
}

var test = combine(10, 2);
console.log(test)
