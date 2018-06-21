import React from "react";
const ToolQueryItem = (props) => {
    return <span className={props.active === props.type ? "active":""}
        onClick ={()=>props.onChangeKey(props.type)}>{props.type}</span>
}
export default ToolQueryItem;