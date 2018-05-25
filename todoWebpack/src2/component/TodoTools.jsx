import React from "react";
import ToolQuery from "./ToolQuery.jsx";
import ToolDel from "./ToolDel.jsx";
const TodoTools = (props) => {
    return <div className="mySimpleTodos-tool">
        <div className="tool-count" >7 items left</div>
        <ToolQuery/>
        <ToolDel/>
    </div>
}
export default TodoTools;