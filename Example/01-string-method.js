// String Methods Examples

const str = "Hello World";
const str1 = "String Methods in JavaScript";
const str2 = "hello Shivam Jha welcome to JavaScript";

// 1. Length
console.log(str.length); // 11 
console.log(str1.length); // 28


// 2. toUpperCase() and toLowerCase()
console.log(str.toUpperCase());     // HELLO WORLD
console.log(str.toLowerCase()); // hello world
console.log(str1.toUpperCase()) // STRING METHODS IN JAVASCRIPT
console.log(str1.toLowerCase()) // string methods in javascript

// 3. charAt() - get character at index
console.log(str.charAt(0)); // H
console.log(str1.charAt(4)); // o

// 4. indexOf() - find index of substring
console.log(str.indexOf("World")); // 6
console.log(str1.indexOf("Methods")); // 7
console.log(str1.indexOf("Met")); // 7
console.log(str1.indexOf("met")); // -1 (case-sensitive)    
console.log(str1.indexOf("Java")); // -1 (not found)

// 5. slice() - extract part of string
console.log(str.slice(0, 5)); // Hello
console.log(str.slice(6)); // World
console.log(str1.slice(0, 6)); // String
console.log(str1.slice(7, 14)); // Methods  


// 6. substring() - similar to slice
console.log(str.substring(6)); // World

// 7. includes() - check if contains substring
console.log(str.includes("World")); // true

// 8. split() - convert to array
console.log(str.split()); // ["Hello World"] (no argument, returns array with original string)
console.log(str.split(" ")); // ["Hello", "World"] (split by space)
console.log(str.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"] (split by each character)

console.log(str1.split());    // ["String Methods in JavaScript"] (no argument, returns array with original string)
console.log(str1.split(" ")); // ["String", "Methods", "in", "JavaScript"] (split by space)
console.log(str1.split("")); // ["S", "t", "r", "i", "n", "g", " ", "M", "e", "t", "h", "o", "d", "s", " ", "i", "n", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"] (split by each character)

console.log(str2.split(" ")); // ["hello", "Shivam", "Jha", "welcome", "to", "JavaScript"] 
console.log(str2.split()); // ["hello Shivam Jha welcome to JavaScript"]
console.log(str2.split("")); // ["h", "e", "l", "l", "o", " ", "S", "h", "i", "v", "a", "m", " ", "J", "h", "a", " ", "w", "e", "l", "c", "o", "m", "e", " ", "t", "o", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


// 9. trim() - remove whitespace
console.log("  Hello  ".trim()); // Hello (whitespace removed from both ends)
console.log(str1.trim());   // String Methods in JavaScript (no leading/trailing whitespace to remove)
console.log(str2.trim());   // hello Shivam Jha welcome to JavaScript (no leading/trailing whitespace to remove)    

// 10. replace() - replace text
console.log(str.replace("World", "JavaScript")); // Hello JavaScript (replace "World" with "JavaScript")
console.log(str1.replace("String","Example of String")); // Str1ng M3th0ds in Jav1scr1pt (replace "String" with "Example of String")
console.log(str2.replace("hello", "hi")); // hi Shivam Jha welcome to JavaScript (replace "hello" with "hi")

// 11. startsWith() and endsWith()
console.log(str.startsWith("Hello")); // true       
console.log(str.endsWith("World")); // true     