"use strict";
// 동기적 처리 => 하나 실행이 끝나고 나서 다음 명령을 수행하는 것
// 비동기적 처리 => 하나의 실행을 하는동안 다른 명령어를 수행하는 것

// async & await
// clear style of using promise :)

// 1. async
// 자동으로 Promise로 바꾸어준다.
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

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

// 3. useful APIs
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
