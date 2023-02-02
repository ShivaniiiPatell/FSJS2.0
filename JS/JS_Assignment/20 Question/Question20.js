/*
In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'
*/

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (shoppingCart[0] !== "Meat") {
  shoppingCart.unshift("Meat");
}

if (shoppingCart[shoppingCart.length - 1] !== "Sugar") {
  shoppingCart.push("Sugar");
}

if (shoppingCart.indexOf("Honey") > -1) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}

let indexx = shoppingCart.indexOf("Tea");
if (indexx > -1) {
  shoppingCart.splice(indexx, 1, "Grean Tea");
}

console.log(shoppingCart);
