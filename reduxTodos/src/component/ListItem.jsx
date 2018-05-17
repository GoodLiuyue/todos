import React, { PureComponent } from 'react';
import ListItemContent from "./ListItemContent.jsx";
let ListItem = (props) => {
  let { data, active, editID } = props;
  return (
    data.map((item, index) => {
      return (
        <li key={item.id} className="w item"
          onMouseOut={() => props.fieldID(item.id)("mouseOut")}
          onMouseOver={() => props.fieldID(item.id)("active")}>
          <ListItemContent item={item}
            active={active}
            editID={editID}
            fieldID={props.fieldID}
            onkeydown={props.onkeydown}/>
        </li>
      );
    })
  )
}
export default ListItem;


