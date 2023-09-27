import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/action";
function AddTodo(props) {
  let [value, setValue] = useState("");

  const handleChange = (todo) => {
    setValue(todo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(addTodo({ id: Date.now(), name: value, checked: false }));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        name="todo"
        placeholder="enter todos"
        value={value}
      />
    </form>
  );
}

export default connect()(AddTodo);
