/*
 Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
 */

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < 100; i++) {
  i % 2 == 0 ? evenNumbers.push(i) : oddNumbers.push(i);
}

console.log(`Odd Numbers ${oddNumbers} and Even Numbers ${evenNumbers}`);
