/*
Write a program to print all the prime number between 0 to 100 (0 and 100 included).

*/

/*

function primeNumber(num) {
  let flag;
  for (let i = 2; i < num; i++) {
    flag = true;
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

for (let i = 2; i <= 10; i++) {
  isPrime = primeNumber(i);
  console.log(isPrime);
}


*/

function primeNumber(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  if (count > 2) {
    return false;
  } else {
    return true;
  }
}

let primeNumberArr = [];
for (let i = 0; i <= 100; i++) {
  if (i == 0 || i == 1) {
    continue;
  } else {
    if (primeNumber(i)) primeNumberArr.push(i);
  }
}

console.log(`prime number between 0 to 100 are ${primeNumberArr}`);
