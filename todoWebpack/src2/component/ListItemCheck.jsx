
import React, { PureComponent ,Component } from "react";
export default class ListItemCheck extends Component {
    constructor(props) {
        super();
    }
    render() {
        console.log("this", this.props.isChecked)
        return <div style={{ zIndex: 16 }} className="iconBox" onClick={
            () => { this.props.handleChecked(this.props.id) }}>
            {<div className = {"item-checkbox " +(!!this.props.isChecked?"active":"")}>&#10003;</div> }
        </div>
        
    }
}
