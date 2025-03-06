import React from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import UserUI from "./components/UserUI/UserUI"; 

const App = () => {
  return (
    <div>
      <UserUI /> 
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
