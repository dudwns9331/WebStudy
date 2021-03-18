# Javascript detail step12

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

## async & await

1. promise chaining을 계속 사용하다보면 코드의 가독성이 떨어진다.
2. async와 await는 Promise를 간결하고 간편하게 `동기적으로 실행되는 것처럼` 보이게 만들어주는 API이다.
3. async 와 await는 새로운 것이 추가 된게 아니라, 기존에 존재하는 Promise 위에 조금 더 간편한 API를 제공함 이런 것을 `syntactic sugar` 라고 한다.

[async 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)

[async 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await)

<br/>

## 비동기 처리를 반드시 해야하는 이유

1. JavaScript 엔진은 블록({})안에 코드를 동기적으로 처리한다.
2. 시간이 오래 걸리는 코드를 비동기 처리를 전혀 하지 않으면, 다음 코드에 문제가 발생할 수 있다.
3. 예를 들어 서버에서 data를 받아와서 웹페이지에 출력하는 시나리오가 있다.
4. data를 받아 오는데 10초가 걸림, 근데 비동기 처리를 안하면 텅 빈 data를 출력 해버림

<br/>
<br/>

- ### async

```js
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);
```

자동으로 Promise로 바꾸어 준다.

<br/>

- ### await

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// function getBanana() {
//   return delay(1000).then(() => "banana");
// }

// 콜백 함수를 이용한 것
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
pickFruits().then(console.log);

// 비동기 처리
async function pickFruits() {
  //   Promise를 만들어서 병렬적으로 수행이 가능하다.
  //   하지만 더러워서 사용안함ㅋ
  const applePromise = getApple();
  const bananaPromise = getBanana();

  //   사과랑 바나나가 연관이 없기 때문에
  //   await으로 둘 다 만들어지기를 기다리는 것은 비효율적이다.
  //   const apple = await getApple();
  //   const banana = await getBanana();

  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
```

위에서부터 Promise를 이용한 방법, 콜백 함수를 이용한 방법, 비동기 처리를 통한 방법이다.

<br/>
<br/>

- ### Useful APIs

```js
function pickAllFruits() {
  // Promise.all을 통해서 프로미스들이 모두 수행될 때까지 기다린다.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
  // 배열에 전달되는 값 중에서 제일 먼저 전달되는 값을 가져온다.
}

pickOnlyOne().then(console.log);
```

Promise.all은 promise들이 모두 수행될 때까지 기다린다.

[promise 사용 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
