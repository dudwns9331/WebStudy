# Javascript detail step4

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

- ## Function

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/function_ex1.png" height="180px" width="250px">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/function_ex2.png" height="180px" width="250px">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/function_ex3.png" height="180px" width="250px">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/function_ex4.png"height="180px" width="250px">
</p>

<br/>
<br/>

- ### Function

  - fundamental building block in the program
  - subprogram can be used can be used multibple times
  - performs a task or calculates a value

- ### Function declaration

  - function name{param1, param2} {body... return; }
  - one function === one thing
  - naming: doSomething, command, verb
  - e.g. createCardAndPoint -> createCard, createPoint

- ### Function in Object in JS

<br/>

```js
console.log("**Function declaration**");

function printHello() {
  console.log("Hello");
}

printHello();

function log(message) {
  console.log(message);
}

log("Hello@");
log(1234);
```

```

Hello
Hello@
1234

```

함수를 선언하고 파라미터를 넘길 때는 다음과 같은 형식으로 쓴다.
함수 마다 값을 다르게 가질 수 있고 파라미터의 타입은 지정하지 않는다.

<br/>
<br/>

- ### Parameters

  - premitive parameters: passed by value
  - object parameters: passed by reference

```js
console.log("**parameters**");

function changeName(obj) {
  obj.name = "coder";
}

const YJ = { name: "YJ" };
changeName(YJ);
console.log(YJ);
```

```
{name : "coder"}
```

오브젝트 YJ의 name을 바꾸는 함수로 changeName을 사용했고 . 연산을 통해서 멤버에 접근이 가능하다. 바뀐 값은 그대로 바뀌어서 오브젝트에 적용된다.

<br/>
<br/>

- ### Default parameters (added in ES6)

```js
console.log("**Default parameters**");

function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

showMessage("HI!");
```

```
HI! by unknown
```

파라미터의 처음 값을 default 값으로 지정할 수 있다. from은 unknown으로 선언 되어 있고, 파라미터의 값이 주어지지 않는다면 default 값으로 출력하게 된다.

<br/>
<br/>

- ### Rest parameters (added in ES6)

  - 배열을 넘겨줄 때 ... 을 사용한다.
  - 자바스크립트도 다른 언어처럼 forEach문이 존재하고 of 연산자를 통해서 요소 하나 하나를 꺼내 쓸 수 있다.

```js
log("**Rest parameters**");

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // of 를 이용해서 args의 모든 요소들이 차례로 arg로 들어간다.
  for (const arg of args) {
    console.log(arg);
  }

  // forEach 문을 통해서 arg => log(arg)에 들어가도록 설정한다.
  args.forEach((arg) => console.log(arg));
}

printAll("Hi", "my", "name", "is");
```

```
Hi
my
name
is
```

Hi my name is가 3번 반복되어 출력된다. 배열을 파라미터로 넘겨줄 때는 ... 을 사용하고 for(arg of args)를 통해서 args에 있는 모든 원소들을 하나 하나 씩 arg로 옮겨서 사용 가능하다. 이를 람다식으로 표현한 것이 forEach문이며 같은 기능을 한다.

<br/>
<br/>
 
- ### local scope

```js
log("local scope");

let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);

  function printAnother() {
    let childMessage = "child?";
  }

  // console.log(childMessage);
  printAnother();
}

printMessage();
```

```
hello
global
```

전역 변수와 지역변수이다. 함수 안에 다른 함수를 정의할 수 있다 그 함수는 바깥의 함수 내에서만 사용이 가능하다.

<br/>
<br/>

- ### Retrun a value

```js
log("Return a value");

function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum : ${sum(1, 2)}`);
log("");
```

함수의 리턴을 나타낸다. 리턴 값은 값 그대로 사용 가능하다.

<br/>
<br/>

- ### Early return, early exit
  - 조건이 맞지 않는 경우 빠르게 리턴, 조건이 맞는 경우 나머지

```js
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good!
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }

  // long upgrade logic...
}
```

조건이 맞지 않는 경우 빠르게 리턴하여 다음에 실행되는 긴 로직에 대해서 실행하지 않고 넘어가게 된다.

<br/>
<br/>

- ### First-class function

  - functions are treated like any other variable.
  - can be assigned as a value to variable.
  - can be passed as an argument to other functions.
  - can be returned by another function.

  1. Funtion expression

  - a function declaration can be called earlier than it it defined. (hoisted)
  - a function expresstion is created when the execution reaches it.

```js
console.log("**First-class function**");

// anonymous function
const print = function () {
  console.log("print");
};

print();
const printAgain = print;
printAgain();
const sumAagin = sum;
console.log(sumAagin(1, 3));

// 2. Calback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions

const printNo = function print() {
  console.log("no");
  //   print(); 무한 루프 돈다.
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

log("");

log("**Arrow function**");

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

console.log(add(3, 5));
console.log(simpleMultiply(3, 5));
```

변수에 함수를 저장할 수 있다. 익명 함수의 형식은 `const 함수를 저장할 변수의 이름 = function () {함수에서 실행 될 명령어};` 이다. 화살표 함수를 통해서 익명 함수를 좀 더 간단하게 표현이 가능하다. 화살표 함수의 형식은 `const 함수를 저장할 변수의 이름 = (파라미터...) => 수행될 명령어;` 형식이다.

<br/>
<br/>

- ### IIFE: Immediately Invoked Function Expression + 예제 문제

```js
// 괄호로 묶어서 컴파일과 동시에 바로 수행할 수 있도록 한다.
log("**IIFE**");
(function hello() {
  console.log("IIFE");
})();

function cal(command, a, b) {
  switch (command) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "use correct expression";
  }
}

console.log(cal("+", 10, 2));
console.log(cal("-", 10, 2));
console.log(cal("*", 10, 2));
console.log(cal("/", 10, 2));
console.log(cal("?", 10, 2));
```
