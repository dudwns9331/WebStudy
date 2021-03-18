# Javascript detail step11

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

## Promise

Promise의 설명은 CallBack과 관련있고, 동기 비동기 설명이 겹치기 때문에 [step10](https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/step10.md)을 참고하라.

<br/>
<br/>

- `Promise` 란 무엇인가?

1. Promise는 JavaScript에서 제공하는 비동기 코드를 간편하게 처리할 수 있도록 도와주는 object이다.
2. Promise는 어떤 기능을 실행하고 나서 정상적으로 동작하면, 성공의 메시지와 함께 처리된 결과 값을 전달해준다. 그러나 기능을 수행하다 예상치 못한 문제가 발생하면 error를 전달해준다.
3. State: Pending(보류) -> fulfilled(이행) or rejected(거부)
4. Produce vs Consumer

<br/>

- ### Producer

```js
// 1. Producer
// when new Promise is created, the executor runs automatically.
const primise = new Promise((resolve, reject) => {
  // Doing something heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // 성공 시
    // resolve('ellie');
    // 실패 시
    reject(new Error("no network"));
  }, 2000);
});
```

새로운 Promise가 생성되면 executor라는 콜백 함수가 자동으로 실행된다. executor는 성공과 실패의 경우에 대해서 어떻게 할 것인지 정의한다.

<br/>
<br/>

- ### Consumer

```js
// 2. Consumers : then, catch, finally
primise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
```

then, catch, finally를 통해서 promise의 반응을 소비한다. finally는 try catch가 끝난 후에 무조건 실행된다.

<br/>
<br/>

- ### Promise chaining

```js
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
```

- ### Error Handling

```js
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("hen"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fri`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);

console.log();
console.log();
console.log();
console.log();
```

catch를 통해서 error를 handling 할 수 있다. error가 발생해도 catch를 이용해서 전체적인 Promise chain에 문제가 발생하지 않도록 처리를 할 수 있다.

[promise 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<br/>
<br/>

- ### CallBack to Promise

```js
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
```

<br/>

[code 비교하기](https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/step10.md)
