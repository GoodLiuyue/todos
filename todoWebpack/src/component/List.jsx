
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

// export default class List extends PureComponent {
//   render() {
//     let { data, active, editID } = this.props;
//     return (
//       <ul className="w ul">
//         <ListItem 
//         data={data} key={"item"}
//         UpdateKeyDown={this.props.UpdateKeyDown}
//         toggleCheck={this.props.toggleCheck}
//         fieldID={this.props.fieldID}
//         activeID={this.props.activeID}
//         active={active}
//         editID={editID} />
//       </ul>
//     );
//   }
// }