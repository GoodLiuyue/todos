import React from "react";
const ToolQueryItem = (props) => {
    return <span className="" onClick ={props.onChangeData(props.type)}>{props.type}</span>
}
export default ToolQueryItem;