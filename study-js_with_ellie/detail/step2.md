# Javascript detail step2

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

<br/>

- ### variable

`let`이라는 키워드는 ES6에서 추가되었다. 글로벌 값은 정해서 쓰는게 좋다. `var` 키워드 보다는 `let`을 이용한다. `var`는 선언하기 전에도 값을 할당할 수 있게 해주고 출력도 가능하다. 이를 `var hoisting`이라고 하는데, 어디에 선언했냐에 상관없이 제일 위로 끌어준다. 또한 `var`는 `block scope`의 개념이 없다. `var hoisting`을 막기 위해서 `let`을 사용한다.

[var-hoisting](https://developer.mozilla.org/ko/docs/Glossary/Hoisting) 자세히 알아보기

<br/>

```javascript
let globalName = "global name";

{
  let name = "yeongjun";
  console.log(name);
  name = "hello";
  console.log(name);
}

console.log(name);
console.log(globalName);

{
  age = 4;
  var age;
}

console.log(age);
```

<br/>

`global variable`은 다른 프로그래밍 언어와 같으므로 자세한 설명은 생략한다.

---

<br/>

- ### const

`const` 키워드는 상수로 변경이 불가능하다. `immutable data type`이라고도 한다. `immutable data type`은 security, thread safety, reduce human mistakes등의 이유로도 많이 쓰인다.

```js
const daysInWeek = 7;
const maxNumber = 5;
```

---

<br/>

- ### variable types

`primitive, sigle item: number, string, boolean, null, undefind, symbol` 등의 데이터 타입이 좋재하는데, 다른 언어들과 다르게 number를 통해서 정수, 실수등을 묶어서 표현한다.
`object`는 box container와 같은 역할을 한다. 객체를 담고 그 안에 내용이 있을 수 있다.

`function, first-class function` 함수를 변수에 전달이 가능하다.
<br/>
`number type` -> 타입 추론을 통해서 자동으로 들어감

```js
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// type은 number 이다.

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string) 백틱으로 묶고 ${}를 이용한다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// console.log(`value: ` + helloBob + ' type: ' + typeof helloBob)

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null : object이다.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for object
// 두 개의 심볼은 다르다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");

console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
```

<br/>

- 숫자끼리의 연산에서 숫자가 아닌 것을 나타내는 것은 `NaN`이다.
  <br/>

- `string`을 표시할때, template literals 방식을 사용해서 \`${변수}\`
  와 같은 형식을 사용이 가능하다. 백틱 기호 안에 있는 것들은 모두 `string`으로 인식되며, ${변수}의 표현을 통해서 한 `string`에 변수의 값까지 넣을 수 있게 된다.
  <br/>
- boolean 값 중 `false`는 `0, null, undefined, NaN` 과 비어있는 `string` 값으로 해석될 수 있다. `true`는 `false`가 아닌 다른 값들을 모두 포함한다.

- `null` 값은 `object`이고, `symbol`은 오브젝트에 고유의 id를 지정해주는 것과 같다.

---

- ### Dynamic typing : dynamically typed language

```js
let text = "hello";
console.log(text.charAt(0));
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value : ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
```

<br/>

- JavaScript는 동적 타입 매칭이 가능하다. string의 값과 정수가 더해지더라도, string의 값이 정수로 변환이 가능한 값이라면 연산이 가능하다.
