import React from "react";
import TodoInput_btn from "./TodoInput_btn.jsx";
import TodoInput_input from "./TodoInput_input.jsx";
const TodoInput = (props) => {
    return <div className="mySimpleTodos-inputBox">
      <TodoInput_btn/>
      <TodoInput_input/>
    </div>
}
export default TodoInput;