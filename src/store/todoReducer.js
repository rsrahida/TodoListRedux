const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedAddTodos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(updatedAddTodos));
      return { ...state, todos: updatedAddTodos };
    case "REMOVE_ITEM":
      const updatedRemoveTodos = state.todos.filter(
        (_, id) => id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(updatedRemoveTodos));
      return { ...state, todos: updatedRemoveTodos };
    default:
      return state;
  }
};

export default todoReducer;
