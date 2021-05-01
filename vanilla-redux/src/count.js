import { createStore } from "redux";

// Store는 데이터를 저장하는 저장소를 생성한다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// 2. Store를 만들기 위해서는 함수형태의 reducer가 필요하다.
// 3. reducer는 data를 수정하는 함수이다.

// 유일하게 데이터를 바꿀 수 있는 곳
const countModifier = (count = 0, action) => {
  // 이 변수가 리턴하는 값은 모두 data가 된다.
  // 즉, 리턴하는 값은 현재의 상태를 의미기 때문에 count 라는 상태에 계속해서 저장이 된다.
  // 무엇을 리턴하든지 그 에플리케이션의 상태가 된다.

  // 상태를 controll 할때는 case문을 사용하는것이 좋다.

  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// Store를 생성한다.
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe를 통해서 상태 변화에 대한 반응을 설정할 수 있다.
// event 발생시 호출되는 함수임.
countStore.subscribe(onChange);

// countStroe => dispathch : f, subscribe : f, replaceReducer : f, Symbol : f

// Store에 dispatch를 할 경우 countModifier를 호출하게 된다.
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

const handleAdd = () => {
  // Actions must be plain objects.
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// Store의 상태를 가져오는 것 getState()
