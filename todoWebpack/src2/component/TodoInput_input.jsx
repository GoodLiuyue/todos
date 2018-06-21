import React , {PureComponent} from "react";
export default  class TodoInput_input extends PureComponent {
    constructor(props){
        super();
        this.state={
            value:""
        }
    }

    //shabi liuyue ; wo meng guo zhangg wo guoque  qo  wo yaozhengzenme xiangxiang ;
    // wo  quoguo  ;wo  wo  ;wo wo ; wo ; wo; wo wo;w ow; ow ; wow; wo;
    // wo  wo  wo wo  wo  wo  wow  wow ; wow ;

    onchangeValue = (value) => {
        this.setState({
            value
        })
    }
    cleaValue = () =>{
        this.setState({value: ""})
    }
    changeValue =  (e) => {
        this.props.handleValue(e,this.cleaValue) 
       
    }
    render(){
        return <input className="mySimpleTodos-input" type="text"
            onChange = { (e) =>this.onchangeValue (e.target.value )}
            value ={this.state.value}
            onKeyDown={(e) =>this.changeValue(e) }
            autoFocus placeholder="What needs to be none" />
    }
}