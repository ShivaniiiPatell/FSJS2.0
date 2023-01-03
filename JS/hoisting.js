// Example 1

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//   console.log("Namste");
// }

// /*
//     OUTPUT : -

//     Namste
//     undefined
//     [Function: getName]

// */

// // Example 2

// getName();
// console.log(x);
// console.log(getName);

// function getName() {
//   console.log("Namste");
// }

/*
    OUTPUT :-

    console.log(x);
            ^
    ReferenceError: x is not defined
*/

let e = null;
console.log(typeof e);
