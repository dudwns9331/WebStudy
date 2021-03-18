# Javascript detail step10

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

- ## CallBack

1. JavaScript is synchronous.
2. Execute the code block by orger after hoisting
3. hoisting: var, function declaration

자바스크립트는 `동기적`이다. `hoisting`이 된 이후부터, 코드가 작성된 순서대로 실행된다. `hoisting`이란 `var, function` 선언들이 코드 맨 위로 자동으로 올라가는 것을 말한다.

[hoisting 자세한 설명 바로가기](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)

<br/>
<br/>

```s
동기적(Synchronous)이란 어떤 작업을 요청했을 때 그 작업이 종료될 때까지 기다린 후 작업을 수행하는 방식이다.

비동기적(Asynchronous)이란 어떤 작업을 요청했을 때 그 작업이 종료될 때까지 기다리지 않고 다른 작업을 하고 있다가, 요청했던 작업이 종료되면 그에 대한 추가 작업을 수행하는 방식이다.
```

<br/>

- ### Synchronous CallBack

```js
console.log("1"); // 동기
setTimeout(() => console.log("2"), 1000); // 비동기
console.log("3"); // 동기

// Synchronous callback

function printImmediately(print) {
  print(); // 동기
}

printImmediately(() => console.log("hello"));
```

printImmediately는 함수의 인자로 console.log("hello")를 넘겨준 것이다. 변수는 함수를 담을 수 있다.

<br/>
<br/>

- ### ASynchronous CallBack

```js
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout); // 비동기
}

printWithDelay(() => console.log("async callback"), 2000);
```

<br/>
<br/>

- ### CallBack Hell Example

```js
// Callbcak Hell Example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
```

CallBack Chain의 문제점은 가독성이 안좋고 비즈니스 로직을 이해하기 힘들다. 또한, 디버깅 할 때 굉장히 어렵고 유지보수가 좋지 않다.

[CallBack function 설명 바로가기](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
