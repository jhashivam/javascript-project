// String Methods Examples

const str = "Hello World";
const str1 = "String Methods in JavaScript";
const str2 = "hello Shivam Jha welcome to JavaScript";

// 1. Length
console.log(str.length); // 11
console.log(str1.length); // 28


// 2. toUpperCase() and toLowerCase()
console.log(str.toUpperCase()); // HELLO WORLD
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

// 6. substring() - similar to slice
console.log(str.substring(6)); // World

// 7. includes() - check if contains substring
console.log(str.includes("World")); // true

// 8. split() - convert to array
console.log(str.split("")); // ["Hello", "World"]
console.log(str.split(" ")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
console.log(str1.split()); // ["String", "Methods", "in", "JavaScript"]
console.log(str1.split(" "));  // ["S", "t", "r", "i", "n", "g", " ", "M", "e", "t", "h", "o", "d", "s", " ", "i", "n", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// 9. trim() - remove whitespace
console.log("  Hello  ".trim()); // Hello
console.log(str1.trim());

// 10. replace() - replace text
console.log(str.replace("World", "JavaScript")); // Hello JavaScript
console.log(str1.replace("String","Example of String")); // Str1ng M3th0ds in Jav1scr1pt

// 11. startsWith() and endsWith()
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true