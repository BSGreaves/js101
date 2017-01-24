var sonnetDiv = document.getElementById("sonnet");
var sonnetCont = document.getElementById("sonnet").innerHTML;
var orphans = sonnetCont.indexOf("orphans");
console.log(orphans);
console.log(sonnetCont.length);
sonnetCont = sonnetCont.replace("winter", "yuletide");
sonnetCont = sonnetCont.replace("the", "a large");
sonnetDiv.innerHTML = sonnetCont;






// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable
// Find and output the starting position of the word "orphans"
// Output the number of characters in the sonnet
// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
// Set the content of the sonnet div with the new string