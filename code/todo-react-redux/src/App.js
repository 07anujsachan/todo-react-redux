import { connect } from "react-redux";
import { handleCheckbox, handleDelete } from "./store/action";
import AddTodo from "./components/AddTodo";

function App(props) {
  return (
    <div className="container">
      <h1>todos</h1>
      <AddTodo />

      <ul>
        {props.todos.map((todo, i) => {
          return (
            <>
              <li key={i} className="flex">
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => props.dispatch(handleCheckbox(i))}
                />
                <p>{todo.name}</p>
                <p onClick={() => props.dispatch(handleDelete(i))}>X</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(App);

/* todoList = [
 {
  name: todoName (value);
  checked: false;
 },
  {
  name: todoName (value);
  checked: false;
 }
  {
  name: todoName (value);
  checked: false;
 }
  {
  name: todoName (value);
  checked: false;
 }
]*/
