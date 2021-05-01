import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// MUTATE STATE는 절대 사용하면 안된다. => ?
// https://redux.js.org/understanding/thinking-in-redux/three-principles => 리덕스 세 가지 원칙

// Store를 수정할 때는 reducer를 통해서만 진행한다. read-Only
// 새로운 array를 return 하도록 한다. => 새로운 state를 리턴하는 것임..

// reducer의 action들을 함수로 만들어 리턴만 한다.

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// Store의 정보를 다루는 reducer.
// 상태의 변경은 reducer에서만 이루어진다.

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // ES6 Spread => 모든 배열의 내용을 가져온다.
      // 순서를 수정 가능하다. 새로운 상태를 리턴하기 때문이다.
      const newToDoObj = { text: action.text, id: Date.now() };
      return [...state, newToDoObj];

    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // array에서 element를 삭제하는 방법
    case DELETE_TODO:
      const cleaned = state.filter((toDo) => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// 리스트에 할 일을 추가하는 함수
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchdeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

// 리스트를 그려주는 함수
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.innerText = "X";
    button.addEventListener("click", dispatchdeleteToDo);

    // id, text 지정
    li.id = toDo.id;
    li.innerText = toDo.text;

    // 리스트에 버튼 추가
    li.appendChild(button);

    // 리스트에 항목 추가
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

// 제출 했을 때 호출되는 함수
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
