import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/actions";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos); 
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="todo-list-container">
      <ul>
        {Array.isArray(todos) ? (
          todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No todos available.</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;

/* import React from "react";
import { connect } from "react-redux"; 
import { removeItem } from "../../store/actions";
import "./TodoList.css";


const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});


const mapDispatchToProps = (dispatch) => ({
  handleRemoveTodo: (id) => dispatch(removeItem(id)), 
});

const TodoList = ({ todos, handleRemoveTodo }) => {
  return (
    <div className="todo-list-container">
      <ul>
        {Array.isArray(todos) ? (
          todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No todos available.</p>
        )}
      </ul>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList); */

