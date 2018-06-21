import React from "react";
import TodoListItem from "./TodoListItem.jsx";
const TodoList = (props) => {
    return <ul className="mySimpleTodos-list">
        {
            props.data.map((item,index)=>
                <TodoListItem 
                    key = {index}
                    handleValue={props.handleValue}
                    isDel = {props.isDel}
                    handleChecked={props.handleChecked}
                    handleEdit={props.handleEdit}
                    id = {item.id}
                    isChecked ={item.isChecked}
                    value = {item.value}/>
            )
        }
    </ul>
}
export default TodoList;