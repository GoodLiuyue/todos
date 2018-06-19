
import React from "react";
const ListItemDel = (props) => {
    return <div className="iconBox">
        <div onClick = {() => props.isDel(props.id)} 
        className="item-btn">&#10005;</div>
    </div>
}
export default ListItemDel;