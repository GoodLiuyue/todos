import React from "react";
import ToolQueryItem from "./ToolQueryItem.jsx";
const ToolQuery = () => {
    return <div className="tool-query" >
        <ToolQueryItem item={"All"} />
        <ToolQueryItem item={"Active"} />
        <ToolQueryItem item={"Completed"} />
    </div>
}
export default ToolQuery;