
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

// export default class ListItemUpdate extends PureComponent {
//   onKeyDown = (value, key, id) => {
//     this.props.UpdateKeyDown(value, key, id);
//   }
//   render() {
//     let { item } = this.props;
//     return <input type="text"
//       className="item-input"
//       autoFocus
//       onBlur={() => this.props.fieldID(item.id)("blur")}
//       onKeyDown={(e) => this.onKeyDown(e.target.value, e.keyCode, item.id)} />
//   }
// }