
import React, { PureComponent } from 'react';
let ListItemUpdate = (props) => {
  let { item } = props;
  return <input type="text"
    className="item-input"
    autoFocus
    onBlur={() => props.fieldID(item.id)("blur")}
    onKeyDown={(e) => props.onkeydown(e.target.value, e.keyCode, item.id)}/>
}
export default ListItemUpdate;