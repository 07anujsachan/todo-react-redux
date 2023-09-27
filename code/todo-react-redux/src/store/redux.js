import { createStore } from "redux";

function reducer(state = { todos: [] }, action) {
  switch (action.type) {
    case "addTodo":
      console.log("added", action.payload, state);
      state.todos = state.todos.concat(action.payload);
      return { ...state };
    case "checked":
      state.todos[action.payload].checked =
        !state.todos[action.payload].checked;
      return { ...state, todos: [...state.todos] };
    case "delete":
      state.todos.splice(action.payload, 1);
      return { ...state, todos: [...state.todos] };
    default:
      return state;
  }
}

export let store = createStore(reducer);
