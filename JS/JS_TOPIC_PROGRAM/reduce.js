/**
The reduce() method reduces an array of values down to just one value. 
To get the output value, it runs a reducer function on each element of the array. 

The callback argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.

accumulator - the returned value of the previous iteration
currentValue - the current item in the array
index - the index of the current item
array - the original array on which reduce was called
The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.

 */

let numbers = [1, 2, 3, 4, 5];

let sun = numbers.reduce((sum, item) => {
  return sum + item;
}, (sum = 0));

console.log(sun);

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

let petsCount = pets.reduce(function (data, item) {
  if (Object.keys(data).includes(item)) {
    data[item]++;
  } else {
    data[item] = 1;
  }
  return data;
}, {});

console.log(petsCount);

