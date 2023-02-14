/*

Filter
The filter() method takes each element in an array and it applies a conditional statement against it.
If this conditional returns true, the element gets pushed to the output array.
If the condition returns false, the element does not get pushed to the output array.


*/

const numbers = [1, 1, 3, 1];
const evens = numbers.filter((item) => {
  return item % 2 === 0;
});
console.log(evens); // [2, 4]
