
import React, { PureComponent } from "react";
export default class ListItemCheck extends PureComponent {
    constructor(props) {
        super();
    }
    render() {
        return <div className="iconBox" onChange = {
            () => {
                console.log("7777")
                // this.props.handleChecked( this.props.id)
            }
        }>
            <div className={ this.props.isChecked ? "item-checkbox" :
             "item-checkbox active"}>&#10003;</div>
        </div>
    }
}



// const ListItemCheck = (props) => {
//     console.log("3377",props)
//     return <div className="iconBox">
//         <div onClick={
//            ()=>{
//             console.log("7777")
//            }
//     //         ()=>{  
//     //             console.log("7777")
//     //     props.handleChecked(props.id)
//     // }
// } 
//             className={props.isChecked ? "item-checkbox" :
//             "item-checkbox active"}>&#10003;</div>
//     </div>
// }
// export default ListItemCheck;