import React, { useState } from "react";
import "./TodoInput.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addItem(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add to List..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add list</button>
    </div>
  );
};

export default TodoInput;
