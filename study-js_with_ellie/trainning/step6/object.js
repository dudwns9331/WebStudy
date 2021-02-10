"use strict";
// MDN Object를  참고하자.

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties

console.log("** Literals and properties **");

const obj1 = {}; // 'Object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const YJ = { name: "YJ", age: 4 };
print(YJ);

// Runtime 동안에 결정이나서 매우 동적으로 프로그래밍이 가능하지만
// 유지보수가 힘들고 오류가 많이 날 수 있기 때문에 이런 방법은 피해야 한다.
YJ.hasJob = true;
console.log(YJ.hasJob);

delete YJ.hasJob;
console.log(YJ.hasJob);

// 2. Computed properties
// key should be always string
// 이 방법은 동적으로 Runtime 때 정해지는 값을 받아오기 위해서 사용한다.

console.log("** Computed properties **");

console.log(YJ.name);
console.log(YJ["name"]);

YJ["hasJob"] = true;
console.log(YJ.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(YJ, "name");
printValue(YJ, "age");

// 3. Property value shorthand

console.log("** Property value shrthand **");

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("YJ", 23);

console.log(person4);

// 4. Constructor
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  //   return this;
}

// 5. in operator : property existence check (key in object)

console.log("** in operator : property existence check (key in object) **");

console.log("name" in YJ);
console.log("age" in YJ);
console.log("random" in YJ);
console.log(YJ.random);

// 6. for .. in vs for .. of
// for (key in obj)

console.log("** for .. in vs for .. of **");

for (let key in YJ) {
  console.log(key);
}

const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj, obj2, obj3..])

console.log("** Fun Cloning **");

const user = { name: "YJ", age: "23" };
const user2 = user;
console.log(user);

// old way

const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}

console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example

console.log("** another example ** ");

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
