import React , { PureComponent }from "react";
export default class ListItemInput extends PureComponent  {
    constructor(props){
        super(props);
        this.state={
            edit:false,
            value:this.props.value ||""
        }
    }
    onEdit = () =>{
        this.setState({
            edit:true
        })
    }
    onChange = (e) =>{
        this.setState({
            value:e.target.value
        })
    }
    close =() =>{
        this.setState({edit:false})
    }
    render(){
        // console.log("this", this.state.edit)
        return (
            <div>
                { this.state.edit ? <input className="item-input edit" type="text"
                    value={this.state.value} onChange={(e)=>this.onChange(e)}
                    onKeyDown = {(e)=> { this.props.handleEdit(this.props.id,e,this.close)}}/> 
                :
                // <div className="item-input" onDoubleClick = {this.onEdit}>
                //     {this.state.value}</div> 
                <input type="text" className = { this.props.isChecked ?"item-input checked": "item-input"} onDoubleClick ={ this.onEdit}
                value = {this.state.value } readOnly/>
            }
            </div>
        )
    }
}