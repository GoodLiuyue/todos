import React, { PureComponent } from 'react';
import ListItemUpdate from "./ListItemUpdate.jsx";
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