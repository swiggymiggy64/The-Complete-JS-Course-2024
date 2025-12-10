// * Exporting and Importing in ES6 Modules

// Importing module
// import './shoppingCart.js';
// console.log('Importing module');

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// * Top-Level Await (ES2022)
