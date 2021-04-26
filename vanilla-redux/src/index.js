import { createStore } from "redux";

// Store는 데이터를 저장하는 저장소를 생성한다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 2. Store를 만들기 위해서는 함수형태의 reducer가 필요하다.
// 3. reducer는 data를 수정하는 함수이다.

// 유일하게 데이터를 바꿀 수 있는 곳
const countModifier = (state = 0) => {
  return state;
};

// 1. Store를 생성한다.
const countStore = createStore(countModifier);

console.log(countStore.getState());
