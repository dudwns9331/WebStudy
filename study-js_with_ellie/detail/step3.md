# Javascript detail step3

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

- ## 연산과 반복문

<br/>

- ### String Concatenation

```js
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
```

<br/>

```
출력 결과

my cat
12
string literals: 1 + 2 = 3
```

<br/>

JavaScript에서는 `String Concatenation`이 가능하다. 그 유형은 `'string' + 'string'` 형식으로 가능하고 `'string' + number` 형식으로 묶어서 자동적인 형변환이 가능하다. 이의 결과 값은 'stringnumber' 형식으로 string으로 형변환 되어 표시된다.
`backtick` 기호를 이용해서 하나로 묶고 `${var}` 형식을 사용해 변수를 표현 가능하다.

[backtick 및 string format 표현 방식 자세히 알아보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

<br/>
<br/>

- ### Numeric Operators

```js
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponent
```

<br/>

```
출력 결과

 0
 1
 1
 1
 8
```

<br/>

`**` 연산을 통해서 exponent 연산을 할 수 있다.

<br/>
<br/>

- ### Increment and decrement operators

```js
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

// postIncrement = counter;
// counter = counter + 1
const postIncrement = counter++;
console.log(`preIncrement : ${postIncrement}, counter : ${counter}`);
```

<br/>

```
출력 결과

preIncrement : 3, counter : 3
preIncrement : 3, counter : 4
```

<br/>

`++` 기호를 통해서 전위 증감연산과 후위 증감 연산으로 구분할 수 있다.

<br/>
<br/>

- ### Assignment operators

```js
let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y;
x *= y;
x /= y;
```

<br/>

let으로 변수를 선언하고 다음과 같은 연산들이 가능하다.

<br/>
<br/>

- ### Comparison operators

```js
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal
```

<br/>

```
출력 결과

false
false
true
true
```

<br/>
<br/>

- ### Logical operators: || (or), && (and), ! (not)

```js
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first true value

// or 연산자는 앞에 있는 값이 true이면 그 값대로 멈춘다.
// 함수를 호출하는게 마지막에 있는게 좋다? 효율적이다. 상황에 따라 다름
console.log(`or: ${value1 || value2 || check()}`);

// %% (and), finds the first false value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject, something

// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😀");
  }
  return true;
}

// ! (not)
// 값 부정
console.log(!value1);
```

<br/>
<br/>

- ### Equality

```js
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log("* == loose equality, with type conversion");
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 웬만하면 이렇게 쓰는게 좋다.
console.log("* === strict equality, no type conversion");
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// Object equality by reference
console.log("* Object equality by reference");

const YJ1 = { name: "YeongJun" };
const YJ2 = { name: "YeongJun" };
const YJ3 = YJ1;

console.log(YJ1 == YJ2); // false
console.log(YJ1 === YJ2); // false ref가 다르기 때문이다.
console.log(YJ1 === YJ3); // true

// equality - puzzler

console.log("* equality - puzzler");

console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
```

<br/>
<br/>

![reference](https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/com_reference.png)

<br/>
object는 메모리에 탑제 될 때, 주소가 저장되므로 같은 data를 할당 해도 비교시 false가 된다.
<br/>
<br/>

- ### Conditional operaors : if, else if, else

```js
console.log("* if, else if, else");

const name = "hi";
if (name === "YJ") {
  console.log("Welcome YJ!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}
```

<br/>
<br/>

- ### Ternary operator: ? -> condition ? value1 : value2;

```js
console.log(name === "YJ" ? "yes" : "no");
```

<br/>
<br/>

- ### Switch statement

```js
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

console.log("* switch");

const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}
```

<br/>
<br/>

- ### Loops & Question

```js
// while loop, while the condition is true,
// body code is executed.

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
```
