import React from "react";
import TodoListItem from "./TodoListItem.jsx";
const TodoList = (props) => {
    return <ul className="mySimpleTodos-list">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
    </ul>
}
export default TodoList;