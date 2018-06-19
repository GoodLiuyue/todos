import React from "react";
import ToolQueryItem from "./ToolQueryItem.jsx";
const ToolQuery = (props) => {
    return <div className="tool-query" >
        <ToolQueryItem type={"All"} onChangeData = { props.onChangeData} />
        <ToolQueryItem type={"Active"}  onChangeData = { props.onChangeData}/>
        <ToolQueryItem type={"Completed"} onChangeData = { props.onChangeData} />
    </div>
}
export default ToolQuery;