"use strict";

// Promise is a javascript object for asynchronous operation.
// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const primise = new Promise((resolve, reject) => {
  // Doing something heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve('ellie');
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : then, catch, finally

primise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("hen"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fri`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);

console.log();
console.log();
console.log();
console.log();
