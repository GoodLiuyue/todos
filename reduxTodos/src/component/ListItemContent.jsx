import React, { PureComponent } from 'react';
import ListItemUpdate from "./ListItemUpdate.jsx";
export default class ListItemContent extends PureComponent {
  render() {
    let { item, editID, active } = this.props;
    return (
      <div ref="ItemContent">
        {/* {
          !(editID === item.id) ?
            <div
              className="item-input">
              {
                item.isChecked ?
                 <del className="c2">{item.values}</del> :
                <span>{item.values}</span>
              }
            </div>
            : <ListItemUpdate 
              />
        } */}
        <button className={
          // active === item.id ? "item-btn block" : 
         "item-btn"}
           >
            &#10007;</button>
          <div className={ 
            // item.isChecked ? "item-checkbox active" :
          "item-checkbox"}
            >
            &#10003;
          </div>
      </div>
    )
  }
}