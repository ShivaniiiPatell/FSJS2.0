/*

 Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
	
	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
*/

let str1 = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    str1 += "* ";
  }
  str1 += "\n";
}

console.log(str1);

let str2 = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    str2 += "* ";
  }
  str2 += "\n";
}

console.log(str2);

let str3 = "";
for (let i = 1; i <= 3; i++) {
  for (let k = 1; k <= 3 - i; k++) {
    str3 += " ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    str3 += "*";
  }
  str3 += "\n";
}

console.log(str3);
