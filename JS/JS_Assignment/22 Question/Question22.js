/*

The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

let minAge = ages[0];

let maxAge = ages[ages.length - 1];
console.log(`min age ${minAge} and max age ${maxAge}`);

let sum = ages.reduce((sum, item) => item + sum, 0);
console.log("sum is", sum);

let medianAge;
if (ages.length % 2 == 0) {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
  medianAge = ages[(ages.length - 1) / 2] / 2;
}

console.log("medianAge", medianAge);

let avgAge = sum / ages.length;
console.log(`median age is ${avgAge}`);

let rangeOfAge = maxAge - minAge;

console.log(`range of the ages is ${rangeOfAge}`);

cmpAge = Math.abs(minAge - avgAge) == Math.abs(maxAge - avgAge);
console.log(cmpAge);
