import React, { PureComponent } from 'react';
import ListItemUpdate from "./ListItemUpdate.jsx";
// let ListItemContent = (props) => {
//   let { item, editID, active } = props;
//   return (
//     <div ref="ItemContent">
//       {
//         !(editID === item.id) ?
//           <div onDoubleClick={() => props.activeID("editID", item.id)}
//             className="item-input">
//             {
//               item.isChecked ? <del className="c2">{item.values}</del> :
//                 <span>{item.values}</span>
//             }
//           </div>
//           : <ListItemUpdate item={item}
//             fieldID={props.fieldID}
//             UpdateKeyDown={props.UpdateKeyDown} />
//       }
//       <input type="checkbox" checked={item.isChecked}
//         className="item-checkbox"
//         onChange={() => props.toggleCheck(item)} />
//       <button className={active === item.id ? "item-btn block" : "item-btn"}
//         onClick={() => props.fieldID(item.id)("subItem")}>&#935;</button>
//     </div>
//   )
// }
// export default ListItemContent;

export default class ListItemContent extends PureComponent {
  render() {
    let { item, editID, active } = this.props;
    return (
      <div ref="ItemContent">
        {
          !(editID === item.id) ?
            <div onDoubleClick={() => this.props.fieldID(item.id)("editID")}
              className="item-input">
              {
                item.isChecked ? <del className="c2">{item.values}</del> :
                  <span>{item.values}</span>
              }
            </div>
            : <ListItemUpdate item={item}
              fieldID={this.props.fieldID}
              onkeydown={this.props.onkeydown}/>
        }
        {/* <input type="checkbox" checked={item.isChecked}className="item-checkbox"
          onChange={() => this.props.fieldID(item.id)("toggle")}/> */}
        
        <button className={active === item.id ? "item-btn block" : "item-btn"}
            onClick={() => this.props.fieldID(item.id)("subItem")}>
            &#10007;</button>
          <div className={ item.isChecked ? "item-checkbox active" :"item-checkbox"}
            onClick={() => this.props.fieldID(item.id)("toggle")}>
            &#10003;
          </div>
      </div>
    )
  }
}