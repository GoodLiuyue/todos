import React from "react";
import ToolQuery from "./ToolQuery.jsx";
import ToolDel from "./ToolDel.jsx";
const TodoTools = (props) => {
    return <div className="mySimpleTodos-tool">
        <div className="tool-count"  >{ props.onChangeData("Completed").length} item left </div>
        <ToolQuery 
            // onChangeData = { props.onChangeData} 
            active= {props.active}
            onChangeKey= {props.onChangeKey}/>
        <ToolDel   batchDel = { props.batchDel}/>
    </div>
}
export default TodoTools;