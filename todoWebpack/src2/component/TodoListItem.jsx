import React from "react";
import ListItemInput from "./ListItemInput.jsx";
import ListItemCheck from "./ListItemCheck.jsx";
import ListItemDel from "./ListItemDel.jsx";
const TodoListItem = (props) => {
    return <li className="mySimpleTodos-item">
        <ListItemCheck/>
        <ListItemInput />
        <ListItemDel/>
    </li>
}
export default TodoListItem;