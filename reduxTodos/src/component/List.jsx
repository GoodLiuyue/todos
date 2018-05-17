
import React, { PureComponent } from 'react';
import ListItem from "./ListItem.jsx"; 
let  List=(props) =>{
    let { data, active, editID } = props;
    return (
      <ul className="w ul">
        <ListItem 
        data={data} key={"item"}
        onkeydown={props.onkeydown}
        fieldID={props.fieldID}
        active={active}
        editID={editID}/>
      </ul>
    );
}
export default List;
