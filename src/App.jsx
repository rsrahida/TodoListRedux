import React from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
