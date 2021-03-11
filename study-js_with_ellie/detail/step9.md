p# Javascript detail step8

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

- ## JSON

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/JSON_ex1.png" height="300px" width="500px">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/JSON_ex2.png" height="300px" width="500px">
</p>

<br/>
<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/JSON_ex3.png" height="300px" width="500px">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/JSON_ex4.png" height="300px" width="500px">

</p>

<br/>

- ### Object to Json - stringify(obj)

```js
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

  // 함수는 오브젝트에 있는 데이터가 아니기 떄문에 json에 포함되지 않는다.

  // symbol과 같은 함수도 json에 포함되지 않는다.
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
```

JSON.stringify 함수를 통해서 객체를 JSON 형식의 데이터로 변환이 가능하다. 객체 안에 있는 함수는 데이터가 아니기 때문에 JSON 형식으로 변환이 불가능하지만 CallBack 함수를 통해서 안에 있는 모든 정보를 출력할 수 있다. 원하는 property만 골라서 출력이 가능하고 CallBack 함수를 통해서 관리가 가능하다.

[JSON 자세한 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)

<br/>
<br/>

- ### JSON to Object - parse(json)

```js
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
```

JSON.parse를 통해서 JSON의 값을 다시 string의 값으로 변환이 가능하다.
