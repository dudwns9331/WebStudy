# Detail of ArrowFunctions #1

- ## 함수 지정

```js
// 파라미터에 들어가는 변수는 지정해주면 default값으로 지정 가능하다.
function sayHello(name = "name") {
  return "Hello " + name;
}
```

<br/>

- ## Arrow Function

```js
// Arrow Function을 넣을때는 const 변수를 선언하고 = (파라미터) => { 함수의 내용 및 반환 값} 으로 쓴다.

// Arrow Function은 return 을 한다는 것이 함축되어 있다. (중괄호를 쓰지 않는다는 가정하에)
const sayHello2 = (name) => "Hello " + name;
const YJ = sayHello("YeongJun");
```

- Arrow Function은 [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const) (변수 선언 : 블록 범위의 상수를 선언, 상수의 값은 재할당할 수 없으며 다시 선언할 수도 없다.)` 로 선언한 변수에 함수를 넣는것과 같다. 즉, 변수가 리턴값을 가지는 함수가 될 수 있다.

- 형식 : `const {변수} = (인자) => {함수의 내용}`

<br/>

- ## document.querySelector

```js
// index.html의 button을 가져오는 방법이다.
// document.querySelector
const button = document.querySelector("button");
```

[web API(Document)](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector) 중 하나로써 html의 요소를 참조할 수 있도록 한다. 문서 내의 첫 번째 Element를 참조하도록 한다.

<br/>

- ## Arrow function Syntax

```js
// Arrow Function의 규칙 중 하나는 Argument(인자)가 하나 일때는 괄호를 할 필요가 없다는 것이다.
// 두 개 이상일때는 무조건 괄호를 해야함 ()
const handleClick = (event) => {
  console.log(event);
};
```

<br/>

- ## Template Literals

```js
// Template Literals
// backTicks ` 를 이용한다.
// 백틱 기호와 함께 ${변수} 를 써서 변수를 쉽게 가져올 수 있다.
// String과 Variable을 쉽게 사용하기 위해서 쓴다.
const sayHello3 = (name) => `Hello ${name}`;
console.log(sayHello3("BackTicks"));
```
