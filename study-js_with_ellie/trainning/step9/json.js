"use strict";

// JavaScript Objhect Notation

// 1. Object to Json
// stringify(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   symbol: Symbol("id"),
  jump: () => {
    console.log(`${this.name} can jump`);
  },

  //   함수는 오브젝트에 있는 데이터가 아니기 떄문에 json에 포함되지 안흔ㄴ다.
  //    symbol과 같은 함수도 json에 포함되지 않는다.
};

console.log("** json 데이터 출력 예제 **");

console.log("** 모든 데이터 출력 **");
json = JSON.stringify(rabbit);
console.log(json);

console.log("** 원하는 키값만 출력 **");
// 원하는 property만 골라서 출력이 가능하다. 혹은 callback 함수를 통해서 관리한다.
json = JSON.stringify(rabbit, ["name"]);
console.log(json);

console.log("** 콜백 함수를 이용해서 출력 **");

// 콜백 함수를 이용하면 안에 있는 모든 정보를 출력이 가능해진다.
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value: ${value}`);
  return key === "name" ? "YJ" : value;
});

console.log(json);

// 2. JSON to Object
// parse(json)

console.log("** json을 다시 obj로 바꾸는 방법 **");
console.log("");

json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();

// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// 유용한 사이트
// JSON Diff
// JSON beautifier
// JSON Parser
// JSON Validator
