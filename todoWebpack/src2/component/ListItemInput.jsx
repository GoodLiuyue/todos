import React , { PureComponent }from "react";
export default class ListItemInput extends PureComponent  {
    constructor(props){
        super(props);
        this.state={
            edit:true,
            value:this.props.value ||""
        }
    }
    onEdit = () =>{
        this.setState({
            edit:false
        })
    }
    onChange = (e) =>{
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return <input className="item-input" type="text"
        value={this.state.value} 
        readOnly = {this.state.edit} 
        onDoubleClick = {this.onEdit} //怎么 关闭状态；
        onChange={(e)=>this.onChange(e)}
        onKeyDown = {(e)=> {
            this.setState({edit:false})
            this.props.handleEdit(this.props.id,e)
        }}/>
    }
}