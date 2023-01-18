/*

Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

*/

let str = "Hello Shivani, How are you??";

let check = "Hello";

str.includes("Hi")
  ? console.log("String contains Hi word")
  : console.log("Strint doesnot contain Hi word");

if (str.includes(check)) {
  console.log("String contains Hello word");
} else {
  console.log("Strint doesnot contain word");
}
