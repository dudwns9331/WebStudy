"use strict";

// Array

// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// Index position

console.log("** Index position **");

const fruits = ["🍏", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[0]);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

console.log("** Looping over an array, print all fruits three way **");

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push : add an item to the end

console.log("** Addition, deletion, copy **");

fruits.push("🍕", "🍔");
console.log(fruits);

// pop: remove an item form the end
fruits.pop();
fruits.pop();

console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🥩", "🥙");
console.log(fruits);

// shift : remove an item from the beginning

fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice : remove an item by index position

console.log("** splice example **");

fruits.push("1", "2", "3");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "6", "8");
console.log(fruits);

// combine two arrays
console.log("** combine two arrays **");

const fruits2 = ["🍧", "🍨"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index

console.clear();

console.log("indexOf");

console.log(fruits);
console.log(fruits.indexOf("6"));
console.log(fruits.indexOf("8"));

console.log("** inclues **");

// includes
console.log(fruits.includes("2"));
console.log(fruits.includes("1"));
console.log(fruits.indexOf("1"));

// lastIndexOf
console.log("** lastIndexOf **");

fruits.push("6");
console.log(fruits);
console.log(fruits.indexOf("6"));
console.log(fruits.lastIndexOf("6"));
