import React from "react";
import ToolQueryItem from "./ToolQueryItem.jsx";
const ToolQuery = (props) => {
    return <div className="tool-query" >
        <ToolQueryItem type={"All"}
        //  onChangeData = { props.onChangeData} 
            active= {props.active}
            onChangeKey= {props.onChangeKey} />
        <ToolQueryItem type={"Active"} 
            active= {props.active}
            onChangeKey= {props.onChangeKey}/>
        <ToolQueryItem type={"Completed"} 
            active= {props.active}
            onChangeKey= {props.onChangeKey}/>
    </div>
}
export default ToolQuery;