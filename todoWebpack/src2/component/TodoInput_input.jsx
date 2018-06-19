import React , {PureComponent} from "react";
export default  class TodoInput_input extends PureComponent {
    constructor(props){
        super();
        this.state={
            value:""
        }
    }

    onChange = (e) =>{
        this.setState({
            value:e.target.value
        })
    }
    // onKeyDown = async (e)=>{
    //     this.props.handleValue(e) ;
    //     this.onclear();
    // }
    // onclear = () =>{
    //     this.setState({
    //         value:""
    //     });
    // }
    render(){
        return <input className="mySimpleTodos-input" type="text"
        onKeyDown={(e) =>   this.props.handleValue(e)  }
        // value ={e.target.value}
        // onChange={(e)=>{this.onChange(e)}}
        autoFocus placeholder="What needs to be none" />
    }
}