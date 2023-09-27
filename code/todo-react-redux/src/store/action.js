export const addTodo = (todo) => {
  return {
    type: "addTodo",
    payload: todo,
  };
};

export const handleCheckbox = (i) => {
  console.log(i);
  return {
    type: "checked",
    payload: i,
  };
};

export const handleDelete = (i) => {
  return {
    type: "delete",
    payload: i,
  };
};
