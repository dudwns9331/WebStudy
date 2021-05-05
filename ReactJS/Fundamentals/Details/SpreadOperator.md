# Detail of SpreadOperator #2

## Array Example

```js
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

// 배열이 아니라 String으로 변환된다.
const allDays = days + otherDays;

// 이러면 배열이 출력된다.
// 하지만 배열의 값은 아님
let allDays2 = [days + otherDays];
```

[let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) 구문은 블록 유효 범위를 갖는 지역 변수를 선언하며, 선언과 동시에 임의의 값으로 초기화할 수도 있다. const는 상수값 저장임.

<br/>

## Spread Operator Example

- [Spread Operator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```js
// SpreadOperator를 통해서 Unpack이 가능하다.
const SpreadOperator = [...days, ...otherDays, "Sun"];

// 오브젝트 예시
const ob = {
  first: "hi",
  second: "hello",
};

const ab = {
  third: "bye bye",
};

// 오브젝트 안의 내용까지 합해서 나오게 된다.
const two = { ...ob, ...ab };
```
