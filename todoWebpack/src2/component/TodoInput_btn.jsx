import React from "react";
const TodoInput_btn = (props) => {
    return <div className="iconBox" >
        <span onClick = {props.batchChecked} className="input-btn" >&#9660;</span>
    </div>
}
export default TodoInput_btn;