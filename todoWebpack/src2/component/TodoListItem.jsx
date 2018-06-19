import React from "react";
import ListItemInput from "./ListItemInput.jsx";
import ListItemCheck from "./ListItemCheck.jsx";
import ListItemDel from "./ListItemDel.jsx";
const TodoListItem = (props) => {
    console.log("item props", props.isChecked)
    return <li className="mySimpleTodos-item">
        <ListItemCheck isChecked={`${props.isChecked}`} 
            handleChecked={props.handleChecked} id={props.id} />
        <ListItemInput value={props.value} handleValue={props.handleValue} 
         handleEdit={props.handleEdit} id={props.id}/>
        <ListItemDel isDel={props.isDel} id={props.id} />
    </li>
}
export default TodoListItem;