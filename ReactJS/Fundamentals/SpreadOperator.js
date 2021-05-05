console.log("SpreadOperator");

const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

// 배열이 아니라 String으로 변환된다.
const allDays = days + otherDays;

// 이러면 배열이 출력된다.
// 하지만 배열의 값은 아님
let allDays2 = [days + otherDays];

// SpreadOperator를 통해서 Unpack이 가능하다.
const SpreadOperator = [...days, ...otherDays, "Sun"];

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax MDN 설명

const ob = {
  first: "hi",
  second: "hello",
};

const ab = {
  third: "bye bye",
};

// 오브젝트 안의 내용까지 합해서 나오게 된다.
const two = { ...ob, ...ab };

console.log(allDays);
console.log(allDays2);

console.log(SpreadOperator);

console.log(two);
