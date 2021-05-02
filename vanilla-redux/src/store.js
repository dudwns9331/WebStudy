// store.js
// ToDo List의 State를 저장하고 수정하는 곳

// import { createStore } from "redux";
import {
  configureStore,
  // createAction,
  // createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// https://redux-toolkit.js.org/api/createReducer 리덕스 툴킷 CreateReducer 예시 및 설명

// const reducer = createReducer([], {
//   // push는 mutate 하게 해준다. 상태를 return 하지 않는다. 변경만 시킨다는 뜻
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   // 혹은 새로운 state를 return 해야 한다.
//   [deleteToDo]: (state, action) => {
//     state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
