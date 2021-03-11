# Javascript detail step5

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

- ### Objects
  - one of the JavaScript's data types.
  - a collection of related data and/or functionality
  - Nearly all objects in JavaScript are instances of Object
  - object = { key : value };

<br/>

- ### Literals and properties

```js
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
```

`Object Literal` 문법은 `const 객체명 = { };` 이며 `Object constructor` 문법은 `const 객체명 = new Object();` 이다. 동적 프로그래밍이 가능하지만 유지보수가 힘들고 오류가 많이 날 수 있기 때문에 위와 같이 객체의 필드를 추가하고 지우는 것은 삼가한다.

<br/>
<br/>

- ### Computed properties
  - key should be always string
  - 이 방법은 동적으로 Runtime 때 정해지는 값을 받아오기 위해서 사용한다.

```js
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
```

키 값은 항상 string을 사용한다. 동적으로 정해지는 값을 받아오기 위해 사용한다.

<br/>
<br/>

- ### Property value shorthand

```js
console.log("** Property value shrthand **");

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("YJ", 23);

console.log(person4);
```

Property value를 간단하게 정의하는 방법은 { } 안에 정해진 property의 값을 바로 정하는 것이다.

<br/>
<br/>

- ### Constructor

```js
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  //   return this;
}
```

받아오는 name 과 age가 그대로 사용되기 때문에 this 연산자를 통해서 생성자를 대신해서 초기화 할 수 있다.

<br/>
<br/>

- ### in operator : property existence check (key in object)

```js
console.log("** in operator : property existence check (key in object) **");

console.log("name" in YJ);
console.log("age" in YJ);
console.log("random" in YJ);
console.log(YJ.random);
```

in 연산자를 통해서 객체 안에 property가 존재하는지 체크 가능하다.

<br/>
<br/>

- ### for .. in vs for .. of, for (key in obj)

```js
console.log("** for .. in vs for .. of **");

for (let key in YJ) {
  console.log(key);
}

const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}
```

for.. in 을 통해서 배열의 모든 요소를 참조 가능하다. 혹은 of 를 이용하여 하나씩 참조 가능하다.

<br/>
<br/>

- ### Fun cloning, Object.assign(dest, [obj, obj2, obj3..])

```js
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
```

옛날의 방법은 배열의 key 값을 이용해서 하나 하나 옮겼지만 Object.assign({}, value) 를 통해서 한번에 복제가 가능하다. 여러 개의 object를 합치는 것 또한 가능하다. 같은 property를 가지고 있다면 마지막에 주어진 값이 그 전의 값을 덮어쓴다.
