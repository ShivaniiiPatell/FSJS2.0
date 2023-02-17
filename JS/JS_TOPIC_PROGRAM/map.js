const newArr = numbers.map((x) => {
  let y = 2;
  return x * y;
});
console.log(newArr);

const newArr1 = numbers.map(function (x, index) {
  const obj = {};
  obj[index] = x * x;
  return obj;
});

console.log(newArr1);
