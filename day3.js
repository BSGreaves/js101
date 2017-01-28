//OBJECTS

var myCat = {
	tail: "long",
	age: 29,
	color: "blue",
	friends: ["Ben", "Zoe", "Bobby"]
}

console.log("Age of cat: ", myCat.age);
console.log("Color of cat: ", myCat["color"]);

for(var myKey in myCat) {
	console.log("myKey", myKey);
	console.log("values", myCat[myKey]);
}