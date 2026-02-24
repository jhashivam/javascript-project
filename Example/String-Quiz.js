const age0 = 25; // Number
console.log(age0); // 25
console.log(typeof age0); // number

const age = "25" + "5"; // Concatenation of two strings
console.log(age); // 255 (string)
console.log(typeof age); // string     

const age1 = Number("25") + Number("5"); // Convert strings to numbers and add
console.log(age1); // 30 (number)
console.log(typeof age1); // number


const pecanPie = "pecan pie";
console.log(pecanPie[7]); // "i" (character at index 7)

const puppy = "puppy";
console.log(puppy[4]); // "y" (character at index 4)

const city = "Almere";
console.log(city[5]); // "e" (character at index 6)

let song = "london calling"; 
console.log(song.toUpperCase()); // LONDON CALLING
console.log(song.toLowerCase()); // london calling

let userInput = "   TODD@gmail.com"; // User input with leading whitespace and uppercase letters
let cleanedInput = userInput.trim().toLowerCase(); // cleanedInput will be "todd@gmail.com"
console.log(cleanedInput); // cleanedInput will be "todd@gmail.com"
console.log(userInput.trim().toLowerCase()); // todd@gmail.com
console.log(userInput);// what will be the output of this line? no change in userInput, it will still be "

let park = "Yellowstone";
console.log(park.slice(0, 6)); // Yellow
console.log(park.slice(6)); // stone
console.log(park.substring(0, 6)); // Yellow
console.log(park.substring(6)); // stone    
const index = park.indexOf("stone");
console.log(index); // 6

let yell = 'GO AWAY!!'; 
console.log(yell.includes("GO")); // true
console.log(yell.includes("AWAY")); // true
console.log(yell.includes("BYE")); // false 
let index1 = yell.indexOf("GO");
console.log(index1); // 0 (index of "GO" in the string)
let index2 = yell.indexOf("AWAY");
console.log(index2); // 3 (index of "AWAY" in the string)
let index3 = yell.indexOf("BYE");
console.log(index3); // -1 (not found in the string)
let index4 = yell.indexOf("!");// 8 (index of "!" in the string)
console.log(index4); // 8 (index of "!" in the string)


let word = "GARBAGE!";
console.log(word.slice(2).replace("B", '')); // RBAGE! (slice from index 2 gives "RBAGE!", then replace removes "B")