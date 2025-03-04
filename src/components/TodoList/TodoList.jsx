import React from "react";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/actions";

const TodoList = () => {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="todo-list-container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
