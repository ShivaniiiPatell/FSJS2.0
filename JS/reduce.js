const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function (result, item) {
  console.log("result", result, "item", item);
  return result + item;
}, 0);
console.log(sum);

setInterval(function () {
  console.log("Good morning");
}, 2000);
