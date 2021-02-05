"use strict";

// Function
// - fundamental building block in th program
// - subprogram can be used can be used multibple times
// - performs a task or calculates a value

// Function declaration
// function name{param1, param2} {body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

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

log("");

// 2. parameters
// premitive parameters: passed by value
// object parameters: passed by reference

console.log("**parameters**");

function changeName(obj) {
  obj.name = "coder";
}

const YJ = { name: "YJ" };
changeName(YJ);
console.log(YJ);
log("");

// 3. Default parameters (added in ES6)

console.log("**Default parameters**");

function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

showMessage("HI!");
log("");

// 4. Rest parameters (added in ES6)

// 배열을 넘겨줄 때 ... 을 사용한다.
// 자바스크립트도 다른 언어처럼 forEach문이 존재하고
// of 연산자를 통해서 요소 하나 하나를 꺼내 쓸 수 있다.

log("**Rest parameters**");
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("Hi", "my", "name", "is");
log("");

// 5. local scope

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
log("");

// 6. Retrun a value

log("Return a value");

function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum : ${sum(1, 2)}`);
log("");

// 7. Early return, early exit
// 조건이 맞지 않는 경우 빠르게 리턴, 조건이 맞는 경우 나머지

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

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it it defined. (hoisted)
// a function expresstion is created when the execution reaches it.

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

log("");
log("**IIFE**");

// IIFE: Immediately Invoked Function Expression
// 바로 호출

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
