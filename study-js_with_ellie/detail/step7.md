# Javascript detail step7

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

- ## Array

<br/>

- ### Declaration

```js
const arr1 = new Array();
const arr2 = [1, 2];
```

배열을 선언할 때는 `new Array()`를 통해서 객체를 생성하거나 배열의 요소를 추가해서 [] 대괄호로 묶으면 된다.

<br/>
<br/>

- ### Index position

```js
console.log("** Index position **");

const fruits = ["🍏", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[0]);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
```

배열의 첫 시작은 0번부터이고 `(배열의 이름).length`를 통해서 배열의 길이를 가져올 수 있다.

- ### Looping over an array

```js
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
```

각각의 반복문을 통해서 배열의 요소에 접근이 가능하다.

<br/>
<br/>

- ### Addition, deletion, copy

```js
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
```

`push`와 `pop`을 이용해서 stack을 사용할 수 있고 `shift` 연산이 존재한다. 하지만 `shift` 연산은 `push`와 `pop`보다 느리고 `splice`는 주어진 배열의 값을 삭제하거나 추가할 수 있다. combine 하기 위해서는 `concat`을 통해서 배열을 이어 붙인다.

[splice 설명 자세히 보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

<br/>
<br/>

- ### Searching - indexOf : find the index

```js
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
```

`indexOf`를 통해서 해당 요소의 인덱스 번호를 알 수 있다. `includes` 를 통해서 해당 요소가 배열안에 있는지 없는지 판단이 가능하다. 중복되어 있는 경우 `lastIndexOf`를 통해서 마지막 요소를 가져올 수 있다.
