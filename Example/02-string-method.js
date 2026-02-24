// Example of a method called on an object (thing) with an argument (arg)

// In JavaScript, methods are functions that are properties of an object. 
// They can be called using the dot notation on the object they belong to.      
// Example of a method on a string object
const str = "Hello World"; // str is the object, toUpperCase() is the method, and it does not take any arguments

let tvShow = "Game of Thrones"; // Example of a method on a string object with an argument
let price = "$19.99"; // Example of a method on a string object with an argument


console.log(tvShow.includes("Game")); // Output: true (includes() is the method, "Game" is the argument)
console.log(tvShow.indexOf("Thrones")); // Output: 8 (indexOf() is the method, "Thrones" is the argument)
console.log(tvShow.indexOf("Game")); // Output: 0 (indexOf() is the method, "Game" is the argument)
console.log(tvShow.indexOf("of")); // Output: 5 (indexOf() is the method, "of" is the argument) 
console.log(tvShow.indexOf("name")); // Output: -1 (indexOf() is the method, "name" is the argument, not found in the string)
console.log(tvShow.slice(0, 4)); // Output: "Game" (slice() is the method, 0 and 4 are the arguments)
console.log(tvShow.slice(5)); // Output: "of Thrones" (slice() is the method, 5 is the argument)

console.log(price.replace("$", "")); // Output: "19.99" (replace() is the method, "$" and "" are the arguments)
console.log(price.replace("19.99", "29.99")); // Output: "$29.99" (replace() is the method, "19.99" and "29.99" are the arguments)
console.log(price.slice(1)); // Output: "19.99" (slice() is the method, 1 is the argument)
console.log(price.slice(0,-2)); // Output: "$19" (slice() is the method, 0 and -2 are the arguments)
console.log(price.slice(-5)); // Output: "19.99" (slice() is the method, -5 is the argument)



console.log(str.toUpperCase()); // Output: "HELLO WORLD"    


// Example of a method on an array object
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5   

// Example of a method on a custom object. what does below code do? 
// It defines an object person with a name property and a greet method that returns a greeting message using the name property. Then it calls the greet method and logs the result to the console.
const person = 
{
    name: "Alice",
    greet: function() 
    {
        return "Hello, " + this.name;
    }
};
console.log(person.greet()); // Output: "Hello, Alice"  


// Example of a method on a custom object with an argument what does below code do? 
// It defines an object person3 with a name property and a welcome method that returns a welcome message using the name property. Then it calls the welcome method and logs the result to the console.
const person3 =
{
    name: "Shivam Jha",
    welcome: function()
    {
        return "Welcome" +" "+ this.name + " " +"to JavaScript";

    }
}
console.log(person3.welcome())